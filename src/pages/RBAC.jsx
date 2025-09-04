import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Panel from '../components/Panel'
import { roles as seedRoles } from '../assets/data/rbac'
import { Info, Pencil, Trash2, Plus } from 'lucide-react'

function RBAC() {
  const navigate = useNavigate()
  const [q, setQ] = useState('')

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase()
    return seedRoles.filter((r) => (s ? r.name.toLowerCase().includes(s) : true))
  }, [q])

  return (
    <div className="space-y-4">
      <Panel title="Filter">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-600">Role</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari role..."
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="flex items-end">
            <button className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600">Search</button>
          </div>
        </div>
      </Panel>

      <Panel
        title="Management Role Akses"
        actions={
          <button
            onClick={() => navigate('/rbac/new')}
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            <Plus size={16} /> Tambah Role
          </button>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead>
              <tr className="bg-emerald-700 text-left text-white">
                <th className="px-3 py-2">No</th>
                <th className="px-3 py-2">Nama Role</th>
                <th className="px-3 py-2">Date Modified</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {rows.map((r, idx) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="px-3 py-2">{idx + 1}</td>
                  <td className="px-3 py-2">{r.name}</td>
                  <td className="px-3 py-2">{r.modified}</td>
                  <td className="px-3 py-2">
                    <button className="text-emerald-700 hover:underline">{r.status}</button>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <button title="Detail" className="rounded-md bg-orange-500 p-1.5 text-white hover:bg-orange-600" onClick={() => navigate(`/rbac/${r.id}`)}>
                        <Info size={16} />
                      </button>
                      <button title="Edit" className="rounded-md bg-emerald-600 p-1.5 text-white hover:bg-emerald-700" onClick={() => navigate(`/rbac/${r.id}`)}>
                        <Pencil size={16} />
                      </button>
                      <button title="Hapus" className="rounded-md bg-rose-600 p-1.5 text-white hover:bg-rose-700" onClick={() => alert('Hapus (dummy)')}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-center text-slate-500">Tidak ada data.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

export default RBAC

