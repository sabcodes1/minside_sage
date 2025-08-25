// pages/index.js

import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import About from '../components/About'; // Importer den nye komponenten

export default function Home() {
  return (
    // Bruker en fragment <> for å kunne ha flere hovedelementer
    <>
      {/* SEKSJON 1: HERO */}
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-4">
        
        <div className="text-center">
          <h1 className="text-5xl font-bold md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            Sage Brandtzæg
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400">
            Informatikkstudent & Utvikler
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <a 
              href="https://github.com/sabcodes1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-x-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={24} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sagebrandtzaeg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-x-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Scroll ned-pil */}
        <a href="#about" className="absolute bottom-10 animate-bounce">
          <FaArrowDown size={28} className="text-slate-500 hover:text-blue-400 transition-colors" />
        </a>
      </main>

      {/* SEKSJON 2: OM MEG */}
      <About />
    </>
  )
}