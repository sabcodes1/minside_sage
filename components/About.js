


// components/About.js

export default function About() {
  return (
    // 'id="about"' er nøkkelen som lar oss linke til denne seksjonen
    <section id="about" className="flex min-h-screen items-center justify-center bg-slate-800 text-white">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Om meg</h2>
        <p className="max-w-2xl mx-auto">
          Her kommer det snart en tekst om meg, mine ferdigheter og mine interesser.
          Jeg vil også legge til et bilde for å gjøre siden mer personlig.
        </p>
      </div>
    </section>
  )
}