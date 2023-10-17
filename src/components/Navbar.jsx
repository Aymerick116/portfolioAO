import  { useState,useEffect } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import geek from "./images/geek.webp"
import profile1 from "./images/profile1.jpeg"


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // If the screen size is larger than 768px, ensure the menu is open.
        setIsMenuOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
 //" block py-2 pl-3 pr-4 md:dark:hover:bg-gray-700 text-white md:dark:hover:text-blue-500 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white-500 dark:bg-white-600 md:dark:bg-transparent"

  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src={profile1}
              className="h-8 mr-3 rounded-full"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Aymerick Osse | Portfolio
            </span>
          </a>
          <motion.button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </motion.button>
          <AnimatePresence>
            {(isMenuOpen || window.innerWidth > 768) && (
              <motion.div
                className="w-full md:block md:w-auto"
                id="navbar-solid-bg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1.1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li >
                <motion.a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                  whileHover={window.innerWidth < 768?{ scale: 1 }:{scale:1.2}}
                  whileTap={{ scale: .9 }}
                
                >
                  About me
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  whileHover={window.innerWidth < 768?{ scale: 1 }:{scale:1.2}}
                  whileTap={{ scale: .9 }}
                >
                  Experience
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  whileHover={window.innerWidth < 768?{ scale: 1 }:{scale:1.2}}
                  whileTap={{ scale: .9 }}
                  >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  whileHover={window.innerWidth < 768?{ scale: 1 }:{scale:1.2}}
                  whileTap={{ scale: .9 }}
                  >
                  Contact
                </motion.a>
              </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          
        </div>
      </nav>
    </>
  );
}

export default Navbar;

