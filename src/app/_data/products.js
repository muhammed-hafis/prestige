export const productCategories = [
  {
    id: 'windows-and-doors',
    title: 'Window & Door',
    description: 'World-class aluminium window and door systems by Tostem, featuring Japanese innovation and timeless design.',
    img: '/images/product-windows.png',
    heroImg: '/images/hero.png',

    series: [
      {
        id: 'grants',
        name: 'GRANTS',
        seriesLabel: 'Series',
        tagline: 'MASTERING THE ART OF LIVING SPACE',
        description: 'GRANTS, crafted for low-rise residences, transforms spaces with expansive glass panels, seamless lines, and refined aesthetics. Blending innovation with elegance, it frames homes with timeless design and open views.',
        uniqueFeature: {
          title: "A Perfect Balance Of Life's Perspective",
          detail: 'Symmetrical frame design for perfect balance of artistic perspective.',
        },
        img: '/images/grants-showcase.png',
        specs: {
          'FRAME DEPTH': ['101.6 mm', '120 mm (2 tracks sliding)', '178 mm (3 tracks sliding)'],
          'HEIGHT OF SILL': ['50 mm'],
          'GLASS THICKNESS': ['Up to 31.52 mm'],
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL GRANTS PRODUCT', value: '500PA - 1200PA', sub: '(JIS A 1515)' },
            { label: 'FLAT RAIL SLIDING', value: '500PA - 1200PA', sub: '(JIS A 1515)' },
            { label: 'CORNER SLIDING', value: '500PA - 1200PA', sub: '(JIS A 1515)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL GRANTS PRODUCT', value: 'W-3: 250PA', sub: '(JIS A 1517)' },
            { label: 'FLAT RAIL SLIDING', value: 'W-2: 150PA', sub: '(JIS A 1517)' },
            { label: 'CORNER SLIDING', value: 'W-2: 150PA', sub: '(JIS A 1517)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL GRANTS PRODUCT', value: 'A-4: 2M3/H.M2', sub: '(JIS A 1516)' },
            { label: 'FLAT RAIL SLIDING', value: 'A-4: 2M3/H.M2', sub: '(JIS A 1516)' },
            { label: 'CORNER SLIDING', value: 'A-4: 2M3/H.M2', sub: '(JIS A 1516)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL GRANTS PRODUCT', value: 'T-1: 25DB', sub: '(JIS A 1416)' },
            { label: 'FLAT RAIL SLIDING', value: 'T-1: 25DB', sub: '(JIS A 1416)' },
            { label: 'CORNER SLIDING', value: 'T-1: 25DB', sub: '(JIS A 1416)' }
          ]
        },
        colors: ['Natural White', 'Natural Silver', 'Shine Gray', 'Autumn Brown', 'Dusk Gray', 'Natural Black'],
        configurations: {
          WINDOW: [
            { name: 'SLIDING (2P2T)', desc: '2 panels sliding window on 2 tracks for panoramic views.', icon: 'sliding', image: '/images/product-windows.png' },
            { name: 'SLIDING (4P2T)', desc: '4 panels sliding window on 2 tracks for expansive openings.', icon: 'sliding', image: '/images/atis-detail.png' },
            { name: 'SLIDING (3P2T) - SFS', desc: '3 panels sliding window with SFS track system.', icon: 'sliding', image: '/images/we70-detail.png' },
            { name: 'CASEMENT WINDOW', desc: 'Outswing casement window with friction hinges.', icon: 'casement', image: '/images/blog-casement-windows.png' },
            { name: 'AWNING WINDOW', desc: 'Top-hinged outswing awning window for smooth ventilation.', icon: 'awning', image: '/images/blog-window-types.png' },
            { name: 'FIXED WINDOW', desc: 'Stationary fixed glass pane for structural viewing.', icon: 'fixed', image: '/images/hero-windows-v2.png' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Heavy-duty 2 panels wind-resistant patio sliding door.', icon: 'door-sliding', image: '/images/we70-studio.png' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Heavy-duty 4 panels storm-proof sliding patio door.', icon: 'door-sliding', image: '/images/grants-studio.png' },
            { name: 'SLIDING (3P2T) - SFS DOOR', desc: '3 panels sliding window with SFS track system.', icon: 'door-sliding', image: '/images/we70-detail.png' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Skyscraper-certified water-tight outswing entrance door.', icon: 'door-swing', image: '/images/blog_door_types.png' }
          ]
        }
      },
      {
        id: 'grants-plus',
        name: 'GRANTS Plus',
        seriesLabel: 'Series',
        tagline: 'SUPERIOR RESISTANCE AND ARCHITECTURAL STRENGTH',
        description: 'GRANTS Plus elevates performance to international standards with certified ASTM weather and wind insulation, designed specifically for premium high-rise residences.',
        uniqueFeature: {
          title: 'ASTM Certified High-Rise Strength',
          detail: 'Engineered for high-altitude wind resistance and water tight-locking mechanism.',
        },
        img: '/images/grants-plus-showcase.png',
        specs: {
          'FRAME DEPTH': ['101.6 mm', '120 mm (2 tracks sliding)', '178 mm (3 tracks sliding)'],
          'HEIGHT OF SILL': ['50 mm'],
          'GLASS THICKNESS': ['Up to 31.52 mm'],
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL GRANTS PRODUCT', value: '2000PA', sub: '(ASTM E330)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL GRANTS PRODUCT', value: '300PA', sub: '(ASTM E331)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL GRANTS PRODUCT', value: '10.7M3/H.M2', sub: '(ASTM E283)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL GRANTS PRODUCT', value: 'T-1: 25DB', sub: '(JIS A 1416)' }
          ]
        },
        colors: ['Natural White', 'Natural Silver', 'Shine Gray', 'Autumn Brown', 'Dusk Gray', 'Natural Black'],
        configurations: {
          WINDOW: [
            { name: 'SLIDING (2P2T)', desc: 'ASTM certified 2 panels high-performance sliding window.', icon: 'sliding', image: '/images/product-windows.png' },
            { name: 'SLIDING (4P2T)', desc: 'ASTM certified 4 panels wind-resistant sliding window.', icon: 'sliding', image: '/images/atis-detail.png' },
            { name: 'SLIDING (3P2T) - SFS', desc: '3 tracks high-altitude sliding window configuration.', icon: 'sliding', image: '/images/we70-detail.png' },
            { name: 'CASEMENT WINDOW', desc: 'High-sealing casement window for modern skyscrapers.', icon: 'casement', image: '/images/blog-casement-windows.png' },
            { name: 'AWNING WINDOW', desc: 'Skyscraper-grade awning window with heavy-duty locks.', icon: 'awning', image: '/images/blog-window-types.png' },
            { name: 'FIXED WINDOW', desc: 'Premium reinforced stationary glass facade pane.', icon: 'fixed', image: '/images/hero-windows-v2.png' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Heavy-duty 2 panels wind-resistant patio sliding door.', icon: 'door-sliding', image: '/images/we70-studio.png' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Heavy-duty 4 panels storm-proof sliding patio door.', icon: 'door-sliding', image: '/images/grants-studio.png' },
            { name: 'SLIDING (3P2T) - SFS DOOR', desc: '3 panels sliding window with SFS track system.', icon: 'door-sliding', image: '/images/we70-detail.png' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Skyscraper-certified water-tight outswing entrance door.', icon: 'door-swing', image: '/images/blog_door_types.png' }
          ]
        }
      },
      {
        id: 'atis',
        name: 'ATIS',
        seriesLabel: 'Series',
        tagline: 'STREAMLINED DESIGN FOR MODERN LIVING',
        description: 'ATIS combines aesthetic appeal with advanced innovation and technology. Guided by a simple design concept, every product seamlessly unites the indoors with the outdoors without compromise.',
        uniqueFeature: {
          title: 'Streamlined Design',
          detail: 'Seamless design with beautiful functionality, offering smooth lines, surfaces, and operation.',
        },
        img: '/images/atis-showcase.png',
        specs: {
          'FRAME DEPTH': ['88 mm', '131.5 mm (3 tracks sliding)'],
          'HEIGHT OF SILL': ['55 mm'],
          'GLASS THICKNESS': ['5, 6, 8 - 15.52, 22 mm'],
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL PRODUCT', value: 'S-2 (1200PA)', sub: '(JIS A 1515)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'W-3 (250PA)', sub: '(JIS A 1517)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'A-4', sub: '(JIS A 1516)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL PRODUCT', value: 'T-1: 25DB', sub: '(JIS A 1416)' }
          ]
        },
        colors: ['Natural White', 'Natural Silver', 'Shine Gray', 'Autumn Brown', 'Dusk Gray', 'Natural Black'],
        configurations: {
          WINDOW: [
            { name: 'SLIDING (2P2T)', desc: 'Modern minimal 2 panels sliding window.', icon: 'sliding', image: '/images/product-windows.png' },
            { name: 'SLIDING (4P2T)', desc: 'Modern minimal 4 panels sliding window.', icon: 'sliding', image: '/images/atis-detail.png' },
            { name: 'CASEMENT (OPERATOR)', desc: 'Casement window with built-in folding operator hand crank.', icon: 'casement', image: '/images/blog-casement-windows.png' },
            { name: 'AWNING (OPERATOR)', desc: 'Awning window with built-in folding operator hand crank.', icon: 'awning', image: '/images/blog-window-types.png' },
            { name: 'TILT & TURN', desc: 'Inward tilting and turning mechanism for ventilation.', icon: 'tilt-turn', image: '/images/atis-studio.png' },
            { name: 'FIXED WINDOW', desc: 'Sleek architectural fixed window pane.', icon: 'fixed', image: '/images/hero-windows-v2.png' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Minimal-profile 2 panels sliding door.', icon: 'door-sliding', image: '/images/we70-studio.png' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Minimal-profile 4 panels sliding patio door.', icon: 'door-sliding', image: '/images/grants-studio.png' },
            { name: 'OUT SWING DOOR', desc: 'Sleek premium outswing door with hidden hinge elements.', icon: 'door-swing', image: '/images/blog_door_types.png' },
            { name: 'IN SWING DOOR', desc: 'Sleek premium inswing door with hidden hinge elements.', icon: 'door-swing', image: '/images/blog_door_types.png' }
          ]
        }
      },
      {
        id: 'atis-plus',
        name: 'ATIS Plus',
        seriesLabel: 'Series',
        tagline: 'SUPERIOR NOISE SHIELD AND EXTRA INSULATION',
        description: 'ATIS Plus enhances the classic ATIS configuration with an acoustically-engineered noise shield, offering up to 30 dB sound dampening for serene urban living.',
        uniqueFeature: {
          title: 'Acoustic PVB Noise Shield',
          detail: 'Heavy sound-insulating glass integration with multi-chamber profiles.',
        },
        img: '/images/atis-plus-showcase.png',
        specs: {
          'FRAME DEPTH': ['88 mm', '131.5 mm (3 tracks sliding)'],
          'HEIGHT OF SILL': ['55 mm'],
          'GLASS THICKNESS': ['5, 6, 8 - 15.52, 22 mm (24, 26 mm for fixed)'],
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL PRODUCT', value: 'S-2 (1200PA)', sub: '(JIS A 1515)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'W-3 (250PA)', sub: '(JIS A 1517)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'A-4', sub: '(JIS A 1516)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL PRODUCT', value: 'T-2: 30DB', sub: '(JIS A 1416)' }
          ]
        },
        colors: ['Natural White', 'Natural Silver', 'Shine Gray', 'Autumn Brown', 'Dusk Gray', 'Natural Black'],
        configurations: {
          WINDOW: [
            { name: 'SLIDING (2P2T)', desc: 'Acoustic-insulated 2 panels sliding window.', icon: 'sliding', image: '/images/product-windows.png' },
            { name: 'SLIDING (4P2T)', desc: 'Acoustic-insulated 4 panels sliding window.', icon: 'sliding', image: '/images/atis-detail.png' },
            { name: 'CASEMENT (OPERATOR)', desc: 'Heavy double-glazed casement window with folding operator.', icon: 'casement', image: '/images/blog-casement-windows.png' },
            { name: 'AWNING (OPERATOR)', desc: 'Heavy double-glazed awning window with folding operator.', icon: 'awning', image: '/images/blog-window-types.png' },
            { name: 'FIXED WINDOW', desc: 'Double-glazed sound insulating fixed window.', icon: 'fixed', image: '/images/hero-windows-v2.png' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Concealed-profile sound barrier sliding door.', icon: 'door-sliding', image: '/images/we70-studio.png' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Concealed-profile sound barrier 4 panels sliding door.', icon: 'door-sliding', image: '/images/grants-studio.png' },
            { name: 'OUT SWING DOOR', desc: 'Soundproof outswing entrance door with multi-point lock.', icon: 'door-swing', image: '/images/blog_door_types.png' }
          ]
        }
      },
      {
        id: 'we-70',
        name: 'WE 70',
        seriesLabel: 'Series',
        tagline: 'JAPANESE CRAFTSMANSHIP FOR EVERYDAY',
        description: "WE 70 delivers TOSTEM's legendary quality for everyday living. Designed for wider accessibility while maintaining strict standards, it ensures trusted performance for all.",
        uniqueFeature: {
          title: 'Airflow Slot / Ventilation Door',
          detail: 'Airflow Slot / Ventilation Door lets fresh air in while the door stays closed, reducing odors, moisture, and heat, with secure 35 mm locked ventilation when away.',
        },
        img: '/images/we-showcase.png',
        specs: {
          'FRAME DEPTH': ['72 mm', '104 mm (3 tracks sliding)'],
          'HEIGHT OF SILL': ['35 mm'],
          'GLASS THICKNESS': ['5, 6, 8 mm'],
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL PRODUCT', value: '500PA - 800PA', sub: '(JIS A 1515)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'W-2: 150PA', sub: '(JIS A 1517)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'A-3: 10M3/H.M2', sub: '(JIS A 1516)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL PRODUCT', value: 'T-1: 25DB', sub: '(JIS A 1416)' }
          ]
        },
        colors: ['Natural White', 'Natural Silver', 'Shine Gray', 'Autumn Brown', 'Dusk Gray', 'Natural Black'],
        configurations: {
          WINDOW: [
            { name: 'SLIDING (2P2T)', desc: 'Standard everyday sliding window configuration.', icon: 'sliding', image: '/images/product-windows.png' },
            { name: 'SLIDING (4P2T)', desc: 'Standard everyday 4 panels sliding window.', icon: 'sliding', image: '/images/we70-detail.png' },
            { name: 'CASEMENT WINDOW', desc: 'Traditional outswing casement window.', icon: 'casement', image: '/images/blog-casement-windows.png' },
            { name: 'AWNING WINDOW', desc: 'Traditional outswing awning window.', icon: 'awning', image: '/images/blog-window-types.png' },
            { name: 'FIXED WINDOW', desc: 'Everyday standard fixed picture window.', icon: 'fixed', image: '/images/hero-windows-v2.png' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Standard everyday 2 panels sliding door.', icon: 'door-sliding', image: '/images/we70-studio.png' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Standard everyday 4 panels sliding door.', icon: 'door-sliding', image: '/images/grants-studio.png' },
            { name: 'OUT SWING DOOR', desc: 'Traditional secure outswing entrance door.', icon: 'door-swing', image: '/images/blog_door_types.png' },
            { name: 'VENTILATION DOOR', desc: 'Unique airflow/ventilation door for fresh kitchen breeze.', icon: 'door-swing', image: '/images/interior_swing_door_1778838623299.png' }
          ]
        }
      },
      {
        id: 'we-plus',
        name: 'WE Plus',
        seriesLabel: 'Series',
        tagline: 'REINFORCED STRENGTH AND HEAVY-DUTY HARDWARE',
        description: 'WE Plus takes Japanese craftsmanship to the next level, incorporating robust structural reinforcement and high-performance weatherproofing gaskets.',
        uniqueFeature: {
          title: 'Weatherproof Gasket System',
          detail: 'Premium weatherproofing seals engineered to block heavy monsoon rainfall and wind pressure.',
        },
        img: '/images/we-plus-showcase.png',
        specs: {
          'FRAME DEPTH': ['88 mm', '120 mm (3 tracks sliding)'],
          'HEIGHT OF SILL': ['35 mm'],
          'GLASS THICKNESS': ['5, 6, 8 mm'],
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL PRODUCT', value: '1000PA', sub: '(JIS A 1515)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'W-3 (250PA)', sub: '(JIS A 1517)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'A-3: 10M3/H.M2', strokeWidth: '1.2', sub: '(JIS A 1516)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL PRODUCT', value: 'T-1: 25DB', sub: '(JIS A 1416)' }
          ]
        },
        colors: ['Natural White', 'Natural Silver', 'Shine Gray', 'Autumn Brown', 'Dusk Gray', 'Natural Black'],
        configurations: {
          WINDOW: [
            { name: 'SLIDING (2P2T)', desc: 'Reinforced 2 panels sliding window configuration.', icon: 'sliding', image: '/images/product-windows.png' },
            { name: 'SLIDING (4P2T)', desc: 'Reinforced 4 panels sliding window configuration.', icon: 'sliding', image: '/images/we70-detail.png' },
            { name: 'CASEMENT WINDOW', desc: 'Reinforced outswing casement window.', icon: 'casement', image: '/images/blog-casement-windows.png' },
            { name: 'AWNING WINDOW', desc: 'Reinforced outswing awning window.', icon: 'awning', image: '/images/blog-window-types.png' },
            { name: 'FIXED WINDOW', desc: 'Reinforced stationary picture fixed window.', icon: 'fixed', image: '/images/hero-windows-v2.png' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Heavy-duty reinforced 2 panels sliding door.', icon: 'door-sliding', image: '/images/we70-studio.png' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Heavy-duty reinforced 4 panels sliding door.', icon: 'door-sliding', image: '/images/grants-studio.png' },
            { name: 'OUT SWING DOOR', desc: 'Heavy-duty reinforced entrance outswing door.', icon: 'door-swing', image: '/images/blog_door_types.png' }
          ]
        }
      },
    ],
  },
  {
    id: 'interior',
    title: 'Interior Solutions',
    description: 'TOSTEM’s interior series, created to transform your home with seamless connections between indoor comfort and outdoor spaces.',
    img: '/images/interior_hero_main_1778838710819.png',
    heroImg: '/images/interior_hero_main_1778838710819.png',
    series: [
      {
        id: 'in16',
        name: 'IN16 Series',
        seriesLabel: '',
        tagline: 'AUTHENTIC JAPANESE CRAFTSMANSHIP',
        description: 'Intelligent design and elegant simplicity that harmonizes with Tostem’s exterior systems for a unified architectural look.',
        uniqueFeature: {
          title: 'Designed to Match',
          detail: 'Colors, finishes, and forms are specifically engineered to synchronize with Tostem windows and doors.',
        },
        img: '/images/interior_hero_main_1778838710819.png',
        specs: {
          'FRAME DEPTH': ['50 mm — 144 mm'],
          'HEIGHT OF SILL': ['N/A'],
          'GLASS THICKNESS': ['Standard Glazing'],
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }
          ],
          'WATER TIGHTNESS': [
            { label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }
          ],
          'AIR TIGHTNESS': [
            { label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }
          ],
          'NOISE INSULATION': [
            { label: 'DURABILITY', value: '100,000 Cycles', sub: 'Certified' }
          ]
        },
        colors: ['Natural White', 'Shine Gray', 'Autumn Brown', 'Dusk Gray', 'Natural Black'],
        configurations: {
          WINDOW: [
            { name: 'INTERNAL FIXED WINDOW', desc: 'Concealed frame partition window.', icon: 'fixed', image: '/images/interior_hero_main_1778838710819.png' }
          ],
          DOOR: [
            { name: 'SWING PARTITION DOOR', desc: 'Minimal acoustic swing internal partition door.', icon: 'door-swing', image: '/images/interior_swing_door_1778838623299.png' },
            { name: 'SLIDING PARTITION DOOR', desc: 'Floor-flush multi-sliding glass barrier wall.', icon: 'door-sliding', image: '/images/interior_grand_opening_1778838691195.png' }
          ]
        }
      },
    ],
  },
];
