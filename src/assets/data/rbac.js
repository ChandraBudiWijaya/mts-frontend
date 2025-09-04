export const modules = [
  { key: 'dashboard', label: 'Dashboard', actions: ['view'] },
  { key: 'lokasi', label: 'Lokasi', actions: ['view', 'create', 'edit', 'delete', 'map'] },
  { key: 'user', label: 'User', actions: ['view', 'create', 'edit', 'delete', 'reset_password'] },
  { key: 'rbac', label: 'RBAC', actions: ['view', 'create', 'edit', 'delete'] },
  { key: 'setting', label: 'Setting Parameter', actions: ['view', 'edit'] },
  { key: 'rencanakerja', label: 'Rencana Kerja', actions: ['view', 'create', 'edit', 'delete'] },
  { key: 'livetracking', label: 'Live Tracking', actions: ['view'] },
  { key: 'report', label: 'Report', actions: ['view', 'export'] },
]

export const roles = [
  {
    id: 'r1',
    name: 'Admin',
    modified: '09 Jan 2025',
    status: 'AKTIF',
    permissions: {
      dashboard: ['view'],
      lokasi: ['view', 'create', 'edit', 'delete', 'map'],
      user: ['view', 'create', 'edit', 'delete', 'reset_password'],
      rbac: ['view', 'create', 'edit', 'delete'],
      setting: ['view', 'edit'],
      rencanakerja: ['view', 'create', 'edit', 'delete'],
      livetracking: ['view'],
      report: ['view', 'export'],
    },
  },
  {
    id: 'r2',
    name: 'Super Admin',
    modified: '09 Jan 2025',
    status: 'AKTIF',
    permissions: modules.reduce((acc, m) => { acc[m.key] = [...m.actions]; return acc }, {}),
  },
  {
    id: 'r3',
    name: 'Mandor',
    modified: '09 Jan 2025',
    status: 'AKTIF',
    permissions: {
      dashboard: ['view'],
      lokasi: ['view', 'map'],
      user: ['view'],
      rencanakerja: ['view'],
      livetracking: ['view'],
      report: ['view'],
    },
  },
]

export function getRole(id) {
  return roles.find((r) => r.id === id)
}

