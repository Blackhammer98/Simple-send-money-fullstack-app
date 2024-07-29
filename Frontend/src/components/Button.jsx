export function Button({onClick , label}){
    return <div>
        <button onClick={onClick} type="button" className="w-full bg-black hover:bg-gray-700 text-white font-base me-2 mb-2 py-2.5 px-5 border border-black rounded">{label}</button>
    </div>
}