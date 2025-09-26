"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant={language === "sl" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("sl")}
        className="h-8 px-2 text-xs"
      >
        SL
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 px-2 text-xs"
      >
        EN
      </Button>
    </div>
  )
}
