import { HighlightedText } from '../components/animations/AnimatedText';
import HobbyCard from '../components/ui/HobbyCard';
import ScrollReveal from '../components/animations/ScrollReveal';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Poetry',
      description: 'Writing verses inspired by the cosmos and human exploration.',
      emoji: '📝'
    },
    {
      title: 'Music',
      description: 'Playing guitar and composing ambient soundscapes.',
      emoji: '🎵'
    },
    {
      title: 'Stargazing',
      description: 'Observing deep space objects and photographing the night sky.',
      emoji: '🔭'
    },
    {
      title: 'Hiking',
      description: 'Exploring nature and finding dark sky locations for astronomy.',
      emoji: '🥾'
    },
    {
      title: 'Astrophotography',
      description: 'Capturing celestial objects with specialized equipment and techniques.',
      emoji: '📸'
    },
    {
      title: 'Sci-Fi Literature',
      description: 'Reading and discussing science fiction exploring space and technology.',
      emoji: '📚'
    },
    {
      title: 'Model Rocketry',
      description: 'Building and launching model rockets as a hands-on hobby.',
      emoji: '🚀'
    },
    {
      title: 'Digital Art',
      description: 'Creating cosmic-inspired digital artwork and illustrations.',
      emoji: '🎨'
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <h1 className="text-center mb-12">
            <HighlightedText text="Beyond Code & Space" className="text-5xl md:text-7xl font-bold" />
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            Discover my interests and passions outside of professional work that keep me balanced and inspired.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              title={hobby.title}
              description={hobby.description}
              emoji={hobby.emoji}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;