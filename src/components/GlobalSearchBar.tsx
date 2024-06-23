import { IoSearch } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";

const GlobalSearchBar = () => {
  return (
    <div className="h-screen bg-gray-700 text-white pl-2">
      <div className="text-gray-700 pt-2">
        <label className="relative">
            <IoSearch className="absolute top-1/2 left-1 transform -translate-y-1/2"/>
            <input type="text" className="rounded-xl py-1 pl-6 pe-6 w-[60%] outline-none"/>
            <TiDelete className="absolute top-1/2 right-1 transform -translate-y-1/2"/>
        </label>
      </div>
    </div>
  )
}

export default GlobalSearchBar
