import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { MarketSection } from "@/components/market-section"
import { CompetitionSection } from "@/components/competition-section"
import { TeamSection } from "@/components/team-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <MarketSection />
      <CompetitionSection />
      <TeamSection />
    </main>
  )
}
