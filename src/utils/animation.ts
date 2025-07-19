import { gsap } from 'gsap';

interface ParticleProps {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
}

class Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  directionX: number;
  directionY: number;
  
  constructor({ x, y, radius, color, speed }: ParticleProps) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.directionX = Math.random() * 2 - 1;
    this.directionY = Math.random() * 2 - 1;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  
  update(canvas: HTMLCanvasElement) {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.directionX = -this.directionX;
    }
    
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.directionY = -this.directionY;
    }
    
    this.x += this.directionX * this.speed;
    this.y += this.directionY * this.speed;
  }
}

export const initAnimation = () => {
  // Initialize particles in hero section
  initParticles();
  
  // Initialize scroll animations
  initScrollAnimations();
};

const initParticles = () => {
  const particlesContainer = document.getElementById('particles-container');
  if (!particlesContainer) return;
  
  const canvas = document.createElement('canvas');
  particlesContainer.appendChild(canvas);
  
  canvas.width = particlesContainer.clientWidth;
  canvas.height = particlesContainer.clientHeight;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Create particles
  const particles: Particle[] = [];
  const particleCount = Math.min(50, Math.floor(canvas.width * canvas.height / 10000));
  
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * (canvas.width - size * 2);
    const y = Math.random() * (canvas.height - size * 2);
    const speed = Math.random() * 0.5 + 0.1;
    
    // Colors from indigo and purple spectrum
    const colors = [
      'rgba(99, 102, 241, 0.3)',  // indigo-500
      'rgba(129, 140, 248, 0.3)', // indigo-400
      'rgba(139, 92, 246, 0.3)',  // purple-500
      'rgba(167, 139, 250, 0.3)', // purple-400
      'rgba(79, 70, 229, 0.3)',   // indigo-600
    ];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particles.push(new Particle({ x, y, radius: size, color, speed }));
  }
  
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update(canvas);
      particle.draw(ctx);
    });
  }
  
  animate();
  
  // Handle resize
  window.addEventListener('resize', () => {
    canvas.width = particlesContainer.clientWidth;
    canvas.height = particlesContainer.clientHeight;
  });
};

const initScrollAnimations = () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const delay = target.dataset.delay || 0;
        
        setTimeout(() => {
          target.classList.add('animate-reveal');
        }, delay);
        
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
};