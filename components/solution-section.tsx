"use client"

import { Shield, Smartphone, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function SolutionSection() {
  const { t } = useLanguage()

  return (
    <section id="solution" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("solutionTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("solutionDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t("swarmDetectionTitle")}</h3>
              <p className="text-sm text-muted-foreground">{t("swarmDetectionDesc")}</p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t("automaticClosureTitle")}</h3>
              <p className="text-sm text-muted-foreground">{t("automaticClosureDesc")}</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-6 text-center">
              <Smartphone className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t("remoteControlTitle")}</h3>
              <p className="text-sm text-muted-foreground">{t("remoteControlDesc")}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t("solarPoweredTitle")}</h3>
              <p className="text-sm text-muted-foreground">{t("solarPoweredDesc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("howItWorksTitle")}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("continuousMonitoring")}</h4>
                    <p className="text-muted-foreground text-sm">{t("continuousMonitoringDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("swarmDetection")}</h4>
                    <p className="text-muted-foreground text-sm">{t("swarmDetectionStepDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("instantAlert")}</h4>
                    <p className="text-muted-foreground text-sm">{t("instantAlertDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("automaticResponse")}</h4>
                    <p className="text-muted-foreground text-sm">{t("automaticResponseDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <img
                src="/smart-beehive-system-diagram-showing-sensors--sola.jpg"
                alt="BeeSmart System Diagram"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
