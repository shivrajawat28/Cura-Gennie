"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Search, X, Stethoscope, Clock, User, Thermometer, Heart, Activity, Loader2 } from "lucide-react"
import DiagnosisResults from "./diagnosis-results"

const medicalDatabase = {
  diseases: [
    {
      id: "viral_fever",
      name: "Viral Fever",
      symptoms: ["Fever", "Body ache", "Headache", "High temperature", "Body pain"],
      possibleDiagnoses: [
        { name: "Viral Fever", probability: 60 },
        { name: "Dengue", probability: 30 },
        { name: "Typhoid", probability: 10 },
      ],
      medicines: [
        { name: "Paracetamol", dosage: "500mg", frequency: "3x/day", timing: "after food" },
        { name: "ORS", dosage: "1 pouch", frequency: "after meals", timing: "after meals" },
        { name: "Crocin Syrup", dosage: "10-15mg/kg", frequency: "as needed", timing: "after food" },
      ],
      homeRemedies: ["Hydration", "Tulsi Kadha", "Cold Compress", "Herbal Tea", "Light Khichdi"],
      precautions: [
        "Avoid crowd",
        "Wear mask",
        "Light diet",
        "Drink fluids",
        "Monitor temperature",
        "Avoid self-medication",
      ],
      doctorType: "General Physician",
      severity: "moderate",
      conclusion:
        "Viral Fever is a common illness. Ensure adequate rest and hydration. If symptoms worsen, consult a doctor.",
    },
    {
      id: "common_cold",
      name: "Common Cold",
      symptoms: ["Cough", "Sore throat", "Mild fever", "Runny nose", "Sneezing"],
      possibleDiagnoses: [
        { name: "Common Cold", probability: 70 },
        { name: "Flu", probability: 25 },
        { name: "COVID-19", probability: 5 },
      ],
      medicines: [
        { name: "Cetirizine", dosage: "5mg", frequency: "1x/day", timing: "at night after dinner" },
        { name: "Paracetamol", dosage: "500mg", frequency: "1-2x/day", timing: "after food (if fever)" },
        { name: "Steam Inhalation", dosage: "N/A", frequency: "as needed", timing: "anytime" },
      ],
      homeRemedies: ["Haldi Doodh", "Salt Gargle", "Ginger + Honey Tea", "Steam with Vicks", "Warm Soup"],
      precautions: [
        "Stay home",
        "Wear mask",
        "Avoid cold drinks",
        "Wash hands frequently",
        "Avoid sharing utensils",
        "Maintain room ventilation",
      ],
      doctorType: "General Physician",
      severity: "mild",
      conclusion:
        "Common Cold is usually self-limiting. Rest well and stay hydrated. Consult a doctor if symptoms persist or worsen.",
    },
    {
      id: "food_poisoning",
      name: "Food Poisoning",
      symptoms: ["Stomach pain", "Loose motion", "Diarrhea", "Abdominal pain", "Nausea", "Vomiting"],
      possibleDiagnoses: [
        { name: "Food Poisoning", probability: 50 },
        { name: "Gastroenteritis", probability: 40 },
        { name: "IBS", probability: 10 },
      ],
      medicines: [
        { name: "Metrogyl", dosage: "400mg", frequency: "2x/day", timing: "after food" },
        { name: "ORS", dosage: "1 pouch", frequency: "after every loose motion", timing: "after every loose motion" },
        { name: "Paracetamol", dosage: "500mg", frequency: "as needed", timing: "if fever" },
      ],
      homeRemedies: ["Curd + Rice", "Jeera Water", "Coconut Water", "Saunf Water", "Light Moong Dal Khichdi"],
      precautions: [
        "Avoid spicy food",
        "Take rest",
        "Stay hydrated",
        "Maintain hygiene",
        "Avoid dairy temporarily",
        "Wash hands before eating",
      ],
      doctorType: "Gastroenterologist",
      severity: "moderate",
      conclusion:
        "Food poisoning requires hydration and light diet. If symptoms are severe or persist, seek medical attention.",
    },
    {
      id: "migraine",
      name: "Migraine",
      symptoms: ["Headache", "Nausea", "Sensitivity to light", "Head pain", "Vomiting"],
      possibleDiagnoses: [
        { name: "Migraine", probability: 70 },
        { name: "Tension Headache", probability: 20 },
        { name: "Sinusitis", probability: 10 },
      ],
      medicines: [
        { name: "Sumatriptan", dosage: "50mg", frequency: "1 tab at onset", timing: "after food" },
        { name: "Paracetamol", dosage: "500mg", frequency: "1-2x/day", timing: "after food (if pain)" },
      ],
      homeRemedies: ["Cold Compress", "Rest in dark room", "Peppermint Oil massage", "Ginger Tea"],
      precautions: [
        "Avoid screen time",
        "Stay hydrated",
        "Ensure good sleep",
        "Avoid loud noise",
        "Track triggers",
      ],
      doctorType: "Neurologist",
      severity: "moderate",
      conclusion:
        "Migraine management involves identifying triggers and timely medication. Consult a neurologist for chronic issues.",
    },
    {
      id: "allergic_rhinitis",
      name: "Allergic Rhinitis",
      symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Watery eyes", "Nasal congestion", "Itching nose"],
      possibleDiagnoses: [
        { name: "Allergic Rhinitis", probability: 80 },
        { name: "Common Cold", probability: 15 },
        { name: "Sinusitis", probability: 5 },
      ],
      medicines: [
        { name: "Levocetirizine", dosage: "5mg", frequency: "1x/day", timing: "at night" },
        { name: "Nasal Spray (Saline)", dosage: "2 puffs", frequency: "2x/day", timing: "as needed" },
      ],
      homeRemedies: ["Steam Inhalation", "Neti Pot with Saline", "Honey & Warm Water", "Avoid Allergens"],
      precautions: [
        "Identify and avoid allergens",
        "Keep surroundings clean",
        "Wear mask outdoors",
        "Use air purifier",
        "Avoid sudden temperature changes",
      ],
      doctorType: "ENT Specialist / General Physician",
      severity: "mild",
      conclusion:
        "Allergic Rhinitis symptoms can be managed by avoiding triggers and medication. Consult an ENT for persistent issues.",
    },
    {
      id: "gastritis",
      name: "Gastritis",
      symptoms: ["Stomach pain", "Nausea", "Bloating", "Indigestion", "Burning sensation in stomach", "Loss of appetite"],
      possibleDiagnoses: [
        { name: "Gastritis", probability: 70 },
        { name: "Acid Reflux", probability: 20 },
        { name: "Peptic Ulcer", probability: 10 },
      ],
      medicines: [
        { name: "Pantoprazole", dosage: "40mg", frequency: "1x/day", timing: "before breakfast" },
        { name: "Antacid Liquid", dosage: "10ml", frequency: "as needed", timing: "after meals" },
      ],
      homeRemedies: ["Ginger Tea", "Chamomile Tea", "Aloe Vera Juice", "Bananas", "Probiotics"],
      precautions: [
        "Avoid spicy and fatty foods",
        "Eat small, frequent meals",
        "Avoid alcohol and caffeine",
        "Manage stress",
        "Quit smoking",
      ],
      doctorType: "Gastroenterologist",
      severity: "moderate",
      conclusion:
        "Gastritis requires dietary modifications and medication. If severe pain or persistent symptoms occur, consult a gastroenterologist.",
    },
  ],
}

const commonSymptoms = [
  "Fever",
  "Body ache",
  "Headache",
  "High temperature",
  "Body pain",
  "Cough",
  "Sore throat",
  "Mild fever",
  "Runny nose",
  "Stomach pain",
  "Loose motion",
  "Diarrhea",
  "Abdominal pain",
  "Itchy eyes",
  "Sneezing",
  "Watery eyes",
  "Skin rash",
  "Itching",
  "Redness",
  "Skin irritation",
  "Chest pain",
  "Breathlessness",
  "Shortness of breath",
  "Difficulty breathing",
  "Burning urination",
  "Lower abdomen pain",
  "Frequent urination",
  "Painful urination",
  "Eye redness",
  "Watering",
  "Eye irritation",
  "Nausea",
  "Sensitivity to light",
  "Head pain",
  "Dry cough",
  "Fatigue",
  "Tiredness",
  "Dizziness",
  "Low BP",
  "Weakness",
  "Joint pain",
  "Muscle aches",
  "Chills",
  "Sweating",
  "Vomiting",
  "Nasal congestion",
  "Itching nose",
  "Bloating",
  "Indigestion",
  "Burning sensation in stomach",
  "Loss of appetite",
]

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [symptomInput, setSymptomInput] = useState("")
  const [filteredSymptoms, setFilteredSymptoms] = useState<string[]>([])
  const [age, setAge] = useState("")
  const [duration, setDuration] = useState("")
  const [temperature, setTemperature] = useState("")
  const [pulse, setPulse] = useState("")
  const [spo2, setSpo2] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showVitals, setShowVitals] = useState(false)
  const [diagnosisData, setDiagnosisData] = useState<any>(null)

  const handleSymptomInputChange = (value: string) => {
    setSymptomInput(value)
    if (value.length > 0) {
      const filtered = commonSymptoms.filter(
        (symptom) => symptom.toLowerCase().includes(value.toLowerCase()) && !selectedSymptoms.includes(symptom),
      )
      setFilteredSymptoms(filtered.slice(0, 5))
    } else {
      setFilteredSymptoms([])
    }
  }

  const addSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom])
      setSymptomInput("")
      setFilteredSymptoms([])
    }
  }

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
  }

  const handleDiagnosis = async () => {
    if (selectedSymptoms.length === 0) {
      alert("Please select at least 1 symptom.")
      return
    }

    if (!age || !duration) {
      alert("Please enter age and duration of symptoms.")
      return
    }

    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    let potentialDiagnoses: any[] = []

    // Calculate a score for each disease based on how many selected symptoms it matches
    const scoredDiseases = medicalDatabase.diseases.map((disease) => {
      let score = 0
      selectedSymptoms.forEach((selectedSymptom) => {
        // Check if the selected symptom is present in the disease's symptoms
        if (
          disease.symptoms.some((symptom) =>
            symptom.toLowerCase().includes(selectedSymptom.toLowerCase()) ||
            selectedSymptom.toLowerCase().includes(symptom.toLowerCase())
          )
        ) {
          score++
        }
      })
      // Calculate a base probability for the disease based on its score
      // This is a simple linear mapping, can be made more complex if needed.
      // Max score for any disease is the number of symptoms it has.
      const maxPossibleScore = disease.symptoms.length;
      let calculatedProbability = 0;
      if (maxPossibleScore > 0) {
        calculatedProbability = Math.min(100, Math.floor((score / maxPossibleScore) * 100)); // Cap at 100
      }
      
      // If no symptoms match, probability should be 0, otherwise at least a base value
      if (score === 0) {
          calculatedProbability = 0;
      } else if (calculatedProbability < 30) { // Ensure a minimum probability if there's a match
          calculatedProbability = 30;
      }


      return { disease, score, calculatedProbability }
    })

    // Filter out diseases with no matching symptoms and sort by calculatedProbability (highest first)
    const relevantDiseasesWithProb = scoredDiseases
      .filter((item) => item.score > 0) // Only include diseases with at least one matching symptom
      .sort((a, b) => b.calculatedProbability - a.calculatedProbability); // Sort by the new calculated probability

    if (relevantDiseasesWithProb.length === 0) {
      alert("No matching disease found in database. Please consult a doctor.")
      setIsLoading(false)
      setShowResults(false)
      setDiagnosisData(null)
      return
    }

    // Process relevant diseases to fit the DiagnosisResultsProps type
    potentialDiagnoses = relevantDiseasesWithProb.map((item) => {
      const disease = item.disease;
      const calculatedProbability = item.calculatedProbability; // Use the calculated probability here

      // Find the primary diagnosis for this disease (e.g., the one with highest probability or just the first)
      const primaryMatch =
        disease.possibleDiagnoses.find((d) => d.name === disease.name) || disease.possibleDiagnoses[0]

      const finalConclusion =
        disease.conclusion || "Please consult with a healthcare professional for proper diagnosis and treatment."

      return {
        id: disease.id,
        name: primaryMatch ? primaryMatch.name : disease.name,
        // Use the calculated probability based on symptom matches
        probability: calculatedProbability, 
        severity: disease.severity,
        medicines: disease.medicines,
        homeRemedies: disease.homeRemedies,
        doctorType: disease.doctorType,
        conclusion: finalConclusion,
      }
    })

    // Final sort by the calculated probability to ensure the display order is correct
    // (though relevantDiseasesWithProb is already sorted, this ensures consistency)
    potentialDiagnoses.sort((a, b) => b.probability - a.probability)


    setDiagnosisData({
      diseases: potentialDiagnoses,
      symptoms: selectedSymptoms,
      age,
      duration,
      vitals: { temperature, pulse, spo2 },
    })

    setIsLoading(false)
    setShowResults(true)
  }

  const isFormValid = selectedSymptoms.length > 0 && age && duration

  if (showResults && diagnosisData) {
    return (
      <DiagnosisResults
        diagnosisData={diagnosisData}
        onReset={() => {
          setShowResults(false)
          setDiagnosisData(null)
          setSelectedSymptoms([])
          setAge("")
          setDuration("")
          setTemperature("")
          setPulse("")
          setSpo2("")
        }}
      />
    )
  }

  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, #42a5f5, #1e88e5)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg"
                style={{ background: "#00c853" }}
              >
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 text-balance drop-shadow-lg">
              Health made simple with Cura Gennie
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto text-pretty drop-shadow-sm">
              Describe your symptoms and get instant AI-powered health insights. Our advanced system analyzes your input
              to provide preliminary guidance.
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardHeader
              className="text-white rounded-t-lg"
              style={{ background: "linear-gradient(135deg, #1e3a8a, #1565c0)", backgroundColor: "#1e3a8a" }}
            >
              <CardTitle className="flex items-center gap-2 text-white text-xl">
                <Search className="w-12 h-12" />
                Symptom Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              {/* Symptom Input */}
              <div className="space-y-3">
                <Label htmlFor="symptoms" className="text-foreground font-semibold text-base">
                  What symptoms are you experiencing?
                </Label>
                <div className="relative">
                  <Input
                    id="symptoms"
                    placeholder="Type symptoms (e.g., fever, headache, cough...)"
                    value={symptomInput}
                    onChange={(e) => handleSymptomInputChange(e.target.value)}
                    className="pr-10 focus:ring-2 focus:ring-primary border-2 border-border/50 hover:border-primary/50 transition-colors"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                  {/* Symptom Suggestions */}
                  {filteredSymptoms.length > 0 && (
                    <Card className="absolute top-full left-0 right-0 z-10 mt-1 border-primary/20 shadow-lg">
                      <CardContent className="p-2">
                        {filteredSymptoms.map((symptom) => (
                          <button
                            key={symptom}
                            onClick={() => addSymptom(symptom)}
                            className="w-full text-left px-3 py-2 hover:bg-section-blue rounded text-sm text-foreground transition-all duration-200 hover:scale-[1.02]"
                          >
                            {symptom}
                          </button>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Selected Symptoms */}
                {selectedSymptoms.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedSymptoms.map((symptom) => (
                      <Badge
                        key={symptom}
                        variant="secondary"
                        className="bg-gradient-secondary text-white hover:bg-gradient-accent px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105"
                      >
                        {symptom}
                        <button onClick={() => removeSymptom(symptom)} className="ml-2 hover:text-red-200">
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <Separator className="bg-gradient-primary h-0.5" />

              {/* Age and Duration */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age" className="flex items-center gap-2 text-foreground font-semibold">
                    <User className="w-5 h-5 text-primary" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="1"
                    max="120"
                    className="focus:ring-2 focus:ring-primary border-2 border-border/50 hover:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration" className="flex items-center gap-2 text-foreground font-semibold">
                    <Clock className="w-5 h-5 text-primary" />
                    Duration of Symptoms
                  </Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger className="focus:ring-2 focus:ring-primary border-2 border-border/50 hover:border-primary/50 transition-colors">
                      <SelectValue placeholder="How long have you had these symptoms?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1day">Less than 1 day</SelectItem>
                      <SelectItem value="1-2days">1-2 days</SelectItem>
                      <SelectItem value="3-5days">3-5 days</SelectItem>
                      <SelectItem value="1week">About 1 week</SelectItem>
                      <SelectItem value=">1week">More than 1 week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Optional Vitals */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-foreground font-semibold">Vital Signs (Optional)</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowVitals(!showVitals)}
                    className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 font-medium"
                  >
                    {showVitals ? "Hide" : "Add"} Vitals
                  </Button>
                </div>

                {showVitals && (
                  <div className="grid md:grid-cols-3 gap-4 p-6 bg-section-green rounded-xl border border-primary/20">
                    <div className="space-y-2">
                      <Label htmlFor="temperature" className="flex items-center gap-2 text-sm font-medium">
                        <Thermometer className="w-4 h-4 text-destructive" />
                        Temperature (°F)
                      </Label>
                      <Input
                        id="temperature"
                        type="number"
                        placeholder="98.6"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        step="0.1"
                        className="focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pulse" className="flex items-center gap-2 text-sm font-medium">
                        <Heart className="w-4 h-4 text-red-500" />
                        Pulse (BPM)
                      </Label>
                      <Input
                        id="pulse"
                        type="number"
                        placeholder="72"
                        value={pulse}
                        onChange={(e) => setPulse(e.target.value)}
                        className="focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="spo2" className="flex items-center gap-2 text-sm font-medium">
                        <Activity className="w-4 h-4 text-blue-500" />
                        SpO2 (%)
                      </Label>
                      <Input
                        id="spo2"
                        type="number"
                        placeholder="98"
                        value={spo2}
                        onChange={(e) => setSpo2(e.target.value)}
                        min="70"
                        max="100"
                        className="focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                )}
              </div>

              <Separator className="bg-gradient-primary h-0.5" />

              {/* Diagnosis Button */}
              <div className="text-center">
                <Button
                  onClick={handleDiagnosis}
                  disabled={!isFormValid || isLoading}
                  className="bg-gradient-primary hover:bg-gradient-accent text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                      Analyzing Symptoms...
                    </>
                  ) : (
                    <>
                      <Stethoscope className="w-6 h-6 mr-3" />
                      Get Diagnosis
                    </>
                  )}
                </Button>

                {!isFormValid && (
                  <p className="text-sm text-gray-600 mt-3 font-medium">
                    Please select symptoms, enter your age, and specify duration
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}