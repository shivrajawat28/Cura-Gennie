export interface DiseaseEntry {
  symptoms: string[]
  diseases: { name: string; probability: number }[]
  medications: string
  homeRemedies: string[]
  precautions: string[]
  specialist: string
}

export const diseaseData: DiseaseEntry[] = [
  {
    symptoms: ["fever", "body ache", "headache"],
    diseases: [
      { name: "Viral Fever", probability: 60 },
      { name: "Dengue", probability: 30 },
      { name: "Typhoid", probability: 10 },
    ],
    medications: "Paracetamol 500mg – after food, 3x/day; ORS after meals; Crocin Syrup – 10-15mg/kg after food",
    homeRemedies: ["Hydration", "Tulsi Kadha", "Cold Compress", "Herbal Tea", "Light Khichdi"],
    precautions: [
      "Avoid crowd",
      "Wear mask",
      "Light diet",
      "Drink fluids",
      "Monitor temperature",
      "Avoid self-medication",
    ],
    specialist: "General Physician",
  },
  {
    symptoms: ["cough", "sore throat", "mild fever"],
    diseases: [
      { name: "Common Cold", probability: 70 },
      { name: "Flu", probability: 25 },
      { name: "COVID-19", probability: 5 },
    ],
    medications: "Cetirizine 5mg – at night after dinner; Paracetamol – 500mg after food; Steam Inhalation anytime",
    homeRemedies: ["Haldi Doodh", "Salt Gargle", "Ginger + Honey", "Steam with Vicks", "Warm Soup"],
    precautions: [
      "Stay home",
      "Wear mask",
      "Avoid cold drinks",
      "Wash hands",
      "Avoid sharing utensils",
      "Maintain room ventilation",
    ],
    specialist: "General Physician",
  },
  {
    symptoms: ["stomach pain", "loose motion"],
    diseases: [
      { name: "Food Poisoning", probability: 50 },
      { name: "Gastroenteritis", probability: 40 },
      { name: "IBS", probability: 10 },
    ],
    medications: "Metrogyl 400mg – after food, 2x/day; ORS after every loose motion; Paracetamol if fever",
    homeRemedies: ["Curd + Rice", "Jeera Water", "Coconut Water", "Saunf Water", "Light Moong Dal"],
    precautions: [
      "Avoid spicy food",
      "Rest",
      "Hydration",
      "Hygiene",
      "Avoid dairy temporarily",
      "Wash hands before eating",
    ],
    specialist: "Gastroenterologist",
  },
  {
    symptoms: ["itchy eyes", "sneezing", "runny nose"],
    diseases: [
      { name: "Allergic Rhinitis", probability: 80 },
      { name: "Dust Allergy", probability: 15 },
      { name: "Flu", probability: 5 },
    ],
    medications: "Cetirizine – at night after food; Nasal Spray – 2 puffs morning & night",
    homeRemedies: ["Steam", "Tulsi Kadha", "Honey + Black Pepper", "Warm Turmeric Water", "Avoid allergens"],
    precautions: ["Use mask", "Clean surroundings", "Avoid strong smells", "Keep windows closed during pollen season"],
    specialist: "ENT Specialist / Allergist",
  },
  {
    symptoms: ["skin rash", "itching", "redness"],
    diseases: [
      { name: "Fungal Infection", probability: 60 },
      { name: "Allergy", probability: 30 },
      { name: "Scabies", probability: 10 },
    ],
    medications: "Candid Cream – apply twice daily after bath; Antihistamine – after food",
    homeRemedies: ["Neem Wash", "Aloe Vera Gel", "Coconut Oil", "Multani Mitti Paste", "Sandalwood Powder"],
    precautions: [
      "Avoid scratching",
      "Wear loose clothes",
      "Keep skin dry",
      "Avoid synthetic fabrics",
      "Change bedsheets regularly",
    ],
    specialist: "Dermatologist",
  },
  {
    symptoms: ["chest pain", "breathlessness", "shortness of breath"],
    diseases: [
      { name: "Asthma", probability: 50 },
      { name: "Bronchitis", probability: 30 },
      { name: "COVID-19", probability: 20 },
    ],
    medications: "Salbutamol Inhaler – 2 puffs as needed; Montelukast – 1 tab at night after food",
    homeRemedies: ["Sit upright", "Steam", "Tulsi Kadha", "Warm Water Sips", "Avoid Cold Air"],
    precautions: [
      "Avoid dust",
      "Monitor SpO2",
      "Consult doctor if breathlessness worsens",
      "Avoid cold air",
      "Keep inhaler handy",
    ],
    specialist: "Pulmonologist",
  },
  {
    symptoms: ["burning urination", "lower abdomen pain", "frequent urination"],
    diseases: [
      { name: "UTI", probability: 70 },
      { name: "Kidney Infection", probability: 20 },
      { name: "Bladder Irritation", probability: 10 },
    ],
    medications: "Ciprofloxacin 500mg – 1 tab after food, 2x/day; Cranberry Syrup – 10ml after lunch & dinner",
    homeRemedies: ["Coconut Water", "Jeera Water", "Warm Compress", "Barley Water", "Coriander Seed Water"],
    precautions: [
      "Drink water",
      "Avoid spicy food",
      "Maintain hygiene",
      "Wear cotton undergarments",
      "Avoid holding urine",
    ],
    specialist: "Urologist",
  },
  {
    symptoms: ["eye redness", "watering", "eye irritation"],
    diseases: [
      { name: "Conjunctivitis", probability: 60 },
      { name: "Allergy", probability: 30 },
      { name: "Dry Eye", probability: 10 },
    ],
    medications: "Tobramycin Drops – 1 drop 3x/day after cleaning eyes; Antihistamine – 1 tab after food",
    homeRemedies: ["Rose Water Compress", "Cucumber Slices", "Cold Spoon Compress", "Triphala Wash"],
    precautions: ["Avoid touching eyes", "Use clean cloth", "Wear glasses", "Avoid screen time", "Don't share towels"],
    specialist: "Ophthalmologist",
  },
  {
    symptoms: ["headache", "nausea", "sensitivity to light"],
    diseases: [
      { name: "Migraine", probability: 70 },
      { name: "Tension Headache", probability: 20 },
      { name: "Sinusitis", probability: 10 },
    ],
    medications: "Sumatriptan 50mg – 1 tab at onset after food; Paracetamol – 500mg after food",
    homeRemedies: ["Cold Compress", "Dark Room Rest", "Peppermint Oil", "Ginger Tea"],
    precautions: ["Avoid screen time", "Hydrate", "Sleep well", "Avoid loud noise", "Track triggers"],
    specialist: "Neurologist / ENT Specialist",
  },
  {
    symptoms: ["dry cough", "fatigue", "tiredness"],
    diseases: [
      { name: "COVID-19", probability: 60 },
      { name: "Flu", probability: 30 },
      { name: "Bronchitis", probability: 10 },
    ],
    medications: "Paracetamol – 500mg after food; Steam – 2x/day; Zinc + Vitamin C – 1 tab after breakfast",
    homeRemedies: ["Haldi Doodh", "Steam", "Ginger Honey", "Warm Water Gargle", "Mulethi Powder"],
    precautions: ["Isolate", "Wear mask", "Monitor SpO2", "Avoid visitors", "Sanitize surfaces", "Eat warm food"],
    specialist: "General Physician / Pulmonologist",
  },
  {
    symptoms: ["dizziness", "low bp", "weakness"],
    diseases: [
      { name: "Dehydration", probability: 60 },
      { name: "Anemia", probability: 30 },
      { name: "Hypotension", probability: 10 },
    ],
    medications: "ORS after meals; Iron Supplements – 1 tab after lunch",
    homeRemedies: ["Coconut Water", "Beetroot Juice", "Pomegranate Juice", "Raisin Water", "Lemon + Salt Mix"],
    precautions: ["Rest", "Hydrate", "Avoid sudden standing", "Eat iron-rich food", "Monitor BP regularly"],
    specialist: "General Physician / Cardiologist",
  },
]
