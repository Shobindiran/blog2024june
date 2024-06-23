import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Tags from "./pages/Tags"
import Archives from "./pages/Archives"
import About from "./pages/About"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/categories" element = {<Categories/>}/>
            <Route path="/tags" element = {<Tags/>}/>
            <Route path="/archives" element = {<Archives/>}/>
            <Route path="/about" element = {<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
