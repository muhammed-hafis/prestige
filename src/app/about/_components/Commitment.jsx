const COMMITMENTS = [
    {
        number: "01",
        title: "Professionalism",
        body: "Our commitment is to deliver clear communication, dependable timelines, and reliable execution. Every project reflects our core values of precision and reliability across Saudi Arabia.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 sm:w-6 sm:h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8V4m0 0L8 8m4-4l4 4m-4 8v4m0 0l4-4m-4 4l-4-4M4 12h4m0 0l-4-4m4 4l-4 4m12-4h4m0 0l-4 4m4-4l-4-4"
                />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Quality Assurance",
        body: "We provide genuine, certified systems backed by manufacturer standards. Our approach ensures technical clarity and compliance-driven delivery at every stage.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 sm:w-6 sm:h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
            </svg>
        ),
    },
];

const CommitmentCard = ({ item }) => (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#111111] p-6 sm:p-8 lg:p-10 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#E6BE5A]/50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">

        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 h-[3px] origin-center scale-x-50 bg-gradient-to-r from-transparent via-[#E6BE5A]/80 to-transparent transition-transform duration-700 group-hover:scale-x-100" />

        {/* Background Number */}
        <div className="pointer-events-none absolute right-4 top-4 select-none font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-white/[0.03] transition-all duration-700 group-hover:scale-110 group-hover:text-[#E6BE5A]/10">
            {item.number}
        </div>

        <div className="relative z-10">

            {/* Icon */}
            <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-all duration-700 ease-out group-hover:rotate-[360deg] group-hover:border-[#E6BE5A] group-hover:bg-[#E6BE5A] group-hover:text-black">
                {item.icon}
            </div>

            {/* Title */}
            <h3 className="mb-3 sm:mb-4 font-sans text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#E6BE5A] transition-colors duration-300 group-hover:text-white">
                {item.title}
            </h3>

            {/* Body */}
            <p className="font-sans text-sm sm:text-[15px] lg:text-base leading-relaxed sm:leading-[1.9] text-white/65 transition-colors duration-300 group-hover:text-white/85 font-light">
                {item.body}
            </p>
        </div>

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#E6BE5A]/0 blur-2xl transition-all duration-500 group-hover:bg-[#E6BE5A]/5" />
    </div>
);

const Commitment = () => (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E6BE5A] via-[#ECC970] to-[#D9B048] py-16 sm:py-20 lg:py-28 xl:py-32">

        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#111_0.5px,transparent_0.5px)] [background-size:26px_26px]" />

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] rounded-full bg-white/20 blur-[120px]" />

            <div className="absolute -bottom-20 -left-20 h-[240px] w-[240px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#111]/5 blur-[120px]" />
        </div>

        <div className="main-container relative z-10 px-5 sm:px-8 lg:px-10">

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Left Content */}
                <div className="w-full lg:w-[40%]">

                    <span className="mb-4 sm:mb-5 inline-block rounded-full bg-black/25 px-4 py-1.5 section-label text-white">
                        Our Commitment
                    </span>

                    <h2 className="mb-5 sm:mb-6 section-heading text-[#111111]">
                        Ensuring <br className="hidden sm:block" />
                        <span className="font-normal text-[#111111]/60">
                            Long-term Value
                        </span>
                    </h2>

                    <p className="max-w-lg section-desc text-[#111111]/80">
                        We build lasting relationships founded on uncompromising standards,
                        engineering excellence, and dedicated client service throughout the
                        region.
                    </p>
                </div>

                {/* Right Cards */}
                <div className="flex w-full lg:w-[60%] flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-8">

                    {COMMITMENTS.map((item) => (
                        <div key={item.title} className="flex-1">
                            <CommitmentCard item={item} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </section>
);

export default Commitment;