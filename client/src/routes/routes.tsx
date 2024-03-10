import {Routes,Route} from "react-router-dom"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import Home from "../components/Home/Home"

const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </>
  )
}

export default AllRoutes