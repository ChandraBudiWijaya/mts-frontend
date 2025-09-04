import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  MapPin,
  Users,
  ShieldCheck,
  Settings,
  ClipboardList,
  Route,
  LogOut,
} from 'lucide-react'

const navGroups = [
  {
    title: 'Dashboard',
    items: [
      { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Master Data',
    items: [
      { to: '/lokasi', label: 'Lokasi', icon: MapPin },
      { to: '/user', label: 'User', icon: Users },
      { to: '/rbac', label: 'RBAC', icon: ShieldCheck },
      { to: '/setting-parameter', label: 'Setting Parameter', icon: Settings },
    ],
  },
  {
    title: 'Rencana Kerja',
    items: [
      { to: '/rencana-kerja', label: 'Rencana Kerja', icon: ClipboardList },
    ],
  },
  {
    title: 'Live Tracking',
    items: [
      { to: '/live-tracking', label: 'Live Tracking', icon: Route },
    ],
  },
  {
    title: 'Account',
    items: [
      { to: '/logout', label: 'Sign Out', icon: LogOut },
    ],
  },
]

function Sidebar({ onNavigate }) {
  const linkBase =
    'flex items-center gap-3 px-4 py-2.5 text-white rounded-lg transition-colors'
  const linkActive = 'bg-white/20 text-white'
  const linkHover = 'hover:bg-white/10'

  return (
    <aside className="flex h-full w-72 flex-col bg-[#1e8e3e] text-white">
      <div className="flex items-center gap-2 px-4 py-4 bg-[#1e8e3e] text-white">
        <div className="h-8 w-8 rounded-md bg-white/20 flex items-center justify-center font-bold">
          M
        </div>
        <div className="font-semibold tracking-wide">Mandor Tracking System</div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto p-4">
        {navGroups.map((group) => (
          <div key={group.title}>
              <div className="px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-white/70">
              {group.title}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      [linkBase, linkHover, isActive ? linkActive : ''].join(' ')
                    }
                    onClick={onNavigate}
                  >
                    <Icon className="h-5 w-5 text-white" />
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-4 py-3 text-xs text-white/60">
        v0.1.0
      </div>
    </aside>
  )
}

export default Sidebar
