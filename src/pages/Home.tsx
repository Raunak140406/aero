import { motion } from 'framer-motion';
import { TypedText, HighlightedText } from '../components/animations/AnimatedText';
import ProfileOrbit from '../components/ui/ProfileOrbit';
import ScrollReveal from '../components/animations/ScrollReveal';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-xl md:text-2xl mb-4 text-blue-300">
                <TypedText text="Hello there, I'm" sequence={[
                  'Hello there, I\'m',
                  1000,
                  'Welcome to my universe',
                  1000,
                  'Hello there, I\'m',
                ]} />
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <HighlightedText text="John Doe" />
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                <TypedText 
                  text="Aerospace Engineer & Software Developer passionate about pushing the boundaries of technology." 
                />
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.button>
                <motion.button 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <ProfileOrbit 
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              size={300}
            />
          </div>
        </div>
        
        <ScrollReveal delay={0.4} className="mt-20">
          <div className="glass p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm a passionate Aerospace Engineer and Software Developer with expertise in spacecraft design, 
              orbital mechanics, and cutting-edge software development. My mission is to combine these disciplines to
              create innovative solutions that advance our understanding of space and push the boundaries of what's possible.
              With a background in both engineering and software, I bring a unique perspective to solving complex problems
              in the aerospace industry.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-10">My Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="card flex flex-col items-center"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Aerospace Engineering</h3>
                <p>Spacecraft design, orbital mechanics, and mission planning expertise.</p>
              </motion.div>
              
              <motion.div 
                className="card flex flex-col items-center"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                <p>Full-stack development with modern frameworks and tools.</p>
              </motion.div>
              
              <motion.div 
                className="card flex flex-col items-center"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                <p>Advanced data processing and visualization for complex aerospace systems.</p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Home;