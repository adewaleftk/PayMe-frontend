import { Route, Routes } from "react-router-dom"
import Register from "./assets/components/Register"
import Login from "./assets/components/Login"
import Deposit from "./assets/components/Deposit"
import Dashboard from "./assets/components/Dashboard"



function App() {
  return (
    <>
      <Routes>
        <Route index element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
      </Routes>
    </>
  )
}

export default App