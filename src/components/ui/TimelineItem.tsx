import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

interface TimelineItemProps {
  title: string;
  period: string;
  description: string;
  emoji?: string;
  isLeft?: boolean;
  delay?: number;
}

const TimelineItem = ({ 
  title, 
  period, 
  description, 
  emoji = '🚀',
  isLeft = false,
  delay = 0
}: TimelineItemProps) => {
  return (
    <ScrollReveal 
      direction={isLeft ? 'left' : 'right'} 
      delay={delay} 
      className="mb-12 relative"
    >
      <motion.div 
        className="glass p-6 rounded-lg relative ml-8 md:ml-0 md:mx-auto md:w-5/12 md:max-w-md"
        initial={{ 
          opacity: 0,
          x: isLeft ? -100 : 100,
          rotateY: isLeft ? 45 : -45
        }}
        whileInView={{ 
          opacity: 1,
          x: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.2,
            delay: delay
          }
        }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-3">
          <motion.div 
            className="text-2xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: delay + 0.3, type: "spring" }}
          >
            {emoji}
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-blue-300 mb-2">{period}</p>
            <p>{description}</p>
          </div>
        </div>
        
        {/* Circle and line for mobile */}
        <div className="absolute top-6 -left-8 md:hidden">
          <motion.div 
            className="w-4 h-4 rounded-full bg-nebula-purple"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: delay + 0.2 }}
          />
          <motion.div 
            className="absolute top-4 left-2 bottom-0 w-0.5 bg-gradient-to-b from-nebula-purple to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
          />
        </div>
        
        {/* Circle for desktop */}
        <motion.div 
          className="hidden md:block absolute top-6 w-4 h-4 rounded-full bg-nebula-purple"
          style={{
            [isLeft ? 'right' : 'left']: '-2rem',
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: "spring" }}
        />
      </motion.div>
    </ScrollReveal>
  );
};

export default TimelineItem;