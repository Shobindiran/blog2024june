import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const GlobalSearchBar = () => {
  const [searchQuery,setSearchQuery] = useState("");
  function handleSearchQueryChange(e:React.ChangeEvent<HTMLInputElement>){
    setSearchQuery(e.target.value)
  }
  return (
      <div className="text-gray-700 pt-2 xl:mr-24">
        <label className="relative">
            <IoSearch className="absolute top-1/2 left-1 transform -translate-y-1/2"/>
            <input type="text" className="rounded-xl py-1 pl-6 pe-6 w-48 outline-none" placeholder="Search here...." value={searchQuery} onChange={handleSearchQueryChange}/>
            {searchQuery && <IoClose onClick={()=>setSearchQuery("")} className="absolute top-1/2 right-1 transform -translate-y-1/2"/>}
        </label>
      </div>
  )
}

export default GlobalSearchBar
