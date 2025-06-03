import { motion } from 'framer-motion';

interface ProfileOrbitProps {
  imageSrc: string;
  size?: number;
}

const ProfileOrbit = ({ imageSrc, size = 200 }: ProfileOrbitProps) => {
  const orbitSize = size;
  const imageSize = Math.round(size * 0.75);
  const imageOffset = (orbitSize - imageSize) / 2;
  const rocketSize = 24;

  return (
    <div className="relative mx-auto" style={{ width: orbitSize, height: orbitSize }}>
      <motion.div
        className="absolute rounded-full border-2 border-white border-opacity-30"
        style={{ width: orbitSize, height: orbitSize }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute flex items-center justify-center"
          style={{ 
            width: rocketSize,
            height: rocketSize,
            top: -rocketSize/2,
            left: '50%',
            marginLeft: -rocketSize/2,
            transform: 'rotate(90deg)'
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -2, 2, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.img
        src={imageSrc}
        alt="Profile"
        className="absolute object-cover rounded-full border-4 border-white shadow-2xl"
        style={{ 
          width: imageSize, 
          height: imageSize,
          top: imageOffset,
          left: imageOffset
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  );
};

export default ProfileOrbit;