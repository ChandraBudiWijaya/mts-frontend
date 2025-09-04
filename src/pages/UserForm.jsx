import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Panel from '../components/Panel'

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-slate-600">{label}</div>
      {children}
    </label>
  )
}

function UserForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
    role: 'Mandor',
    indexNo: '',
    username: '',
    pg: 'PG1',
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSave = () => {
    alert('Simpan (dummy)')
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-md bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Kembali ke List
        </button>
        <div className="text-sm text-slate-500">Tambah User</div>
      </div>

      <Panel title="Form User">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left photo uploader placeholder */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 h-40 rounded-md border border-dashed border-slate-300 bg-white" />
              <button className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Tambah Foto</button>
            </div>
            <div className="mt-4 space-y-3">
              <Field label="No Index">
                <input value={form.indexNo} onChange={set('indexNo')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
              <Field label="Username">
                <input value={form.username} onChange={set('username')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
            </div>
          </div>

          {/* Right fields */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Nama Depan">
                <input value={form.firstName} onChange={set('firstName')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
              <Field label="Nama Belakang">
                <input value={form.lastName} onChange={set('lastName')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={set('email')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
              <Field label="No HP">
                <input value={form.phone} onChange={set('phone')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
              <Field label="Password">
                <input type="password" value={form.password} onChange={set('password')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
              <Field label="Konfirmasi Password">
                <input type="password" value={form.confirm} onChange={set('confirm')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
              </Field>
              <Field label="Role">
                <select value={form.role} onChange={set('role')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
                  <option>Mandor</option>
                  <option>Admin</option>
                </select>
              </Field>
              <Field label="PG">
                <select value={form.pg} onChange={set('pg')} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
                  <option>PG1</option>
                  <option>PG2</option>
                  <option>PG3</option>
                </select>
              </Field>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button onClick={() => navigate(-1)} className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">Batal</button>
              <button onClick={onSave} className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Simpan</button>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  )
}

export default UserForm

