"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, MapPin, Target } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MarketSection() {
  const { t } = useLanguage()

  return (
    <section id="market" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("marketOpportunityTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("marketDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="text-center pb-4">
              <Globe className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>{t("globalMarketTitle")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{t("globalMarketSize")}</div>
              <p className="text-muted-foreground text-sm">{t("globalMarketDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center pb-4">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-2" />
              <CardTitle>{t("europeanUnionTitle")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">{t("euMarketSize")}</div>
              <p className="text-muted-foreground text-sm">{t("euMarketDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center pb-4">
              <Target className="h-12 w-12 text-accent mx-auto mb-2" />
              <CardTitle>{t("sloveniaTitle")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{t("sloveniaMarketSize")}</div>
              <p className="text-muted-foreground text-sm">{t("sloveniaMarketDesc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-8">{t("businessModelTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏭</span>
              </div>
              <h4 className="text-xl font-semibold">{t("hardwareTitle")}</h4>
              <div className="text-3xl font-bold text-primary">{t("hardwarePrice")}</div>
              <p className="text-muted-foreground text-sm">{t("hardwareDescription")}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {t("hardwareFeatures")
                  .split("\\n")
                  .map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
              </ul>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold">{t("basicSubscriptionTitle")}</h4>
              <div className="text-3xl font-bold text-secondary">{t("basicSubscriptionPrice")}</div>
              <p className="text-muted-foreground text-sm">{t("basicSubscriptionDescription")}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {t("basicFeatures")
                  .split("\\n")
                  .map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
              </ul>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold">{t("proSubscriptionTitle")}</h4>
              <div className="text-3xl font-bold text-accent">{t("proSubscriptionPrice")}</div>
              <p className="text-muted-foreground text-sm">{t("proSubscriptionDescription")}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {t("proFeatures")
                  .split("\\n")
                  .map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">{t("additionalRevenueTitle")}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{t("additionalRevenue1")}</li>
                  <li>{t("additionalRevenue2")}</li>
                  <li>{t("additionalRevenue3")}</li>
                  <li>{t("additionalRevenue4")}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">{t("marketPenetrationTitle")}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{t("marketPenetration1")}</li>
                  <li>{t("marketPenetration2")}</li>
                  <li>{t("marketPenetration3")}</li>
                  <li>{t("marketPenetration4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
