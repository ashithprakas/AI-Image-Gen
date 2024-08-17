import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import CreatePost from "./Pages/CreatePost/CreatePost"
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  return (
  <div className='app-container'>
    <div className="app-wrapper">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}  />
        <Route path="/post" element = {<CreatePost/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  </div>

  )
}

export default App