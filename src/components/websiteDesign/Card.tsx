import { Send } from "lucide-react";

interface IWebsiteDesignData {
lecName:string;
lecLink:string;
}

const Card = ({ lecLink , lecName}:IWebsiteDesignData)=>{
return(
    // card
    <div className=" w-full md:w-[48%] lg:w-[48%]  p-[10px] rounded-[12px] shadow  bg-white">
    {/* card header */}
    <div className=" flex justify-between items-center">
        <h1 className="capitalize font-[600]  text-[#04A08B] ">{lecName}</h1>
        <a href={lecLink} className="btn"><Send size={20} /> </a>
    </div>
</div>
)
}

export default Card ; 