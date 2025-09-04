import { useEffect, useState } from 'react'
import { User } from 'lucide-react'

function Header({ onMenuClick, title = 'Dashboard' }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const dayStr = now.toLocaleDateString(undefined, {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  const timeStr = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now)

  return (
    <header className="sticky top-0 z-[1100] border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 lg:hidden"
            aria-label="Open sidebar"
            onClick={onMenuClick}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <h1 className="text-base font-semibold text-slate-900 sm:text-lg">{title}</h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Tanggal Hari Ini :
            </div>
            <div className="-mt-0.5 text-sm font-bold text-slate-800">
              {dayStr} • {timeStr}
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-800">
            <User className="h-5 w-5" />
            <span className="text-sm font-semibold">Hi, Budiono</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
