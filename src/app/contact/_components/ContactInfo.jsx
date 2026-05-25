import React from 'react';

const CONTACT_DETAILS = [
  {
    label: "Headquarters",
    value: "Unit 325, Office 304, Emaar Square, Tower 3, Jeddah, KSA",
    desc: "Main Corporate Office & Flagship Showroom",
    href: "https://maps.app.goo.gl/9RzV398SshL7L297A",
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
    href: "tel:+966573828134",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    )
  },
  {
    label: "Email Channels",
    value: "info@prestige-creations.com",
    desc: "Enterprise support channels",
    href: "mailto:info@prestige-creations.com",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    )
  },
  {
    label: "WhatsApp Chat",
    value: "Instant Messaging Channel",
    desc: "Sun-Thu, 9am - 6pm",
    href: "https://wa.me/966573828134",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.004 2.002C6.5 2.002 2.005 6.497 2.005 12c0 2.023.606 3.905 1.644 5.48L2.07 22l4.673-1.228c1.511.83 3.245 1.3 5.093 1.3 5.467 0 9.967-4.498 9.967-10.003-.004-5.502-4.502-9.967-9.803-9.967zm4.84 12.203c-.22.613-1.272 1.155-1.782 1.205-.466.046-.998.056-1.57-.144-2.483-.872-4.108-3.328-4.229-3.486-.124-.16-.927-1.242-.927-2.373 0-1.13.588-1.685.803-1.91.22-.224.478-.28.638-.28.16 0 .324.004.464.01.144.006.338-.052.53.4.195.462.668 1.62.724 1.737.056.115.092.25.016.398-.076.15-.114.24-.229.373-.115.132-.24.293-.343.393-.115.115-.236.24-.1.472.136.23.606.998 1.298 1.616.892.793 1.64 1.04 1.87 1.156.23.115.367.098.502-.058.136-.156.586-.684.743-.915.156-.23.313-.19.53-.112.22.078 1.393.655 1.632.774.24.118.4.178.458.28.058.098.058.574-.162 1.186z" />
      </svg>
    )
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-8 lg:pr-8" data-aos="fade-right">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CONTACT_DETAILS.map((detail, i) => (
          <a
            key={i}
            href={detail.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 group items-start p-4 rounded-xl border border-[#111]/10 bg-white/40 hover:bg-white hover:border-light-gold/40 hover:shadow-[0_10px_20px_rgba(0,0,0,0.02)] transition-all duration-300 no-underline cursor-pointer"
          >
            <div className="w-10 h-10 shrink-0 border border-light-gold/20 rounded-lg flex items-center justify-center text-light-gold bg-light-gold/5 group-hover:bg-light-gold group-hover:text-white transition-all duration-500 shrink-0">
              {detail.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[0.55rem] uppercase tracking-[0.2em] text-light-gold font-black leading-none mb-1">
                {detail.label}
              </span>
              <span className="text-[0.82rem] text-[#111] font-bold tracking-tight leading-snug break-all">
                {detail.value}
              </span>
              <span className="text-[0.65rem] text-[#666] font-medium mt-1 leading-normal">
                {detail.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Active Interactive Google Maps Iframe Widget */}
      <div className="relative overflow-hidden rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-light-gold/15 w-full aspect-[16/9] sm:aspect-[21/10]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.4883446059437!2d39.21884487611846!3d21.49832798027017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf37452d3a3d%3A0xa19bf13192237eb6!2sEmaar%20Square%20Jeddah!5e0!3m2!1sen!2ssa!4v1716634800000!5m2!1sen!2ssa"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
