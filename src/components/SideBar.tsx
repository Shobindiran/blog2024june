import { NavLink } from "react-router-dom"
import { IoHome } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

type theme = "dark" | "light"

interface SideBarProps{
  onHamburgerClick:()=>void;
}

const SideBar: React.FC<SideBarProps> =({onHamburgerClick}) => {
  const [theme,setTheme] = useState<theme>("dark")


  function handleTheme(){
    setTheme((prevTheme)=> prevTheme === "light" ? "dark" : "light")
  }

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  return (
    <div className="h-screen relative bg-secondary dark:bg-secondary-dark text-text dark:text-text-dark pt-12 pl-4 pr-2 pb-5 flex flex-col justify-between">
      <IoClose onClick={onHamburgerClick} className={`absolute top-5 right-5 text-3xl xl:hidden`}/>
      <div>
        <div className="pl-4">
            <img className=" size-32 rounded-full border-2  border-solid border-white object-cover"
            src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile picture" />
            
            <h1 className="py-4 text-2xl font-extrabold">Access Denied's blog</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sint.</p>
        </div>

        {/* Navigations */}
        <ul className="mt-4">
            <li><NavLink className={({isActive})=>isActive?"nav-item active":"nav-item"} to="/"><IoHome />Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"nav-item active":"nav-item"} to="/categories"><FaBarsStaggered />Categories</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"nav-item active":"nav-item"} to="tags"><FaTags />Tags</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"nav-item active":"nav-item"} to="archives"><FaBoxArchive />Archives</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"nav-item active":"nav-item"} to="about"><FaCircleInfo />About</NavLink></li>
        </ul>
      </div>

     <div className="flex gap-2 pl-4">
        <VscColorMode className="text-lg text-secondary-dark dark:text-secondary" onClick={handleTheme}/>
        <LuDot className="text-lg"/>
        <a href="https://github.com/Gangadhar2k" target="_blank"><FaGithub className="text-lg"/></a>
        <a href="https://www.linkedin.com/in/gangadhar2k/" target="_blank"><FaLinkedin className="text-lg"/></a>
     </div>
    </div>
  )
}

export default SideBar
