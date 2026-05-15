import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  Users as UsersIcon,
  Shield,
  UserCheck,
  UserX,
  Mail,
} from "lucide-react"

interface User {
  id: string
  name: string
  role: "Admin" | "Analyste" | "Viewer"
  status: "Actif" | "Suspendu"
  email: string
  lastLogin: string
}

const users: User[] = [
  {
    id: "USR-001",
    name: "Jean Dupont",
    role: "Admin",
    status: "Actif",
    email: "jean@cybershield.io",
    lastLogin: "il y a 2 min",
  },
  {
    id: "USR-002",
    name: "Marie Dubois",
    role: "Analyste",
    status: "Actif",
    email: "marie@cybershield.io",
    lastLogin: "il y a 1 h",
  },
  {
    id: "USR-003",
    name: "Alex Martin",
    role: "Viewer",
    status: "Suspendu",
    email: "alex@cybershield.io",
    lastLogin: "hier",
  },
]

function StatusBadge({ status }: { status: User["status"] }) {
  const styles = {
    Actif: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    Suspendu: "text-red-400 bg-red-500/10 border-red-500/30",
  }

  const icon =
    status === "Actif" ? (
      <UserCheck className="h-3 w-3" />
    ) : (
      <UserX className="h-3 w-3" />
    )

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border ${styles[status]}`}
    >
      {icon}
      {status}
    </span>
  )
}

function RoleBadge({ role }: { role: User["role"] }) {
  const styles = {
    Admin: "text-red-300 bg-red-500/10 border-red-500/20",
    Analyste: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
    Viewer: "text-muted-foreground bg-muted/30 border-border",
  }

  const icon =
    role === "Admin" ? (
      <Shield className="h-3 w-3" />
    ) : (
      <UsersIcon className="h-3 w-3" />
    )

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border ${styles[role]}`}
    >
      {icon}
      {role}
    </span>
  )
}

export default function Users() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          <UsersIcon className="h-6 w-6 text-primary" />
          Utilisateurs
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Gestion des comptes et des niveaux d’accès au système SOC.
        </p>
      </div>

      {/* KPI */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardDescription>Utilisateurs actifs</CardDescription>
            <CardTitle>24</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardDescription>Admins</CardDescription>
            <CardTitle className="text-red-400">3</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardDescription>Comptes suspendus</CardDescription>
            <CardTitle className="text-yellow-400">2</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* LISTE USERS */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Liste des utilisateurs</CardTitle>
          <CardDescription>
            Comptes enregistrés dans la plateforme de surveillance
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">

          {users.map((u) => (
            <div
              key={u.id}
              className="flex flex-col md:flex-row md:items-center justify-between border-b border-border/30 pb-4 gap-3"
            >

              {/* LEFT */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    {u.id}
                  </span>
                  <RoleBadge role={u.role} />
                  <StatusBadge status={u.status} />
                </div>

                <p className="font-medium">{u.name}</p>

                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  {u.email}
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-xs text-muted-foreground md:text-right">
                Dernière connexion : {u.lastLogin}
              </div>

            </div>
          ))}

        </CardContent>
      </Card>

    </div>
  )
}