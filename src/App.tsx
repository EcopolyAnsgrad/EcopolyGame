import './App.css'
import { Routes, Route } from 'react-router-dom'

import About from './pages/About.tsx'
import Islands from './pages/Islands.tsx'
import Home from './pages/Home.tsx'
import Authors from './pages/Authors.tsx'
import French from './pages/French.tsx'
import Groups from './pages/Groups.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/islands" element={<Islands />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/french" element={<French />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
    );
}

export default App
