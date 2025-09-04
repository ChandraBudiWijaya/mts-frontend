import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Panel from '../components/Panel'
import { users as seedUsers, fullName } from '../assets/data/users'
import { Info, Pencil, Trash2, Plus } from 'lucide-react'

function User() {
  const navigate = useNavigate()
  const [pg, setPg] = useState('PG1')
  const [wilayah, setWilayah] = useState('W01')
  const [q, setQ] = useState('')

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase()
    return seedUsers.filter((u) => {
      const f1 = pg ? u.pg === pg : true
      const f2 = wilayah ? u.wilayah.toLowerCase().includes(wilayah.toLowerCase()) : true
      const f3 = s ? [fullName(u), u.username].some((v) => String(v).toLowerCase().includes(s)) : true
      return f1 && f2 && f3
    })
  }, [pg, wilayah, q])

  return (
    <div className="space-y-4">
      {/* Header action row with back area + add button reflected in mockup */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">Master User</div>
        <button
          onClick={() => navigate('/user/new')}
          className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Plus size={16} /> Tambah User
        </button>
      </div>

      <Panel title="Filter">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">Plantation Group</label>
            <select
              value={pg}
              onChange={(e) => setPg(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option>PG1</option>
              <option>PG2</option>
              <option>PG3</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">Wilayah</label>
            <input
              value={wilayah}
              onChange={(e) => setWilayah(e.target.value)}
              placeholder="W01"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-600">Nama / Username</label>
            <div className="flex items-center gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari..."
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <button
                type="button"
                className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </Panel>

      <Panel title="Master User">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead>
              <tr className="bg-emerald-700 text-left text-white">
                <th className="px-3 py-2">No</th>
                <th className="px-3 py-2">Nama</th>
                <th className="px-3 py-2">PG</th>
                <th className="px-3 py-2">Role</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {rows.map((u, idx) => (
                <tr key={u.id} className="hover:bg-slate-50">
                  <td className="px-3 py-2">{idx + 1}</td>
                  <td className="px-3 py-2">{fullName(u)}</td>
                  <td className="px-3 py-2">{u.pg}</td>
                  <td className="px-3 py-2">{u.role}</td>
                  <td className="px-3 py-2">
                    <button className="text-emerald-700 hover:underline">{u.status}</button>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <button title="Detail" className="rounded-md bg-orange-500 p-1.5 text-white hover:bg-orange-600">
                        <Info size={16} />
                      </button>
                      <button title="Edit" className="rounded-md bg-emerald-600 p-1.5 text-white hover:bg-emerald-700" onClick={() => navigate(`/user/new?edit=${u.id}`)}>
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
                  <td className="px-3 py-6 text-center text-slate-500" colSpan={6}>Tidak ada data.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

export default User

