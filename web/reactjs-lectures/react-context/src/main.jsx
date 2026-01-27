import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ContextStore from './context/ContextStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextStore>
  </StrictMode>,
)
