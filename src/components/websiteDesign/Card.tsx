import { Send } from "lucide-react";

interface Iprops {

}

const Card = ({}:Iprops)=>{
return(
    <div className="card bg-red-400 p-[10px] rounded-[12px]">
    <div className="header flex justify-between items-center mb-[15px]">
        <h1>lecture 1</h1>
        <a className="btn"><Send /> </a>
    </div>
    <div className="descripton mb-[15px]">
    <p className="capitalize">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sed ad modi molestiae consequatur excepturi?</p>
    </div>
</div>
)
}

export default Card ; 