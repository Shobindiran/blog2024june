import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom"
import GlobalSearchBar from "./GlobalSearchBar";
import React from "react";

interface TopBarProps{
    onHamburgerClick:()=>void;
}

const Topbar:React.FC<TopBarProps> = ({onHamburgerClick}) => {
const location = useLocation();
  return (
    <section className='header'>
        <div className="header-wrapper">
            <div className="flex justify-between items-center py-3 px-2">
                <RxHamburgerMenu onClick={onHamburgerClick} className=" text-3xl text-text dark:text-text-dark xl:hidden "/>
                <h1 className="text-text dark:text-text-dark hidden xl:block">
                    <span className="text-accent dark:text-accent-dark">Home</span>
                    {location.pathname.split("/").join(" > ")}
                </h1>
                <GlobalSearchBar/>
            </div>
        </div>
    </section>
  )
}

export default Topbar