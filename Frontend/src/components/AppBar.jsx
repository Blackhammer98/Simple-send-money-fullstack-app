export function AppBar(){
    return <div className="flex justify-between h-14 shadow">
  <div className="flex flex-col justify-center text-2xl font-semibold ml-4 ">
   Paisa Bhejo
  </div>
  <div className="flex">
     <div className="flex flex-col justify-center font-medium text-lg h-full mr-4">
        Hello, User
     </div>
     <div className="flex rounded-full bg-slate-200 h-12 w-12 justify-center mt-1 mr-2 ">
        <div className=" flex flex-col justify-center  h-full text-xl">
           U
        </div>

     </div>
  </div>
    </div>
}
