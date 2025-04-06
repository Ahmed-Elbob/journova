import React, { useContext }  from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/freshcart-logo.svg"
import { Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


export default function Navbar() {

  let {userLogin , setuserLogin}=useContext(UserContext)
let Navigate = useNavigate()
  function SignOut(){
localStorage.removeItem("userToken");
setuserLogin(null);
Navigate("/login")

  }


  return (<>
  
  

<nav className=" border-slate-200 bg-slate-200 fixed top-0 right-0 left-0 ">
  
    <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
      <div className='flex items-center gap-5'>
        <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            </Link>
            <img src={logo} width= "100px" className="h-8" alt="Flowbite Logo" />
         
         {userLogin !=null ?  <ul className='flex gap-4 '>
            <li><Link to="">Home </Link></li>
            <li><Link to="cart">Cart</Link></li>
            <li><Link to="products">Products</Link></li>
            <li><Link to="categories">Categories</Link></li>
            <li><Link to="brands">Brands</Link></li>
            </ul> 
            :null}

         
         
         </div>

        
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
       
        <div className="links flex gap-4">
          {userLogin !=null?
            <span onClick={SignOut} className="text-sm ">SignOut</span>
           : <> <Link to="Login" className="text-sm ">Login</Link>
         <Link to="register" className="text-sm ">Register</Link>   </>}
     

        
         
         </div>
         
         <div className='icons flex gap-4'>
          <li className='fab fa-facebook'></li>
          <li className='fab fa-linkedin'></li>
          <li className='fab fa-youtube'></li>
          <li className='fab fa-tiktok'></li>
          <li className='fab fa-twitter'></li>




        
         
        


         </div>

          


         </div>


        </div>
    
</nav>



  
  
  
  
  
  
  </>
   
  )
}
