import { useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react'

const App = () => {

  const [userProfile, setUserProfile] = useState(null)

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
        setUserProfile(userInfo)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
  })
  return (
    <div>
      <h1>
        Welcome, {userProfile?.name}
      </h1> 
      <p>Email: {userProfile?.email}</p>
      <img src={userProfile?.picture} alt="" />
      <hr />

      <button onClick={() => loginWithGoogle()}>Login with Google</button>

    </div>
  )
}

export default App
