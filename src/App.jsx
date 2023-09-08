import { Route, Routes } from "react-router-dom"
import Register from "./assets/components/Register"
import Login from "./assets/components/Login"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App