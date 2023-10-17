import { Tilt } from 'react-tilt';

import AnimatedLine from './AnimatedLine';

const defaultOptions = {
  reverse: false,
  max: 20,
  perspective: 1000,
  scale: 1.1,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <>
    <div className=" w-full sm:w-1/2 md:w-1/2  lg:w-1/3 p-5  my-5  flex justify-center" >
      <Tilt options={defaultOptions} style={{ height: '100%', width: '100' }} >
        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-8">
          <img src={imageSrc} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-300 mt-2">{description}</p>
          </div>
        </div>
        <AnimatedLine/>
      </Tilt>
    </div>
    
    </>
  );
};

export default ProjectCard;
