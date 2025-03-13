import { Send } from "lucide-react";

interface IWebsiteDesignData {
lecName:string;
lecLink:string;
lecDescripton:string
}

const Card = ({lecDescripton , lecLink , lecName}:IWebsiteDesignData)=>{
return(
    <div className="card bg-white p-[10px] rounded-[12px]">
    <div className="header flex justify-between items-center mb-[15px]">
        <h1 className="capitalize font-[600] text-red-500">{lecName}</h1>
        <a href={lecLink} className="btn"><Send size={20} /> </a>
    </div>
    <div className="descripton mb-[15px]">
    <p className="capitalize">{lecDescripton}</p>
    </div>
</div>
)
}

export default Card ; 