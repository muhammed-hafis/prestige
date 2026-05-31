import React from "react";
import GalleryGrid from "./_components/GalleryGrid";

const GALLERY_IMAGES = [
  {
    id: "villa-bong-main",
    src: "/images/gallery/villa bong.webp",
    title: "Villa Bong Estate",
    category: "villas",
    subCategory: "Luxury Residential",
    specs: "TOSTEM GRANTS Series, Autumn Brown",
    desc: "A sprawling private estate showcasing structural glazing and seamless transitions between indoor living and landscaped gardens."
  },
  {
    id: "villa-bong-1",
    src: "/images/gallery/villa-bong-1.avif",
    title: "Villa Bong Lounge Panel",
    category: "villas",
    subCategory: "Interior Glazing",
    specs: "TOSTEM WE70 Custom Sliders",
    desc: "Large-format sliding doors that dissolve boundaries, flooding the primary lounge with light while offering high wind resistance."
  },
  {
    id: "villa-bong-2",
    src: "/images/gallery/villa-bong-2.webp",
    title: "Villa Bong Exterior Facade",
    category: "villas",
    subCategory: "Architectural Exterior",
    specs: "Structural Glass Panels",
    desc: "Sleek, minimalistic framing engineered to withstand coastal climate loads while maintaining absolute aesthetic refinement."
  },
  {
    id: "sunny-paradise-main",
    src: "/images/gallery/sunny-paradise.avif",
    title: "Sunny Paradise Resort",
    category: "commercial",
    subCategory: "Premium Hospitality",
    specs: "TOSTEM WE Plus High-Rise Systems",
    desc: "Curtain wall and balcony door integration for a luxury beachfront resort, combining acoustic isolation with expansive views."
  },
  {
    id: "sunny-paradise-1",
    src: "/images/gallery/sunny-paradise-1.avif",
    title: "Sunny Paradise Pavilion",
    category: "commercial",
    subCategory: "Outdoor Canopy",
    specs: "OZONE Tension Rod & Glass Systems",
    desc: "Elegant structural glass canopy utilizing heavy-duty stainless steel fittings for safety and minimalist style."
  },
  {
    id: "sunny-paradise-2",
    src: "/images/gallery/sunny-paradise-2.avif",
    title: "Sunny Paradise Balconies",
    category: "commercial",
    subCategory: "Balcony Systems",
    specs: "OZONE Glass Railings, Concealed Profiles",
    desc: "Fully frameless glass balustrades offering unobstructed vistas of the resort shoreline with maximum safety ratings."
  },
  {
    id: "royal-mawlamyaing-main",
    src: "/images/gallery/royal-mawlamyaing.webp",
    title: "Royal Mawlamyaing Estate",
    category: "villas",
    subCategory: "Classical Modern Hybrid",
    specs: "TOSTEM GRANTS Collection",
    desc: "A prestigious royal residence combining traditional design motifs with high-performance modern window frames."
  },
  {
    id: "royal-mawlamyaing-1",
    src: "/images/gallery/royal-mawlamyaing-1.webp",
    title: "Royal Mawlamyaing Atrium",
    category: "villas",
    subCategory: "Double Height Glazing",
    specs: "TOSTEM Custom Curtain Facades",
    desc: "Striking double-height structural glass framing that serves as the visual centerpiece of the residence's grand entrance."
  },
  {
    id: "royal-mawlamyaing-2",
    src: "/images/gallery/royal-mawlamyaing-2webp.webp",
    title: "Royal Mawlamyaing Living Room",
    category: "villas",
    subCategory: "Panoramic Windows",
    specs: "TOSTEM WE70 Series, Natural Silver",
    desc: "Wide casement windows and sliders offering thermal comfort and expansive views of the manicured private estate grounds."
  },
  {
    id: "mhu-khan-main",
    src: "/images/gallery/m-h-u-khan.webp",
    title: "M.H.U. Khan Residence",
    category: "villas",
    subCategory: "Contemporary Villa",
    specs: "TOSTEM GRANTS Series, Natural Black",
    desc: "Bold, dark-framed aluminum windows providing architectural contrast against the warm stone cladding of the villa."
  },
  {
    id: "mhu-khan-1",
    src: "/images/gallery/m-h-u-khan-1.webp",
    title: "M.H.U. Khan Balcony",
    category: "villas",
    subCategory: "Terrace Sliders",
    specs: "TOSTEM WE Plus Sliding System",
    desc: "Corner-opening glass sliders that connect the master bedroom directly to the open terrace overlooking the city."
  },
  {
    id: "mhu-khan-2",
    src: "/images/gallery/m-h-u-khan-2.webp",
    title: "M.H.U. Khan Courtyard View",
    category: "villas",
    subCategory: "Courtyard Windows",
    specs: "TOSTEM WE70 Slim Casements",
    desc: "Clean, narrow-profile casement windows framing the serene interior courtyard water feature and garden."
  },
  {
    id: "img-1",
    src: "/images/gallery/image1.jpg",
    title: "TOSTEM GRANTS Premium Slider",
    category: "tostem",
    subCategory: "High-Performance Windows",
    specs: "GRANTS Collection, Autumn Brown",
    desc: "Flagship luxury sliding door featuring ultra-slim sightlines, concealed drainage, and smooth, effortless rolling mechanism."
  },
  {
    id: "img-2",
    src: "/images/gallery/image2.jpg",
    title: "TOSTEM Minimalist Window",
    category: "tostem",
    subCategory: "Residential Casement",
    specs: "WE70 Series, Natural Silver",
    desc: "Elegant casement window offering premium wind pressure performance and superior acoustic insulation."
  },
  {
    id: "img-3",
    src: "/images/gallery/image3.jpg",
    title: "Double-Height Atrium Glass",
    category: "tostem",
    subCategory: "Structural Facades",
    specs: "TOSTEM Custom Curtain Wall",
    desc: "Grand architectural glass wall maximizing natural light and visibility while maintaining complete structural integrity."
  },
  {
    id: "img-4",
    src: "/images/gallery/image4.jpg",
    title: "OZONE Hydraulic Patch",
    category: "ozone",
    subCategory: "Glass Hardware",
    specs: "OZONE Heavy Duty Hydraulic Series",
    desc: "Concealed bottom hydraulic patch fittings for heavy frameless glass doors, ensuring smooth, controlled self-closing action."
  },
  {
    id: "img-5",
    src: "/images/gallery/image5.jpg",
    title: "Frameless Glass Shower",
    category: "ozone",
    subCategory: "Luxury Bathroom Fittings",
    specs: "OZONE Brass Shower Hinges",
    desc: "Premium, water-resistant brass hardware and glass stabilizer rods installed in a master bathroom suite."
  },
  {
    id: "img-6",
    src: "/images/gallery/image6.jpg",
    title: "Corporate Facade Glazing",
    category: "commercial",
    subCategory: "Office Entrance",
    specs: "TOSTEM WE Plus Storefront",
    desc: "Heavy-traffic commercial entrance using structural framing engineered for maximum usage durability."
  },
  {
    id: "img-7",
    src: "/images/gallery/image7.jpg",
    title: "Infinity Pool Glazing",
    category: "villas",
    subCategory: "Outdoor Structural Glass",
    specs: "OZONE Frameless Balustrades",
    desc: "Heavy-duty glass railings surrounding a cliffside infinity pool, providing wind deflection without blocking the view."
  },
  {
    id: "img-8",
    src: "/images/gallery/image8.jpg",
    title: "TOSTEM GIESTA Door",
    category: "tostem",
    subCategory: "Premium Entrance Systems",
    specs: "GIESTA Collection, Wood Grain Finish",
    desc: "High-security insulated aluminum entrance door, featuring digital lock integration and architectural wood-like aesthetics."
  },
  {
    id: "img-9",
    src: "/images/gallery/image9.jpg",
    title: "OZONE Automatic Sliders",
    category: "ozone",
    subCategory: "Commercial Hardware",
    specs: "OZONE Intelligent Motion Sensor Sliders",
    desc: "Smooth-glide automatic sliding doors utilizing micro-processor controllers for high-traffic luxury retail entries."
  },
  {
    id: "img-10",
    src: "/images/gallery/image10.jpg",
    title: "TOSTEM Ventilation System",
    category: "tostem",
    subCategory: "Specialty Doors",
    specs: "TOSTEM Airflow Series",
    desc: "Innovative kitchen utility door allowing natural airflow through integrated vertical sliding sashes while keeping insects out."
  },
  {
    id: "img-11",
    src: "/images/gallery/image11.jpg",
    title: "Car Showroom Glass Wall",
    category: "commercial",
    subCategory: "Retail Showroom Facade",
    specs: "Heavy Duty Toughened Glass + OZONE Clamps",
    desc: "Ultra-clear large glass facades secured with robust stainless steel spider fittings for maximum display visibility."
  },
  {
    id: "img-12",
    src: "/images/gallery/image12.jpg",
    title: "Penthouse Glass Railing",
    category: "ozone",
    subCategory: "Balcony Railings",
    specs: "OZONE Base Shoe Railing Profiles",
    desc: "A floor-mounted aluminum base shoe system securing thick laminated safety glass, tested for high-velocity wind loads."
  },
  {
    id: "img-13",
    src: "/images/gallery/image13.jpg",
    title: "Vast Sliding Glass Wall",
    category: "villas",
    subCategory: "Residential Sliders",
    specs: "TOSTEM GRANTS Multislide",
    desc: "A multi-track sliding door system that stacks panels neatly, opening a 6-meter wide gap between the living room and pool terrace."
  },
  {
    id: "img-14",
    src: "/images/gallery/image14.jpg",
    title: "TOSTEM Premium Louvers",
    category: "tostem",
    subCategory: "Architectural Louvers",
    specs: "TOSTEM Aluminum Sunshade System",
    desc: "Fixed and operable aluminum louvers engineered for solar shading, privacy control, and architectural depth."
  },
  {
    id: "img-15",
    src: "/images/gallery/image15.jpg",
    title: "Glass Canopy Tension Assembly",
    category: "ozone",
    subCategory: "Facade Hardware",
    specs: "OZONE Heavy Duty Tension Rods",
    desc: "Sleek, marine-grade stainless steel tension rods holding an architectural glass canopy over a commercial hotel driveway."
  },
  {
    id: "img-16",
    src: "/images/gallery/image16.jpg",
    title: "Villa Pivot Glass Door",
    category: "villas",
    subCategory: "Grand Openings",
    specs: "OZONE Heavy Duty Pivot System",
    desc: "An oversized offset pivot glass door serving as a majestic entry to an inner courtyard garden."
  },
  {
    id: "img-17",
    src: "/images/gallery/image17.jpg",
    title: "WE Plus High-Rise Windows",
    category: "tostem",
    subCategory: "Commercial High-Rise",
    specs: "TOSTEM WE Plus Series",
    desc: "Engineered specifically for skyscrapers, offering industry-leading resistance to strong wind pressures and torrential rains."
  },
  {
    id: "img-18",
    src: "/images/gallery/image18.jpg",
    title: "Luxury Mall Entrance",
    category: "commercial",
    subCategory: "Shopping Centers",
    specs: "OZONE Spider Fittings & Custom Handles",
    desc: "High-end shopping center entrance using heavy architectural glass panels anchored with custom satin gold finished handles."
  },
  {
    id: "img-19",
    src: "/images/gallery/image19.jpg",
    title: "Minimalist Corner Glass",
    category: "villas",
    subCategory: "Modern Architecture",
    specs: "TOSTEM WE70 Corner Window Joint",
    desc: "Seamless mitered corner glass window arrangement, eliminating thick corner pillars for an uninterrupted panorama."
  },
  {
    id: "img-20",
    src: "/images/gallery/image20.jpg",
    title: "Glass Wall Connecting Clamps",
    category: "ozone",
    subCategory: "Heavy Glass Hardware",
    specs: "OZONE Glass-to-Glass Connectors",
    desc: "Heavy-duty solid brass clamps ensuring rigid alignment between vertical architectural glass panels."
  },
  {
    id: "img-21",
    src: "/images/gallery/image21.jpg",
    title: "Soundproof Bedroom Window",
    category: "tostem",
    subCategory: "Residential Soundproofing",
    specs: "TOSTEM Double Glazed Casement",
    desc: "Double-glazed window assembly providing an acoustic drop of 35dB, perfect for residences in dense urban centers."
  },
  {
    id: "img-22",
    src: "/images/gallery/image22.jpg",
    title: "Private Villa Glazing",
    category: "villas",
    subCategory: "Modern Residential",
    specs: "TOSTEM GRANTS Fixed Glass Walls",
    desc: "High-transparency fixed glass modules framing the picturesque mountain views from a remote luxury getaway."
  },
  {
    id: "img-23",
    src: "/images/gallery/image23.jpg",
    title: "Premium Corporate Dividers",
    category: "commercial",
    subCategory: "Office Partition Systems",
    specs: "OZONE Slim Line Channel Systems",
    desc: "Acoustic glass partitions with slim black anodized aluminum profile channels, structuring corporate workspaces beautifully."
  },
  {
    id: "img-24",
    src: "/images/gallery/image24.jpg",
    title: "TOSTEM Autumn Brown Finish",
    category: "tostem",
    subCategory: "Finish Options",
    specs: "TOSTEM Anodized Texguard Coating",
    desc: "Close-up of TOSTEM's signature Autumn Brown finish, showing the dust-repellent and UV-resistant protective layer."
  },
  {
    id: "img-25",
    src: "/images/gallery/image25.jpg",
    title: "Soft-Close Shower Hinges",
    category: "ozone",
    subCategory: "Shower Hardware",
    specs: "OZONE Dampened Soft-Close Series",
    desc: "Self-closing glass-to-wall shower door hinges featuring integrated hydraulic dampening to prevent glass slamming."
  },
  {
    id: "img-26",
    src: "/images/gallery/image26.jpg",
    title: "Cantilevered Glass Balcony",
    category: "villas",
    subCategory: "Architectural Balconies",
    specs: "OZONE Heavy Duty Floor Channels",
    desc: "Glass railings mounted in heavy-duty recessed base channels, creating an illusion of floating balcony boundaries."
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EC] selection:bg-light-gold selection:text-white pt-28 pb-20 sm:pt-36 sm:pb-32 overflow-hidden relative">
      
      {/* Decorative technical grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] bg-light-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] bg-light-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="main-container relative z-10 px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24" data-aos="fade-up">
          <p className="mb-4 sm:mb-5 section-label text-light-gold">
            Visual Showcase
          </p>
          <h1 className="mb-5 sm:mb-6 section-heading text-[#111]">
            Architectural Gallery
          </h1>
          <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto mb-5 sm:mb-7" />
          <p className="section-desc text-[#555] mx-auto max-w-xs sm:max-w-xl lg:max-w-2xl font-light">
            Discover a curated collection of prestige projects, featuring state-of-the-art 
            TOSTEM window frameworks, OZONE glass engineering, and bespoke luxury residential designs. 
            Step into living environments transformed by light, space, and premium materials.
          </p>
        </div>

        {/* Elegant spacer divider line */}
        <div className="border-b border-light-gold/15 mb-12" data-aos="fade-up" data-aos-delay="100"></div>

        {/* Dynamic Grid Layout Display (Hydrated client side) */}
        <GalleryGrid images={GALLERY_IMAGES} />
      </div>

    </div>
  );
}

