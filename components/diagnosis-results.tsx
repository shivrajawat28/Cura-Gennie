"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, AlertTriangle, Stethoscope, Pill, Home, Shield, MapPin, Phone, Users, Sun, Bed } from "lucide-react"

interface DiagnosisResultsProps {
  diagnosisData: {
    diseases: Array<{
      id: string
      name: string
      probability: number
      severity: string
      medicines: Array<{
        name: string
        dosage: string
        frequency: string
        timing: string
      }>
      homeRemedies: string[] | string
      doctorType: string
      conclusion: string
    }>
    symptoms: string[]
    age: string
    duration: string
    vitals: {
      temperature?: string
      pulse?: string
      spo2?: string
    }
  }
  onReset: () => void
}

const hospitals = [
  {
    name: "City General Hospital",
    address: "123 Medical Center Dr, Downtown",
    contact: "+1-555-0123",
    distance: "2.3 km",
  },
  {
    name: "Emergency Care Center",
    address: "456 Health Ave, Midtown",
    contact: "+1-555-0456",
    distance: "3.1 km",
  },
  {
    name: "Regional Medical Center",
    address: "789 Care Blvd, Uptown",
    contact: "+1-555-0789",
    distance: "4.7 km",
  },
]

export default function DiagnosisResults({ diagnosisData, onReset }: DiagnosisResultsProps) {
  const { diseases, symptoms, age, duration, vitals } = diagnosisData
  const primaryDisease = diseases && diseases.length > 0 ? diseases[0] : null
  const isSevere = primaryDisease?.severity === "severe"

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return "bg-green-100 text-green-800 border-green-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "severe":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getSeverityBadgeText = (severity: string) => {
    return severity.charAt(0).toUpperCase() + severity.slice(1)
  }

  // Early return if no diseases found
  if (!diseases || diseases.length === 0) {
    return (
      <section className="py-8 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" onClick={onReset} className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                New Assessment
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">No Diagnosis Found</h1>
                <p className="text-muted-foreground">Please try selecting different symptoms</p>
              </div>
            </div>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">
                  We couldn't find a matching diagnosis for your symptoms. Please try again with different symptoms or
                  consult a healthcare professional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" onClick={onReset} className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              New Assessment
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI Diagnosis Results</h1>
              <p className="text-muted-foreground">Based on your symptoms and information provided</p>
            </div>
          </div>

          {/* Severe Warning */}
          {isSevere && (
            <Alert className="mb-6 border-destructive bg-destructive/5">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-destructive font-medium">
                <strong>Immediate Medical Attention Required:</strong> Your symptoms suggest a condition that may
                require urgent medical care. Please consult a doctor immediately.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Results Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Possible Diagnoses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    Possible Diagnoses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {diseases.map((disease, index) => (
                    <div key={disease.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-foreground">{disease.name}</span>
                          <Badge className={getSeverityColor(disease.severity)}>
                            {getSeverityBadgeText(disease.severity)}
                          </Badge>
                        </div>
                        <span className="text-sm font-medium text-primary">{disease.probability}%</span>
                      </div>
                      <Progress value={disease.probability} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommended Medicines */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-primary" />
                    Recommended Medicines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {primaryDisease?.medicines && primaryDisease.medicines.length > 0 ? (
                      primaryDisease.medicines.map((medicine, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-foreground">{medicine.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {medicine.timing}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {medicine.dosage} - {medicine.frequency}
                          </p>
                          <p className="text-sm font-medium text-primary">Take {medicine.timing}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground">
                        No specific medicines recommended. Please consult a doctor.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Home Remedies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    Home Remedies & Self Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {primaryDisease?.homeRemedies ? (
                      (Array.isArray(primaryDisease.homeRemedies)
                        ? primaryDisease.homeRemedies
                        : [primaryDisease.homeRemedies]
                      ).map((remedy, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {remedy}
                        </li>
                      ))
                    ) : (
                      <li className="text-muted-foreground">No specific home remedies available.</li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Assessment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Primary Diagnosis</Label>
                    <p className="font-medium text-foreground">{primaryDisease?.name || "No diagnosis available"}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Severity Level</Label>
                    <Badge className={getSeverityColor(primaryDisease?.severity || "mild")}>
                      {getSeverityBadgeText(primaryDisease?.severity || "mild")}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Recommended Specialist</Label>
                    <p className="font-medium text-foreground">{primaryDisease?.doctorType || "General Physician"}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Patient Info</Label>
                    <p className="text-sm text-foreground">Age: {age} years</p>
                    <p className="text-sm text-foreground">Duration: {duration}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Symptoms</Label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {symptoms.map((symptom) => (
                        <Badge key={symptom} variant="secondary" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lifestyle Advice */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Lifestyle Advice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Bed className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Rest Required</p>
                      <p className="text-sm text-muted-foreground">
                        {isSevere ? "Complete bed rest" : "Adequate rest recommended"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Sun className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Outdoor Activity</p>
                      <p className="text-sm text-muted-foreground">
                        {isSevere ? "Avoid going outside" : "Light outdoor activity is fine"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Social Contact</p>
                      <p className="text-sm text-muted-foreground">
                        {primaryDisease?.name.toLowerCase().includes("infection") ||
                        primaryDisease?.name.toLowerCase().includes("cold") ||
                        primaryDisease?.name.toLowerCase().includes("flu")
                          ? "Limit close contact with others"
                          : "Normal social interaction is safe"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Hospitals (if severe) */}
              {isSevere && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <MapPin className="w-5 h-5" />
                      Nearest Hospitals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {hospitals.map((hospital, index) => (
                      <div key={index} className="p-3 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-foreground">{hospital.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {hospital.distance}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{hospital.address}</p>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{hospital.contact}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Conclusion */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Conclusion</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
                  {primaryDisease?.conclusion ||
                    "Please consult with a healthcare professional for proper diagnosis and treatment."}
                </p>
                <div className="pt-4">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Disclaimer:</strong> This is not a medical diagnosis. Please consult a qualified doctor
                      for proper medical advice and treatment.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Label({ className, children, ...props }: { className?: string; children: React.ReactNode }) {
  return (
    <label className={`text-sm font-medium ${className}`} {...props}>
      {children}
    </label>
  )
}
