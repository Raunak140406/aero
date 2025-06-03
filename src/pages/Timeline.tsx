import { HighlightedText } from '../components/animations/AnimatedText';
import TimelineItem from '../components/ui/TimelineItem';
import ScrollReveal from '../components/animations/ScrollReveal';

const Timeline = () => {
  const timelineItems = [
    {
      title: 'Master\'s in Aerospace Engineering',
      period: '2020 - 2022',
      description: 'Advanced studies in spacecraft design and orbital mechanics at prestigious university.',
      emoji: '🎓'
    },
    {
      title: 'Senior Software Engineer',
      period: '2022 - Present',
      description: 'Leading development of mission-critical aerospace software systems and satellite communication protocols.',
      emoji: '🚀'
    },
    {
      title: 'NASA Internship',
      period: '2021',
      description: 'Worked on Mars rover communication systems and contributed to deep space mission planning.',
      emoji: '🛰️'
    },
    {
      title: 'Bachelor\'s in Computer Science',
      period: '2016 - 2020',
      description: 'Specialized in algorithm design, machine learning, and computer graphics with a focus on simulation.',
      emoji: '💻'
    },
    {
      title: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Developed software tools for analyzing spacecraft telemetry data and mission planning.',
      emoji: '👨‍💻'
    },
    {
      title: 'Space Research Project',
      period: '2018',
      description: 'Led a student project on CubeSat design and development, winning a national competition.',
      emoji: '🏆'
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <h1 className="text-center mb-12">
            <HighlightedText text="My Journey" className="text-5xl md:text-7xl font-bold" />
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            Explore the key milestones in my academic and professional career that have shaped my expertise in aerospace engineering and software development.
          </p>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline center line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nebula-purple via-nebula-blue to-nebula-teal"></div>
          
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              period={item.period}
              description={item.description}
              emoji={item.emoji}
              isLeft={index % 2 === 0}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;