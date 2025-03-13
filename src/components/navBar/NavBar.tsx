interface Iprops {

}

const NavBar = ({}:Iprops)=>{
return(
    <div className="w-full h-fit p-3 bg-red-200 flex justify-between items-center mb-4 shadow-lg">
       <div className="logo">
        <h2 className="capitalize text-red-500 font-bold text-2xl max-sm:text-[20px]">nagdista<span className="uppercase pl-1.5 text-blue-500">edu</span></h2>
       </div>

       <div className="nav-btn">
            <a href="https://t.me/nagdista_edu" className=" rounded-full px-[20px] py-[4px] bg-red-500 cursor-pointer text-white text-[20px] capitalize max-md:text-lg">
                Telegram
            </a>
          
       </div>
    </div>
)
}

export default NavBar ; 