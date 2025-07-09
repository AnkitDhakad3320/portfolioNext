
// import DarkModeToggle from "@/components/DarkModeToggle";
// import { NAV_ITEMS } from "@/data/siteData";




// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="font-bold text-xl text-indigo-600">Ankit.dev</div>
//         <nav className="space-x-4">
//           <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
//           <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
//           <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
//         </nav>
//         <DarkModeToggle />
//         <NAV_ITEMS.map(item => (
//   <a key={item.href} href={item.href}>{item.label}</a>
// )) />
//       </div>
      
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/components/data/siteData";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/60 dark:bg-gray-900/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* logo */}
        <a href="#hero" className="font-bold text-lg tracking-tight md:text-xl">
          Ankit.dev
        </a>

        {/* mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* nav links */}
        <ul
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-14 flex-col gap-6 bg-white dark:bg-gray-900 p-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* call‑to‑action */}
          <li className="md:ml-4">
            <Button asChild size="sm">
              <a href="#contact">Hire Me</a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
