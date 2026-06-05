import { LangProvider } from './i18n/LangContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Tiers from './components/Tiers'
import HowItWorks from './components/HowItWorks'
import WhyWebsite from './components/WhyWebsite'
import FAQ from './components/FAQ'
import CtaBand from './components/CtaBand'
import LayananFooter from './components/LayananFooter'

export default function LayananApp() {
  return (
    <LangProvider>
      <div className="lay-root">
        <Header />
        <main>
          <Hero />
          <Calculator />
          <Tiers />
          <HowItWorks />
          <WhyWebsite />
          <FAQ />
          <CtaBand />
        </main>
        <LayananFooter />
      </div>
    </LangProvider>
  )
}
