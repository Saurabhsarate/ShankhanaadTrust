import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Performances from './pages/Performances'
// import Achievements from './pages/Achievements'
// import SocialInitiatives from './pages/SocialInitiatives'
import Media from './pages/Media'
import Contact from './pages/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/performances" element={<Performances />} />
          {/* <Route path="/achievements" element={<Achievements />} /> */}
          {/* <Route path="/social-initiatives" element={<SocialInitiatives />} /> */}
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
