import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"
import Topbar from "./Topbar"
import { useState } from "react"
import Trending from "./Trending"
import Footer from "./Footer"


const Layout = () => {
  const [isSideBarOpen,setIsSideBarOpen] = useState<boolean>(false);

  function handleHamburgerMenu(){
    setIsSideBarOpen(prev=>!prev)
  }
  return (
    <section className="grid grid-cols-12 ">
        <section className={`xl:col-span-2 absolute xl:static ${isSideBarOpen? "block" : "hidden"} xl:block z-50 xl:z-0`}>
            <SideBar onHamburgerClick = {handleHamburgerMenu} />
        </section>
        <section className="col-span-12 xl:col-span-10 px-3 md:px-5  bg-primary dark:bg-primary-dark">
            <Topbar onHamburgerClick = {handleHamburgerMenu}/>
            <div className="xl:grid grid-cols-9">
                <div className="col-span-7 px-2 md:p-5 h-[90vh] flex flex-col justify-between overflow-y-scroll overflow-x-hidden">
                  <Outlet/>
                  <Footer/>
                </div>
                <div className="hidden xl:block col-span-2">
                    <Trending/>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Layout
