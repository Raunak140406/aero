import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { HighlightedText, TypedText } from '../components/animations/AnimatedText';
import ScrollReveal from '../components/animations/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, text: 'your.email@example.com' },
    { icon: <Phone className="h-6 w-6" />, text: '+1 (555) 123-4567' }
  ];

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="h-6 w-6" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-6 w-6" />, href: "#", label: "LinkedIn" }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <h1 className="text-center mb-6">
            <HighlightedText text="Let's Connect" className="text-5xl md:text-7xl font-bold" />
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            <TypedText 
              text="Have a question or want to work together? Reach out to me!" 
              sequence={[
                'Have a question or want to work together?',
                1000,
                'Have a question or want to work together? Reach out to me!',
                1000,
                'Let\'s create something amazing together!',
                1000,
                'Have a question or want to work together? Reach out to me!',
              ]}
              repeat={Infinity}
            />
          </p>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                    >
                      <div className="p-3 glass rounded-full">{item.icon}</div>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="p-4 glass rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.1 * index,
                        duration: 0.3
                      }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-12 p-6 glass rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">My Location</h3>
                  <p className="mb-4">Based in San Francisco, California</p>
                  <p>Available for remote work worldwide and local opportunities</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="glass p-8 rounded-lg">
                <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Message 🚀
                  </motion.button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;