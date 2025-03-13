import { CirclePlus } from "lucide-react";

interface Iprops {

}

const Groupp = ({}:Iprops)=>{
return(
    <div className="group bg-blue-500 w-[48%] rounded-[8px] px-[15px] py-[10px] ">
    <div className="group-header flex justify-between items-center">
    <h3 className="text-white font-bold capitalize">group name</h3>
    <a className="btn-groups" href="#"><CirclePlus className="text-blue-500 bg-white rounded-full p-[1px]" /></a>
    </div>
   
  
 </div>
)
}

export default Groupp ; 