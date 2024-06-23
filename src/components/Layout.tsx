import GlobalSearchBar from "./GlobalSearchBar"
import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"


const Layout = () => {
  return (
    <section className="grid grid-cols-12">
        <section className=" col-span-2">
            <SideBar/>
        </section>
        <section className="col-span-7">
            <Outlet/>
        </section>
        <section className="col-span-3">
            <GlobalSearchBar/>
        </section>
    </section>
  )
}

export default Layout
