import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
