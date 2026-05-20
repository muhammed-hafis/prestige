import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-12 pb-6 overflow-hidden relative">
      <div className="main-container relative z-10 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="0">
            <div>
              <span className="font-serif font-bold text-3xl tracking-widest uppercase flex items-center gap-2">
                PRESTIGE
                <span className="w-2 h-2 bg-light-gold rounded-full"></span>
              </span>
              <p className="font-sans text-[0.7rem] text-light-gold font-bold tracking-[0.4em] mt-2 uppercase">
                Architectural Excellence
              </p>
            </div>
            <p className="font-sans text-[0.875rem] text-gray-400 font-light leading-[1.7]">
              Leading the way in premium aluminium doors, windows, and modular architectural
              solutions. Engineering precision meets luxury design.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center font-sans text-[0.65rem] font-bold tracking-widest hover:bg-light-gold hover:border-light-gold transition-all duration-300 no-underline text-white">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-serif text-xl font-normal tracking-wide text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[0.875rem] text-gray-400 font-light list-none p-0">
              <li><Link href="/about" className="hover:text-light-gold transition-colors no-underline">The Brand</Link></li>
              <li><Link href="/#products" className="hover:text-light-gold transition-colors no-underline">Collection</Link></li>
              <li><Link href="/#testimonials" className="hover:text-light-gold transition-colors no-underline">Testimonials</Link></li>
              <li><Link href="/news-blogs" className="hover:text-light-gold transition-colors no-underline">Insights</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-serif text-xl font-normal tracking-wide text-white">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[0.875rem] text-gray-400 font-light list-none p-0">
              <li><Link href="/#products" className="hover:text-light-gold transition-colors no-underline">Windows</Link></li>
              <li><Link href="/#products" className="hover:text-light-gold transition-colors no-underline">Sliding Systems</Link></li>
              <li><Link href="/#products" className="hover:text-light-gold transition-colors no-underline">Bi-folds</Link></li>
              <li><Link href="/#products" className="hover:text-light-gold transition-colors no-underline">Modular Units</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-serif text-xl font-normal tracking-wide text-white">
              Connect
            </h4>
            <div className="flex flex-col gap-4 font-sans text-[0.875rem] text-gray-400 font-light">
              <p className="flex items-start gap-3">
                <span className="text-light-gold font-bold tracking-widest text-[0.65rem] mt-1 shrink-0">ADDR:</span>
                Office 304, E8, Emmar Square, <br />
                King Abdullah Rd, Jeddah 22241, SA
              </p>
              <p className="flex items-center gap-3">
                <span className="text-light-gold font-bold tracking-widest text-[0.65rem] shrink-0">CALL:</span>
                0573828134
              </p>
              <p className="flex items-center gap-3">
                <span className="text-light-gold font-bold tracking-widest text-[0.65rem] shrink-0">MAIL:</span>
                info@prestigecreations.sa
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" data-aos="fade-up" data-aos-delay="100">
          <p className="font-sans text-[0.8rem] text-gray-500 uppercase tracking-[0.2em]">
            © {currentYear} Prestige Systems.
          </p>
          <div className="flex gap-8 font-sans text-[0.7rem] text-gray-500 uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-white transition-colors no-underline">Privacy</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;