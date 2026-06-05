export const products = {
  "ALLOY": {
    "key": "ALLOY",
    "label": "SMART Alloys",
    "title": "SMART Alloys (ALLOY)",
    "questions": [
      {
        "key": "gi_alloy_summary_document",
        "alias": "gi_alloy_summary_document",
        "label": "I can confirm that the relevant policy summary document has been referred to and used in explaining significant features, benefits and exclusions of the SMART Alloys",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "ALLOY",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:ALLOY"
        ]
      },
      {
        "key": "gi_alloy_has_insurance",
        "alias": "gi_alloy_has_insurance",
        "label": "Do you have an existing SMART repair & Alloy wheel insurance policy in place that can be transferred and will already provide you with suitable cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "ALLOY",
        "parentKey": "gi_alloy_summary_document",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:ALLOY"
        ]
      },
      {
        "key": "gi_alloy_has_insurance_notify",
        "alias": "gi_alloy_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 10,
        "group": "ALLOY",
        "parentKey": "gi_alloy_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:ALLOY"
        ]
      },
      {
        "key": "gi_alloy_options",
        "alias": "gi_alloy_options",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "ALLOY",
        "parentKey": "gi_alloy_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance?"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection?"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:ALLOY"
        ]
      }
    ]
  },
  "AWHLINS": {
    "key": "AWHLINS",
    "label": "Alloy Wheel Insurance",
    "title": "Alloy Wheel Insurance (AWHLINS)",
    "questions": [
      {
        "key": "gi_awhlins_eligible_for_cover",
        "alias": "gi_awhlins_eligible_for_cover",
        "label": "Is the vehicle eligible for cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 0,
        "group": "AWHLINS",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:AWHLINS"
        ]
      },
      {
        "key": "gi_awhlins_has_insurance",
        "alias": "gi_awhlins_has_insurance",
        "label": "Do you have any insurance in place that will cover the cost of repairs to your alloy wheels?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "AWHLINS",
        "parentKey": "gi_awhlins_eligible_for_cover",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:AWHLINS"
        ]
      },
      {
        "key": "gi_awhlins_has_insurance_notify",
        "alias": "gi_awhlins_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "AWHLINS",
        "parentKey": "gi_awhlins_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:AWHLINS"
        ]
      },
      {
        "key": "gi_awhlins_no_protection",
        "alias": "gi_awhlins_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "AWHLINS",
        "parentKey": "gi_awhlins_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:AWHLINS"
        ]
      }
    ]
  },
  "CHFL": {
    "key": "CHFL",
    "label": "Finance and Leasing Protection",
    "title": "Finance and Leasing Protection (CHFL)",
    "questions": [
      {
        "key": "gi_chfl_has_insurance",
        "alias": "gi_chfl_has_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your Lease/Contract Hire settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "CHFL",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CHFL"
        ]
      },
      {
        "key": "gi_chfl_has_insurance_notify",
        "alias": "gi_chfl_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "CHFL",
        "parentKey": "gi_chfl_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CHFL"
        ]
      },
      {
        "key": "gi_chfl_no_protection",
        "alias": "gi_chfl_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "CHFL",
        "parentKey": "gi_chfl_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CHFL"
        ]
      },
      {
        "key": "gi_chfl_consent",
        "alias": "gi_chfl_consent",
        "label": "Do you consent to us including the price of GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like? Inclusion is for information purposes only and does not constitute a commitment to purchase; any deposit taken against a vehicle reservation/order form is to secure your vehicle whilst you consider whether GAP insurance would be of benefit to you.",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "CHFL",
        "parentKey": "gi_chfl_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CHFL"
        ]
      }
    ]
  },
  "CLHG": {
    "key": "CLHG",
    "label": "Contract Lease Hire GAP",
    "title": "Contract Lease Hire GAP (CLHG)",
    "questions": [
      {
        "key": "gi_clhg_has_insurance",
        "alias": "gi_clhg_has_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your Lease or Contract Hire settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "CLHG",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CLHG"
        ]
      },
      {
        "key": "gi_clhg_has_insurance_notify",
        "alias": "gi_clhg_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "CLHG",
        "parentKey": "gi_clhg_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CLHG"
        ]
      },
      {
        "key": "gi_clhg_no_protection",
        "alias": "gi_clhg_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "CLHG",
        "parentKey": "gi_clhg_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CLHG"
        ]
      },
      {
        "key": "gi_clhg_consent",
        "alias": "gi_clhg_consent",
        "label": "Do you consent to us including the price of GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like? Inclusion is for information purposes only and does not constitute a commitment to purchase; any deposit taken against a vehicle reservation/order form is to secure your vehicle whilst you consider whether GAP insurance would be of benefit to you?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "CLHG",
        "parentKey": "gi_clhg_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CLHG"
        ]
      }
    ]
  },
  "CNTRCTHRND": {
    "key": "CNTRCTHRND",
    "label": "Contract Hire and Finance GAP",
    "title": "Contract Hire and Finance GAP (CNTRCTHRND)",
    "questions": [
      {
        "key": "gi_cntrcthrnd_has_insurance",
        "alias": "gi_cntrcthrnd_has_insurance",
        "label": "Do you have any existing insurance that would provide a payment to cover any difference between the Motor Insurers Settlement and the Outstanding Finance/Contract Hire Balance?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "CNTRCTHRND",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CNTRCTHRND"
        ]
      },
      {
        "key": "gi_cntrcthrnd_has_insurance_notify",
        "alias": "gi_cntrcthrnd_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "CNTRCTHRND",
        "parentKey": "gi_cntrcthrnd_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CNTRCTHRND"
        ]
      },
      {
        "key": "gi_cntrcthrnd_no_protection",
        "alias": "gi_cntrcthrnd_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "CNTRCTHRND",
        "parentKey": "gi_cntrcthrnd_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CNTRCTHRND"
        ]
      }
    ]
  },
  "COMB": {
    "key": "COMB",
    "label": "Combined GAP",
    "title": "Combined GAP (COMB)",
    "questions": [
      {
        "key": "gi_comb_suitability_existing_policy",
        "alias": "gi_comb_suitability_existing_policy",
        "label": "Do you have an existing equivalent GAP policy that could be transferred to this vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "COMB",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COMB"
        ]
      },
      {
        "key": "gi_comb_suitability_existing_policy_notify",
        "alias": "gi_comb_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "COMB",
        "parentKey": "gi_comb_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COMB"
        ]
      },
      {
        "key": "gi_comb_suitability_consider",
        "alias": "gi_comb_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "COMB",
        "parentKey": "gi_comb_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COMB"
        ]
      }
    ]
  },
  "COSALLOY": {
    "key": "COSALLOY",
    "label": "SMART, Cosmetic and Alloy",
    "title": "SMART, Cosmetic and Alloy (COSALLOY)",
    "questions": [
      {
        "key": "gi_cosalloy_suitability_existing_policy",
        "alias": "gi_cosalloy_suitability_existing_policy",
        "label": "Do you have any insurance in place that will provide you with suitable cover for damage such as minor dents, light scratches, chips or scuffed bumpers or damage to your alloy wheels?",
        "type": "bool",
        "displayType": "radio",
        "order": 201,
        "group": "COSALLOY",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSALLOY"
        ]
      },
      {
        "key": "gi_cosalloy_suitability_existing_policy_notify",
        "alias": "gi_cosalloy_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 205,
        "group": "COSALLOY",
        "parentKey": "gi_cosalloy_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSALLOY"
        ]
      },
      {
        "key": "gi_cosalloy_suitability_consider",
        "alias": "gi_cosalloy_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 210,
        "group": "COSALLOY",
        "parentKey": "gi_cosalloy_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSALLOY"
        ]
      }
    ]
  },
  "COSMETIC": {
    "key": "COSMETIC",
    "label": "SMART, Cosmetic",
    "title": "SMART, Cosmetic (COSMETIC)",
    "questions": [
      {
        "key": "gi_cosmetic_suitability_existing_insurance",
        "alias": "gi_cosmetic_suitability_existing_insurance",
        "label": "Do you have any insurance in place that will cover the cost of minor cosmetic repairs and will not effect your motor insurance no claims bonus?",
        "type": "bool",
        "displayType": "radio",
        "order": 300,
        "group": "COSMETIC",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSMETIC"
        ]
      },
      {
        "key": "gi_cosmetic_suitability_existing_insurance_notify",
        "alias": "gi_cosmetic_suitability_existing_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 305,
        "group": "COSMETIC",
        "parentKey": "gi_cosmetic_suitability_existing_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSMETIC"
        ]
      },
      {
        "key": "gi_cosmetic_suitability_consider",
        "alias": "gi_cosmetic_suitability_consider",
        "label": "You have told us that you do not have insurance to cover the cost of repairing minor dents, light scratches, chips or scuffed bumpers which may effect the future value of your vehicle. If your vehicle were to be damaged in this way would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 310,
        "group": "COSMETIC",
        "parentKey": "gi_cosmetic_suitability_existing_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like a third party (other than my Motor Insurer) to complete and cover the cost of any repair, protecting the look and residual value of your vehicle. Subject to policy terms, exclusions, excesses and maximum specified claim limits"
          },
          {
            "value": 0,
            "text": "Be happy to cover the cost of any repair yourself."
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSMETIC"
        ]
      },
      {
        "key": "gi_cosmetic_suitability_existing_damage",
        "alias": "gi_cosmetic_suitability_existing_damage",
        "label": "Have you been made aware of the panels and parts of your vehicle and the size of any damage that would be covered under the Cosmetic Insurance policy?",
        "type": "bool",
        "displayType": "radio",
        "order": 315,
        "group": "COSMETIC",
        "parentKey": "gi_cosmetic_suitability_consider",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSMETIC"
        ]
      }
    ]
  },
  "COSTYAL": {
    "key": "COSTYAL",
    "label": "SMART, Tyre and Alloy",
    "title": "SMART, Tyre and Alloy (COSTYAL)",
    "questions": [
      {
        "key": "gi_costyal_suitability_existing_policy",
        "alias": "gi_costyal_suitability_existing_policy",
        "label": "Do you have an existing SMART repair, Tyre & Alloy wheel insurance policy in place that can be transferred and will already provide you with suitable cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 201,
        "group": "COSTYAL",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSTYAL"
        ]
      },
      {
        "key": "gi_costyal_suitability_existing_policy_notify",
        "alias": "gi_costyal_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 203,
        "group": "COSTYAL",
        "parentKey": "gi_costyal_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSTYAL"
        ]
      },
      {
        "key": "gi_costyal_suitability_consider",
        "alias": "gi_costyal_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 205,
        "group": "COSTYAL",
        "parentKey": "gi_costyal_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:COSTYAL"
        ]
      }
    ]
  },
  "CVAN": {
    "key": "CVAN",
    "label": "Caravan Insurance",
    "title": "Caravan Insurance (CVAN)",
    "questions": [
      {
        "key": "gi_cvan_suitability_existing_policy",
        "alias": "gi_cvan_suitability_existing_policy",
        "label": "Do you have any other insurance policy in place that would cover accidental damage to your caravan and/or its contents?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "CVAN",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CVAN"
        ]
      },
      {
        "key": "gi_cvan_suitability_existing_policy_notify",
        "alias": "gi_cvan_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "CVAN",
        "parentKey": "gi_cvan_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CVAN"
        ]
      },
      {
        "key": "gi_cvan_suitability_consider",
        "alias": "gi_cvan_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "CVAN",
        "parentKey": "gi_cvan_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:CVAN"
        ]
      }
    ]
  },
  "DRIVEAWAY": {
    "key": "DRIVEAWAY",
    "label": "7 Day Free Insurance",
    "title": "7 Day Free Insurance (DRIVEAWAY)",
    "questions": [
      {
        "key": "gi_driveaway_age_confirmation",
        "alias": "gi_driveaway_age_confirmation",
        "label": "Is the customer over 17 and under 79 years of age?",
        "type": "bool",
        "displayType": "radio",
        "order": 402,
        "group": "DRIVEAWAY",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:DRIVEAWAY"
        ]
      },
      {
        "key": "gi_driveaway_has_full_uk_dl",
        "alias": "gi_driveaway_has_full_uk_dl",
        "label": "Do you hold a full UK driving license and have you been UK resident for at least 2 years?",
        "type": "bool",
        "displayType": "radio",
        "order": 403,
        "group": "DRIVEAWAY",
        "parentKey": "gi_driveaway_age_confirmation",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:DRIVEAWAY"
        ]
      },
      {
        "key": "gi_driveaway_has_been_disqualified",
        "alias": "gi_driveaway_has_been_disqualified",
        "label": "Have you been disqualified from driving in the last 5 years?",
        "type": "bool",
        "displayType": "radio",
        "order": 404,
        "group": "DRIVEAWAY",
        "parentKey": "gi_driveaway_has_full_uk_dl",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:DRIVEAWAY"
        ]
      },
      {
        "key": "gi_driveaway_unspent_convictions",
        "alias": "gi_driveaway_unspent_convictions",
        "label": "Do you have ANY unspent convictions under the Rehabilitation of Offenders Act?",
        "type": "bool",
        "displayType": "radio",
        "order": 405,
        "group": "DRIVEAWAY",
        "parentKey": "gi_driveaway_has_been_disqualified",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:DRIVEAWAY"
        ]
      },
      {
        "key": "gi_driveaway_refused_motor_insurance",
        "alias": "gi_driveaway_refused_motor_insurance",
        "label": "Have you ever been refused motor insurance, had any policy cancelled or voided, or had special terms imposed?",
        "type": "bool",
        "displayType": "radio",
        "order": 406,
        "group": "DRIVEAWAY",
        "parentKey": "gi_driveaway_unspent_convictions",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:DRIVEAWAY"
        ]
      }
    ]
  },
  "ERI": {
    "key": "ERI",
    "label": "Excess Reimbursement Insurance",
    "title": "Excess Reimbursement Insurance (ERI)",
    "questions": [
      {
        "key": "gi_eri_suitability_existing_policy",
        "alias": "gi_eri_suitability_existing_policy",
        "label": "Do you currently have any Insurance in place, that would cover your motor insurance excess in the event of you needing to make a motor insurance claim ?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "ERI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:ERI"
        ]
      },
      {
        "key": "gi_eri_suitability_existing_policy_notify",
        "alias": "gi_eri_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "ERI",
        "parentKey": "gi_eri_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:ERI"
        ]
      },
      {
        "key": "gi_eri_suitability_consider",
        "alias": "gi_eri_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "ERI",
        "parentKey": "gi_eri_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:ERI"
        ]
      }
    ]
  },
  "FLHTUG": {
    "key": "FLHTUG",
    "label": "Finance Lease or Hire Top up Gap",
    "title": "Finance Lease or Hire Top up Gap (FLHTUG)",
    "questions": [
      {
        "key": "gi_flhtug_suitability_existing_policy",
        "alias": "gi_flhtug_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your finance, lease or hire agreement settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "FLHTUG",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FLHTUG"
        ]
      },
      {
        "key": "gi_flhtug_suitability_existing_policy_notify",
        "alias": "gi_flhtug_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "FLHTUG",
        "parentKey": "gi_flhtug_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FLHTUG"
        ]
      },
      {
        "key": "gi_flhtug_suitability_consider",
        "alias": "gi_flhtug_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "FLHTUG",
        "parentKey": "gi_flhtug_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FLHTUG"
        ]
      }
    ]
  },
  "FOCVER": {
    "key": "FOCVER",
    "label": "Complimentary Excess Cover",
    "title": "Complimentary Excess Cover (FOCVER)",
    "questions": [
      {
        "key": "gi_focver_eligibility_full_internationally_recognised_driving_licence",
        "alias": "gi_focver_eligibility_full_internationally_recognised_driving_licence",
        "label": "You may be entitled to Free of Charge Excess Waiver Insurance subject to certain eligibility criteria. The Excess waiver insurance will pay you an amount equal to the Excess in relation to a Settled Claim on Your Motor Insurance Policy up to a Claim Limit of £250 – See full terms and conditions for a complete list of benefits and exclusions to the policy. Do you have a current and valid UK driving licence, or You hold a full internationally recognised licence?",
        "type": "bool",
        "displayType": "radio",
        "order": 400,
        "group": "FOCVER",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FOCVER"
        ]
      },
      {
        "key": "gi_focver_eligibility_use_types",
        "alias": "gi_focver_eligibility_use_types",
        "label": "Do the “use types” on Your Motor Insurance Policy fall into one of the following: - Social, domestic and pleasure - Personal business use by the policyholder - Personal use by Named Drivers - Personal business use by policyholder and Named Drivers - Business use by the policyholder (excluding Commercial Travel)",
        "type": "bool",
        "displayType": "radio",
        "order": 401,
        "group": "FOCVER",
        "parentKey": "gi_focver_eligibility_full_internationally_recognised_driving_licence",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FOCVER"
        ]
      },
      {
        "key": "gi_focver_eligibility_customer_confirmation",
        "alias": "gi_focver_eligibility_customer_confirmation",
        "label": "Confirmed by customer: You have been made aware that to claim on this policy, you must call the product provider first before Your Insurer on 0330 102 8832 and notify them of Your claim. You understand any repairs must be undertaken at an Approved Accident Repair Centre.",
        "type": "bool",
        "displayType": "radio",
        "order": 402,
        "group": "FOCVER",
        "parentKey": "gi_focver_eligibility_use_types",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FOCVER"
        ]
      }
    ]
  },
  "FRDCMMRCLG": {
    "key": "FRDCMMRCLG",
    "label": "Ford Commercial GAP",
    "title": "Ford Commercial GAP (FRDCMMRCLG)",
    "questions": [
      {
        "key": "gi_frdcmmrclg_eligibility_vehicle_use",
        "alias": "gi_frdcmmrclg_eligibility_vehicle_use",
        "label": "Do you intend to use your vehicle as a courier or delivery vehicle, invalid carrier, for driving instruction, as an emergency or military vehicle or for track days, road racing, rallying, pacemaking, speed testing or any other competitive event?",
        "type": "bool",
        "displayType": "radio",
        "order": 400,
        "group": "FRDCMMRCLG",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCMMRCLG"
        ]
      },
      {
        "key": "gi_frdcmmrclg_write_off",
        "alias": "gi_frdcmmrclg_write_off",
        "label": "If your vehicle were to be written off by your motor insurer, would they give you back either: A sum equivalent to what you originally paid for your vehicle or if higher a sufficient amount to pay off any outstanding motor finance or early termination lease payments?",
        "type": "bool",
        "displayType": "radio",
        "order": 405,
        "group": "FRDCMMRCLG",
        "parentKey": "gi_frdcmmrclg_eligibility_vehicle_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCMMRCLG"
        ]
      },
      {
        "key": "gi_frdcmmrclg_suitability_existing_policy",
        "alias": "gi_frdcmmrclg_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to the invoice price of your vehicle or your finance settlement figure, whichever is higher?",
        "type": "bool",
        "displayType": "radio",
        "order": 410,
        "group": "FRDCMMRCLG",
        "parentKey": "gi_frdcmmrclg_write_off",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCMMRCLG"
        ]
      },
      {
        "key": "gi_frdcmmrclg_suitability_existing_policy_notify",
        "alias": "gi_frdcmmrclg_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 415,
        "group": "FRDCMMRCLG",
        "parentKey": "gi_frdcmmrclg_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCMMRCLG"
        ]
      },
      {
        "key": "gi_frdcmmrclg_suitability_consider",
        "alias": "gi_frdcmmrclg_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 420,
        "group": "FRDCMMRCLG",
        "parentKey": "gi_frdcmmrclg_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCMMRCLG"
        ]
      }
    ]
  },
  "FRDCSMTCNS": {
    "key": "FRDCSMTCNS",
    "label": "TrustFord Cosmetic Insurance",
    "title": "TrustFord Cosmetic Insurance (FRDCSMTCNS)",
    "questions": [
      {
        "key": "gi_frdcsmtcns_have_any_other_insurance",
        "alias": "gi_frdcsmtcns_have_any_other_insurance",
        "label": "Do you have any other insurance policy in place that will already provide you with suitable cover, if your vehicle were to suffer minor dents, lights scratches, chips or scuffed bumpers which may effect its future value?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "FRDCSMTCNS",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCSMTCNS"
        ]
      },
      {
        "key": "gi_frdcsmtcns_have_any_other_insurance_notify",
        "alias": "gi_frdcsmtcns_have_any_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 10,
        "group": "FRDCSMTCNS",
        "parentKey": "gi_frdcsmtcns_have_any_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCSMTCNS"
        ]
      },
      {
        "key": "gi_frdcsmtcns_vehicle_have_a_standard_paint",
        "alias": "gi_frdcsmtcns_vehicle_have_a_standard_paint",
        "label": "Does the vehicle have a standard factory supplied paint colour and finish?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "FRDCSMTCNS",
        "parentKey": "gi_frdcsmtcns_have_any_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCSMTCNS"
        ]
      },
      {
        "key": "gi_frdcsmtcns_vehicle_were_suffer_minor_dents",
        "alias": "gi_frdcsmtcns_vehicle_were_suffer_minor_dents",
        "label": "If your vehicle were to suffer from minor dents, light scratches, chips or scuffed bumpers which may effect its future value. In this circumstance would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "FRDCSMTCNS",
        "parentKey": "gi_frdcsmtcns_vehicle_have_a_standard_paint",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like a third party (other than my Motor Insurer) to complete and cover the cost of any repair, protecting the look and residual value of your vehicle. Subject to policy terms, exclusions, excesses and maximum specified claim limits"
          },
          {
            "value": 0,
            "text": "Be happy to pay for the costs of repair yourself  and understand that any cosmetic damage will effect the future value of your vehicle"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDCSMTCNS"
        ]
      }
    ]
  },
  "FRDGP": {
    "key": "FRDGP",
    "label": "TrustFord Asset Protection",
    "title": "TrustFord Asset Protection (FRDGP)",
    "questions": [
      {
        "key": "gi_frdgp_registered_keeper_maintain",
        "alias": "gi_frdgp_registered_keeper_maintain",
        "label": "Will you be the registered keeper and maintain comprehensive motor insurance as either the main policyholder or a named driver?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "FRDGP",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDGP"
        ]
      },
      {
        "key": "gi_frdgp_intend_to_use",
        "alias": "gi_frdgp_intend_to_use",
        "label": "Do you intend to use your vehicle as a courier or delivery vehicle, invalid carrier, for driving instruction, as an emergency or military vehicle or for track days, road racing, rallying, pacemaking, speed testing or any other competitive event?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "FRDGP",
        "parentKey": "gi_frdgp_registered_keeper_maintain",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDGP"
        ]
      },
      {
        "key": "gi_frdgp_vehicle_were_to_be_written_off",
        "alias": "gi_frdgp_vehicle_were_to_be_written_off",
        "label": "If your vehicle were to be written off by your motor insurer, would they give you back either:A sum equivalent to what you originally paid for your vehicle or, if highera sufficient amount to pay off any outstanding motor finance or early termination lease payments?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "FRDGP",
        "parentKey": "gi_frdgp_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDGP"
        ]
      },
      {
        "key": "gi_frdgp_have_any_existing_insurance",
        "alias": "gi_frdgp_have_any_existing_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to the invoice price of your vehicle or finance settlement figure?",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "FRDGP",
        "parentKey": "gi_frdgp_vehicle_were_to_be_written_off",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDGP"
        ]
      },
      {
        "key": "gi_frdgp_have_any_existing_insurance_notify",
        "alias": "gi_frdgp_have_any_existing_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 25,
        "group": "FRDGP",
        "parentKey": "gi_frdgp_have_any_existing_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDGP"
        ]
      },
      {
        "key": "gi_frdgp_have_no_protection",
        "alias": "gi_frdgp_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 30,
        "group": "FRDGP",
        "parentKey": "gi_frdgp_have_any_existing_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDGP"
        ]
      }
    ]
  },
  "FRDLLYWHLN": {
    "key": "FRDLLYWHLN",
    "label": "TrustFord Alloy Wheel Insurance",
    "title": "TrustFord Alloy Wheel Insurance (FRDLLYWHLN)",
    "questions": [
      {
        "key": "gi_frdllywhln_wheels_fitted",
        "alias": "gi_frdllywhln_wheels_fitted",
        "label": "Are the wheels fitted to the vehicle an alternative to the manufacturers original specification, or split rim construction, machine polished or chrome effect?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "FRDLLYWHLN",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDLLYWHLN"
        ]
      },
      {
        "key": "gi_frdllywhln_have_any_insurance",
        "alias": "gi_frdllywhln_have_any_insurance",
        "label": "Do you have any insurance in place that will cover the cost of repairs to your alloy wheels?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "FRDLLYWHLN",
        "parentKey": "gi_frdllywhln_wheels_fitted",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDLLYWHLN"
        ]
      },
      {
        "key": "gi_frdllywhln_have_any_insurance_notify",
        "alias": "gi_frdllywhln_have_any_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 15,
        "group": "FRDLLYWHLN",
        "parentKey": "gi_frdllywhln_have_any_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDLLYWHLN"
        ]
      },
      {
        "key": "gi_frdllywhln_have_no_protection",
        "alias": "gi_frdllywhln_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "FRDLLYWHLN",
        "parentKey": "gi_frdllywhln_have_any_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDLLYWHLN"
        ]
      }
    ]
  },
  "FRDTYRNSRN": {
    "key": "FRDTYRNSRN",
    "label": "TrustFord Tyre Insurance",
    "title": "TrustFord Tyre Insurance (FRDTYRNSRN)",
    "questions": [
      {
        "key": "gi_frdtyrnsrn_tyre_fitted_to_original_specifications",
        "alias": "gi_frdtyrnsrn_tyre_fitted_to_original_specifications",
        "label": "Do the tyres fitted to the vehicle have a minimum of 3mm tread depth across the full tread area of the tyre and are they fitted to original specification wheels?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "FRDTYRNSRN",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDTYRNSRN"
        ]
      },
      {
        "key": "gi_frdtyrnsrn_have_any_other_insurance",
        "alias": "gi_frdtyrnsrn_have_any_other_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for damage to your tyres?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "FRDTYRNSRN",
        "parentKey": "gi_frdtyrnsrn_tyre_fitted_to_original_specifications",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDTYRNSRN"
        ]
      },
      {
        "key": "gi_frdtyrnsrn_have_any_other_insurance_notify",
        "alias": "gi_frdtyrnsrn_have_any_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 15,
        "group": "FRDTYRNSRN",
        "parentKey": "gi_frdtyrnsrn_have_any_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDTYRNSRN"
        ]
      },
      {
        "key": "gi_frdtyrnsrn_have_no_protection",
        "alias": "gi_frdtyrnsrn_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "FRDTYRNSRN",
        "parentKey": "gi_frdtyrnsrn_have_any_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FRDTYRNSRN"
        ]
      }
    ]
  },
  "FREEGAP": {
    "key": "FREEGAP",
    "label": "Premia JCT complimentary GAP",
    "title": "Premia JCT complimentary GAP (FREEGAP)",
    "questions": [
      {
        "key": "gi_prem_freegap_suitability_consider",
        "alias": "gi_prem_freegap_suitability_consider",
        "label": "Do you want to take advantage of this free 30-day Extendable GAP Insurance policy:",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "FREEGAP",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FREEGAP"
        ]
      },
      {
        "key": "gi_prem_freegap_suitability_existing_policy",
        "alias": "gi_prem_freegap_suitability_existing_policy",
        "label": "Do you have an existing equivalent GAP policy that could be transferred to this vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "FREEGAP",
        "parentKey": "gi_prem_freegap_suitability_consider",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FREEGAP"
        ]
      },
      {
        "key": "gi_prem_freegap_no_protection",
        "alias": "gi_prem_freegap_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 120,
        "group": "FREEGAP",
        "parentKey": "gi_prem_freegap_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:FREEGAP"
        ]
      }
    ]
  },
  "GAP": {
    "key": "GAP",
    "label": "Finance GAP",
    "title": "Finance GAP (GAP)",
    "questions": [
      {
        "key": "gi_gap_has_insurance",
        "alias": "gi_gap_has_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your finance settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "GAP",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:GAP"
        ]
      },
      {
        "key": "gi_gap_has_insurance_notify",
        "alias": "gi_gap_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "GAP",
        "parentKey": "gi_gap_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:GAP"
        ]
      },
      {
        "key": "gi_gap_no_protection",
        "alias": "gi_gap_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "GAP",
        "parentKey": "gi_gap_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:GAP"
        ]
      },
      {
        "key": "gi_gap_consent",
        "alias": "gi_gap_consent",
        "label": "Do you consent to us including the price of Finance GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "GAP",
        "parentKey": "gi_gap_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:GAP"
        ]
      }
    ]
  },
  "KEY": {
    "key": "KEY",
    "label": "Key Insurance",
    "title": "Key Insurance (KEY)",
    "questions": [
      {
        "key": "gi_key_intend_to_use",
        "alias": "gi_key_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use?",
        "type": "bool",
        "displayType": "radio",
        "order": 500,
        "group": "KEY",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:KEY"
        ]
      },
      {
        "key": "gi_key_have_any_insurance",
        "alias": "gi_key_have_any_insurance",
        "label": "Do you currently have any insurance in place, that would cover key replacement costs in the event of you losing your keys?",
        "type": "bool",
        "displayType": "radio",
        "order": 505,
        "group": "KEY",
        "parentKey": "gi_key_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:KEY"
        ]
      },
      {
        "key": "gi_key_have_any_insurance_notify",
        "alias": "gi_key_have_any_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 510,
        "group": "KEY",
        "parentKey": "gi_key_have_any_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:KEY"
        ]
      },
      {
        "key": "gi_key_have_no_protection",
        "alias": "gi_key_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 515,
        "group": "KEY",
        "parentKey": "gi_key_have_any_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": null,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:KEY"
        ]
      }
    ]
  },
  "LEASE": {
    "key": "LEASE",
    "label": "Contract Hire GAP",
    "title": "Contract Hire GAP (LEASE)",
    "questions": [
      {
        "key": "gi_lease_suitability_existing_policy",
        "alias": "gi_lease_suitability_existing_policy",
        "label": "Do you have an existing equivalent Lease/Contract Hire GAP policy that could be transferred to this vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 600,
        "group": "LEASE",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LEASE"
        ]
      },
      {
        "key": "gi_lease_suitability_existing_policy_notify",
        "alias": "gi_lease_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 605,
        "group": "LEASE",
        "parentKey": "gi_lease_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LEASE"
        ]
      },
      {
        "key": "gi_lease_intend_to_use",
        "alias": "gi_lease_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use, other than those specifically included within the policy terms?",
        "type": "bool",
        "displayType": "radio",
        "order": 610,
        "group": "LEASE",
        "parentKey": "gi_lease_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LEASE"
        ]
      },
      {
        "key": "gi_lease_intend_to_obtain",
        "alias": "gi_lease_intend_to_obtain",
        "label": "Do you intend to obtain and maintain comprehensive motor insurance on your vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 615,
        "group": "LEASE",
        "parentKey": "gi_lease_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LEASE"
        ]
      },
      {
        "key": "gi_lease_existing_insurance",
        "alias": "gi_lease_existing_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your Lease/Contract Hire settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 620,
        "group": "LEASE",
        "parentKey": "gi_lease_intend_to_obtain",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LEASE"
        ]
      },
      {
        "key": "gi_lease_no_protection",
        "alias": "gi_lease_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 625,
        "group": "LEASE",
        "parentKey": "gi_lease_existing_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LEASE"
        ]
      },
      {
        "key": "gi_lease_policy_added_contact_hire_agreement",
        "alias": "gi_lease_policy_added_contact_hire_agreement",
        "label": "Is the vehicle purchase subject to a Contract Hire/Lease Agreement?",
        "type": "bool",
        "displayType": "radio",
        "order": 630,
        "group": "LEASE",
        "parentKey": "gi_lease_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LEASE"
        ]
      }
    ]
  },
  "LPGMBI": {
    "key": "LPGMBI",
    "label": "LPG Mechanical Breakdown Insurance",
    "title": "LPG Mechanical Breakdown Insurance (LPGMBI)",
    "questions": [
      {
        "key": "gi_lpgmbi_has_insurance",
        "alias": "gi_lpgmbi_has_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for a mechanical breakdown directly resulting from your Liquid Petroleum Gas conversion?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "LPGMBI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LPGMBI"
        ]
      },
      {
        "key": "gi_lpgmbi_has_insurance_notify",
        "alias": "gi_lpgmbi_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "LPGMBI",
        "parentKey": "gi_lpgmbi_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LPGMBI"
        ]
      },
      {
        "key": "gi_lpgmbi_no_protection",
        "alias": "gi_lpgmbi_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "LPGMBI",
        "parentKey": "gi_lpgmbi_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LPGMBI"
        ]
      },
      {
        "key": "gi_lpgmbi_awareness",
        "alias": "gi_lpgmbi_awareness",
        "label": "Have you been made aware that the LPG mechanical breakdown insurance Policy relates specifically to the LPG conversion and associated parts and does not cover mechanical breakdown unrelated to this system?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "LPGMBI",
        "parentKey": "gi_lpgmbi_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LPGMBI"
        ]
      }
    ]
  },
  "LSNDCNTRCT": {
    "key": "LSNDCNTRCT",
    "label": "Lease and Contract Hire GAP (Hire and Reward)",
    "title": "Lease and Contract Hire GAP (Hire and Reward) (LSNDCNTRCT)",
    "questions": [
      {
        "key": "gi_lsndcntrct_has_insurance",
        "alias": "gi_lsndcntrct_has_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your Lease/Contract Hire settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "LSNDCNTRCT",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LSNDCNTRCT"
        ]
      },
      {
        "key": "gi_lsndcntrct_has_insurance_notify",
        "alias": "gi_lsndcntrct_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "LSNDCNTRCT",
        "parentKey": "gi_lsndcntrct_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LSNDCNTRCT"
        ]
      },
      {
        "key": "gi_lsndcntrct_no_protection",
        "alias": "gi_lsndcntrct_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "LSNDCNTRCT",
        "parentKey": "gi_lsndcntrct_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:LSNDCNTRCT"
        ]
      }
    ]
  },
  "MBI": {
    "key": "MBI",
    "label": "Mechanical Breakdown Insurance",
    "title": "Mechanical Breakdown Insurance (MBI)",
    "questions": [
      {
        "key": "gi_mbi_intend_to_use",
        "alias": "gi_mbi_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use?",
        "type": "bool",
        "displayType": "radio",
        "order": 700,
        "group": "MBI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBI"
        ]
      },
      {
        "key": "gi_mbi_have_any_other_insurance",
        "alias": "gi_mbi_have_any_other_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for a mechanical breakdown?",
        "type": "bool",
        "displayType": "radio",
        "order": 705,
        "group": "MBI",
        "parentKey": "gi_mbi_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBI"
        ]
      },
      {
        "key": "gi_mbi_have_any_other_insurance_notify",
        "alias": "gi_mbi_have_any_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 710,
        "group": "MBI",
        "parentKey": "gi_mbi_have_any_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBI"
        ]
      },
      {
        "key": "gi_mbi_have_no_protection",
        "alias": "gi_mbi_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 715,
        "group": "MBI",
        "parentKey": "gi_mbi_have_any_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBI"
        ]
      },
      {
        "key": "gi_mbi_vehicle_serviced",
        "alias": "gi_mbi_vehicle_serviced",
        "label": "Do you intend to have the vehicle serviced in line with manufacturer requirements?",
        "type": "bool",
        "displayType": "radio",
        "order": 720,
        "group": "MBI",
        "parentKey": "gi_mbi_have_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBI"
        ]
      }
    ]
  },
  "MBIKECOMB": {
    "key": "MBIKECOMB",
    "label": "Motorcycle Combined GAP",
    "title": "Motorcycle Combined GAP (MBIKECOMB)",
    "questions": [
      {
        "key": "gi_mbikecomb_eligibility_registration",
        "alias": "gi_mbikecomb_eligibility_registration",
        "label": "Do you intend to purchase the vehicle, register and insure it, in line with the RTI and Finance GAP Insurance policy requirements?",
        "type": "bool",
        "displayType": "radio",
        "order": 400,
        "group": "MBIKECOMB",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKECOMB"
        ]
      },
      {
        "key": "gi_mbikecomb_confirmation",
        "alias": "gi_mbikecomb_confirmation",
        "label": "I can confirm that the relevant policy summary document has been referred to and used in explaining the significant features, benefits, and exclusions of the Return to Invoice and Finance GAP Insurance Policy.",
        "type": "bool",
        "displayType": "radio",
        "order": 405,
        "group": "MBIKECOMB",
        "parentKey": "gi_mbikecomb_eligibility_registration",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKECOMB"
        ]
      },
      {
        "key": "gi_mbikecomb_have_any_other_insurance",
        "alias": "gi_mbikecomb_have_any_other_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to the invoice price of your vehicle or your finance settlement figure, whichever is higher?",
        "type": "bool",
        "displayType": "radio",
        "order": 410,
        "group": "MBIKECOMB",
        "parentKey": "gi_mbikecomb_confirmation",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKECOMB"
        ]
      },
      {
        "key": "gi_mbikecomb_have_any_other_insurance_notify",
        "alias": "gi_mbikecomb_have_any_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 415,
        "group": "MBIKECOMB",
        "parentKey": "gi_mbikecomb_have_any_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKECOMB"
        ]
      },
      {
        "key": "gi_mbikecomb_have_no_protection",
        "alias": "gi_mbikecomb_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 420,
        "group": "MBIKECOMB",
        "parentKey": "gi_mbikecomb_have_any_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKECOMB"
        ]
      }
    ]
  },
  "MBIKETYRE": {
    "key": "MBIKETYRE",
    "label": "Motorcycle Tyre Insurance",
    "title": "Motorcycle Tyre Insurance (MBIKETYRE)",
    "questions": [
      {
        "key": "gi_mbiketyre_eligibility_criteria",
        "alias": "gi_mbiketyre_eligibility_criteria",
        "label": "Does the motorcycle meet the eligibility criteria applicable to the Tyre Insurance policy?",
        "type": "bool",
        "displayType": "radio",
        "order": 500,
        "group": "MBIKETYRE",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKETYRE"
        ]
      },
      {
        "key": "gi_mbiketyre_have_any_insurance",
        "alias": "gi_mbiketyre_have_any_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for damage to your tyres?",
        "type": "bool",
        "displayType": "radio",
        "order": 505,
        "group": "MBIKETYRE",
        "parentKey": "gi_mbiketyre_eligibility_criteria",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKETYRE"
        ]
      },
      {
        "key": "gi_mbiketyre_have_any_insurance_notify",
        "alias": "gi_mbiketyre_have_any_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 510,
        "group": "MBIKETYRE",
        "parentKey": "gi_mbiketyre_have_any_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKETYRE"
        ]
      },
      {
        "key": "gi_mbiketyre_have_no_protection",
        "alias": "gi_mbiketyre_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 515,
        "group": "MBIKETYRE",
        "parentKey": "gi_mbiketyre_have_any_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MBIKETYRE"
        ]
      }
    ]
  },
  "MISFUEL": {
    "key": "MISFUEL",
    "label": "Misfuelling Insurance",
    "title": "Misfuelling Insurance (MISFUEL)",
    "questions": [
      {
        "key": "gi_misfuel_suitability_existing_policy",
        "alias": "gi_misfuel_suitability_existing_policy",
        "label": "Do you currently have any Insurance in place, that would cover misfuelling costs in the event of you adding the wrong fuel to your vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "MISFUEL",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MISFUEL"
        ]
      },
      {
        "key": "gi_misfuel_suitability_existing_policy_notify",
        "alias": "gi_misfuel_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "MISFUEL",
        "parentKey": "gi_misfuel_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MISFUEL"
        ]
      },
      {
        "key": "gi_misfuel_suitability_consider",
        "alias": "gi_misfuel_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "MISFUEL",
        "parentKey": "gi_misfuel_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MISFUEL"
        ]
      }
    ]
  },
  "MOT": {
    "key": "MOT",
    "label": "MOT Insurance",
    "title": "MOT Insurance (MOT)",
    "questions": [
      {
        "key": "gi_mot_suitability_existing_policy",
        "alias": "gi_mot_suitability_existing_policy",
        "label": "Do you currently have any Insurance in place, that would cover repair costs in the event of your vehicle failing its MOT?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "MOT",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MOT"
        ]
      },
      {
        "key": "gi_mot_suitability_existing_policy_notify",
        "alias": "gi_mot_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "MOT",
        "parentKey": "gi_mot_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MOT"
        ]
      },
      {
        "key": "gi_mot_suitability_consider",
        "alias": "gi_mot_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "MOT",
        "parentKey": "gi_mot_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:MOT"
        ]
      }
    ]
  },
  "RRI": {
    "key": "RRI",
    "label": "Rescue and Recovery Insurance",
    "title": "Rescue and Recovery Insurance (RRI)",
    "questions": [
      {
        "key": "gi_rri_intend_to_use",
        "alias": "gi_rri_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use?",
        "type": "bool",
        "displayType": "radio",
        "order": 800,
        "group": "RRI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RRI"
        ]
      },
      {
        "key": "gi_rri_currently_have_rri",
        "alias": "gi_rri_currently_have_rri",
        "label": "Do you currently have any Rescue and Recovery Insurance in place, you may know this as breakdown insurance?",
        "type": "bool",
        "displayType": "radio",
        "order": 805,
        "group": "RRI",
        "parentKey": "gi_rri_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RRI"
        ]
      },
      {
        "key": "gi_rri_currently_have_rri_notify",
        "alias": "gi_rri_currently_have_rri_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 810,
        "group": "RRI",
        "parentKey": "gi_rri_currently_have_rri",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RRI"
        ]
      },
      {
        "key": "gi_rri_have_no_protection",
        "alias": "gi_rri_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 815,
        "group": "RRI",
        "parentKey": "gi_rri_currently_have_rri",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RRI"
        ]
      }
    ]
  },
  "RTI": {
    "key": "RTI",
    "label": "Return To Invoice Insurance",
    "title": "Return To Invoice Insurance (RTI)",
    "questions": [
      {
        "key": "gi_rti_has_insurance",
        "alias": "gi_rti_has_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to the invoice price of your vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "RTI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTI"
        ]
      },
      {
        "key": "gi_rti_has_insurance_notify",
        "alias": "gi_rti_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 5,
        "group": "RTI",
        "parentKey": "gi_rti_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTI"
        ]
      },
      {
        "key": "gi_rti_no_protection",
        "alias": "gi_rti_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "RTI",
        "parentKey": "gi_rti_has_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTI"
        ]
      },
      {
        "key": "gi_rti_consent",
        "alias": "gi_rti_consent",
        "label": "Do you consent to us including the price of Return to Invoice GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "RTI",
        "parentKey": "gi_rti_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTI"
        ]
      }
    ]
  },
  "RTIFSHORTF": {
    "key": "RTIFSHORTF",
    "label": "Return To Invoice & Financial Shortfall Insurance",
    "title": "Return To Invoice & Financial Shortfall Insurance (RTIFSHORTF)",
    "questions": [
      {
        "key": "gi_rtifshortf_vehicle_were_to_be_written_off",
        "alias": "gi_rtifshortf_vehicle_were_to_be_written_off",
        "label": "If your vehicle were to be written off by your motor insurer, would they give you back either: a sum equivalent to what you originally paid for your vehicle or, if higher a sufficient amount to pay off any outstanding motor finance? You should consider this answer as it relates to you next 2-3 years of ownership.",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "RTIFSHORTF",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTIFSHORTF"
        ]
      },
      {
        "key": "gi_rtifshortf_have_any_existing_insurance",
        "alias": "gi_rtifshortf_have_any_existing_insurance",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to the invoice price of your vehicle or your finance settlement figure, whichever is higher?",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "RTIFSHORTF",
        "parentKey": "gi_rtifshortf_vehicle_were_to_be_written_off",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTIFSHORTF"
        ]
      },
      {
        "key": "gi_rtifshortf_have_any_existing_insurance_notify",
        "alias": "gi_rtifshortf_have_any_existing_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 25,
        "group": "RTIFSHORTF",
        "parentKey": "gi_rtifshortf_have_any_existing_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTIFSHORTF"
        ]
      },
      {
        "key": "gi_rtifshortf_have_no_protection",
        "alias": "gi_rtifshortf_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 30,
        "group": "RTIFSHORTF",
        "parentKey": "gi_rtifshortf_have_any_existing_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:RTIFSHORTF"
        ]
      }
    ]
  },
  "SMART": {
    "key": "SMART",
    "label": "SMART Cover",
    "title": "SMART Cover (SMART)",
    "questions": [
      {
        "key": "gi_smart_suitability_existing_insurance",
        "alias": "gi_smart_suitability_existing_insurance",
        "label": "Do you have any insurance in place that will cover the cost of minor cosmetic repairs and will not effect your motor insurance no claims bonus?",
        "type": "bool",
        "displayType": "radio",
        "order": 300,
        "group": "SMART",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:SMART"
        ]
      },
      {
        "key": "gi_smart_suitability_existing_insurance_notify",
        "alias": "gi_smart_suitability_existing_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 305,
        "group": "SMART",
        "parentKey": "gi_smart_suitability_existing_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:SMART"
        ]
      },
      {
        "key": "gi_smart_suitability_consider",
        "alias": "gi_smart_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 310,
        "group": "SMART",
        "parentKey": "gi_smart_suitability_existing_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:SMART"
        ]
      }
    ]
  },
  "SMARTREPAI": {
    "key": "SMARTREPAI",
    "label": "SMART Repair & Alloy",
    "title": "SMART Repair & Alloy (SMARTREPAI)",
    "questions": [
      {
        "key": "gi_smartrepai_suitability_existing_insurance",
        "alias": "gi_smartrepai_suitability_existing_insurance",
        "label": "Do you have an existing SMART repair & Alloy wheel insurance policy in place that can be transferred and will already provide you with suitable cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 300,
        "group": "SMARTREPAI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:SMARTREPAI"
        ]
      },
      {
        "key": "gi_smartrepai_suitability_existing_insurance_notify",
        "alias": "gi_smartrepai_suitability_existing_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 305,
        "group": "SMARTREPAI",
        "parentKey": "gi_smartrepai_suitability_existing_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:SMARTREPAI"
        ]
      },
      {
        "key": "gi_smartrepai_suitability_consider",
        "alias": "gi_smartrepai_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 310,
        "group": "SMARTREPAI",
        "parentKey": "gi_smartrepai_suitability_existing_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:SMARTREPAI"
        ]
      }
    ]
  },
  "TAXICOMB": {
    "key": "TAXICOMB",
    "label": "Taxi Combined GAP",
    "title": "Taxi Combined GAP (TAXICOMB)",
    "questions": [
      {
        "key": "gi_taxicomb_suitability_existing_policy",
        "alias": "gi_taxicomb_suitability_existing_policy",
        "label": "Do you have an existing equivalent GAP policy that could be transferred to this vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "TAXICOMB",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXICOMB"
        ]
      },
      {
        "key": "gi_taxicomb_suitability_existing_policy_notify",
        "alias": "gi_taxicomb_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "TAXICOMB",
        "parentKey": "gi_taxicomb_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXICOMB"
        ]
      },
      {
        "key": "gi_taxicomb_suitability_consider",
        "alias": "gi_taxicomb_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "TAXICOMB",
        "parentKey": "gi_taxicomb_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXICOMB"
        ]
      }
    ]
  },
  "TAXIFIGAP": {
    "key": "TAXIFIGAP",
    "label": "Taxi Finance Gap",
    "title": "Taxi Finance Gap (TAXIFIGAP)",
    "questions": [
      {
        "key": "gi_taxifigap_suitability_existing_policy",
        "alias": "gi_taxifigap_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your finance settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "TAXIFIGAP",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIFIGAP"
        ]
      },
      {
        "key": "gi_taxifigap_suitability_existing_policy_notify",
        "alias": "gi_taxifigap_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "TAXIFIGAP",
        "parentKey": "gi_taxifigap_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIFIGAP"
        ]
      },
      {
        "key": "gi_taxifigap_suitability_consider",
        "alias": "gi_taxifigap_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "TAXIFIGAP",
        "parentKey": "gi_taxifigap_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIFIGAP"
        ]
      },
      {
        "key": "gi_taxifigap_consent",
        "alias": "gi_taxifigap_consent",
        "label": "Do you consent to us including the price of Taxi Finance GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like?",
        "type": "bool",
        "displayType": "radio",
        "order": 115,
        "group": "TAXIFIGAP",
        "parentKey": "gi_taxifigap_suitability_consider",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIFIGAP"
        ]
      }
    ]
  },
  "TAXIGAP": {
    "key": "TAXIGAP",
    "label": "Taxi and Driving School Finance GAP",
    "title": "Taxi and Driving School Finance GAP (TAXIGAP)",
    "questions": [
      {
        "key": "gi_taxigap_suitability_existing_policy",
        "alias": "gi_taxigap_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your finance settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "TAXIGAP",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIGAP"
        ]
      },
      {
        "key": "gi_taxigap_suitability_existing_policy_notify",
        "alias": "gi_taxigap_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "TAXIGAP",
        "parentKey": "gi_taxigap_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIGAP"
        ]
      },
      {
        "key": "gi_taxigap_suitability_consider",
        "alias": "gi_taxigap_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "TAXIGAP",
        "parentKey": "gi_taxigap_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIGAP"
        ]
      },
      {
        "key": "gi_taxigap_consent",
        "alias": "gi_taxigap_consent",
        "label": "Do you consent to us including the price of Taxi and Driving School Finance GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like?",
        "type": "bool",
        "displayType": "radio",
        "order": 115,
        "group": "TAXIGAP",
        "parentKey": "gi_taxigap_suitability_consider",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIGAP"
        ]
      }
    ]
  },
  "TAXILEASE": {
    "key": "TAXILEASE",
    "label": "Taxi Lease GAP",
    "title": "Taxi Lease GAP (TAXILEASE)",
    "questions": [
      {
        "key": "gi_taxilease_suitability_existing_policy",
        "alias": "gi_taxilease_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to your Lease settlement figure should it be required?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "TAXILEASE",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXILEASE"
        ]
      },
      {
        "key": "gi_taxilease_suitability_existing_policy_notify",
        "alias": "gi_taxilease_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "TAXILEASE",
        "parentKey": "gi_taxilease_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXILEASE"
        ]
      },
      {
        "key": "gi_taxilease_suitability_consider",
        "alias": "gi_taxilease_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "TAXILEASE",
        "parentKey": "gi_taxilease_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXILEASE"
        ]
      },
      {
        "key": "gi_taxilease_consent",
        "alias": "gi_taxilease_consent",
        "label": "Do you consent to us including the price of GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like? Inclusion is for information purposes only and does not constitute a commitment to purchase; any deposit taken against a vehicle reservation/order form is to secure your vehicle whilst you consider whether GAP insurance would be of benefit to you.",
        "type": "bool",
        "displayType": "radio",
        "order": 115,
        "group": "TAXILEASE",
        "parentKey": "gi_taxilease_suitability_consider",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXILEASE"
        ]
      }
    ]
  },
  "TAXIONLYRT": {
    "key": "TAXIONLYRT",
    "label": "Taxi Return to Invoice GAP",
    "title": "Taxi Return to Invoice GAP (TAXIONLYRT)",
    "questions": [
      {
        "key": "gi_taxionlyrt_summary_document",
        "alias": "gi_taxionlyrt_summary_document",
        "label": "I can confirm that the relevant policy summary document has been referred to and used in explaining significant features, benefits and exclusions of the Taxi Return to Invoice GAP",
        "type": "bool",
        "displayType": "radio",
        "order": 1,
        "group": "TAXIONLYRT",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIONLYRT"
        ]
      },
      {
        "key": "gi_taxionlyrt_advised",
        "alias": "gi_taxionlyrt_advised",
        "label": "Have you been advised and had the opportunity to verify who must be the policyholder and registered keeper in order to be eligible to claim on a  Taxi Return to Invoice GAP Insurance policy?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "TAXIONLYRT",
        "parentKey": "gi_taxionlyrt_summary_document",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIONLYRT"
        ]
      },
      {
        "key": "gi_taxionlyrt_has_insurance",
        "alias": "gi_taxionlyrt_has_insurance",
        "label": "Are you covered under an appropriate motor Insurance policy at the level required under the terms of your GAP Insurance policy now and will you continue to be so in the future?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "TAXIONLYRT",
        "parentKey": "gi_taxionlyrt_advised",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIONLYRT"
        ]
      },
      {
        "key": "gi_taxionlyrt_has_insurance_notify",
        "alias": "gi_taxionlyrt_has_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 15,
        "group": "TAXIONLYRT",
        "parentKey": "gi_taxionlyrt_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIONLYRT"
        ]
      },
      {
        "key": "gi_taxionlyrt_options",
        "alias": "gi_taxionlyrt_options",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "TAXIONLYRT",
        "parentKey": "gi_taxionlyrt_has_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance?"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection?"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIONLYRT"
        ]
      }
    ]
  },
  "TAXIRTI": {
    "key": "TAXIRTI",
    "label": "Taxi and Driving School Return to Invoice GAP",
    "title": "Taxi and Driving School Return to Invoice GAP (TAXIRTI)",
    "questions": [
      {
        "key": "gi_taxirti_suitability_existing_policy",
        "alias": "gi_taxirti_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to the invoice price of your vehicle?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "TAXIRTI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIRTI"
        ]
      },
      {
        "key": "gi_taxirti_suitability_existing_policy_notify",
        "alias": "gi_taxirti_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "TAXIRTI",
        "parentKey": "gi_taxirti_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIRTI"
        ]
      },
      {
        "key": "gi_taxirti_suitability_consider",
        "alias": "gi_taxirti_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "TAXIRTI",
        "parentKey": "gi_taxirti_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIRTI"
        ]
      },
      {
        "key": "gi_taxirti_consent",
        "alias": "gi_taxirti_consent",
        "label": "Do you consent to us including the price of Taxi and Driving School Return to Invoice GAP insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like?",
        "type": "bool",
        "displayType": "radio",
        "order": 115,
        "group": "TAXIRTI",
        "parentKey": "gi_taxirti_suitability_consider",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIRTI"
        ]
      }
    ]
  },
  "TAXIVRI": {
    "key": "TAXIVRI",
    "label": "Taxi and Driving School Vehicle Replacement Insurance",
    "title": "Taxi and Driving School Vehicle Replacement Insurance (TAXIVRI)",
    "questions": [
      {
        "key": "gi_taxivri_suitability_existing_policy",
        "alias": "gi_taxivri_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide a payment to top up your motor insurance settlement figure to the invoice price of your vehicle or provide you with a replacement vehicle of a similar age and specification to the one originally purchased?",
        "type": "bool",
        "displayType": "radio",
        "order": 100,
        "group": "TAXIVRI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIVRI"
        ]
      },
      {
        "key": "gi_taxivri_suitability_existing_policy_notify",
        "alias": "gi_taxivri_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 105,
        "group": "TAXIVRI",
        "parentKey": "gi_taxivri_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIVRI"
        ]
      },
      {
        "key": "gi_taxivri_suitability_consider",
        "alias": "gi_taxivri_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 110,
        "group": "TAXIVRI",
        "parentKey": "gi_taxivri_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIVRI"
        ]
      },
      {
        "key": "gi_taxivri_consent",
        "alias": "gi_taxivri_consent",
        "label": "Do you consent to us including the price of Taxi and Driving School Vehicle Replacement Insurance into your vehicle reservation/order form to give you a clear indication of what your overall purchase may look like?",
        "type": "bool",
        "displayType": "radio",
        "order": 115,
        "group": "TAXIVRI",
        "parentKey": "gi_taxivri_suitability_consider",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TAXIVRI"
        ]
      }
    ]
  },
  "TOPMBI": {
    "key": "TOPMBI",
    "label": "Top Up Mechanical Breakdown Insurance",
    "title": "Top Up Mechanical Breakdown Insurance (TOPMBI)",
    "questions": [
      {
        "key": "gi_topmbi_intend_to_use",
        "alias": "gi_topmbi_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use?",
        "type": "bool",
        "displayType": "radio",
        "order": 900,
        "group": "TOPMBI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TOPMBI"
        ]
      },
      {
        "key": "gi_topmbi_vehicle_eligible_for_cover",
        "alias": "gi_topmbi_vehicle_eligible_for_cover",
        "label": "Is the vehicle eligible for cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 901,
        "group": "TOPMBI",
        "parentKey": "gi_topmbi_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TOPMBI"
        ]
      },
      {
        "key": "gi_topmbi_intend_to_have_serviced",
        "alias": "gi_topmbi_intend_to_have_serviced",
        "label": "Do you intend to have the vehicle serviced in line with manufacturer requirements?",
        "type": "bool",
        "displayType": "radio",
        "order": 902,
        "group": "TOPMBI",
        "parentKey": "gi_topmbi_vehicle_eligible_for_cover",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TOPMBI"
        ]
      }
    ]
  },
  "TRUSTHRSPE": {
    "key": "TRUSTHRSPE",
    "label": "H & R Special Warranty",
    "title": "H & R Special Warranty (TRUSTHRSPE)",
    "questions": [
      {
        "key": "gi_trusthrspe_eligibility_vehicle",
        "alias": "gi_trusthrspe_eligibility_vehicle",
        "label": "Is the vehicle eligible for cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "TRUSTHRSPE",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSPE"
        ]
      },
      {
        "key": "gi_trusthrspe_other_insurance_policy",
        "alias": "gi_trusthrspe_other_insurance_policy",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for a mechanical breakdown?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "TRUSTHRSPE",
        "parentKey": "gi_trusthrspe_eligibility_vehicle",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSPE"
        ]
      },
      {
        "key": "gi_trusthrspe_other_insurance_policy_notify",
        "alias": "gi_trusthrspe_other_insurance_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 15,
        "group": "TRUSTHRSPE",
        "parentKey": "gi_trusthrspe_other_insurance_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSPE"
        ]
      },
      {
        "key": "gi_trusthrspe_have_no_protection",
        "alias": "gi_trusthrspe_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "TRUSTHRSPE",
        "parentKey": "gi_trusthrspe_other_insurance_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSPE"
        ]
      },
      {
        "key": "gi_trusthrspe_intend_to_have_vehicle_serviced",
        "alias": "gi_trusthrspe_intend_to_have_vehicle_serviced",
        "label": "Do you intend to have the vehicle serviced in line with manufacturer requirements?",
        "type": "bool",
        "displayType": "radio",
        "order": 25,
        "group": "TRUSTHRSPE",
        "parentKey": "gi_trusthrspe_have_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSPE"
        ]
      }
    ]
  },
  "TRUSTHRSTA": {
    "key": "TRUSTHRSTA",
    "label": "H & R Standard Warranty",
    "title": "H & R Standard Warranty (TRUSTHRSTA)",
    "questions": [
      {
        "key": "gi_trusthrsta_eligibility_vehicle",
        "alias": "gi_trusthrsta_eligibility_vehicle",
        "label": "Is the vehicle eligible for cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "TRUSTHRSTA",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSTA"
        ]
      },
      {
        "key": "gi_trusthrsta_have_other_insurance",
        "alias": "gi_trusthrsta_have_other_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for a mechanical breakdown?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "TRUSTHRSTA",
        "parentKey": "gi_trusthrsta_eligibility_vehicle",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSTA"
        ]
      },
      {
        "key": "gi_trusthrsta_have_other_insurance_notify",
        "alias": "gi_trusthrsta_have_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 15,
        "group": "TRUSTHRSTA",
        "parentKey": "gi_trusthrsta_have_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSTA"
        ]
      },
      {
        "key": "gi_trusthrsta_have_no_protection",
        "alias": "gi_trusthrsta_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 20,
        "group": "TRUSTHRSTA",
        "parentKey": "gi_trusthrsta_have_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSTA"
        ]
      },
      {
        "key": "gi_trusthrsta_intend_to_have_vehicle_serviced",
        "alias": "gi_trusthrsta_intend_to_have_vehicle_serviced",
        "label": "Do you intend to have the vehicle serviced in line with manufacturer requirements?",
        "type": "bool",
        "displayType": "radio",
        "order": 25,
        "group": "TRUSTHRSTA",
        "parentKey": "gi_trusthrsta_have_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTHRSTA"
        ]
      }
    ]
  },
  "TRUSTSLSPE": {
    "key": "TRUSTSLSPE",
    "label": "Special Warranty",
    "title": "Special Warranty (TRUSTSLSPE)",
    "questions": [
      {
        "key": "gi_ctrustslspe_vehicle_eligible_for_cover",
        "alias": "gi_ctrustslspe_vehicle_eligible_for_cover",
        "label": "Is the vehicle eligible for cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "TRUSTSLSPE",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSPE"
        ]
      },
      {
        "key": "gi_ctrustslspe_intend_to_use",
        "alias": "gi_ctrustslspe_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "TRUSTSLSPE",
        "parentKey": "gi_ctrustslspe_vehicle_eligible_for_cover",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSPE"
        ]
      },
      {
        "key": "gi_ctrustslspe_have_other_insurance",
        "alias": "gi_ctrustslspe_have_other_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for a mechanical breakdown?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "TRUSTSLSPE",
        "parentKey": "gi_ctrustslspe_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSPE"
        ]
      },
      {
        "key": "gi_ctrustslspe_have_other_insurance_notify",
        "alias": "gi_ctrustslspe_have_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 20,
        "group": "TRUSTSLSPE",
        "parentKey": "gi_ctrustslspe_have_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSPE"
        ]
      },
      {
        "key": "gi_ctrustslspe_have_no_protection",
        "alias": "gi_ctrustslspe_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 25,
        "group": "TRUSTSLSPE",
        "parentKey": "gi_ctrustslspe_have_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSPE"
        ]
      },
      {
        "key": "gi_ctrustslspe_intend_to_have_vehicle_serviced",
        "alias": "gi_ctrustslspe_intend_to_have_vehicle_serviced",
        "label": "Do you intend to have the vehicle serviced in line with manufacturer requirements?",
        "type": "bool",
        "displayType": "radio",
        "order": 30,
        "group": "TRUSTSLSPE",
        "parentKey": "gi_ctrustslspe_have_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSPE"
        ]
      }
    ]
  },
  "TRUSTSLSTA": {
    "key": "TRUSTSLSTA",
    "label": "Standard Warranty",
    "title": "Standard Warranty (TRUSTSLSTA)",
    "questions": [
      {
        "key": "gi_trustslsta_vehicle_eligible_for_cover",
        "alias": "gi_trustslsta_vehicle_eligible_for_cover",
        "label": "Is the vehicle eligible for cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 5,
        "group": "TRUSTSLSTA",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSTA"
        ]
      },
      {
        "key": "gi_trustslsta_intend_to_use",
        "alias": "gi_trustslsta_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use?",
        "type": "bool",
        "displayType": "radio",
        "order": 10,
        "group": "TRUSTSLSTA",
        "parentKey": "gi_trustslsta_vehicle_eligible_for_cover",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSTA"
        ]
      },
      {
        "key": "gi_trustslsta_have_any_other_insurance",
        "alias": "gi_trustslsta_have_any_other_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for a mechanical breakdown?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "TRUSTSLSTA",
        "parentKey": "gi_trustslsta_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSTA"
        ]
      },
      {
        "key": "gi_trustslsta_have_any_other_insurance_notify",
        "alias": "gi_trustslsta_have_any_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 20,
        "group": "TRUSTSLSTA",
        "parentKey": "gi_trustslsta_have_any_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSTA"
        ]
      },
      {
        "key": "gi_trustslsta_have_no_protection",
        "alias": "gi_trustslsta_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 25,
        "group": "TRUSTSLSTA",
        "parentKey": "gi_trustslsta_have_any_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSTA"
        ]
      },
      {
        "key": "gi_trustslsta_intend_to_have_vehicle_serviced",
        "alias": "gi_trustslsta_intend_to_have_vehicle_serviced",
        "label": "Do you intend to have the vehicle serviced in line with manufacturer requirements?",
        "type": "bool",
        "displayType": "radio",
        "order": 30,
        "group": "TRUSTSLSTA",
        "parentKey": "gi_trustslsta_have_no_protection",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TRUSTSLSTA"
        ]
      }
    ]
  },
  "TTLLSSSSST": {
    "key": "TTLLSSSSST",
    "label": "Total Loss Assistance",
    "title": "Total Loss Assistance (TTLLSSSSST)",
    "questions": [
      {
        "key": "gi_ttllssssst_have_any_other_insurance",
        "alias": "gi_ttllssssst_have_any_other_insurance",
        "label": "Do you have any existing insurance that would provide a payment to cover extra expenditure in the event of a total loss?",
        "type": "bool",
        "displayType": "radio",
        "order": 15,
        "group": "TTLLSSSSST",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TTLLSSSSST"
        ]
      },
      {
        "key": "gi_ttllssssst_have_any_other_insurance_notify",
        "alias": "gi_ttllssssst_have_any_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 20,
        "group": "TTLLSSSSST",
        "parentKey": "gi_ttllssssst_have_any_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TTLLSSSSST"
        ]
      },
      {
        "key": "gi_ttllssssst_have_no_protection",
        "alias": "gi_ttllssssst_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 25,
        "group": "TTLLSSSSST",
        "parentKey": "gi_ttllssssst_have_any_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TTLLSSSSST"
        ]
      }
    ]
  },
  "TYAL": {
    "key": "TYAL",
    "label": "Tyre and Alloy",
    "title": "Tyre and Alloy (TYAL)",
    "questions": [
      {
        "key": "gi_tyal_intend_to_use",
        "alias": "gi_tyal_intend_to_use",
        "label": "Do you intend to use your vehicle for any purpose that could be considered to be outside of 'normal' private on road use?",
        "type": "bool",
        "displayType": "radio",
        "order": 1000,
        "group": "TYAL",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYAL"
        ]
      },
      {
        "key": "gi_tyal_have_any_insurance",
        "alias": "gi_tyal_have_any_insurance",
        "label": "Do you have any insurance in place that will provide you with suitable cover for damage to your tyres / alloy wheels?",
        "type": "bool",
        "displayType": "radio",
        "order": 1050,
        "group": "TYAL",
        "parentKey": "gi_tyal_intend_to_use",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYAL"
        ]
      },
      {
        "key": "gi_tyal_have_any_insurance_notify",
        "alias": "gi_tyal_have_any_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 1100,
        "group": "TYAL",
        "parentKey": "gi_tyal_have_any_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYAL"
        ]
      },
      {
        "key": "gi_tyal_have_no_protection",
        "alias": "gi_tyal_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 1150,
        "group": "TYAL",
        "parentKey": "gi_tyal_have_any_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYAL"
        ]
      }
    ]
  },
  "TYRE": {
    "key": "TYRE",
    "label": "Tyre Insurance",
    "title": "Tyre Insurance (TYRE)",
    "questions": [
      {
        "key": "gi_tyre_suitability_eligible_for_cover",
        "alias": "gi_tyre_suitability_eligible_for_cover",
        "label": "Is the vehicle eligible for cover?",
        "type": "bool",
        "displayType": "radio",
        "order": 1100,
        "group": "TYRE",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYRE"
        ]
      },
      {
        "key": "gi_tyre_other_insurance",
        "alias": "gi_tyre_other_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for damage to your tyres?",
        "type": "bool",
        "displayType": "radio",
        "order": 1150,
        "group": "TYRE",
        "parentKey": "gi_tyre_suitability_eligible_for_cover",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYRE"
        ]
      },
      {
        "key": "gi_tyre_other_insurance_notify",
        "alias": "gi_tyre_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 1200,
        "group": "TYRE",
        "parentKey": "gi_tyre_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYRE"
        ]
      }
    ]
  },
  "TYREKEY": {
    "key": "TYREKEY",
    "label": "Tyre & Key Insurance",
    "title": "Tyre & Key Insurance (TYREKEY)",
    "questions": [
      {
        "key": "gi_tyrekey_other_insurance",
        "alias": "gi_tyrekey_other_insurance",
        "label": "Do you have any other insurance policy in place that will provide you with suitable cover for damage to your tyres or loss of your keys?",
        "type": "bool",
        "displayType": "radio",
        "order": 1001,
        "group": "TYREKEY",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYREKEY"
        ]
      },
      {
        "key": "gi_tyrekey_other_insurance_notify",
        "alias": "gi_tyrekey_other_insurance_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 1050,
        "group": "TYREKEY",
        "parentKey": "gi_tyrekey_other_insurance",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYREKEY"
        ]
      },
      {
        "key": "gi_tyrekey_have_no_protection",
        "alias": "gi_tyrekey_have_no_protection",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 1100,
        "group": "TYREKEY",
        "parentKey": "gi_tyrekey_other_insurance",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance "
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:TYREKEY"
        ]
      }
    ]
  },
  "VEREX": {
    "key": "VEREX",
    "label": "Complimentary 7 day Insurance",
    "title": "Complimentary 7 day Insurance (VEREX)",
    "questions": [
      {
        "key": "gi_verex_suitability_modification",
        "alias": "gi_verex_suitability_modification",
        "label": "Is the vehicle over the value or £2,000, under the age of 8 years and not modified from the manufacturers original specification?",
        "type": "bool",
        "displayType": "radio",
        "order": 1200,
        "group": "VEREX",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      },
      {
        "key": "gi_verex_suitability_existing_policy",
        "alias": "gi_verex_suitability_existing_policy",
        "label": "Do you have any other Motor Insurance arranged for this vehicle through a third party (other than the optional drive away insurance being offered by the dealership)?",
        "type": "bool",
        "displayType": "radio",
        "order": 1250,
        "group": "VEREX",
        "parentKey": "gi_verex_suitability_modification",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      },
      {
        "key": "gi_verex_suitability_existing_policy_notify",
        "alias": "gi_verex_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 1300,
        "group": "VEREX",
        "parentKey": "gi_verex_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      },
      {
        "key": "gi_verex_suitability_customer_age",
        "alias": "gi_verex_suitability_customer_age",
        "label": "Are you over the age of 21 and under the age of 79?",
        "type": "bool",
        "displayType": "radio",
        "order": 1350,
        "group": "VEREX",
        "parentKey": "gi_verex_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      },
      {
        "key": "gi_verex_suitability_penalty_points",
        "alias": "gi_verex_suitability_penalty_points",
        "label": "Do you have more than 9 penalty points on your licence?",
        "type": "bool",
        "displayType": "radio",
        "order": 1400,
        "group": "VEREX",
        "parentKey": "gi_verex_suitability_customer_age",
        "parentWhen": "eq:1",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      },
      {
        "key": "gi_verex_refused_fraud",
        "alias": "gi_verex_refused_fraud",
        "label": "Have you ever been refused motor insurance or had any policy cancelled due to Fraud?",
        "type": "bool",
        "displayType": "radio",
        "order": 1450,
        "group": "VEREX",
        "parentKey": "gi_verex_suitability_penalty_points",
        "parentWhen": "eq:0",
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      },
      {
        "key": "gi_verex_suitability_cover_basis",
        "alias": "gi_verex_suitability_cover_basis",
        "label": "If you are eligible, cover will be provided on the following basis: Cover will be for the individuals specified on the cover note only. This policy will not cover you for driving any other vehicles    The vehicle must only be used for Social, Domestic and Pleasure purposes including commuting to one permanent place of business. The vehicle must not be used for any business purposes. You will not be covered for use outside of the UK There is a £500 excess for all claims, including windscreen replacement or repair. If the vehicle is valued greater than £75,000, an approved categories tracking device must be fitted and active, in-line with the policy terms and conditions. Other terms and conditions apply (see full policy document for details)",
        "type": "bool",
        "displayType": "radio",
        "order": 1500,
        "group": "VEREX",
        "parentKey": "gi_verex_refused_fraud",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "You have been provided with an Driveaway Insurance Product Information Document prior to the policy going live and you have read and signed the Declaration on the ‘Statement of Facts’ and have been provided with a motor insurance certificate and you are happy to proceed with Driveaway Insurance"
          },
          {
            "value": 0,
            "text": "You are not happy to proceed with the Driveaway Insurance and confirm that you will make arrangements for a suitable insurance policy to be in force from the day you collect the vehicle"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      },
      {
        "key": "gi_verex_honesty",
        "alias": "gi_verex_honesty",
        "label": "Can you confirm that you have been made aware that it is imperative that you answer all questions honestly and to the best of your knowledge and that should you need to make a claim on the policy that your answers may be checked by asking for documentary evidence?",
        "type": "bool",
        "displayType": "radio",
        "order": 1550,
        "group": "VEREX",
        "parentKey": "gi_verex_suitability_cover_basis",
        "parentWhen": "eq:1",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VEREX"
        ]
      }
    ]
  },
  "VRI": {
    "key": "VRI",
    "label": "Vehicle Replacement Insurance",
    "title": "Vehicle Replacement Insurance (VRI)",
    "questions": [
      {
        "key": "gi_vri_suitability_existing_policy",
        "alias": "gi_vri_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide you with a replacement vehicle of a similar age and specification to the one originally purchased?",
        "type": "bool",
        "displayType": "radio",
        "order": 200,
        "group": "VRI",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VRI"
        ]
      },
      {
        "key": "gi_vri_suitability_existing_policy_notify",
        "alias": "gi_vri_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 205,
        "group": "VRI",
        "parentKey": "gi_vri_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VRI"
        ]
      },
      {
        "key": "gi_vri_suitability_consider",
        "alias": "gi_vri_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 210,
        "group": "VRI",
        "parentKey": "gi_vri_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VRI"
        ]
      }
    ]
  },
  "VRIFGAP": {
    "key": "VRIFGAP",
    "label": "VRI & Finance GAP",
    "title": "VRI & Finance GAP (VRIFGAP)",
    "questions": [
      {
        "key": "gi_vrifgap_suitability_existing_policy",
        "alias": "gi_vrifgap_suitability_existing_policy",
        "label": "Do you have any existing insurance that would provide you with suitable cover in the event of a total loss?",
        "type": "bool",
        "displayType": "radio",
        "order": 200,
        "group": "VRIFGAP",
        "parentKey": null,
        "parentWhen": null,
        "suitableAnswer": 0,
        "options": [
          {
            "value": 1,
            "text": "Yes"
          },
          {
            "value": 0,
            "text": "No"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VRIFGAP"
        ]
      },
      {
        "key": "gi_vrifgap_suitability_existing_policy_notify",
        "alias": "gi_vrifgap_suitability_existing_policy_notify",
        "label": "Please consider contacting the provider to cancel the policy accordingly if you are taking a new policy",
        "type": "confirm",
        "displayType": "checkbox",
        "order": 205,
        "group": "VRIFGAP",
        "parentKey": "gi_vrifgap_suitability_existing_policy",
        "parentWhen": "eq:1",
        "suitableAnswer": null,
        "options": [],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VRIFGAP"
        ]
      },
      {
        "key": "gi_vrifgap_suitability_consider",
        "alias": "gi_vrifgap_suitability_consider",
        "label": "As you have no protection in place, would you:",
        "type": "bool",
        "displayType": "radio",
        "order": 210,
        "group": "VRIFGAP",
        "parentKey": "gi_vrifgap_suitability_existing_policy",
        "parentWhen": "eq:0",
        "suitableAnswer": 1,
        "options": [
          {
            "value": 1,
            "text": "Like to review and consider specific insurance"
          },
          {
            "value": 0,
            "text": "Be happy to proceed without protection"
          }
        ],
        "rules": [
          "required"
        ],
        "constraints": [
          "initial-eligibility-complete",
          "product-is-selected:VRIFGAP"
        ]
      }
    ]
  }
};
