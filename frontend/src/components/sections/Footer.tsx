import { Map, MessageSquare, Disc } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/60 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Top row: logo left, nav links right */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">Voxel</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-zinc-950 dark:text-white font-medium mb-4 text-sm">Product</h4>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#showcase" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Showcase</Link></li>
                <li><Link href="#changelog" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-950 dark:text-white font-medium mb-4 text-sm">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="/docs" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/tutorials" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Tutorials</Link></li>
                <li><Link href="/community" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/templates" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-950 dark:text-white font-medium mb-4 text-sm">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-950 dark:text-white font-medium mb-4 text-sm">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/licenses" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Licenses</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500 dark:text-zinc-600">
            &copy; {currentYear} Voxel Inc. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-600 hidden md:block">
            Made with Voxel
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors">
              <Map className="w-4 h-4" />
            </a>
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors">
              <Disc className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
