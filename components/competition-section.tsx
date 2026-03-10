"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CompetitionSection() {
  const { t } = useLanguage()

  return (
    <section id="competition" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("competitiveAnalysisTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("competitiveDescription")}</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full bg-card rounded-2xl border border-border">
            <div className="grid grid-cols-5 gap-4 p-6 border-b border-border font-semibold">
              <div>{t("featuresColumn")}</div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>BeeSmart</span>
                </div>
              </div>
              <div className="text-center">BeeHero</div>
              <div className="text-center">Beewise</div>
              <div className="text-center">Arnia</div>
            </div>

            <div className="divide-y divide-border">
              <div className="grid grid-cols-5 gap-4 p-4 items-center">
                <div className="font-medium">{t("swarmDetectionFeature")}</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <X className="h-5 w-5 text-destructive mx-auto" />
                </div>
                <div className="text-center">
                  <X className="h-5 w-5 text-destructive mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-4 items-center">
                <div className="font-medium">{t("automaticIntervention")}</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <X className="h-5 w-5 text-destructive mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <X className="h-5 w-5 text-destructive mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-4 items-center">
                <div className="font-medium">{t("solarPowered")}</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <X className="h-5 w-5 text-destructive mx-auto" />
                </div>
                <div className="text-center">
                  <X className="h-5 w-5 text-destructive mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-4 items-center">
                <div className="font-medium">{t("affordablePrice")}</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <X className="h-5 w-5 text-destructive mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-4 items-center">
                <div className="font-medium">{t("mobileApp")}</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-4 items-center bg-primary/5">
                <div className="font-medium">{t("priceRange")}</div>
                <div className="text-center font-bold text-primary">€300</div>
                <div className="text-center">€200-300</div>
                <div className="text-center">€2000+</div>
                <div className="text-center">€400-600</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span>{t("beeSmartAdvantagesTitle")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>{t("beeSmartAdvantage1")}</li>
                <li>{t("beeSmartAdvantage2")}</li>
                <li>{t("beeSmartAdvantage3")}</li>
                <li>{t("beeSmartAdvantage4")}</li>
                <li>{t("beeSmartAdvantage5")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("marketPositioningTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t("marketPositioning1")}</li>
                <li>{t("marketPositioning2")}</li>
                <li>{t("marketPositioning3")}</li>
                <li>{t("marketPositioning4")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("competitiveStrategyTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t("competitiveStrategy1")}</li>
                <li>{t("competitiveStrategy2")}</li>
                <li>{t("competitiveStrategy3")}</li>
                <li>{t("competitiveStrategy4")}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
