import { Link } from "react-router-dom";

export function BottomWarning({label , buttonText , to}){
 return <div className="flex justify-center text-gray-800">
     <div>
         {label}
     </div>
     <Link className=" cursor-pointer pl-2 underline hover:text-green-500" to={to}>
     {buttonText}
     </Link>
        
 </div>
}