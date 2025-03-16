import { CirclePlus } from "lucide-react";

interface Iprops {
    groupName:string; 
    groupLink:string; 

}

const Groupp = ({groupLink , groupName}:Iprops)=>{
return(
    <div className="group w-full md:w-[48%] lg:w-[24%] rounded-[8px] px-[15px] py-[10px] shadow bg-[#04A08B] ">
    <div className="group-header flex justify-between items-center">
    <h3 className="text-white font-bold capitalize">{groupName}</h3>
    <a className="btn-groups" href={groupLink}><CirclePlus size={30} className="text-white bg-[#FF562F] rounded-full p-[2px]" /></a>
    </div>
   
  
 </div>
)
}

export default Groupp ; 