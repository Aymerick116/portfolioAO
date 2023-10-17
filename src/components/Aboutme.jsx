import {motion} from "framer-motion"
import profile1 from "./images/profile1.jpeg"
import TabMenu from "./TabMenu"
import AnimatedLine from "./AnimatedLine";

 

const Aboutme = () => {
    const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    };
  
    const imageVariants = {
      hidden: { scale: 0 },
      visible: { scale: 1, transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.5 } },
    };
  
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            className="mr-auto place-self-center lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Hi, I'm Aymerick
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Hey there, I'm Aymerick Osse, originally from Haiti. Right now, I'm diving into the world of Computer Science at Florida Atlantic University. My studies have sparked a real fascination with web development, which I love exploring through my work. By day, I'm a student, and by night, I'm a curious mind always tinkering with new ideas. Feel free to roam around my portfolio to see how I'm turning my passions into projects!
            </p>
            <TabMenu/>
          </motion.div>
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            
            <img
              src={profile1}
              alt="Profile"
              className="w-full h-48 lg:w-[80%] lg:h-[40vh] rounded-full rounded object-cover grayscale"
            />
          </motion.div>   
         
         

        </div>
        <AnimatedLine/>
      
      

   
      

      



    </div>
    );
  };
  
  export default Aboutme;
  



