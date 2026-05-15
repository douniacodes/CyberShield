import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react"

interface Incident {
  id: string
  title: string
  severity: "Critique" | "Élevée" | "Moyenne" | "Faible"
  status: "Ouvert" | "En cours" | "Résolu"
  target: string
  time: string
}

const incidents: Incident[] = [
  {
    id: "INC-1042",
    title: "Tentative d’intrusion mail gateway",
    severity: "Critique",
    status: "En cours",
    target: "mail-gateway.eu",
    time: "4 min",
  },
  {
    id: "INC-1041",
    title: "Authentification suspecte détectée",
    severity: "Élevée",
    status: "Ouvert",
    target: "auth-service",
    time: "12 min",
  },
  {
    id: "INC-1040",
    title: "Pic de trafic VPN",
    severity: "Moyenne",
    status: "Résolu",
    target: "vpn-cluster",
    time: "1 h",
  },
  {
    id: "INC-1039",
    title: "Scan de ports bloqué",
    severity: "Faible",
    status: "Résolu",
    target: "cdn-edge",
    time: "2 h",
  },
]

function SeverityBadge({ severity }: { severity: Incident["severity"] }) {
  const styles = {
    Critique: "text-red-400 bg-red-500/10 border-red-500/30",
    Élevée: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    Moyenne: "text-yellow-300 bg-yellow-500/10 border-yellow-500/30",
    Faible: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  }

  return (
    <span className={`text-xs px-2 py-0.5 rounded border ${styles[severity]}`}>
      {severity}
    </span>
  )
}

function StatusBadge({ status }: { status: Incident["status"] }) {
  const styles = {
    Ouvert: "text-red-400",
    "En cours": "text-yellow-400",
    Résolu: "text-emerald-400",
  }

  const icon =
    status === "Résolu" ? (
      <CheckCircle2 className="h-3 w-3" />
    ) : (
      <AlertTriangle className="h-3 w-3" />
    )

  return (
    <span className={`flex items-center gap-1 text-xs ${styles[status]}`}>
      {icon}
      {status}
    </span>
  )
}

export default function Incidents() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 text-red-400" />
          Incidents de sécurité
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Surveillance et gestion des événements critiques détectés sur l’infrastructure.
        </p>
      </div>

      {/* KPI RAPIDES */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardDescription>Incidents ouverts</CardDescription>
            <CardTitle>6</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardDescription>En cours de traitement</CardDescription>
            <CardTitle>3</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardDescription>Résolus (24h)</CardDescription>
            <CardTitle className="text-emerald-400">14</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* LISTE INCIDENTS */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Liste des incidents</CardTitle>
          <CardDescription>
            Derniers événements détectés par le système de sécurité
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {incidents.map((inc) => (
            <div
              key={inc.id}
              className="flex flex-col md:flex-row md:items-center justify-between border-b border-border/30 pb-4 gap-2"
            >

              {/* LEFT */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    {inc.id}
                  </span>
                  <SeverityBadge severity={inc.severity} />
                </div>

                <p className="font-medium">{inc.title}</p>

                <div className="text-xs text-muted-foreground flex gap-3">
                  <span>Cible: {inc.target}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {inc.time}
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3 md:flex-col md:items-end">
                <StatusBadge status={inc.status} />
              </div>

            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  )
}