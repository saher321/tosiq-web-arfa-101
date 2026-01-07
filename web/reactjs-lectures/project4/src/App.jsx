import React, { useState } from 'react'
import { userData } from './resource/userdata'

const App = () => {

  const [ value, setValue ] = useState(1)
  const [ price, setPrice ] = useState(34)
  const [ users, setUsers ] = useState(userData)

  const increaseValue = () => {
    setValue((prev) => prev+1) // updating value
  }

  const decreaseValue = () => {
    if (value <= 0) return;
    setValue((prev) => prev-1) // updating value
  }

  return (
    <div>
      <table border={1} cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>Product price</th>
            <th>Quantity</th>
            <th>Total ammount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{price}</td>
            <td>
              <button onClick={increaseValue}>+</button>
              <span> {value} </span>
              <button onClick={decreaseValue}>-</button>
            </td>
            <td>{price*value}</td>
          </tr>
        </tbody>
      </table>
      <hr />

      
      <table border={1} cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )
          })

          }
        </tbody>
      </table>

      
    </div>
  )
}

export default App
