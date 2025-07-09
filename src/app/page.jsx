import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Ankit 👋</h1>
        <p className="text-lg text-gray-600 mb-6">Full‑Stack Developer | React | Tailwind</p>
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Testimonials />
    <ContactCTA />
    <Footer />
    
    </>
  
  );
}
