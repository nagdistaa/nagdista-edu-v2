interface Iprops {

}

const NavBar = ({}:Iprops)=>{
return(
    <div className="w-full h-fit p-2 bg-red-200 flex justify-between items-center">
       <div className="logo">
        <h2 className="capitalize text-red-500 font-bold text-2xl">nagdista<span className="uppercase pl-1.5 text-blue-500">edu</span></h2>
       </div>

       <div className="links">
        <ul className="flex items-center justify-between gap-2 capitalize">
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">groups</a></li>
            <li><a href="#">sections</a></li>
        </ul>
       </div>

       <div className="nav-btn">
            <button className="rounded-full px-[30px] py-1 bg-red-500 cursor-pointer">
                join
            </button>
       </div>
    </div>
)
}

export default NavBar ; 