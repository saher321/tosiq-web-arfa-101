import React from 'react'
import { useForm } from 'react-hook-form'
const App = () => {

  const { register, handleSubmit, reset } = useForm();
  
  const handleSaveData = (data) => {

    if(!data.email || !data.password) return alert("Form fields are required");
    if (data.password.length != 6) return alert("Password must at least 6 char long")

    console.log(data)
    reset();

  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleSaveData)}>
        <div>
          <input { ...register("email")} type="text" placeholder='Enter email' />
        </div>
        <div>
          <input { ...register("password")} type="password" placeholder='Enter password' />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
