import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/Sidebar"

export default function AppLayout() {
  return (
    <div className="min-h-screen flex">
      <div className="w-64 border-r">
        <Sidebar />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}