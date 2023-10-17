import { motion } from "framer-motion"; 
const TriangleFlipAnimation = () => {
    return (
      <div className="triangle-container">
        <motion.svg
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ rotate: 180, scale: 1.2 }}
        >
          <motion.polygon
            points="50,10 10,90 90,90"
            fill="blue"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ fill: "green" }}
          />
        </motion.svg>
      </div>
    );
  };
  
  export default TriangleFlipAnimation;