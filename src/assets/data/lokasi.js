export const lokasiList = [
  { id: '001', pg: 'PG 1', wilayah: 'W/01', lokasi: '001', luas: 6.79, center: [-7.2575, 112.7521] },
  { id: '002', pg: 'PG 1', wilayah: 'W/01', lokasi: '002', luas: 9.19, center: [-7.262, 112.742] },
  { id: '003', pg: 'PG 1', wilayah: 'W/01', lokasi: '003', luas: 7.0, center: [-7.267, 112.735] },
  { id: '004', pg: 'PG 1', wilayah: 'W/01', lokasi: '004', luas: 13.98, center: [-7.272, 112.73] },
  { id: '005', pg: 'PG 1', wilayah: 'W/01', lokasi: '005', luas: 3.34, center: [-7.278, 112.725] },
]

export function buildPolygonAround([lat, lng], scale = 0.01) {
  const s = scale
  // simple hexagon around center
  return [
    [lat + s * 0.6, lng],
    [lat + s * 0.2, lng + s * 0.5],
    [lat - s * 0.3, lng + s * 0.4],
    [lat - s * 0.6, lng],
    [lat - s * 0.2, lng - s * 0.5],
    [lat + s * 0.3, lng - s * 0.4],
  ]
}

export function lokasiDetailById(id) {
  const base = lokasiList.find((l) => l.id === id)
  if (!base) return null
  const polygon = buildPolygonAround(base.center, 0.01)
  const coords = polygon.map(([la, lo], i) => ({ no: i + 1, lat: la, lng: lo }))
  return { ...base, polygon, coords }
}

