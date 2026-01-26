import { useGoogleLogin } from '@react-oauth/google';
import React from 'react'

const App = () => {

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (token) => {
      try {
        const response = await fetch ("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${token.access_token}`
          }
        });
        
        const userInfo = await response.json();

        if (!userInfo) return console.log("User not found");

        console.log(userInfo)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
  })
  return (
    <div>
      Welcome, PNY
      <hr />

      <button onClick={() => loginWithGoogle()}>Login with Google</button>

    </div>
  )
}

export default App
