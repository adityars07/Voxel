import { Hexagon, Disc, Map, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <Hexagon className="w-5 h-5 text-zinc-400" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Voxel</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The professional visual engine for the modern web. Build, animate, and export high-performance WebGL.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-zinc-500 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="#pricing" className="text-zinc-500 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/showcase" className="text-zinc-500 hover:text-white transition-colors text-sm">Showcase</Link></li>
              <li><Link href="#changelog" className="text-zinc-500 hover:text-white transition-colors text-sm">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-zinc-500 hover:text-white transition-colors text-sm">Documentation</Link></li>
              <li><Link href="/tutorials" className="text-zinc-500 hover:text-white transition-colors text-sm">Tutorials</Link></li>
              <li><Link href="/community" className="text-zinc-500 hover:text-white transition-colors text-sm">Community</Link></li>
              <li><Link href="/templates" className="text-zinc-500 hover:text-white transition-colors text-sm">Templates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-zinc-500 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="/careers" className="text-zinc-500 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="/legal" className="text-zinc-500 hover:text-white transition-colors text-sm">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {currentYear} Voxel Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <Map className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <Disc className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
