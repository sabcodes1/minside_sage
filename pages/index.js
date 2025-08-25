// Importer ikoner vi skal bruke
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    // Hovedcontainer med mørk bakgrunn
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      
      {/* Innholdswrapper */}
      <div className="text-center">
        
        {/* Navnet ditt med en stilig gradient-effekt */}
        <h1 className="text-5xl font-bold md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          Sage Brandtzæg
        </h1>
        
        {/* Undertittel som beskriver deg */}
        <p className="mt-4 text-lg md:text-xl text-slate-400">
          Informatikkstudent & Utvikler
        </p>
        
        {/* Lenker med ikoner */}
        <div className="mt-8 flex justify-center gap-x-6">
          <a 
            href="https://github.com/ditt-brukernavn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-x-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FaGithub size={24} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/ditt-brukernavn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-x-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
        </div>
        
      </div>
    </main>
  )
}