import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './game/context/GameContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
<GameProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</GameProvider>
)
