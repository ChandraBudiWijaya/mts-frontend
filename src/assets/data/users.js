export const users = [
  { id: 'u1', firstName: 'Budi', lastName: '', username: 'budi', email: 'budi@example.com', phone: '081234567890', pg: 'PG1', wilayah: 'W01', role: 'Mandor', status: 'AKTIF' },
  { id: 'u2', firstName: 'Dani', lastName: '', username: 'dani', email: 'dani@example.com', phone: '081234567891', pg: 'PG1', wilayah: 'W01', role: 'Mandor', status: 'AKTIF' },
  { id: 'u3', firstName: 'Ahmad', lastName: '', username: 'ahmad', email: 'ahmad@example.com', phone: '081234567892', pg: 'PG1', wilayah: 'W01', role: 'Mandor', status: 'AKTIF' },
  { id: 'u4', firstName: 'Doni', lastName: '', username: 'doni', email: 'doni@example.com', phone: '081234567893', pg: 'PG1', wilayah: 'W01', role: 'Mandor', status: 'AKTIF' },
  { id: 'u5', firstName: 'Sumar', lastName: '', username: 'sumar', email: 'sumar@example.com', phone: '081234567894', pg: 'PG1', wilayah: 'W01', role: 'Mandor', status: 'AKTIF' },
]

export function fullName(u) {
  return [u.firstName, u.lastName].filter(Boolean).join(' ')
}

