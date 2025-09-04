import { useMemo } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Panel from '../components/Panel'
import { LayersControl, MapContainer, Polygon, TileLayer, ZoomControl, CircleMarker } from 'react-leaflet'
import { lokasiDetailById } from '../assets/data/lokasi'

function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-md bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-300"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      Kembali ke List
    </button>
  )
}

function LokasiDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [params] = useSearchParams()
  const data = useMemo(() => lokasiDetailById(id), [id])

  if (!data) {
    return (
      <div className="space-y-4">
        <BackButton onClick={() => navigate(-1)} />
        <div className="rounded-md border border-rose-200 bg-rose-50 p-4 text-rose-700">Data tidak ditemukan.</div>
      </div>
    )
  }

  const { center, polygon, coords, pg, wilayah, lokasi } = data

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <BackButton onClick={() => navigate(-1)} />
        <div className="text-sm text-slate-500">Detail Lokasi</div>
      </div>

      <Panel title={`Master Lokasi — ${pg} / ${wilayah} / ${lokasi}`}>
        <div className="h-[500px] overflow-hidden rounded-md">
          <MapContainer center={center} zoom={14} zoomControl={false} className="h-full w-full rounded-md">
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

            {/* polygon area */}
            <Polygon
              positions={polygon}
              pathOptions={{ color: '#f59e0b', fillColor: '#f59e0b', fillOpacity: 0.4 }}
            />
            {/* show vertices */}
            {polygon.map(([la, lo], i) => (
              <CircleMarker key={i} center={[la, lo]} radius={4} pathOptions={{ color: '#ef4444' }} />
            ))}
          </MapContainer>
        </div>
      </Panel>

      <Panel title="Koordinat">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead>
              <tr className="bg-emerald-700 text-left text-white">
                <th className="px-3 py-2">No</th>
                <th className="px-3 py-2">Latitude</th>
                <th className="px-3 py-2">Longitude</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {coords.map((c) => (
                <tr key={c.no}>
                  <td className="px-3 py-2">{c.no}</td>
                  <td className="px-3 py-2">{c.lat.toFixed(6)}</td>
                  <td className="px-3 py-2">{c.lng.toFixed(6)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

export default LokasiDetail

