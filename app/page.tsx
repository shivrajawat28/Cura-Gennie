import Header from "@/components/header"
import MedicalSlideshow from "@/components/medical-slideshow"
import SymptomChecker from "@/components/symptom-checker"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section>
          <MedicalSlideshow />
        </section>
        <section>
          <SymptomChecker />
        </section>
      </main>
      <Footer />
    </div>
  )
}
