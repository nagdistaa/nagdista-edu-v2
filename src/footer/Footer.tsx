import { Github } from "lucide-react";

interface Iprops {

}

const Footer = ({}:Iprops)=>{
return(
    <div className="footer flex justify-between items-center  shadow w-full border-t-1">
       
        <div>
        <a href="https://github.com/nagdistaa/nagdista-edu-v2" > made by | ❤️.
        </a>
        </div>
        <div>
         <a href="https://github.com/nagdistaa/nagdista-edu-v2"><Github/></a>
        </div>
    </div>
)
}

export default Footer ; 