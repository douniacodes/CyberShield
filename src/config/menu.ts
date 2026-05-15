import {
  LayoutDashboard,
  ShieldAlert,
  Activity,
  Settings,
  Users,
} from "lucide-react"

export const menuItems = [
  {
    name: "Vue d'ensemble",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Incidents",
    path: "/incidents",
    icon: ShieldAlert,
  },
  {
    name: "Activité",
    path: "/activity",
    icon: Activity,
  },
  {
    name: "Utilisateurs",
    path: "/users",
    icon: Users,
  },
  {
    name: "Paramètres",
    path: "/settings",
    icon: Settings,
  },
]