import { useState } from 'react'

function DashboardFilters({ onSearch }) {
  const [start, setStart] = useState('2025-01-01')
  const [end, setEnd] = useState('2025-01-10')
  const [pg, setPg] = useState('All')
  const [wilayah, setWilayah] = useState('All')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.({ start, end, pg, wilayah })
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <label className="mb-1 block text-xs font-medium text-slate-600">Tanggal</label>
        <div className="flex items-center gap-2">
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
          <span className="text-slate-400">–</span>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Plantation Group</label>
        <select value={pg} onChange={(e) => setPg(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200">
          <option>All</option>
          <option>PG 1</option>
          <option>PG 2</option>
          <option>PG 3</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Wilayah</label>
        <select value={wilayah} onChange={(e) => setWilayah(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200">
          <option>All</option>
          <option>W01</option>
          <option>W02</option>
          <option>W03</option>
        </select>
      </div>

      <div className="flex items-end">
        <button type="submit" className="w-full rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-200">Search</button>
      </div>
    </form>
  )
}

export default DashboardFilters

