interface Iprops {

}

const NavBar = ({}:Iprops)=>{
return(
    <div className="w-full h-fit p-3 flex justify-between items-center mb-4 shadow-lg sticky top-0 left-0 z-50 bg-[#172B4C]">
       <div className="logo">
        <h2 className="capitalize text-white font-bold text-2xl max-sm:text-[20px]">nagdista<span className="uppercase pl-1.5 text-white">edu</span></h2>
       </div>

       <div className="nav-btn">
            <a href="https://t.me/nagdista_edu" className=" rounded-full px-[20px] py-[4px] bg-white cursor-pointer text-[#172B4C] text-[20px] capitalize  ">
                Telegram
            </a>
          
       </div>
    </div>
)
}

export default NavBar ; 