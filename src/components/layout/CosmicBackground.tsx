import { useEffect, useRef } from 'react';

const CosmicBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    
    // Create stars
    const starsContainer = starsRef.current;
    const numStars = 50; // Reduced from 150 to 50
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay and duration
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      // Add random twinkle color
      const colors = ['#fff', '#8BE9FD', '#BD93F9'];
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      starsContainer.appendChild(star);
    }
    
    // Add parallax effect to stars
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      starsContainer.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      
      if (planetsRef.current) {
        planetsRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      <div className="cosmic-bg"></div>
      <div ref={starsRef} className="fixed inset-0 z-[-1] transition-transform duration-500 ease-out"></div>
      <div ref={planetsRef} className="fixed inset-0 z-[-1] transition-transform duration-700 ease-out">
        {/* Floating planets */}
        <div className="absolute w-40 h-40 rounded-full bg-nebula-purple bg-opacity-20 blur-xl top-1/4 left-1/5 animate-float"></div>
        <div className="absolute w-60 h-60 rounded-full bg-nebula-blue bg-opacity-20 blur-xl bottom-1/4 right-1/5 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-32 h-32 rounded-full bg-nebula-teal bg-opacity-20 blur-xl top-1/2 right-1/3 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </>
  );
};

export default CosmicBackground;