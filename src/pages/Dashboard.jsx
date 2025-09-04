import Panel from '../components/Panel'
import DashboardFilters from '../components/filters/DashboardFilters'
import { MapContainer, TileLayer, ZoomControl, LayersControl } from 'react-leaflet'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts'

const donutColors = ['#10b981', '#0ea5e9', '#f97316', '#ef4444']

const activeUsersData = [
  { name: 'PG 1', value: 14 },
  { name: 'PG 2', value: 6 },
  { name: 'PG 3', value: 4 },
]

const visitedLocationsData = [
  { name: 'PG 1', value: 12 },
  { name: 'PG 2', value: 9 },
  { name: 'PG 3', value: 7 },
]

const wilayahBars = Array.from({ length: 24 }).map((_, i) => ({
  name: `W${String(i + 1).padStart(2, '0')}`,
  total: Math.floor(Math.random() * 20) + 4,
}))

const mandorCoverage = Array.from({ length: 24 }).map((_, i) => ({
  name: `Zulian ${i + 1}`,
  coverage: 10,
}))

function Dashboard() {
  const handleSearch = (payload) => {
    // Later: call backend with payload
    console.log('Search filters:', payload)
  }

  return (
    <div className="space-y-4">
  
      <Panel title="Filter">
        <DashboardFilters onSearch={handleSearch} />
      </Panel>

      <Panel title="Lokasi">
        <div className="h-[260px] overflow-hidden rounded-md">
          <MapContainer
            center={[-7.2575, 112.7521]}
            zoom={11}
            zoomControl={false}
            className="h-full w-full"
          >
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="Satellite">
                <TileLayer
                  attribution="Tiles &copy; Esri"
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Street Map">
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Topographic">
                <TileLayer
                  attribution="&copy; OpenTopoMap"
                  url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
            </LayersControl>
            <ZoomControl position="topright" />
          </MapContainer>
        </div>
      </Panel>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Panel title="Total User Aktif">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={activeUsersData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={2}>
                  {activeUsersData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={donutColors[index % donutColors.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Total Lokasi Terkunjungi">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={visitedLocationsData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={2}>
                  {visitedLocationsData.map((entry, index) => (
                    <Cell key={`cell2-${index}`} fill={donutColors[index % donutColors.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <Panel title="Total Kunjungan Lokasi Per Wilayah">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={wilayahBars}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} height={40} />
              <YAxis />
              <Tooltip />
              <ReferenceLine y={20} stroke="#d946ef" strokeDasharray="4 4" />
              <Bar dataKey="total" fill="#16a34a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <Panel title="Total Coverage Location Per Mandor">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {mandorCoverage.map((m) => (
            <div key={m.name} className="flex flex-col items-center rounded-md border border-slate-200 p-2">
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full bg-slate-200" />
                <div className="absolute inset-1 rounded-full bg-sky-200" />
                <div className="absolute inset-2 grid place-items-center rounded-full bg-slate-900 text-white text-base font-bold">
                  {m.coverage}
                </div>
              </div>
              <div className="mt-1 truncate text-center text-[11px] text-slate-600">{m.name}</div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

export default Dashboard
