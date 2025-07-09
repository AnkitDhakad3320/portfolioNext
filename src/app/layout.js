import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ankit | Portfolio",
  description: "Frontend dev portfolio built with Next.js & Tailwind",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    
        {children}

     
      </body>
    </html>
  );
}


