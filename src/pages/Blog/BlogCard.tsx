import { FaCalendar } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className='md:grid grid-cols-10 border-[1px] border-solid border-text rounded-xl overflow-hidden mb-5 cursor-pointer'>

      <div className='col-span-4 md:order-last'>
        <img className='object-cover h-full' src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo-of-turned-on-laptop" />
      </div>

      <div className='col-span-6 p-2 md:p-5 text-text dark:text-text-dark'>
        <h2 className="text-2xl font-semibold text-heading dark:text-heading-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p className=" my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate eos amet dolore asper</p>
        <div className='flex items-center gap-10'>
          <div className="flex items-center gap-4">
            <FaCalendar className="text-2xl" />
            <span>Aug 25,2024</span>
          </div>
          <div className="flex items-center gap-4">
            <FaFolderOpen className="text-2xl" />
            <span>Research</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard