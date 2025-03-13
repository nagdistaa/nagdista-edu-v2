import Card from "./Card";
import { websiteDesingData } from "./data";

interface Iprops {}

const WebsiteDesign = ({}: Iprops) => {
  return (
    <div className= "website-design-container bg-blue-500 rounded-[5px] h-[280px] overflow-y-scroll relative mb-[30px]">
  
    
      <div className="bg-blue-500 z-10 text-white text-[20px] sticky top-0 left-0 font-[700]">
        <h1 className=" py-2 px-4 w-full rounded-2xl ">
          Website Design
        </h1>
      </div>
  
      {/* المحتوى المتبقي */}
      <div className="cards flex justify-between flex-wrap mt-[20px] gap-3  px-[10px] pb-[30px]">
     
        {
            websiteDesingData.map((e)=>{
                return( <Card lecName={e.lecName} lecLink={e.lecLink} />)
            })
        }
      </div>
    </div>
  );
};

export default WebsiteDesign;
