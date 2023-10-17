


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedLine = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <motion.div
      ref={ref}
      className="line bg-white h-2 w-full"
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1 }}
    >
    </motion.div>
  );
};

export default AnimatedLine;
