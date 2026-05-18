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
        className="text-[1rem] uppercase text-[#111] no-underline hover:text-[#8A939E] transition-colors"
      >
        Home
      </Link>
      <Link
        href="/why-prestige"
        className="text-[1rem] uppercase text-[#111] no-underline hover:text-[#8A939E] transition-colors"
      >
        Why Prestige
      </Link>
      <Link
        href="/#products"
        className="text-[1rem] uppercase text-[#111] no-underline hover:text-[#8A939E] transition-colors"
      >
        Products
      </Link>
      <Link
        href="/contact"
        className="text-[1rem] uppercase text-[#111] no-underline px-6 py-3 border border-[#111]/10 hover:bg-[#111] hover:text-white transition-all"
      >
        Enquire Now
      </Link>
    </div>
  </nav>
);

export default AboutNav;
