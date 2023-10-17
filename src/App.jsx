import Aboutme from "./components/Aboutme"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

import "./App.css"
import Contact from "./components/Contact"


import AnimatedLine from "./components/AnimatedLine"
import Test from "./components/test"



function App() {
  

  return (
    <div className="bg-gray-900 ">
      <Navbar/>  
    
  
      <Aboutme/>
      <Experience/>
      <div className="container mx-auto  " >
      <h1 className="text-4xl font-semibold text-center  text-white">My Projects</h1>
      <div className="flex flex-wrap -mx-4  justify-items-center ">
     
     <Projects
       title="Project 1"
       description="Description of Project 1."
       imageSrc="project1.jpg"
     />
     <Projects
       title="Project 2"
       description="Description of Project 2."
       imageSrc="project2.jpg"
     />

     <Projects
       title="Project 2"
       description="Description of Project 2."
       imageSrc="project2.jpg"
     />
  
   </div>
   </div>
    <AnimatedLine/>

    <Contact/>

    
    

  
    </div>
  )
}

export default App
