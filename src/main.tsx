import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './game/context/GameContext.tsx'
import { AuthProvider } from './game/context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    
<AuthProvider>
    <GameProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </GameProvider>
</AuthProvider>

)
