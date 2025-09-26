"use client"

import { AlertTriangle, TrendingDown, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function ProblemSection() {
  const { t } = useLanguage()

  return (
    <section id="problem" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("problemTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("problemSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("colonyLossTitle")}</h3>
              <p className="text-muted-foreground">{t("colonyLossDesc")}</p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <TrendingDown className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("inefficientTitle")}</h3>
              <p className="text-muted-foreground">{t("inefficientDesc")}</p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("lateDetectionTitle")}</h3>
              <p className="text-muted-foreground">{t("lateDetectionDesc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t("economicImpactTitle")}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  {t("economicLoss1")}
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  {t("economicLoss2")}
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  {t("economicLoss3")}
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  {t("economicLoss4")}
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-destructive mb-2">€2.4B</div>
                <div className="text-sm text-muted-foreground mb-4">{t("annualLossesEU")}</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-destructive h-2 rounded-full w-[30%]"></div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">30% {t("coloniesLostAnnually")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
