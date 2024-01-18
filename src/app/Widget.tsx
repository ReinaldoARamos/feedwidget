import { ChatTeardropDots } from "@phosphor-icons/react/dist/ssr";


export function Widget() {
    return (
    <div>
        <p>Hello World</p>
    <button className="bg-brand-500 rounded-full px-3 h-12 text-gray-50 flex items-center group">   
     <ChatTeardropDots size={12} className="w-6 h-6 " />
     <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear ">
        <span className="pl-2">Feedback</span>
     </span>
     </button>
    
    </div>)
}