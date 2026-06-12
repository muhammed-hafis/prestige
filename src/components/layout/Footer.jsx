import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaSnapchat } from 'react-icons/fa6';
import { RiMapPinLine, RiPhoneLine, RiMailLine } from 'react-icons/ri';

const CORPORATE_LINKS = [
    { label: 'About Our Brand', href: '/about' },
    { label: 'Why Prestige', href: '/why-prestige' },
    { label: 'Project Gallery', href: '/gallery' },
    { label: 'The Journal & Insights', href: '/lectures' },
    { label: 'Partner Consultations', href: '/contact' },
];

const PORTFOLIO_LINKS = [
    { label: 'TOSTEM – Framing the Beauty of Living', href: '/products/tostem' },
    { label: 'AL AMIN – Architectural Engineering Excellence', href: '/products/alamin' },
    { label: 'OZONE – Designed for Every Space. Styled for Every Vision', href: '/products/ozone' },
];

const SOCIALS = [
    {
        id: 'YT',
        href: 'https://www.youtube.com/@PrestigeCreationsCompany',
        icon: <FaYoutube className="w-4 h-4" />
    },
    {
        id: 'IG',
        href: 'https://www.instagram.com/prestigecreationscompany/',
        icon: <FaInstagram className="w-4 h-4" />
    },
    {
        id: 'TK',
        href: 'https://www.tiktok.com/@prestigealusys',
        icon: <FaTiktok className="w-4 h-4" />
    },
    {
        id: 'FB',
        href: 'https://www.facebook.com/profile.php?id=61581053138122',
        icon: <FaFacebookF className="w-4 h-4" />
    },
    {
        id: 'LI',
        href: 'https://www.linkedin.com/company/111066977/admin/dashboard/',
        icon: <FaLinkedinIn className="w-4 h-4" />
    },
    {
        id: 'SC',
        href: 'https://www.snapchat.com/add/riyazprestige?share_id=TSeJIU0TBH8&locale=en-US',
        icon: <FaSnapchat className="w-4 h-4" />
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] text-white pt-14 pb-6 overflow-hidden relative">
            <div className="main-container relative z-10 px-4 sm:px-8">
                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-5 md:col-span-1 lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex flex-col gap-2">
                            <img src="/logo.avif" alt="Prestige Logo" className="h-16 sm:h-20 w-auto object-contain self-start" />
                            <p className="text-[0.65rem] text-light-gold mt-1 uppercase tracking-[0.25em] font-semibold leading-relaxed">
                                Building Prestige with Every Creation
                            </p>
                        </div>

                        {/* Social Row */}
                        <div className="flex flex-col gap-2 mt-2">
                            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50 font-bold">
                                Connect with us
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                                {SOCIALS.map(({ id, href, icon }) => (
                                    <a
                                        key={id}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow us on ${id}`}
                                        className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-light-gold hover:border-light-gold transition-all duration-300"
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Corporate Profile */}
                    <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#BA7517] font-semibold">
                            Corporate Profile
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {CORPORATE_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-sm text-gray-400 hover:text-light-gold transition-colors no-underline font-light leading-relaxed block"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: System Portfolio */}
                    <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-4" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#BA7517] font-semibold">
                            System Portfolio
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {PORTFOLIO_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-sm text-gray-400 hover:text-light-gold transition-colors no-underline font-light leading-relaxed block"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Regional Hub */}
                    <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-3" data-aos="fade-up" data-aos-delay="400">
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#BA7517] font-semibold">
                            Regional Hub
                        </h4>
                        <div className="flex flex-col gap-4 text-sm text-gray-400">
                            <div className="flex items-start gap-3">
                                <RiMapPinLine className="text-light-gold text-lg mt-0.5 shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white text-[0.7rem] uppercase tracking-wider mb-0.5">Headquarters</span>
                                    <span className="text-xs leading-relaxed text-gray-400">Unit 325, Office 304, Building E8, Emaar Square, King Abdullah Rd, Jeddah 22241, Kingdom of Saudi Arabia</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <RiMapPinLine className="text-light-gold text-lg mt-0.5 shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white text-[0.7rem] uppercase tracking-wider mb-0.5">Flagship Premium Showroom</span>
                                    <span className="text-xs text-gray-500 italic">Coming Soon</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <RiMailLine className="text-light-gold text-lg mt-0.5 shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white text-[0.7rem] uppercase tracking-wider mb-0.5">Inquiries</span>
                                    <a href="mailto:project@prestigecreationscompany.com" className="text-xs text-gray-400 hover:text-light-gold transition-colors">
                                        project@prestigecreationscompany.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <RiPhoneLine className="text-light-gold text-lg mt-0.5 shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white text-[0.7rem] uppercase tracking-wider mb-0.5">Project Line</span>
                                    <a href="https://wa.me/966573828134" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-light-gold transition-colors">
                                        +966 57 382 8134 (Call & WhatsApp)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center" data-aos="fade-up" data-aos-delay="500">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                        © {currentYear} Prestige Creations. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-wide">
                        <Link href="/privacy" className="hover:text-white transition-colors no-underline">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors no-underline">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;