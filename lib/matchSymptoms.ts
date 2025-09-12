import { diseaseData } from "@/data/diseaseData"

export function matchSymptoms(userSymptoms: string[]) {
  // Return error message if no symptoms provided
  if (!userSymptoms || userSymptoms.length === 0) {
    return {
      possibleDiagnoses: [],
      recommendedMedicines: "No matching disease found. Please consult a doctor.",
      homeRemedies: [],
      precautions: [],
      specialist: "",
    }
  }

  const matches = diseaseData.map((entry) => {
    const matchedCount = entry.symptoms.filter((sym) =>
      userSymptoms.some((userSym) => userSym.toLowerCase().includes(sym.toLowerCase())),
    ).length

    const score = matchedCount / entry.symptoms.length

    return { ...entry, matchScore: score }
  })

  const filtered = matches.filter((m) => m.matchScore > 0)

  if (filtered.length === 0) {
    return {
      possibleDiagnoses: [],
      recommendedMedicines: "No matching disease found. Please consult a doctor.",
      homeRemedies: [],
      precautions: [],
      specialist: "",
    }
  }

  const topMatches = filtered.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3)

  const possibleDiagnoses = topMatches.map((match) => ({
    name: match.disease,
    probability: `${Math.round(match.matchScore * 100)}%`,
  }))

  // Use data from the top match for medicines, remedies, etc.
  const primaryMatch = topMatches[0]

  return {
    possibleDiagnoses,
    recommendedMedicines: primaryMatch.medicines,
    homeRemedies: Array.isArray(primaryMatch.homeRemedies) ? primaryMatch.homeRemedies : [primaryMatch.homeRemedies],
    precautions: Array.isArray(primaryMatch.precautions) ? primaryMatch.precautions : [primaryMatch.precautions],
    specialist: primaryMatch.specialist,
  }
}
