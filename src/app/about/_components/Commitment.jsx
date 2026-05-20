const COMMITMENTS = [
    {
        number: "01",
        title: "Professionalism",
        body: "Our commitment is to deliver clear communication, dependable timelines, and reliable execution. Every project reflects our core values of precision and reliability across Saudi Arabia.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0L8 8m4-4l4 4m-4 8v4m0 0l4-4m-4 4l-4-4M4 12h4m0 0l-4-4m4 4l-4 4m12-4h4m0 0l-4 4m4-4l-4-4" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Quality Assurance",
        body: "We provide genuine, certified systems backed by manufacturer standards. Our approach ensures technical clarity and compliance-driven delivery at every stage.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            </svg>
        ),
    },
];

const CommitmentCard = ({ item }) => (
    <div className="group relative p-8 sm:p-10 rounded-3xl bg-[#111111] text-white border border-white/10 hover:border-[#E6BE5A]/50 transition-all duration-500 shadow-xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 overflow-hidden flex flex-col justify-between h-full">
        {/* Subtle top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E6BE5A]/80 to-transparent scale-x-50 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

        {/* Floating background number */}
        <div className="absolute right-6 top-6 text-7xl font-serif font-black text-white/[0.02] group-hover:text-[#E6BE5A]/10 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none">
            {item.number}
        </div>

        <div className="relative z-10">
            {/* Elegant Icon Container */}
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white/90 group-hover:text-black group-hover:bg-[#E6BE5A] group-hover:border-[#E6BE5A] group-hover:rotate-[360deg] transition-all duration-700 ease-out mb-8">
                {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-[#E6BE5A] font-bold mb-4 group-hover:text-white transition-colors duration-300">
                {item.title}
            </h3>

            {/* Body */}
            <p className="font-sans text-sm sm:text-base text-white/60 group-hover:text-white/80 leading-relaxed font-light transition-colors duration-300">
                {item.body}
            </p>
        </div>
        
        {/* Bottom accent glow */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#E6BE5A]/0 group-hover:bg-[#E6BE5A]/5 blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
    </div>
);

const Commitment = () => (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#E6BE5A] via-[#ECC970] to-[#D9B048] relative overflow-hidden">
        {/* Decorative Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] [background-image:radial-gradient(#111_0.5px,transparent_0.5px)] [background-size:28px_28px]" />
        
        {/* Soft white orb light */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[150px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#111]/5 blur-[120px] rounded-full" />
        </div>

        <div className="main-container px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left side text column */}
                <div className="lg:col-span-5 reveal">
                    <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-white bg-black/25 px-4 py-1.5 rounded-full inline-block mb-6 font-bold">
                        Our Commitment
                    </span>
                    <h2 className="font-serif font-bold text-[clamp(2.2rem,4vw,3.6rem)] text-[#111111] mb-6 leading-tight">
                        Ensuring <br />
                        <span className="text-[#111111]/60 font-normal">Long-term Value</span>
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-[#111111]/80 leading-relaxed font-light max-w-md">
                        We build lasting relationships founded on uncompromising standards, engineering excellence, and dedicated client service throughout the region.
                    </p>
                </div>

                {/* Right side cards column */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {COMMITMENTS.map((item) => (
                        <CommitmentCard key={item.title} item={item} />
                    ))}
                </div>

            </div>
        </div>
    </section>
);

export default Commitment;