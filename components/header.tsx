"use client"

import { useState } from "react"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, MapPin, Shield, Pill } from "lucide-react"

const medicines = [
  {
    name: "Paracetamol",
    disease: "Fever",
    description: "Take 500mg every 6 hours after food. Maximum 4 doses per day.",
    frequency: "4 times daily",
  },
  {
    name: "ORS Solution",
    disease: "Diarrhea",
    description: "Mix 1 packet in 1 liter clean water. Drink frequently throughout the day.",
    frequency: "As needed",
  },
  {
    name: "Chloroquine",
    disease: "Malaria",
    description: "Take as prescribed by doctor. Complete full course even if feeling better.",
    frequency: "As prescribed",
  },
  {
    name: "Azithromycin",
    disease: "Typhoid",
    description: "Take 500mg once daily before food for 7 days.",
    frequency: "Once daily",
  },
]

const hospitals = [
  {
    name: "ITS DENTAL HOSPITAL",
    contact: "+91 07035670356",
    address: "ARJUN HOSTEL K BAGAL MEI",
    specialty: "General Medicine",
  },
  {
    name: "SHARDA HOSPITAL",
    contact: "+1-555-0456",
    address: "456 Cardio Ave, Midtown",
    specialty: "Cardiology",
  },
  {
    name: "KAILASH HOSPITAL, GREATER NOIDA",
    contact: "+1-555-0789",
    address: "789 Pediatric Blvd, Uptown",
    specialty: "Pediatrics",
  },
]

export default function Header() {
  const [location, setLocation] = useState("")
  const [doctorType, setDoctorType] = useState("")

  return (
    <header className="bg-primary border-b border-border/20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and App Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/AI DOCTOR.png"
              alt="AI Doctor Logo"
              width={120}
              height={120}
              className="flex-shrink-0 w-[120px] h-[120px]" 
            />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">CURA GENNIE</h1>
              <p className="text-sm text-primary-foreground/90">Your Health Buddy</p>
            </div>
          </div> 

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all duration-200"
                >
                  <Pill className="w-5 h-5" />
                  Medicine
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                <div className="p-4">
                  <h3 className="font-semibold mb-3 text-foreground">Common Medicines</h3>
                  <div className="space-y-3">
                    {medicines.map((medicine, index) => (
                      <Card
                        key={index}
                        className="p-3 hover:shadow-md transition-all duration-200 border-l-4 border-l-primary"
                      >
                        <CardContent className="p-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-foreground">{medicine.name}</h4>
                            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                              {medicine.disease}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{medicine.description}</p>
                          <p className="text-xs text-accent font-medium">Frequency: {medicine.frequency}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all duration-200"
                >
                  <Shield className="w-5 h-5" />
                  Precaution
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                <div className="p-4">
                  <h3 className="font-semibold mb-3 text-foreground">Daily Health Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg border border-primary/20">
                      <span className="text-sm text-foreground font-medium">Air Quality Index</span>
                      <span className="text-sm font-bold text-primary">Good (99)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg border border-destructive/20">
                      <span className="text-sm text-foreground font-medium">UV Index</span>
                      <span className="text-sm font-bold text-destructive">Weak (4)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg border border-secondary/20">
                      <span className="text-sm text-foreground font-medium">Temperature</span>
                      <span className="text-sm font-bold text-secondary">30°C</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all duration-200"
                >
                  <MapPin className="w-5 h-5" />
                  Hospitals
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                <div className="p-4">
                  <h3 className="font-semibold mb-3 text-foreground">Find Nearby Hospitals</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <Label htmlFor="location" className="text-sm text-foreground">
                        Your Location
                      </Label>
                      <Input
                        id="location"
                        placeholder="Enter your city or area"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-1 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="doctor-type" className="text-sm text-foreground">
                        Doctor Type
                      </Label>
                      <Select value={doctorType} onValueChange={setDoctorType}>
                        <SelectTrigger className="mt-1 focus:ring-2 focus:ring-primary">
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Physician</SelectItem>
                          <SelectItem value="cardiology">Cardiologist</SelectItem>
                          <SelectItem value="pediatrics">Pediatrician</SelectItem>
                          <SelectItem value="orthopedics">Orthopedic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Login/Signup Button */}
          <Button className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold px-6 py-2 transition-all duration-200 hover:scale-105">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
