import{ BrowserRouter,  Route,  Routes } from "react-router-dom"
import { Signup } from "./pages/SignUp"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
function App() {
  console.log("error")
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element = {<Signup/>}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/send" element={<SendMoney/>}></Route>
    </Routes>

    </BrowserRouter>
     
     
    </>
  )
  
 
}

export default App
