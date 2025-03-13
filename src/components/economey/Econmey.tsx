import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { economyData } from "./economeyData";
import Card from "../websiteDesign/Card";

const Econemy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openClose = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="website-design-container bg-blue-500 rounded-[5px] max-h-[280px] overflow-y-scroll relative mb-[30px]   scroll-smooth">
      <div className="bg-blue-500 z-10 text-white text-[20px] sticky top-0 left-0 font-[700] flex justify-between items-center">
        <h1 className="py-2 px-4 w-full rounded-2xl cursor-pointer"   onClick={openClose}>Economy</h1>
        <ChevronDown
          className="mr-[10px] cursor-pointer text-white-500 rounded-b-2xl "
          onClick={openClose}
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(270deg)' }}
        />
      </div>

      {isOpen && (
        <div className="cards flex justify-between flex-wrap mt-[20px] gap-3 px-[10px] pb-[30px]">
          {economyData.map((e) => {
            return <Card lecName={e.lecName} lecLink={e.lecLink} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Econemy;
