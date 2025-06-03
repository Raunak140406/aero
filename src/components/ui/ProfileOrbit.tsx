import { motion } from 'framer-motion';

interface ProfileOrbitProps {
  imageSrc: string;
  size?: number;
}

const ProfileOrbit = ({ imageSrc, size = 200 }: ProfileOrbitProps) => {
  const orbitSize = size;
  const imageSize = Math.round(size * 0.75);
  const imageOffset = (orbitSize - imageSize) / 2;

  return (
    <div className="relative mx-auto" style={{ width: orbitSize, height: orbitSize }}>
      <motion.div
        className="absolute rounded-full border-2 border-white border-opacity-30"
        style={{ width: orbitSize, height: orbitSize }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute"
          style={{ 
            width: '48px',
            height: '48px',
            top: -24,
            left: '50%',
            marginLeft: -24,
          }}
        >
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ 
              rotate: [0, 0],
              y: [0, -4, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path
              d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"
              fill="#FFD700"
              stroke="#FFA500"
              strokeWidth="1"
            />
            <circle cx="12" cy="12" r="3" fill="#FF6B6B" />
          </motion.svg>
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