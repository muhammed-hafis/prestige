const COMMITMENTS = [
    {
        title: "Professionalism",
        body: "Our commitment is to deliver clear communication, dependable timelines, and reliable execution. Every project reflects our core values of precision and reliability across Saudi Arabia.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M12 8V4m0 0L8 8m4-4l4 4m-4 8v4m0 0l4-4m-4 4l-4-4M4 12h4m0 0l-4-4m4 4l-4 4m12-4h4m0 0l-4 4m4-4l-4-4" />
            </svg>
        ),
    },
    {
        title: "Quality Assurance",
        body: "We provide genuine, certified systems backed by manufacturer standards. Our approach ensures technical clarity and compliance-driven delivery at every stage.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            </svg>
        ),
    },
];

const CommitmentCard = ({ item }) => (
    <div className="group">
        <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-10 flex items-center justify-center border border-[#8A939E]/40 text-[#8A939E] rounded-full group-hover:bg-[#8A939E] group-hover:text-white transition-all duration-500 shrink-0">
                {item.icon}
            </div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#8A939E]">
                {item.title}
            </h3>
        </div>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">{item.body}</p>
    </div>
);

const Commitment = () => (
    <section className="py-20 lg:py-32 bg-[#111] text-white relative overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:80px_80px]" />
        {/* Gold accent */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#8A939E]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="main-container px-4 sm:px-8 relative z-10">
            <div className="max-w-4xl reveal">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-6">
                    Our Commitment
                </p>
                <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] mb-12 leading-tight">
                    Ensuring <br />
                    <em className="text-white/25">Long-term Value</em>
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14">
                    {COMMITMENTS.map((item) => (
                        <CommitmentCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Commitment;