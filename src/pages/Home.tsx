import BlogCard from "./Blog/BlogCard"

const Home = () => {
  return (
    <div> 
      <h1 className="text-4xl my-5 font-semibold text-heading dark:text-heading-dark">Home</h1> 
      <div className="md:px-10">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>

    </div>
  )
}

export default Home