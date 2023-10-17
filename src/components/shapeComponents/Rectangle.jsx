


import { motion } from 'framer-motion';

const Rectangle = () => {
  return (
    <motion.div
      style={{
        width: '100px',
        height: '100px',
        background: 'blue',
        borderRadius: '8px',
      }}
      whileHover={{ rotate: 45 }} // Rotate 45 degrees when hovered
    >
      
    </motion.div>
  );
};

export default Rectangle;
