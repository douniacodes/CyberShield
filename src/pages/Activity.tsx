import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

import {
  CheckCircle2,
  AlertCircle,
  Info,
  Filter,
} from "lucide-react"

// --- DATA ---
interface LogActivity {
  id: string
  timestamp: string
  type: "Authentification" | "Réseau" | "Système"
  description: string
  user: string
  ip: string
  status: "Succès" | "Échec" | "Alerte"
}

const activities: LogActivity[] = [
  { id: "LOG-9021", timestamp: "15:42:01", type: "Authentification", description: "Connexion VPN", user: "m.dubois", ip: "193.56.22.12", status: "Succès" },
  { id: "LOG-9020", timestamp: "15:40:15", type: "Réseau", description: "Trafic anormal détecté", user: "Système", ip: "10.0.4.120", status: "Alerte" },
]

function StatusBadge({ status }: { status: LogActivity["status"] }) {
  const styles = {
    Succès: "text-emerald-400",
    Échec: "text-red-400",
    Alerte: "text-yellow-300",
  }

  const icon =
    status === "Succès" ? <CheckCircle2 className="h-4 w-4" /> :
    status === "Échec" ? <AlertCircle className="h-4 w-4" /> :
    <Info className="h-4 w-4" />

  return (
    <span className={`flex items-center gap-1 ${styles[status]}`}>
      {icon}
      {status}
    </span>
  )
}

export default function Activity() {
  const [filter, setFilter] = useState("Tous")

  const filtered =
    filter === "Tous"
      ? activities
      : activities.filter((a) => a.type === filter)

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Activité système</h1>
        <p className="text-sm text-muted-foreground">
          Logs en temps réel
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex gap-2 flex-wrap">
        {["Tous", "Authentification", "Réseau", "Système"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded text-xs border ${
              filter === f ? "bg-primary text-white" : ""
            }`}
          >
            <Filter className="inline h-3 w-3 mr-1" />
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <Card>
        <CardHeader>
          <CardTitle>Logs</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Heure</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>User</TableHead>
                <TableHead>IP</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a.id}</TableCell>
                  <TableCell>{a.timestamp}</TableCell>
                  <TableCell>{a.type}</TableCell>
                  <TableCell>{a.description}</TableCell>
                  <TableCell>{a.user}</TableCell>
                  <TableCell>{a.ip}</TableCell>
                  <TableCell>
                    <StatusBadge status={a.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </CardContent>
      </Card>

    </div>
  )
}