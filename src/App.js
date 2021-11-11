import React from 'react'
import CakesSection from './components/CakesSection/CakesSection'
import Contact from './components/Contact/Contact'
import CovidSafe from './components/CovidSafe'
import Highlights from './components/HighlightsSection/Highlights'
import Navbar from './components/Navbar/Navbar'
import Annoucement from './components/offers/Annoucement'
import Services from './components/Services/Services'

const App = () => {
  return (
    <>
    <Navbar/>
    <Annoucement/>
    <Highlights/>
    <Services/>
    <CakesSection/>
    <CovidSafe/>
    <Contact/>
    </>
  )
}

export default App


