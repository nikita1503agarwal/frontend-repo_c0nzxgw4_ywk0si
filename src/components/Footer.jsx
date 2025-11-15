export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Ari Blaze. Crafted with care.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-900">Back to top ↑</a>
            <a href="#" className="hover:text-slate-900">RSS</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
