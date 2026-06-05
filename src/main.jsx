
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactFlow, Background, Controls, MiniMap, Handle, Position, useEdgesState, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';
import { products } from './flowData.js';
import './styles.css';

const PRODUCT_KEYS = Object.keys(products).sort((a,b)=>products[a].label.localeCompare(products[b].label));

function normalizeValue(v) {
  if (v === true || v === 'true') return '1';
  if (v === false || v === 'false') return '0';
  if (v === 1 || v === '1') return '1';
  if (v === 0 || v === '0') return '0';
  return String(v ?? '');
}
function displayValue(v) {
  const n = normalizeValue(v);
  if (n === '1') return 'Yes';
  if (n === '0') return 'No';
  return String(v ?? '');
}
function answerLabel(option) {
  const rawText = String(option?.text ?? '').trim();
  const normalizedText = rawText.toLowerCase();
  if (normalizedText === 'true' || normalizedText === 'false') return displayValue(option?.value);
  if (rawText) return rawText;
  return displayValue(option?.value);
}
function parseWhen(when) {
  if (!when) return null;
  const m = String(when).match(/^eq:(.*)$/);
  return m ? normalizeValue(m[1]) : String(when);
}
function typeTitle(raw) {
  const t = String(raw || '').toLowerCase();
  if (t === 'bool') return 'Question';
  if (t === 'confirm') return 'Confirm';
  if (t === 'radio') return 'Selection';
  return t ? t[0].toUpperCase() + t.slice(1) : 'Question';
}
function answerIsSuitable(question, option) {
  if (question.suitableAnswer === null || question.suitableAnswer === undefined) return null;
  return normalizeValue(option.value) === normalizeValue(question.suitableAnswer);
}
function questionWidth(text) {
  const len = String(text || '').length;
  if (len > 260) return 720;
  if (len > 160) return 620;
  if (len > 90) return 520;
  return 420;
}
function answerWidth(text) {
  const len = String(text || '').length;
  if (len > 180) return 520;
  if (len > 90) return 420;
  return 280;
}
function answerTone(index) {
  if (index === 0) return 'yes';
  if (index === 1) return 'no';
  return 'neutral';
}
function answerEdgeClass(index) {
  if (index === 0) return 'edge-yes';
  if (index === 1) return 'edge-no';
  return '';
}

function CustomNode({ data, selected }) {
  const isAnswer = data.kind === 'answer';
  const isTerminal = data.kind === 'start' || data.kind === 'end';
  return <div className={`node node-${data.kind} ${data.answerTone ? `answer-${data.answerTone}` : ''} ${selected ? 'selected' : ''}`} style={{ width: data.width }}>
    <Handle type="target" position={Position.Top} />
    {!isAnswer && !isTerminal && <div className="nodeHeader">
      <span className="nodeType">{data.title}</span>
    </div>}
    <div className="nodeText">{data.label}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
}
const nodeTypes = { custom: CustomNode };

function buildGraph(product) {
  const qs = [...product.questions].sort((a,b)=>(a.order||0)-(b.order||0));
  const childMap = new Map();
  for (const q of qs) {
    if (q.parentKey) {
      const val = parseWhen(q.parentWhen);
      const key = `${q.parentKey}::${val}`;
      if (!childMap.has(key)) childMap.set(key, []);
      childMap.get(key).push(q);
    }
  }
  const nodes=[]; const edges=[];
  const addNode=(id, data)=> nodes.push({ id, type:'custom', data, position:{x:0,y:0}, draggable:true });
  const addEdge=(source,target,label='', cls='')=> edges.push({ id:`${source}->${target}`, source, target, label, className: cls, type:'smoothstep' });

  const startId = `${product.key}__start`;
  const selectId = `${product.key}__product_select`;
  const confirmId = `${product.key}__confirm_not_suitable`;
  const endId = `${product.key}__end`;

  addNode(startId, {
    kind:'start',
    title:'Start',
    label:'Start',
    width:180
  });

  for (const q of qs) {
    const kind = String(q.type).toLowerCase()==='confirm' ? 'confirm' : 'question';
    addNode(q.key, {
      kind,
      title: typeTitle(q.type),
      label: q.label,
      width: questionWidth(q.label),
      source: q
    });
  }
  addNode(confirmId, {
    kind:'confirm', title:'Confirm', key:`gi_${product.key.toLowerCase()}_suitability_confirm_not_suitable`,
    label:`Your answers indicate that ${product.label} may not be a suitable product for you. Please confirm that you understand this.`,
    width:560
  });
  addNode(selectId, {
    kind:'selection', title:'Selection', key:`gi_${product.key.toLowerCase()}_suitability_product_select`,
    label:`Select ${product.label} for consideration`, width:460
  });
  addNode(endId, {
    kind:'end',
    title:'End',
    label:'End',
    width:160
  });

  const hasParent = new Set(qs.filter(q=>q.parentKey).map(q=>q.key));
  const roots = qs.filter(q=>!hasParent.has(q.key));

  for (const q of qs) {
    if (q.options && q.options.length) {
      for (let i=0;i<q.options.length;i++) {
        const opt=q.options[i];
        const val=normalizeValue(opt.value);
        const answerText = answerLabel(opt);
        const ansId = `${q.key}__answer_${i}_${val}`.replace(/[^a-zA-Z0-9_:-]/g,'_');
        const suit = answerIsSuitable(q,opt);
        const tone = answerTone(i);
        const edgeClass = answerEdgeClass(i);
        addNode(ansId, { kind:'answer', title: '', key:'', label: answerText, width: answerWidth(answerText), suitable:suit, answerTone: tone });
        addEdge(q.key, ansId, '', edgeClass);
        const children = childMap.get(`${q.key}::${val}`) || [];
        const confirmChildren = children.filter(c => String(c.type || '').toLowerCase() === 'confirm');
        const nonConfirmChildren = children.filter(c => String(c.type || '').toLowerCase() !== 'confirm');
        if (children.length) {
          if (suit === false) {
            if (confirmChildren.length) {
              for (const c of confirmChildren) addEdge(ansId, c.key, '', edgeClass);
            } else {
              addEdge(ansId, confirmId, '', edgeClass);
            }
          } else {
            for (const c of nonConfirmChildren.length ? nonConfirmChildren : children) addEdge(ansId, c.key, '', edgeClass);
          }
        } else {
          addEdge(ansId, suit === false ? confirmId : selectId, '', edgeClass);
        }
      }
    } else {
      // Confirm/information node: connect to children if explicit, otherwise to final select.
      const implicitVals = ['1','true'];
      let connected=false;
      for (const val of implicitVals) {
        const children = childMap.get(`${q.key}::${val}`) || [];
        for (const c of children) { addEdge(q.key, c.key); connected=true; }
      }
      if (!connected) addEdge(q.key, confirmId);
    }
  }
  addEdge(confirmId, selectId, '');
  addEdge(selectId, endId, '');
  for (const root of roots) {
    addEdge(startId, root.key, '');
  }

  // Remove duplicate edges by id-ish source target label
  const seen=new Set();
  const cleanEdges=[];
  for (const e of edges) {
    const k=`${e.source}|${e.target}|${e.label||''}`;
    if (!seen.has(k)) { seen.add(k); cleanEdges.push({...e, id:`e${cleanEdges.length}`}); }
  }

  return layout(nodes, cleanEdges, startId);
}

function layout(nodes, edges, rootId) {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir:'TB', ranksep:105, nodesep:90, marginx:60, marginy:60 });
  nodes.forEach(n => {
    const labelLen = String(n.data.label||'').length;
    const height = n.data.kind === 'answer'
      ? Math.max(84, Math.ceil(labelLen/54)*22 + 56)
      : n.data.kind === 'start' || n.data.kind === 'end'
        ? 72
        : Math.max(110, Math.ceil(labelLen/62)*24 + 72);
    n.data.height = height;
    g.setNode(n.id, { width: n.data.width || 420, height });
  });
  edges.forEach(e => g.setEdge(e.source, e.target));
  dagre.layout(g);
  const laid = nodes.map(n => {
    const p = g.node(n.id);
    return { ...n, position:{ x:p.x-(n.data.width||420)/2, y:p.y-(n.data.height||120)/2 } };
  });
  return { nodes: laid, edges, rootId };
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_KEYS[0]);
  const [search, setSearch] = useState('');
  const rfRef = useRef(null);
  const product = products[selectedProduct];
  const graph = useMemo(() => buildGraph(product), [product]);
  const filteredNodes = useMemo(() => {
    const q = search.trim().toLowerCase();
    return graph.nodes.map(n => ({...n, className: q && (`${n.data.label} ${n.data.key}`.toLowerCase().includes(q)) ? 'match' : ''}));
  }, [graph.nodes, search]);
  const [nodes, setNodes, onNodesChange] = useNodesState(filteredNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graph.edges);
  const [active, setActive] = useState(null);

  useEffect(()=>{ setNodes(filteredNodes); setEdges(graph.edges); setActive(null); }, [filteredNodes, graph.edges, setNodes, setEdges]);

  const focusRoot = useCallback(() => {
    const rf = rfRef.current;
    if (!rf) return;
    const root = graph.nodes.find(n=>n.id===graph.rootId) || graph.nodes[0];
    if (!root) return;
    rf.setCenter(
      root.position.x + (root.data.width || 420) / 2,
      root.position.y + (root.data.height || 120) / 2,
      { zoom: 1, duration: 500 },
    );
  }, [graph]);
  useEffect(()=>{ setTimeout(focusRoot, 80); }, [focusRoot, selectedProduct]);

  return <div className="app">
    <aside className="sidebar">
      <div className="brand">GI Question Decision Tree</div>
      <label>Product</label>
      <select value={selectedProduct} onChange={e=>setSelectedProduct(e.target.value)}>
        {PRODUCT_KEYS.map(k=><option key={k} value={k}>{products[k].label} ({k})</option>)}
      </select>
      <label>Search</label>
      <input placeholder="Search question / answer..." value={search} onChange={e=>setSearch(e.target.value)} />
      {active && <div className="detail">
        <div className="detailTitle">Selected</div>
        <div className="detailType">{active.data.title}</div>
        <p>{active.data.label}</p>
      </div>}
    </aside>
    <main className="canvas">
      <div className="topbar">
        <h1>{product.label} <span>({product.key})</span></h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_,node)=>setActive(node)}
        onInit={(rf)=>{ rfRef.current=rf; setTimeout(focusRoot, 100); }}
        minZoom={0.15}
        maxZoom={2}
        defaultViewport={{x:80,y:80,zoom:1}}
      >
        <Background gap={24} size={1} />
        <Controls position="bottom-right" />
        <MiniMap pannable zoomable position="bottom-left" nodeStrokeWidth={3} />
      </ReactFlow>
    </main>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
