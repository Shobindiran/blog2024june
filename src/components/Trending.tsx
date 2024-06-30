
const Trending = () => {
  return (
    <aside>
        <div className='py-3 px-4 mt-10 border-s-[1px] border-solid border-text dark:border-text-dark'>
            <h3 className='font-semibold text-heading dark:text-heading-dark'>Recently Updated</h3>
            <ul className="text-text dark:text-text-dark mt-2">
                <li className="truncate cursor-pointer my-1 hover:text-red-500 hover:underline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolore cupiditate distinctio est</li>
                <li className="truncate cursor-pointer my-1 hover:text-red-500 hover:underline">consectetur adipisicing elit. Blanditiis</li>
                <li className="truncate cursor-pointer my-1 hover:text-red-500 hover:underline">dolor sit amet</li>
                <li className="truncate cursor-pointer my-1 hover:text-red-500 hover:underline">ea voluptatem itaque vero? Perspiciatis, neque eveniet accusantium magni eaque velit aut!
                    Nulla, officiis dolor! Dolore
                </li >
            </ul>
        </div>
        <div className='py-3 px-4 mt-10 border-s-[1px] border-solid border-text dark:border-text-dark'>
           <h3 className='font-semibold text-heading dark:text-heading-dark'>Trending Tags</h3>
           <ul className="flex flex-wrap gap-2 mt-6">
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">React</li>
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">Typescript</li>
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">C</li>
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">Flutter</li>
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">Redux</li>
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">React-native</li>
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">MongoDB</li>
            <li className="py-1 px-2 border-[1px] border-solid rounded-2xl text-sm text-text dark:text-text-dark hover:bg-[#0d6efd] dark:hover:text-primary hover:text-primary cursor-pointer">Nodejs</li>
           </ul>
        </div>
    </aside>
  )
}

export default Trending