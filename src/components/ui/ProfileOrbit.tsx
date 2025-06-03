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
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/50"
            animate={{ 
              scale: [1, 1.2, 1],
              y: [0, -4, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-red-500 rounded-full blur-sm opacity-50 animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] backdrop-blur-sm"
        style={{ 
          width: imageSize, 
          height: imageSize,
          top: imageOffset,
          left: imageOffset
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <motion.img
          src={imageSrc}
          alt="Profile"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default ProfileOrbit;