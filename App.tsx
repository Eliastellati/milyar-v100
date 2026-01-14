
import React, { useEffect, useState } from 'react';

// --- Types ---

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

interface Capability {
  icon: string;
  title: string;
  description: string;
}

// --- Data ---

const MAIN_PROJECTS: Project[] = [
  {
    id: 'm1',
    title: 'A.B.F.A.M.',
    category: 'Education',
    description: 'Un progetto dedicato a rendere l’istruzione più accessibile per chi è in difficoltà, grazie alla raccolta, scambio e rivendita di libri usati.',
    imageUrl: '/images/abfam.png',
  },
  {
    id: 'm2',
    title: 'Movida',
    category: 'Hospitality',
    description: 'Soluzioni e strumenti per il mondo dell’ospitalità: gestione, formazione e innovazione per ristoranti, hotel e attività.',
    imageUrl: '/images/movida.png',
  }
];

const SIDE_PROJECTS: Project[] = [
  {
    id: 's1',
    title: 'Eco-Tech API',
    category: 'Sustainability',
    description: 'Greentech monitoring solutions providing real-time carbon footprint metrics.',
    imageUrl: '/images/ailearn.png',
  },
  {
    id: 's2',
    title: 'VR Workspace',
    category: 'Mixed Reality',
    description: 'Immersive collaboration environment for spatial computing.',
    imageUrl: '/images/mpay.png',
  },
  {
    id: 's3',
    title: 'Neural Node',
    category: 'Machine Learning',
    description: 'Micro-service orchestration for distributed neural networks.',
    imageUrl: '/images/planey.png',
  }
];

const CAPABILITIES: Capability[] = [
  {
    icon: 'brush',
    title: 'Design Architecture',
    description: 'Creating intuitive, visually stunning interfaces that blend art with high functionality.'
  },
  {
    icon: 'terminal',
    title: 'Systems Engineering',
    description: 'Building scalable, resilient infrastructure for the most demanding digital ecosystems.'
  },
  {
    icon: 'insights',
    title: 'Growth Strategy',
    description: 'Strategizing growth and high-level partnerships to drive global tech impact.'
  }
];

// --- Components ---

const ProjectCard: React.FC<{ project: Project; isMain?: boolean }> = ({ project, isMain }) => {
  return (
    <div 
      tabIndex={0}
      className={`
        group relative overflow-hidden rounded-[2rem] bg-zinc-900/40 border border-white/5 cursor-pointer outline-none shadow-2xl
        ${isMain ? 'h-[500px] md:h-[600px] md:col-span-2' : 'h-[400px] md:h-[450px] col-span-1'}
      `}
    >
      {/* Primary Image Layer */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out group-hover:scale-110 group-focus:scale-110 bg-zinc-900" 
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.1) 100%), url("${project.imageUrl}")`, 
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center' 
        }}
      ></div>

      {/* Content Layer (Visible by default) */}
      <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-8 group-focus:opacity-0 group-focus:translate-y-8">
        <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">{project.category}</span>
        <h3 className={`font-[100] text-white tracking-tight ${isMain ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
          {project.title}
        </h3>
      </div>

      {/* Hover/Focus Detail Layer */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 flex flex-col justify-center p-8 md:p-12">
        <div className="transform translate-y-8 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out">
          <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">
            {project.category}
          </span>
          <h3 className={`font-[100] text-white tracking-tight mb-6 ${isMain ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
            {project.title}
          </h3>
          <p className={`text-slate-300 font-[200] leading-relaxed mb-10 ${isMain ? 'text-xl max-w-xl' : 'text-base max-w-sm'}`}>
            {project.description}
          </p>
          <div className="flex items-center gap-4 group/btn">
            <button className="bg-primary/20 border border-primary/40 text-primary px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              Details
            </button>
            <span className="material-symbols-outlined text-white/20 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Main', href: '#main' },
    { label: 'Side-Tracks', href: '#side-tracks' },
    { label: 'Collective', href: '#collective' }
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-[1200px]">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">rocket_launch</span>
            </div>
            <span className="font-bold tracking-tight text-lg">Milyar Group</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.href}
                className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors" 
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <button className="hidden sm:block bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-xs font-bold transition-all transform active:scale-95 shadow-lg shadow-primary/20 uppercase tracking-wider">
              Connect
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden size-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-white">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[105] md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-background-dark/95 backdrop-blur-2xl"></div>
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center gap-10 text-center">
            {navLinks.map((link, i) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-5xl font-[100] tracking-tighter hover:text-primary transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center pt-32 px-8 md:px-24 bg-transparent">
      <div className="max-w-[1100px] z-10 text-left">
        <div className="inline-flex items-center gap-3 glass border border-white/10 rounded-full px-4 py-1.5 mb-10">
          <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
            Innovating the Digital Frontier
          </span>
        </div>
        
        <h1 className="text-7xl md:text-[9.5rem] font-[100] leading-[0.85] md:leading-[0.95] tracking-tighter mb-10">
          Innovating <br className="hidden md:block" />
          <span className="font-accent italic text-primary/90 font-[300]">Digital</span> <br />
          Frontier
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 font-[200] max-w-2xl mb-14 leading-relaxed">
          Crafting the future through sophisticated design, high-precision engineering, and strategic global business solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#main" className="w-full sm:w-auto bg-primary text-white h-16 px-12 rounded-full font-medium text-lg hover:shadow-[0_0_40px_rgba(55,19,236,0.3)] transition-all flex items-center justify-center gap-3 group">
            Explore Work
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 relative z-10 bg-transparent">
      {/* Main Projects Section */}
      <section id="main" className="pt-24 pb-10 scroll-mt-32">
        <div className="max-w-xl mb-16">
          <h2 className="text-4xl md:text-6xl font-[100] tracking-tighter mb-4">Flagship <span className="font-accent italic text-primary/80 font-[300]">Series</span></h2>
          <p className="text-slate-400 font-[200] text-lg">Our core architectural breakthroughs in AI and financial systems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {MAIN_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} isMain={true} />
          ))}
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="side-tracks" className="py-24 border-t border-white/5 scroll-mt-32">
        <div className="max-w-xl mb-16">
          <h2 className="text-4xl md:text-5xl font-[100] tracking-tighter mb-4">Side <span className="font-accent italic text-primary/80 font-[300]">Tracks</span></h2>
          <p className="text-slate-400 font-[200] text-lg">Exploring niche solutions and experimental tech integrations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SIDE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

const Collective: React.FC = () => {
  return (
    <section id="collective" className="py-40 px-6 max-w-[1400px] mx-auto text-center relative z-10 bg-transparent scroll-mt-32">
      <h2 className="text-5xl md:text-7xl font-[100] tracking-tighter mb-8">The <span className="font-accent italic text-primary/80 font-[300]">Collective</span></h2>
      <p className="text-slate-400 font-[200] text-xl max-w-2xl mx-auto mb-24">We are always looking for visionary talent to help us redefine the limits of technology.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CAPABILITIES.map((cap, idx) => (
          <div key={idx} className="glass p-14 rounded-[2.5rem] group transition-all duration-700 hover:-translate-y-4 border-t-primary/20">
            <div className="size-20 bg-primary/5 border border-white/5 rounded-full flex items-center justify-center mx-auto mb-12 transition-all group-hover:bg-primary group-hover:shadow-[0_0_50px_rgba(55,19,236,0.4)]">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-4xl transition-colors">{cap.icon}</span>
            </div>
            <h3 className="text-2xl font-[300] mb-6 tracking-tight">{cap.title}</h3>
            <p className="text-slate-400 text-base font-[200] leading-relaxed mb-12">{cap.description}</p>
            <button className="w-full h-14 rounded-full border border-white/5 hover:border-primary/50 text-[10px] font-bold transition-all uppercase tracking-[0.3em] text-white/40 hover:text-white">View Openings</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA: React.FC = () => {
  return (
    <section className="py-40 px-6 relative z-10 bg-transparent">
      <div className="max-w-[1400px] mx-auto glass rounded-[4rem] p-16 md:p-32 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16 border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <h2 className="text-5xl md:text-8xl font-[100] text-white mb-10 leading-[0.9] tracking-tight">Let's craft the <span className="font-accent italic font-[300] text-primary">future</span>.</h2>
          <p className="text-slate-400 text-2xl font-[200]">Accelerate your next big initiative with our high-precision innovation team.</p>
        </div>
        <div className="relative z-10">
          <button className="bg-primary text-white h-16 px-12 rounded-full font-bold text-lg hover:shadow-[0_20px_60px_rgba(55,19,236,0.4)] transition-all hover:-translate-y-2 uppercase tracking-widest whitespace-nowrap">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-40 pb-16 px-6 overflow-hidden border-t border-white/5 bg-transparent">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-32 relative z-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-4 mb-10">
            <div className="size-8 bg-primary rounded-full"></div>
            <span className="font-bold tracking-tight text-2xl">Milyar Group</span>
          </div>
          <p className="text-slate-500 text-base font-[200] leading-relaxed">
            Leading the charge in premium digital solutions.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] mb-10 text-white/40">Network</h4>
          <ul className="space-y-6">
            <li><a className="text-sm text-slate-500 hover:text-primary transition-colors font-[200]" href="#">LinkedIn</a></li>
            <li><a className="text-sm text-slate-500 hover:text-primary transition-colors font-[200]" href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-white/20 text-[10px] font-bold tracking-widest relative z-10">
        <p>© 2024 MILYAR GROUP. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Enable smooth scrolling behavior for the document
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Collective />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
