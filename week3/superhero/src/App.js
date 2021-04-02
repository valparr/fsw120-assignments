import React from 'react'
import './hero.css';
import Header from './Header.js'
import SuperHeroList from './SuperHeroList.js'
import Footer from './Footer.js'

function App() {
  return (
    <div>
      <Header />
      <SuperHeroList />
      <Footer />
    </div>
  )
}

export default App;