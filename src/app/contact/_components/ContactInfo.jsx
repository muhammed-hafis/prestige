import React from 'react';

const CONTACT_DETAILS = [
  {
    label: "Headquarters",
    value: "Emaar Square, Jeddah, KSA",
    desc: "Main Corporate Office & Flagship Showroom",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25 C4.5 6.358 7.858 3 12 3c4.142 0 7.5 3.358 7.5 7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    )
  },
  {
    label: "Phone Support",
    value: "+966 57 382 8134",
    desc: "Available Sun-Thu, 9am - 6pm",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    )
  },
  {
    label: "Email Address",
    value: "info@prestige-creations.com",
    desc: "Response within 24 business hours",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    )
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-6 lg:pr-8" data-aos="fade-right">
      <div>
        <span className="text-[#4b5563] uppercase text-[0.65rem] tracking-[0.3em] font-bold mb-2 flex items-center gap-3">
          PRESTIGE SYSTEM
          <span className="block w-[30px] h-[0.5px] bg-[#4b5563]"></span>
        </span>
        <h2 className="section-heading text-[#111] mb-3 tracking-tight uppercase">
          Let&apos;s Build <br />
          <span className="text-[#374151]">Something Grand</span>
        </h2>
        <p className="section-desc text-[#2d3748] font-medium max-w-md">
          Connect with our specialized architectural consultant team in Jeddah. We translate design drafts into precision pre-fabricated aluminium systems.
        </p>
      </div>

      <div className="space-y-4">
        {CONTACT_DETAILS.map((detail, i) => (
          <div key={i} className="flex gap-4 group items-start">
            <div className="w-10 h-10 shrink-0 border border-[#4b5563]/25 rounded-xl flex items-center justify-center text-[#4b5563] group-hover:bg-[#4b5563] group-hover:text-white transition-all duration-500 shadow-sm bg-white/50 backdrop-blur-sm">
              {detail.icon}
            </div>
            <div className="pt-0.5">
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#4b5563] font-black mb-0.5">
                {detail.label}
              </p>
              <p className="text-sm text-[#111] font-bold tracking-tight mb-0.5">
                {detail.value}
              </p>
              <p className="text-[0.7rem] text-[#374151] font-medium">
                {detail.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Jeddah Showroom Map Visual (Real View, No Effects) */}
      <div className="relative overflow-hidden rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-light-gold/15 max-w-[400px] aspect-[21/9]">
        <img 
          src="/images/about-wide.png" 
          alt="Jeddah Corporate Showroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-2.5 left-4 text-white">
          <p className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-light-gold mb-0.5">Jeddah Corporate Office</p>
          <p className="text-[0.7rem] font-semibold text-white/95">Emaar Square, Tower 3, Plaza Level</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
