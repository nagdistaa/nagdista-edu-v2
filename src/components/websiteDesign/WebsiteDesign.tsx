import Card from "./Card";

interface Iprops {}

const WebsiteDesign = ({}: Iprops) => {
  return (
    <div className="bg-green-500 rounded-[5px] h-[400px] overflow-y-scroll relative">
  
      {/* جعل h1 ثابت داخل div عند التمرير */}
      <div className="bg-green-500 z-10 text-white text-[20px] sticky top-0 left-0">
        <h1 className="bg-green py-2 px-4 w-full rounded-2xl ">
          Website Design
        </h1>
      </div>
  
      {/* المحتوى المتبقي */}
      <div className="cards flex flex-wrap mt-[20px] gap-3  px-[10px] pb-[30px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default WebsiteDesign;
