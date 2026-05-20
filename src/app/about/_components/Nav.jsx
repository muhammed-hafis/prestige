import Link from "next/link";

const AboutNav = () => (
  <nav className="fixed top-0 left-0 right-0 z-[100] h-20 flex items-center justify-between px-8 lg:px-14 bg-transparent">
    <Link
      href="/"
      className="text-[1.4rem] text-[#111] no-underline "
    >
      PRESTIGE
    </Link>
    <div className="flex items-center gap-10">
      <Link
        href="/"
        className="text-[1rem] uppercase text-[#111] no-underline hover:text-light-gold transition-colors"
      >
        Home
      </Link>
      <Link
        href="/why-prestige"
        className="text-[1rem] uppercase text-[#111] no-underline hover:text-light-gold transition-colors"
      >
        Why Prestige
      </Link>
      <Link
        href="/#products"
        className="text-[1rem] uppercase text-[#111] no-underline hover:text-light-gold transition-colors"
      >
        Products
      </Link>
      <Link
        href="/contact"
        className="text-xs font-bold uppercase tracking-widest no-underline px-6 py-3.5 border border-light-gold text-light-gold hover:bg-light-gold hover:text-white transition-all duration-300 rounded-full"
      >
        Enquire Now
      </Link>
    </div>
  </nav>
);

export default AboutNav;
