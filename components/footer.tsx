import { Heart, Shield, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-25 h-25">
                <Image
                  src= "/AI DOCTOR.png"
                  alt="AI DOCTOR LOGO"
                  width={100}
                  height={100}  
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">CURA GENNIE</h3>
                <p className="text-sm text-muted-foreground">Your Health Buddy</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Empowering you with AI-powered health insights and medical guidance for better healthcare decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Symptom Checker
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Medicine Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Find Hospitals
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Health Precautions
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Emergency</h4>
            <Card className="bg-card border-destructive/20 shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-destructive" />
                  <span className="font-semibold text-destructive">Emergency: SOS</span>
                </div>
                <p className="text-xs text-card-foreground/70">
                  For life-threatening emergencies, call emergency services immediately.
                </p>
              </CardContent>
            </Card>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>yourshomesupport@consult.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>24/7 AI Support</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Disclaimer and Copyright */}
        <div className="space-y-4">
          {/* Medical Disclaimer */}
          <Card className="bg-card border-border shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-card-foreground mb-2">Important Medical Disclaimer</h5>
                  <p className="text-sm text-card-foreground/80 text-pretty">
                    <strong>This is not a medical diagnosis.</strong> The information provided by AI Doctor is for
                    educational and informational purposes only. It should not be used as a substitute for professional
                    medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for proper
                    medical evaluation and treatment of any health concerns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 AI Doctor. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Made by Code Vaidya</span>
              <Heart className="w-4 h-4 text-secondary" />
              <span>for better healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

