import Link from 'next/link';

const NAV_LINKS = [
    { label: 'The Brand', href: '/about' },
    { label: 'Why Prestige', href: '/why-prestige' },
    { label: 'Collection', href: '/#products' },
    { label: 'Testimonials', href: '/#testimonials' },
];

const SOLUTIONS = [
    { label: 'Windows', href: '/#products' },
    { label: 'Sliding Systems', href: '/#products' },
    { label: 'Bi-folds', href: '/#products' },
    { label: 'Modular Units', href: '/#products' },
];

const SOCIALS = [
    { id: 'FB', href: '#' },
    { id: 'IG', href: '#' },
    { id: 'LI', href: '#' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] text-white pt-14 pb-6 overflow-hidden relative">
            {/* Decorative Watermark */}
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 text-[18vw] text-white/[0.02] pointer-events-none select-none leading-none">
                PRESTIGE
            </div>

            <div className="main-container relative z-10 px-4 sm:px-8">
                {/* Main grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
                        <div>
                            <span className="text-2xl uppercase tracking-[0.15em] flex items-center gap-2">
                                PRESTIGE
                                <span className="w-1.5 h-1.5 bg-[#8A939E] rounded-full" />
                            </span>
                            <p className="text-[0.65rem] text-[#8A939E] mt-1.5 uppercase tracking-[0.3em]">
                                Architectural Excellence
                            </p>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Leading the way in premium aluminium doors, windows, and modular architectural
                            solutions. Engineering precision meets luxury design.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#8A939E] hover:border-[#8A939E] transition-all duration-300 group">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#8A939E] hover:border-[#8A939E] transition-all duration-300 group">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#8A939E] hover:border-[#8A939E] transition-all duration-300 group">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>

                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">
                            Navigation
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-sm text-gray-400 hover:text-[#8A939E] transition-colors no-underline"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">
                            Solutions
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {SOLUTIONS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-sm text-gray-400 hover:text-[#8A939E] transition-colors no-underline"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <p className="flex items-start gap-2.5">
                                <span className="text-[#8A939E] text-[0.6rem] uppercase tracking-wide mt-0.5 shrink-0">Addr:</span>
                                <span>Office 304, E8, Emmar Square,<br />King Abdullah Rd, Jeddah 22241, SA</span>
                            </p>
                            <p className="flex items-center gap-2.5">
                                <span className="text-[#8A939E] text-[0.6rem] uppercase tracking-wide shrink-0">Call:</span>
                                0573828134
                            </p>
                            <p className="flex items-center gap-2.5">
                                <span className="text-[#8A939E] text-[0.6rem] uppercase tracking-wide shrink-0">Mail:</span>
                                info@prestigecreations.sa
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                        © {currentYear} Prestige Systems. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-wide">
                        <a href="#" className="hover:text-white transition-colors no-underline">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors no-underline">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;