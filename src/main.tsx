import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
