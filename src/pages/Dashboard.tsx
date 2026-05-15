import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  ShieldCheck,
  AlertTriangle,
  Users,
  Activity,
  ArrowUpRight,
  Wifi,
  Server,
  Lock,
} from "lucide-react"

function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  trend = "neutral",
}: {
  title: string
  value: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  trend?: "up" | "down" | "neutral"
}) {
  const trendColor =
    trend === "up"
      ? "text-emerald-400"
      : trend === "down"
      ? "text-red-400"
      : "text-muted-foreground"

  return (
    <Card className="border-border/50 bg-card/50 hover:bg-card/70 transition">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardDescription className="text-xs">{title}</CardDescription>
          <CardTitle className="text-2xl mt-2">{value}</CardTitle>
        </div>

        <div className="p-2 rounded-lg bg-muted/40">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <div className={`flex items-center gap-1 text-xs ${trendColor}`}>
          {trend !== "neutral" && (
            <ArrowUpRight
              className={`h-3 w-3 ${trend === "down" ? "rotate-90" : ""}`}
            />
          )}
          {description}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">
          SOC Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Vue opérationnelle du système de sécurité en temps réel
        </p>
      </div>

      {/* KPI */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Menaces bloquées"
          value="12 847"
          description="+18% depuis hier"
          icon={ShieldCheck}
          trend="up"
        />

        <MetricCard
          title="Incidents actifs"
          value="3"
          description="2 critiques en cours"
          icon={AlertTriangle}
          trend="down"
        />

        <MetricCard
          title="Utilisateurs actifs"
          value="1 284"
          description="+4% cette semaine"
          icon={Users}
          trend="up"
        />

        <MetricCard
          title="Trafic réseau"
          value="89%"
          description="Flux global stable"
          icon={Activity}
          trend="neutral"
        />
      </div>

      {/* FLOUX / FLUX OPÉRATIONNEL */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* LIVE ACTIVITY */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle>Flux d’activité en direct</CardTitle>
            <CardDescription>
              Événements système récents et événements critiques
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {[
              { text: "Connexion VPN réussie - m.dubois", level: "ok" },
              { text: "Tentative de scan bloquée (192.168.x.x)", level: "warn" },
              { text: "Mise à jour firewall appliquée", level: "ok" },
              { text: "Échec login répété - j.doe", level: "bad" },
              { text: "Trafic anormal détecté sur port 443", level: "warn" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-border/30 pb-2"
              >
                <span className="text-sm text-muted-foreground">
                  {item.text}
                </span>

                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${
                    item.level === "ok"
                      ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
                      : item.level === "warn"
                      ? "text-yellow-300 border-yellow-500/20 bg-yellow-500/10"
                      : "text-red-400 border-red-500/20 bg-red-500/10"
                  }`}
                >
                  {item.level}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* SYSTEM STATUS */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle>État système</CardTitle>
            <CardDescription>Composants critiques</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Lock className="h-4 w-4 text-muted-foreground" />
                Auth Service
              </div>
              <span className="text-emerald-400 text-xs">OK</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Server className="h-4 w-4 text-muted-foreground" />
                Backend API
              </div>
              <span className="text-emerald-400 text-xs">OK</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Wifi className="h-4 w-4 text-muted-foreground" />
                Network
              </div>
              <span className="text-yellow-300 text-xs">DEGRADED</span>
            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  )
}