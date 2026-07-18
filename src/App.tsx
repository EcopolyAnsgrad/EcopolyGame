import './App.css'
import { Routes, Route } from 'react-router-dom'

import * as Pages from './pages'
import * as islands from './pages/singleIsland'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/about" element={<Pages.About />} />
      <Route path="/islands" element={<Pages.Islands />} />
      <Route path="/authors" element={<Pages.Authors />} />
      <Route path="/french" element={<Pages.French />} />
      <Route path="/groups" element={<Pages.Groups />} />
      <Route path="/agriculture" element={<islands.Agriculture />} />
      <Route path="/climate" element={<islands.Climate />} />
      <Route path="/everyday" element={<islands.Everyday />} />
      <Route path="/jobs" element={<islands.Jobs />} />
      <Route path="/nature" element={<islands.Nature />} />
      <Route path="/recycling" element={<islands.Recycling />} />
      <Route path="/resources" element={<islands.Resources />} />
    </Routes>
    );
}

export default App
