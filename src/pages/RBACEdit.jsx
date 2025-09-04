import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Panel from '../components/Panel'
import { modules, getRole } from '../assets/data/rbac'

function RBACEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const base = useMemo(() => (id ? getRole(id) : null), [id])

  const [roleName, setRoleName] = useState(base?.name || '')
  const [perms, setPerms] = useState(() => {
    const p = base?.permissions || {}
    const copy = {}
    modules.forEach((m) => {
      copy[m.key] = new Set(p[m.key] || [])
    })
    return copy
  })

  const toggle = (modKey, action) => {
    setPerms((prev) => {
      const next = { ...prev }
      const set = new Set(next[modKey])
      if (set.has(action)) set.delete(action)
      else set.add(action)
      next[modKey] = set
      return next
    })
  }

  const toggleAll = (modKey, actions) => {
    setPerms((prev) => {
      const next = { ...prev }
      const set = new Set(next[modKey])
      const allChecked = actions.every((a) => set.has(a))
      if (allChecked) actions.forEach((a) => set.delete(a))
      else actions.forEach((a) => set.add(a))
      next[modKey] = set
      return next
    })
  }

  const onSave = () => {
    // gather plain object
    const result = {}
    modules.forEach((m) => (result[m.key] = Array.from(perms[m.key] || [])))
    alert('Simpan (dummy) role: ' + roleName + '\n' + JSON.stringify(result, null, 2))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-md bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Kembali ke List
        </button>
        <div className="text-sm text-slate-500">{id ? 'Edit Role' : 'Tambah Role'}</div>
      </div>

      <Panel title="Role & Permissions">
        <div className="mb-4 max-w-md">
          <label className="mb-1 block text-xs font-medium text-slate-600">Nama Role</label>
          <input
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="cth: Admin"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {modules.map((m) => {
            const actions = m.actions
            const set = perms[m.key] || new Set()
            return (
              <div key={m.key} className="rounded-md border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2">
                  <div className="text-sm font-semibold text-slate-800">{m.label}</div>
                  <button
                    className="text-xs font-medium text-sky-700 hover:underline"
                    onClick={() => toggleAll(m.key, actions)}
                  >
                    Toggle All
                  </button>
                </div>
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {actions.map((a) => (
                      <label key={a} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={set.has(a)}
                          onChange={() => toggle(m.key, a)}
                          className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="capitalize">{a.replace('_', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button onClick={() => navigate(-1)} className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">Batal</button>
          <button onClick={onSave} className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Simpan</button>
        </div>
      </Panel>
    </div>
  )
}

export default RBACEdit

