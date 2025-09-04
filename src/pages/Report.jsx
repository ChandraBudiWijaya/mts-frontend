import { useState } from 'react'
import Panel from '../components/Panel'

function Report() {
  const [pg, setPg] = useState('PG1')
  const [wilayah, setWilayah] = useState('W01')
  const [q, setQ] = useState('')

  return (
    <div className="space-y-4">
      <Panel title="Filter Report">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">Plantation Group</label>
            <select value={pg} onChange={(e) => setPg(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
              <option>PG1</option>
              <option>PG2</option>
              <option>PG3</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">Wilayah</label>
            <input value={wilayah} onChange={(e) => setWilayah(e.target.value)} placeholder="W01" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-600">Kata Kunci</label>
            <div className="flex items-center gap-2">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari..." className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              <button type="button" className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600">Search</button>
            </div>
          </div>
        </div>
      </Panel>

      <Panel title="Report">
        <div className="text-slate-600 text-sm">
          Placeholder report. Silakan tentukan jenis report yang diinginkan.
        </div>
      </Panel>
    </div>
  )
}

export default Report

