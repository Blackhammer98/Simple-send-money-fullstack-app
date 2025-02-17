import { useSearchParams } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id  = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount , setAmount] = useState(0)

    return <div className="flex justify-center bg-gray-100 h-screen">
           <div className="h-full flex flex-col justify-center ">
                <div className="border h-min rounded-lg shadow-lg w-96 space-y-8 bg-white p-4 max-w-md space-">
                      <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2 ">
                             <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              for="amount" >
                                Amount (in ₹)
                                </label>
                                <input onChange={(e) =>{
                                     setAmount(e.target.value)
                                }} 
                                type="number" 
                                className="flex h-10 w-full rounded-md border bg-gray-100  px-3 py-2 "
                                 id="amount"
                                placeholder="Enter Amount" />
                            </div>
                        <button onClick={ ()=>{
                           axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to :id ,
                            amount
                          },{
                            headers:{
                              Authorization : "Bearer " + localStorage.getItem("token")
                            }
                          })
                        }} className="bg-green-500 border rounded-md justify-center text-white text-sm font-medium w-full h-10 px-4 py-2 transition-colors  hover:bg-green-600 ring-offset-0 ">
                               Initiate Transfer 
                            </button>

                        </div>

                      </div>
                </div>
           </div>
            </div>
   
}