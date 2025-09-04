import { useMemo, useState } from 'react'
import Panel from '../components/Panel'
import { useNavigate } from 'react-router-dom'
import { Info, MapPin } from 'lucide-react'
import { lokasiList } from '../assets/data/lokasi'

function Lokasi() {
  const navigate = useNavigate()
  const [pg, setPg] = useState('PG 1')
  const [wilayah, setWilayah] = useState('W/01')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase()
    return lokasiList.filter((r) => {
      const matchPG = pg ? r.pg === pg : true
      const matchWil = wilayah ? r.wilayah.toLowerCase().includes(wilayah.toLowerCase()) : true
      const matchSearch = s
        ? [r.pg, r.wilayah, r.lokasi].some((v) => String(v).toLowerCase().includes(s))
        : true
      return matchPG && matchWil && matchSearch
    })
  }, [pg, wilayah, search])

  return (
    <div className="space-y-4">
      {/* Filter Panel */}
      <Panel title="Filter">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">Plantation Group</label>
            <select
              value={pg}
              onChange={(e) => setPg(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option>PG 1</option>
              <option>PG 2</option>
              <option>PG 3</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">Wilayah</label>
            <input
              value={wilayah}
              onChange={(e) => setWilayah(e.target.value)}
              placeholder="W/01"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="flex items-end gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari lokasi..."
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
              onClick={() => { /* no-op, filter live */ }}
            >
              Search
            </button>
          </div>
        </div>
      </Panel>

      {/* List Panel */}
      <Panel
        title="Master Lokasi"
        actions={
          <button
            type="button"
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
            onClick={() => {/* refresh dummy */}}
          >
            Refresh
          </button>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead>
              <tr className="bg-emerald-700 text-left text-white">
                <th className="px-3 py-2">No</th>
                <th className="px-3 py-2">PG</th>
                <th className="px-3 py-2">Wilayah</th>
                <th className="px-3 py-2">Lokasi</th>
                <th className="px-3 py-2">Luas (Ha)</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filtered.map((r, idx) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="px-3 py-2">{idx + 1}</td>
                  <td className="px-3 py-2">{r.pg}</td>
                  <td className="px-3 py-2">{r.wilayah}</td>
                  <td className="px-3 py-2">{r.lokasi}</td>
                  <td className="px-3 py-2">{r.luas}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <button
                        className="inline-flex items-center gap-1 rounded-md bg-orange-500 px-2 py-1 text-white hover:bg-orange-600"
                        onClick={() => navigate(`/lokasi/${r.id}`)}
                        title="Detail"
                      >
                        <Info size={16} />
                      </button>
                      <button
                        className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-1 text-white hover:bg-emerald-700"
                        onClick={() => navigate(`/lokasi/${r.id}?tab=map`)}
                        title="Lihat Peta"
                      >
                        <MapPin size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-slate-500">
                    Tidak ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

export default Lokasi
