import Header from './components/Header'
import Hero from './components/Hero'
import CaseStudy from './components/CaseStudy'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:rounded">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <CaseStudy />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
