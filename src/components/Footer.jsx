"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ankit Dhakad. All rights reserved.
        </span>

        <div className="flex gap-4 text-gray-600 dark:text-gray-400">
          <a href="#about" className="hover:text-gray-900 dark:hover:text-gray-200">
            About
          </a>
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-gray-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
