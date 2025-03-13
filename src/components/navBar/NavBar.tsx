interface Iprops {

}

const NavBar = ({}:Iprops)=>{
return(
    <div className="w-full h-fit p-3 bg-red-200 flex justify-between items-center mb-4">
       <div className="logo">
        <h2 className="capitalize text-red-500 font-bold text-2xl max-sm:text-[20px]">nagdista<span className="uppercase pl-1.5 text-blue-500">edu</span></h2>
       </div>

       <div className="links  max-sm:hidden max-md:bg-green-500  lg:bg-blue-500 ">
        <ul className="flex items-center justify-between gap-2 capitalize">
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">groups</a></li>
            <li><a href="#">sections</a></li>
        </ul>
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