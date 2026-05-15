import { Link, useLocation } from "react-router-dom"
import { menuItems } from "../../config/menu"
import { LogOut } from "lucide-react"

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 h-full border-r bg-card/50 backdrop-blur flex flex-col">

      {/* LOGO */}
      <div className="h-16 flex items-center gap-2 px-6 border-b">
        <img src="/logo-cybershield.png" className="h-8 w-auto" />
        <span className="font-semibold">CyberShield</span>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-3 text-red-400 text-sm">
          <LogOut className="h-4 w-4" />
          Déconnexion
        </button>
      </div>

    </div>
  )
}