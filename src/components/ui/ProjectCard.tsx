import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  delay?: number;
  emoji?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  links,
  delay = 0,
  emoji = '🚀'
}: ProjectCardProps) => {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <motion.div 
        className="card h-full flex flex-col"
        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-2xl">{emoji}</span> {title}
        </h3>
        <p className="mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 rounded text-sm"
                style={{ 
                  backgroundColor: `hsla(${(index * 40) % 360}, 70%, 60%, 0.8)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-blue-300 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default ProjectCard;