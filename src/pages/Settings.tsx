import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  Settings as SettingsIcon,
  User,
  Shield,
  Bell,
  Lock,
  Globe,
  Moon,
  Save,
} from "lucide-react"

export default function Settings() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          <SettingsIcon className="h-6 w-6 text-primary" />
          Paramètres
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Configuration du compte, sécurité et préférences système.
        </p>
      </div>

      {/* GRID SETTINGS */}
      <div className="grid gap-4 lg:grid-cols-2">

        {/* PROFIL */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profil utilisateur
            </CardTitle>
            <CardDescription>
              Informations personnelles du compte
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <input
              placeholder="Nom complet"
              className="w-full p-2 rounded-md bg-muted/40 border border-border/50 text-sm"
            />
            <input
              placeholder="Email"
              className="w-full p-2 rounded-md bg-muted/40 border border-border/50 text-sm"
            />
          </CardContent>
        </Card>

        {/* SECURITE */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Sécurité
            </CardTitle>
            <CardDescription>
              Contrôle des accès et authentification
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Double authentification
              </span>
              <button className="px-3 py-1 text-xs rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Activé
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span>Sessions actives</span>
              <span className="text-muted-foreground">3 appareils</span>
            </div>
          </CardContent>
        </Card>

        {/* NOTIFICATIONS */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Alertes système et sécurité
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 text-sm">
            <label className="flex items-center justify-between">
              Alertes critiques
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between">
              Emails de rapport
              <input type="checkbox" />
            </label>

            <label className="flex items-center justify-between">
              Notifications réseau
              <input type="checkbox" defaultChecked />
            </label>
          </CardContent>
        </Card>

        {/* PREFERENCES */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Préférences système
            </CardTitle>
            <CardDescription>
              Langue, thème et affichage
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              Langue
              <select className="bg-muted/40 border border-border/50 rounded p-1 text-xs">
                <option>Français</option>
                <option>English</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              Mode sombre
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* SAVE BUTTON */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm">
          <Save className="h-4 w-4" />
          Enregistrer les modifications
        </button>
      </div>

    </div>
  )
}