import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  // const [ data, setData ] = useState(true)
  const [myName, setMyName] = useState("Hello world")
  // const data = true
  return (
    <>
      <h1>This is project 2 heading</h1>
      {myName || "John Doe"}
      {/* <button onClick={() => setData(false)}>Show buttons</button>
      <br />

      { data ?
      <>
      <Button title="Button 1" />
      <Button title="Button 2" />
      <Button title="Button 3" />
      </> : "No button found"
      } */}

    </>
  )
}

export default App;