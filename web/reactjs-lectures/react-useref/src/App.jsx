import React, { useRef } from 'react'
const App = () => {

  let email = useRef(null);
  let password = useRef(null);


  const handleGetValue = () => {
    let userEmail = email.current.value;
    let userPassword = password.current.value;

    console.log({
      email: userEmail,
      password: userPassword
    });
  }

  return (
    <div>
      <input ref={email} type="email" placeholder='Enter user email' />
      <input ref={password} type="password" placeholder='Enter user password' />
      <button onClick={handleGetValue}>Get Value</button>
    </div>
  )
}

export default App
