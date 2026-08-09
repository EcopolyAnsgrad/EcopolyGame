import './App.css'
import { Routes, Route } from 'react-router-dom'

import * as Pages from './pages'
import * as islands from './pages/singleIsland'
import GameRoute from './game/components/GameRoutes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/about" element={<Pages.About />} />
      <Route path="/islands" element={<Pages.Islands />} />
      <Route path="/authors" element={<Pages.Authors />} />
      <Route path="/french" element={<Pages.French />} />
      <Route path="/groups" element={<Pages.Groups />} />
      <Route path="/agriculture" element={<GameRoute><islands.Agriculture /></GameRoute>} />
      <Route path="/climate" element={<GameRoute><islands.Climate /></GameRoute>} />
      <Route path="/everyday" element={<GameRoute><islands.Everyday /></GameRoute>} />
      <Route path="/jobs" element={<GameRoute><islands.Jobs /></GameRoute>} />
      <Route path="/nature" element={<GameRoute><islands.Nature /></GameRoute>} />
      <Route path="/recycling" element={<GameRoute><islands.Recycling /></GameRoute>} />
      <Route path="/resources" element={<GameRoute><islands.Resources /></GameRoute>} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="register" element={<Pages.Register />} />
    </Routes>
    );
}

export default App
