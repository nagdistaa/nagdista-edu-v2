import Groupp from "./Group";
import { groupData } from "./groupData";



interface Iprops {

}

const SocailGroups = ({}:Iprops)=>{
return(
    <div className="flex items-center justify-between flex-wrap w-full gap-2 ">
        {groupData.map((ele)=>{
            return <Groupp groupLink={ele.groupLink} groupName={ele.groupName}/>
        })}
    </div>
)
}

export default SocailGroups ; 