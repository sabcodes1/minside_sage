import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Installer med: npm install framer-motion
import About from '../components/About'; // Importer den nye komponenten
import Head from 'next/head'; // For SEO og head-tags

export default function Home() {
  return (
    <>
      <Head>
        <title>Sage Brandtzæg - Portefølje</title>
        <meta name="description" content="Informatikkstudent og utvikler med fokus på innovative prosjekter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* SEKSJON 1: HERO – Med animasjoner og bedre responsivitet */}
      <motion.main
        initial={{ opacity: 0, y: 50 }} // Start animasjon: Fade in og slide opp
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 md:p-12"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl font-extrabold sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 drop-shadow-lg"
          >
            Sage Brandtzæg
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 font-medium"
          >
            Informatikkstudent & Utvikler – Lidenskapelig for AI, trading og webutvikling
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex justify-center gap-x-6 sm:gap-x-8"
          >
            <a
              href="https://github.com/sabcodes1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 text-slate-300 hover:text-blue-500 transition-colors duration-300 hover:scale-105"
              aria-label="Besøk min GitHub-profil"
            >
              <FaGithub size={28} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sagebrandtzaeg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 text-slate-300 hover:text-blue-500 transition-colors duration-300 hover:scale-105"
              aria-label="Besøk min LinkedIn-profil"
            >
              <FaLinkedin size={28} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll ned-pil med bedre animasjon */}
        <a
          href="#about"
          className="absolute bottom-10 animate-bounce text-slate-400 hover:text-blue-500 transition-colors duration-300"
          aria-label="Scroll ned til Om meg-seksjonen"
        >
          <FaArrowDown size={32} />
        </a>
      </motion.main>

      {/* SEKSJON 2: OM MEG – Med ID for smooth scroll */}
      <section id="about">
        <About />
      </section>
    </>
  );
}