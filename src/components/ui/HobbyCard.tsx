import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

interface HobbyCardProps {
  title: string;
  description: string;
  emoji: string;
  delay?: number;
}

const HobbyCard = ({ title, description, emoji, delay = 0 }: HobbyCardProps) => {
  return (
    <ScrollReveal delay={delay}>
      <motion.div 
        className="glass p-6 rounded-lg text-center h-full flex flex-col items-center"
        whileHover={{ 
          y: -5, 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
        }}
      >
        <motion.div 
          className="text-5xl mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {emoji}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </motion.div>
    </ScrollReveal>
  );
};

export default HobbyCard;