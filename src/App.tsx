import { Toaster } from "sonner"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayout from "./layouts/AppLayout"

import Dashboard from "./pages/Dashboard"
import Activity from "./pages/Activity"
import Incidents from "./pages/Incidents"
import Users from "./pages/Users"
import Settings from "./pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />

      <Routes>
        {/* Layout global */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App