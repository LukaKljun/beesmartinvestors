"use client"

import { Thermometer, Droplets, Weight, History, DollarSign, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("featuresTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("featuresDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Thermometer className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{t("temperatureMonitoring")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t("temperatureMonitoringDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                <Droplets className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-lg">{t("humidityControl")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t("humidityControlDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                <Weight className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">{t("weightTracking")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t("weightTrackingDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <History className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{t("historicalData")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t("historicalDataDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-lg">{t("affordableSolution")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t("affordableSolutionDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">{t("mobileAppIntegration")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t("mobileAppIntegrationDesc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-8">{t("keyBenefitsTitle")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">{t("swarmPreventionRate")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50%</div>
              <div className="text-sm text-muted-foreground">{t("reducedLaborTime")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">{t("continuousMonitoringBenefit")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">ROI</div>
              <div className="text-sm text-muted-foreground">{t("roiPayback")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
