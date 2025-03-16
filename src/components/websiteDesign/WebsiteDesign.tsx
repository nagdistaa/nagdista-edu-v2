import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Card from "./Card";
import { websiteDesingData } from "./data";

const WebsiteDesign = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openClose = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className=" container-material  rounded-[5px] max-h-[280px] overflow-y-scroll ov relative mb-[30px]   scroll-smooth shadow w-full md:w-[30%] lg:w-[48%] bg-[#04A08B] ">
      <div className=" z-10  text-[20px] sticky top-0 left-0 font-[700] flex justify-between items-center bg-[#04A08B]">
        <h1 className="py-2 px-4 w-full rounded-2xl cursor-pointer text-white"   onClick={openClose}>Website Design</h1>
        <ChevronDown
          className="mr-[10px] cursor-pointer text-white rounded-b-2xl "
          onClick={openClose}
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(270deg)' }}
        />
      </div>

      {isOpen && (
        <div className="cards flex justify-between flex-wrap mt-[20px] gap-3 px-[10px] pb-[30px] ">
          {websiteDesingData.map((e) => {
            return <Card lecName={e.lecName} lecLink={e.lecLink} />;
          })}
        </div>
      )}
    </div>
  );
};

export default WebsiteDesign;
