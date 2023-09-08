import { Route, Routes } from "react-router-dom"
import Register from "./assets/components/Register"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Register/>} />
      </Routes>
    </>
  )
}

export default App