import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Signin = () => {
    const[username , setUsername] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();
    return <div className="bg-slate-200 h-screen flex justify-center">
       <div className=" flex flex-col justify-center">
           <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
               <Heading label={"Sign In"} />
               <Subheading label={"Enter your credentials to access your account"} />
               
               <InputBox onChange={(e)=>{
                setUsername(e.target.value)
               }} placeholder="example@gmail.com" label={"Username"} />
               <InputBox onChange={e => {
                setPassword(e.target.value)
               }}type = "password" placeholder="******" label={"password"} />
               <div className="pt-4">
                    <Button onClick={async ()=>{
                     const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        })
                        localStorage.setItem("token" , response.data.token)
                        navigate("/dashboard")
                    }} label={"Sign in"} />
               </div> 
               <BottomWarning label={"Don't have an account ?"} buttonText={"Sign up"} to={'/signup'} />
           </div>

       </div>
   </div>
}