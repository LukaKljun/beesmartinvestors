"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {t("revolutionaryTech")}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                <span className="font-serif">BeeSmart</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">{t("tagline")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("heroDescription")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t("joinMission")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                {t("watchDemo")}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-foreground">30%</div>
                <div className="text-sm text-muted-foreground">{t("colonyLossPrevented")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">€90</div>
                <div className="text-sm text-muted-foreground">{t("hardwareCost")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">{t("monitoring")}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
              <img
                src="/modern-smart-beehive-with-solar-panel-and-sensors-.jpg"
                alt="BeeSmart Product"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t("liveMonitoring")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
