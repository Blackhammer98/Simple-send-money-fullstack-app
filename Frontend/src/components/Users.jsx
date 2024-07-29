import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Users=()=>{
    const [users , setUsers] = useState([])
    const [filter , setFilter] =  useState("")
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/users/finduser?filter=" + filter)
              .then(response => {
                setUsers(response.data.user)
              })
    },[filter])
    return <>
        <div className=" mx-4 mt-6 font-bold text-lg">
            Users
        </div>

        <div className="mx-4 my-2">
           <input onChange={(e)=>{
            setFilter(e.target.value)
           }}
               type="text" placeholder="Search users...." className="border rounded border-slate-300 w-full px-2 py-1">
           </input>
        </div>
        <div >
          {users.map(user => <User user = {user}/>)}
        </div>
        </>
}

function User({user}){
    const navigate = useNavigate();

    return <div className="flex  justify-between">
           <div className="flex">
              <div className="flex rounded-full bg-slate-200 h-10 w-10 mt-4 ml-4 mr-4 justify-center ">
                   <div className="flex flex-col h-full text-lg justify-center">
                        {user.firstName[0]}
                   </div>
              </div>
              <div className="flex flex-col justify-center h-full ">
                <div className="flex  justify-center text-lg mt-1 font-semibold ">
                      {user.firstName} {user.lastName}
                </div>
              </div>
           </div>
           <div className="flex flex-col justify-center h-full mt-4 mr-2 ">
              <Button onClick={(e)=>{
                navigate("/send?id=" + user._id + "&name=" + user.firstName)
              }} label={"Send Money"}/>
           </div>
    </div>
}