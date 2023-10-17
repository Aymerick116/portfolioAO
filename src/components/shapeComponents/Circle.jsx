
import { motion } from "framer-motion";

const CircleAnimation = () => {
  return (
    <div className="circle-container">
      <motion.svg
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="blue"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }} // Add this line for hover effect
        />
      </motion.svg>
    </div>
  );
};

export default CircleAnimation;
