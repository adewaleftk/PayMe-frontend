import { Route, Routes } from "react-router-dom"
import Register from "./assets/components/Register"
import Login from "./assets/components/Login"
import Deposit from "./assets/components/Deposit"
import Dashboard from "./assets/components/Dashboard"
import Withdraw from "./assets/components/Withdraw"
import Transfer from "./assets/components/Transfer"
import TransactionHistory from "./assets/components/TransactionHistory"


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/history" element={<TransactionHistory />} />
      </Routes>
    </>
  )
}

export default App