import { useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const title = useMemo(() => {
    const p = location.pathname || '/'
    if (p === '/' || p.startsWith('/dashboard')) return 'Dashboard'
    if (p.startsWith('/lokasi')) return 'Master Lokasi'
    if (p.startsWith('/user')) return 'Master User'
    if (p.startsWith('/rbac')) return 'RBAC'
    if (p.startsWith('/setting-parameter')) return 'Setting Parameter'
    if (p.startsWith('/rencana-kerja')) return 'Rencana Kerja'
    if (p.startsWith('/live-tracking')) return 'Live Tracking'
    if (p.startsWith('/report')) return 'Report'
    return 'Dashboard'
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile sidebar overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="relative h-full w-72">
          <Sidebar onNavigate={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-72">
        <Sidebar />
      </div>

      {/* Content area */}
      <div className="lg:pl-72">
        <Header onMenuClick={() => setSidebarOpen(true)} title={title} />
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
