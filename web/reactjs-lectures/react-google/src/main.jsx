import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="273962263607-tm1rjg0stmjs67v360mp11gradtohqt0.apps.googleusercontent.com">  
    <App />

      </GoogleOAuthProvider>
  </StrictMode>,
)
