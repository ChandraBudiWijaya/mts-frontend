function Panel({ title, children, actions }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between rounded-t-lg border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        {actions}
      </div>
      <div className="p-4">{children}</div>
    </section>
  )
}

export default Panel

