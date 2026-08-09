import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { GameProvider } from './game/context/GameContext.tsx'
import { AuthProvider } from './game/context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    
<AuthProvider>
    <GameProvider>
        <HashRouter>
            <App/>
        </HashRouter>
    </GameProvider>
</AuthProvider>

)
