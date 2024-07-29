export function Balance({value}){
    return <div className="flex mx-4 ">
         <div className=" font-bold text-lg">
             Your Balance
         </div>
         <div className="font-semibold text-lg ml-4">
               ₹{value}
         </div>
    </div>
}