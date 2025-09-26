"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, QrCode, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("teamExpertiseTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("teamDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("hardwareEngineeringTitle")}</h3>
              <p className="text-muted-foreground text-sm">{t("hardwareEngineeringDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("softwareDevelopmentTitle")}</h3>
              <p className="text-muted-foreground text-sm">{t("softwareDevelopmentDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("agroTechnologyTitle")}</h3>
              <p className="text-muted-foreground text-sm">{t("agroTechnologyDesc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("joinUsToSaveTitle")}</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("joinUsToSaveDesc")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t("scheduleMeeting")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-transparent">
              {t("downloadPitchDeck")}
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">{t("contactInformationTitle")}</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">info@beesmart.tech</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+94 77 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">🌐</span>
                    <span className="text-muted-foreground">www.beesmart.tech</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">{t("demoAccessTitle")}</h4>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-muted-foreground text-sm mb-2">{t("scanQRCode")}</p>
                    <p className="text-xs text-muted-foreground">{t("experienceBeeSmart")}</p>
                  </div>
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <QrCode className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">€75K</div>
                <div className="text-sm text-muted-foreground">{t("seekingInvestment")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">18 months</div>
                <div className="text-sm text-muted-foreground">{t("timeToMarket")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">5K</div>
                <div className="text-sm text-muted-foreground">{t("targetCustomersY1")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4x</div>
                <div className="text-sm text-muted-foreground">{t("projectedROI")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
