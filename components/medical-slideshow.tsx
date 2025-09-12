"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/placeholder-gqu8m.png",
    title: "How Powerful is AI in diagnosis?",
    description:
      "Discover how artificial intelligence is enhancing diagnostic accuracy and helping doctors make faster, more informed decisions.",
    category: "Medical Technology",
  },
  {
    id: 2,
    image: "/placeholder-7vwhp.png",
    title: "Beyond the Fizz",
    description:
      "A daily cold drink seems harmless, but what does a year-long habit do to your body? This article explores the cascading health effects, from dramatic weight gain and dental erosion to the increased risk of chronic diseases like type 2 diabetes and fatty liver disease.",
    category: "Health & Nutrition",
  },
  {
    id: 3,
    image: "/placeholder-0cm2f.png",
    title: "MedTech Revolution",
    description:
      "Explore the groundbreaking advancements and innovative technologies that are transforming diagnostics, treatment, and patient care, ushering in a new era of healthcare.",
    category: "Healthcare & Innovation",
  },
  {
    id: 4,
    image: "/placeholder-p510h.png",
    title: "Telemedicine Revolution",
    description:
      "Explore how remote healthcare consultations are making medical care more accessible and convenient for patients worldwide.",
    category: "Digital Health",
  },
  {
    id: 5,
    image: "/placeholder-855s3.png",
    title: "Tiny Threat, Big Impact",
    description:
      "Delve into the fascinating world of mosquitoes, identifying the most common types and the specific, often deadly, diseases they carry. Learn how these small insects pose a massive global health challenge.",
    category: "Public Health & Entomology",
  },
  {
    id: 6,
    image: "/placeholder-wsncj.png",
    title: "The Nightly Reset",
    description:
      "Uncover the vital role that quality sleep plays in our physical and mental health. This article delves into how sleep impacts everything from brain function and mood to immune response and chronic disease prevention.",
    category: "Health & Wellness",
  },
]

export default function MedicalSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Latest in Healthcare</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest medical insights, research breakthroughs, and healthcare innovations
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-card border-border">
            <CardContent className="p-0">
              <div className="relative">
                {/* Main Slide Image */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <img
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Slide Content Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                  >
                    <div className="max-w-2xl">
                      <span
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-3"
                        style={{ backgroundColor: "#90EE91", color: "#1f2937" }}
                      >
                        {slides[currentSlide].category}
                      </span>
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-3 text-balance"
                        style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                      >
                        {slides[currentSlide].title}
                      </h3>
                      <p
                        className="mb-4 text-pretty leading-relaxed"
                        style={{ color: "#ffffff", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                      >
                        {slides[currentSlide].description}
                      </p>
                      <Button className="font-semibold" style={{ backgroundColor: "#90EE91", color: "#1f2937" }}>
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="bg-white/90 hover:bg-white border-white/20 text-foreground"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="bg-white/90 hover:bg-white border-white/20 text-foreground"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Play/Pause Control */}
                <div className="absolute top-4 right-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/90 hover:bg-white border-white/20 text-foreground"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="hidden md:flex gap-4 mt-8 justify-center">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentSlide ? "scale-105" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Card className="overflow-hidden w-24 h-16">
                  <CardContent className="p-0">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {index === currentSlide && <div className="absolute inset-0 border-2 border-primary rounded-lg" />}
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
