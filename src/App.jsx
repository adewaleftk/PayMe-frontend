import { Route, Routes } from "react-router-dom"
import Register from "./assets/components/Register"
import Login from "./assets/components/Login"
import Deposit from "./assets/components/Deposit"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/deposit" element={<Deposit />} />
      </Routes>
    </>
  )
}

export default App