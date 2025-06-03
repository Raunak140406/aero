import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  sequence?: (string | number)[];
  repeat?: number;
}

export const TypedText = ({ 
  text, 
  className = "", 
  sequence,
  repeat = Infinity
}: AnimatedTextProps) => {
  const defaultSequence = [
    text, // Type the text
    2000, // Wait 2s
    '', // Delete the text
    1000, // Wait 1s
  ];

  return (
    <TypeAnimation
      sequence={sequence || defaultSequence}
      wrapper="span"
      speed={35}
      deletionSpeed={50}
      className={className}
      repeat={repeat}
    />
  );
};

export const HighlightedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  );
};

export const SplitLetterText = ({ text, className = "" }: AnimatedTextProps) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.01
      }
    }
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};