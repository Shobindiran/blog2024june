import { Link } from "react-router-dom"
import { IoHome } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";


const SideBar = () => {
  return (
    <div className="h-screen bg-gray-700 text-white pt-12 pl-4 pr-2 pb-5 flex flex-col justify-between">
      <div>
        <div className="pl-4">
            <img className=" size-32 rounded-full border-2  border-solid border-white"
            src="https://media.licdn.com/dms/image/D5603AQEJiwj5CmUxFA/profile-displayphoto-shrink_800_800/0/1714138891765?e=1724889600&v=beta&t=Xa6CrdlU5MHK0K42pcWo_2wj0mym5CGPf6DkLWfkY_I" alt="profile p[icture" />
            
            <h1 className="py-4 text-2xl font-extrabold">Access Denied's blog</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sint.</p>
        </div>

        {/* Navigations */}
        <ul className="mt-4">
            <li><Link className="flex items-center gap-4 text-lg py-2 my-[2px] rounded-xl hover:bg-gray-800 pl-4" to="/"><IoHome />Home</Link></li>
            <li><Link className="flex items-center gap-4 text-lg py-2 my-[2px] rounded-xl hover:bg-gray-800 pl-4" to="/categories"><FaBarsStaggered />Categories</Link></li>
            <li><Link className="flex items-center gap-4 text-lg py-2 my-[2px] rounded-xl hover:bg-gray-800 pl-4" to="tags"><FaTags />Tags</Link></li>
            <li><Link className="flex items-center gap-4 text-lg py-2 my-[2px] rounded-xl hover:bg-gray-800 pl-4" to="archives"><FaBoxArchive />Archives</Link></li>
            <li><Link className="flex items-center gap-4 text-lg py-2 my-[2px] rounded-xl hover:bg-gray-800 pl-4" to="about"><FaCircleInfo />About</Link></li>
        </ul>
      </div>

     <div className="flex justify-center gap-2">
        <VscColorMode className="text-lg"/>
        <LuDot className="text-lg"/>
        <a href="https://github.com/Gangadhar2k" target="_blank"><FaGithub className="text-lg"/></a>
        <a href="https://www.linkedin.com/in/gangadhar2k/" target="_blank"><FaLinkedin className="text-lg"/></a>
     </div>
    </div>
  )
}

export default SideBar
