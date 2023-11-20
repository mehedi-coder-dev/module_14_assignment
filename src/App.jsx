import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Team from './Pages/Team'
import Service from './Pages/Service'
import Project from './Pages/Project'
import Testimonial from './Pages/Testimonial'
import Layout from "./Layout/Layout"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/style.css'



function App() {


  return (
    <>
    <BrowserRouter>
      <Layout>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/team" element={<Team/>}/>
         <Route path="/service" element={<Service/>}/>
         <Route path="/project" element={<Project/>}/>
         <Route path="/testimonial" element={<Testimonial/>}/>
       </Routes>
       </Layout>
    </BrowserRouter>

    </>
  )
}

export default App
