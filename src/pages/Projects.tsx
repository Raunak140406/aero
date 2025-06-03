import { HighlightedText } from '../components/animations/AnimatedText';
import ProjectCard from '../components/ui/ProjectCard';
import ScrollReveal from '../components/animations/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'Orbital Trajectory Calculator',
      description: 'Advanced orbital mechanics calculator for spacecraft mission planning with real-time 3D visualization.',
      tags: ['Python', 'Three.js', 'WebGL'],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Live Demo', url: '#' }
      ],
      emoji: '🛸'
    },
    {
      title: 'Star Map Generator',
      description: 'Interactive star map application showing real-time positions of celestial objects and constellations.',
      tags: ['JavaScript', 'React', 'D3.js'],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Live Demo', url: '#' }
      ],
      emoji: '🌌'
    },
    {
      title: 'Rocket Performance Analyzer',
      description: 'Comprehensive tool for analyzing rocket engine performance and optimizing fuel efficiency.',
      tags: ['MATLAB', 'Python', 'NumPy'],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Documentation', url: '#' }
      ],
      emoji: '🚀'
    },
    {
      title: 'Space Debris Tracker',
      description: 'Real-time tracking system for space debris and potential collision avoidance strategies.',
      tags: ['JavaScript', 'Node.js', 'TensorFlow'],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'API Docs', url: '#' }
      ],
      emoji: '☄️'
    },
    {
      title: 'Exoplanet Database',
      description: 'Comprehensive database of exoplanets with visualization tools and habitability analysis.',
      tags: ['React', 'GraphQL', 'D3.js'],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Live Demo', url: '#' }
      ],
      emoji: '🪐'
    },
    {
      title: 'Mission Control Dashboard',
      description: 'Real-time mission control dashboard for spacecraft telemetry and command interfaces.',
      tags: ['TypeScript', 'React', 'WebSockets'],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Documentation', url: '#' }
      ],
      emoji: '🛰️'
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <h1 className="text-center mb-12">
            <HighlightedText text="My Projects" className="text-5xl md:text-7xl font-bold" />
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            Explore my portfolio of aerospace and software development projects,
            ranging from orbital mechanics to interactive space visualizations.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
              emoji={project.emoji}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;