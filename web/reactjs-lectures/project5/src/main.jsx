import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WebLayout from './layouts/WebLayout.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebLayout>

      {/* <About /> */}
      {/* <Contact /> */}
      <App />
      
    </WebLayout>
  </StrictMode>,
)
