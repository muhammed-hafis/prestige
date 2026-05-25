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
            { name: 'SLIDING (2P2T)', desc: '2 panels sliding window on 2 tracks for panoramic views.', icon: 'sliding', image: '/images/grants/window/sliding2p2t.avif' },
            { name: 'SLIDING (4P2T)', desc: '4 panels sliding window on 2 tracks for expansive openings.', icon: 'sliding', image: '/images/grants/window/sliding4p2t.avif' },
            { name: 'SLIDING (3P2T) - SFS', desc: '3 panels sliding window with SFS track system.', icon: 'sliding', image: '/images/grants/window/sliding3p2t-sfs.avif' },
            { name: 'CASEMENT WINDOW', desc: 'Outswing casement window with friction hinges.', icon: 'casement', image: '/images/grants/window/casement window.avif' },
            { name: 'AWNING WINDOW', desc: 'Top-hinged outswing awning window for smooth ventilation.', icon: 'awning', image: '/images/grants/window/awning window.avif' },
            { name: 'FIXED WINDOW', desc: 'Stationary fixed glass pane for structural viewing.', icon: 'fixed', image: '/images/grants/window/fixed window.avif' },
            { name: 'CORNER FIXED WINDOW', desc: 'Expansive corner fixed glass pane for continuous visual connection.', icon: 'fixed', image: '/images/grants/window/corner fixed window.avif' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Heavy-duty 2 panels wind-resistant patio sliding door.', icon: 'door-sliding', image: '/images/grants/door/sliding2p2t.avif' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Heavy-duty 4 panels storm-proof sliding patio door.', icon: 'door-sliding', image: '/images/grants/door/sliding4p2t.avif' },
            { name: 'SLIDING (3P2T) - SFS DOOR', desc: '3 panels sliding door with SFS track system for smooth entry.', icon: 'door-sliding', image: '/images/grants/door/sliding3p2t-sfs.avif' },
            { name: 'SLIDING (3P3T) DOOR', desc: 'Expansive 3 panels sliding door with independent tracks.', icon: 'door-sliding', image: '/images/grants/door/sliding3p3t.avif' },
            { name: 'SLIDING (6P3T) DOOR', desc: 'Panoramic 6 panels storm-proof sliding door on 3 tracks.', icon: 'door-sliding', image: '/images/grants/door/sliding6p3t.avif' },
            { name: 'FLAT RAIL SLIDING (2P2T) DOOR', desc: 'Flat-sill premium barrier-free 2 panels sliding door.', icon: 'door-sliding', image: '/images/grants/door/flat rail sliding2p2t.avif' },
            { name: 'FLAT RAIL SLIDING (4P2T) DOOR', desc: 'Flat-sill premium barrier-free 4 panels sliding door.', icon: 'door-sliding', image: '/images/grants/door/flat rail sliding4p2t.avif' },
            { name: 'FLAT RAIL SLIDING (3P3T) DOOR', desc: 'Flat-sill premium barrier-free 3 panels sliding door on 3 tracks.', icon: 'door-sliding', image: '/images/grants/door/flat rail sliding (3p3t).avif' },
            { name: 'FLAT RAIL SLIDING (6P3T) DOOR', desc: 'Flat-sill premium barrier-free 6 panels sliding door on 3 tracks.', icon: 'door-sliding', image: '/images/grants/door/flat rail sliding (6p3t).avif' },
            { name: 'FLAT RAIL CORNER SLIDING (2P2T + 2P2T) DOOR', desc: 'Symmetrical 4 panels barrier-free corner sliding patio door.', icon: 'door-sliding', image: '/images/grants/door/flat rail corner sliding(2p2t + 2p2t).webp' },
            { name: 'FLAT RAIL CORNER SLIDING (3P3T + 3P3T) DOOR', desc: 'Massive 6 panels barrier-free corner sliding architectural door.', icon: 'door-sliding', image: '/images/grants/door/flat rail corner sliding (3p3t + 3p3t).webp' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Skyscraper-certified water-tight outswing single entrance door.', icon: 'door-swing', image: '/images/grants/door/out-swing-door(single leaf).avif' },
            { name: 'OUT SWING DOOR (DOUBLE LEAF)', desc: 'Skyscraper-certified high-end outswing double entrance door.', icon: 'door-swing', image: '/images/grants/door/out-swing-door(double leaf).avif' }
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
            { name: 'SLIDING (2P2T)', desc: 'ASTM certified 2 panels high-performance sliding window.', icon: 'sliding', image: '/images/grants/window/sliding2p2t.avif' },
            { name: 'SLIDING (4P2T)', desc: 'ASTM certified 4 panels wind-resistant sliding window.', icon: 'sliding', image: '/images/grants/window/sliding4p2t.avif' },
            { name: 'SLIDING (3P2T) - SFS', desc: '3 tracks high-altitude sliding window configuration.', icon: 'sliding', image: '/images/grants/window/sliding3p2t-sfs.avif' },
            { name: 'CASEMENT WINDOW', desc: 'High-sealing casement window for modern skyscrapers.', icon: 'casement', image: '/images/grants/window/casement window.avif' },
            { name: 'AWNING WINDOW', desc: 'Skyscraper-grade awning window with heavy-duty locks.', icon: 'awning', image: '/images/grants/window/awning window.avif' },
            { name: 'FIXED WINDOW', desc: 'Premium reinforced stationary glass facade pane.', icon: 'fixed', image: '/images/grants/window/fixed window.avif' },
            { name: 'CORNER FIXED WINDOW', desc: 'Premium high-rise corner fixed window for unbroken vistas.', icon: 'fixed', image: '/images/grants/window/corner fixed window.avif' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Heavy-duty 2 panels wind-resistant patio sliding door.', icon: 'door-sliding', image: '/images/grants/door/sliding2p2t.avif' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Heavy-duty 4 panels storm-proof sliding patio door.', icon: 'door-sliding', image: '/images/grants/door/sliding4p2t.avif' },
            { name: 'SLIDING (3P2T) - SFS DOOR', desc: '3 panels sliding window with SFS track system.', icon: 'door-sliding', image: '/images/grants/door/sliding3p2t-sfs.avif' },
            { name: 'SLIDING (3P3T) DOOR', desc: 'High-rise storm-proof 3 panels sliding door.', icon: 'door-sliding', image: '/images/grants/door/sliding3p3t.avif' },
            { name: 'SLIDING (6P3T) DOOR', desc: 'Heavy-duty reinforced 6 panels sliding patio door.', icon: 'door-sliding', image: '/images/grants/door/sliding6p3t.avif' },
            { name: 'FLAT RAIL SLIDING (2P2T) DOOR', desc: 'ASTM-level flat-sill 2 panels sliding door.', icon: 'door-sliding', image: '/images/grants/door/flat rail sliding2p2t.avif' },
            { name: 'FLAT RAIL CORNER SLIDING (2P2T + 2P2T) DOOR', desc: 'Premium reinforced flat-sill corner sliding door.', icon: 'door-sliding', image: '/images/grants/door/flat rail corner sliding(2p2t + 2p2t).webp' },
            { name: 'FLAT RAIL CORNER SLIDING (3P3T + 3P3T) DOOR', desc: 'Heavy-duty reinforced flat-sill corner sliding door.', icon: 'door-sliding', image: '/images/grants/door/flat rail corner sliding (3p3t + 3p3t).webp' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Skyscraper-certified water-tight outswing entrance door.', icon: 'door-swing', image: '/images/grants/door/out-swing-door(single leaf).avif' },
            { name: 'OUT SWING DOOR (DOUBLE LEAF)', desc: 'Skyscraper-certified premium outswing double entrance door.', icon: 'door-swing', image: '/images/grants/door/out-swing-door(double leaf).avif' }
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
            { name: 'SLIDING (2P2T)', desc: 'Modern minimal 2 panels sliding window.', icon: 'sliding', image: '/images/atis/window/sliding2p2t.avif' },
            { name: 'SLIDING (4P2T)', desc: 'Modern minimal 4 panels sliding window.', icon: 'sliding', image: '/images/atis/window/sliding4p2t.avif' },
            { name: 'SLIDING (3P3T)', desc: 'Sleek 3 panels sliding window configuration.', icon: 'sliding', image: '/images/atis/window/sliding3p3t.avif' },
            { name: 'CASEMENT (OPERATOR)', desc: 'Casement window with built-in folding operator hand crank.', icon: 'casement', image: '/images/atis/window/casement with operator handle.avif' },
            { name: 'CASEMENT (SINGLE LOCK)', desc: 'Casement window with sleek single lock handle design.', icon: 'casement', image: '/images/atis/window/casement with single lock.avif' },
            { name: 'DOUBLE CASEMENT', desc: 'Symmetrical double sash casement window design.', icon: 'casement', image: '/images/atis/window/double casement.avif' },
            { name: 'AWNING (OPERATOR)', desc: 'Awning window with built-in folding operator hand crank.', icon: 'awning', image: '/images/atis/window/awning with operator handle.avif' },
            { name: 'AWNING (SINGLE LOCK)', desc: 'Awning window with sleek single lock handle design.', icon: 'awning', image: '/images/atis/window/awning with single lock.avif' },
            { name: 'AWNING SLIT WINDOW', desc: 'Narrow awning slit window for targeted ventilation.', icon: 'awning', image: '/images/atis/window/awning slit window.avif' },
            { name: 'TILT & SLIDE', desc: 'Inward tilting and sliding mechanism for space-saving ventilation.', icon: 'tilt-turn', image: '/images/atis/window/tilt and slide window.avif' },
            { name: 'CORNER FIXED WINDOW', desc: 'Minimal corner fixed glass window for uninterrupted views.', icon: 'fixed', image: '/images/atis/window/corner fix window.avif' },
            { name: 'FIXED WINDOW', desc: 'Minimal stationary fixed glass pane for clean profiles.', icon: 'fixed', image: '/images/atis/window/fixed window.avif' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Minimal-profile 2 panels sliding door.', icon: 'door-sliding', image: '/images/atis/door/sliding2p2t.avif' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Minimal-profile 4 panels sliding patio door.', icon: 'door-sliding', image: '/images/atis/door/sliding4p2t.avif' },
            { name: 'SLIDING (3P3T) DOOR', desc: 'Minimal-profile 3 panels sliding door on independent tracks.', icon: 'door-sliding', image: '/images/atis/door/sliding (3p3t).avif' },
            { name: 'SLIDING (6P3T) DOOR', desc: 'Minimal-profile 6 panels sliding door on 3 tracks.', icon: 'door-sliding', image: '/images/atis/door/sliding (6p3t).avif' },
            { name: 'ENTRANCE SLIDING (2P2T)', desc: 'Premium minimal sliding entrance door system.', icon: 'door-sliding', image: '/images/atis/door/entrance sliding 2p2t.avif' },
            { name: 'ENTRANCE SLIDING (4P2T) DOOR', desc: 'Premium minimal 4 panels sliding entrance door system.', icon: 'door-sliding', image: '/images/atis/door/entrance sliding door 4p2t.avif' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Sleek premium outswing single leaf door with hidden hinge elements.', icon: 'door-swing', image: '/images/atis/door/out-sing door (single leaf).avif' },
            { name: 'OUT SWING DOOR (DOUBLE LEAF)', desc: 'Sleek premium outswing double leaf door with hidden hinge elements.', icon: 'door-swing', image: '/images/atis/door/out swing door (double leaf).avif' }
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
            { name: 'SLIDING (2P2T)', desc: 'Concealed-profile sound barrier 2 panels sliding window.', icon: 'sliding', image: '/images/atis-plus/window/sliding (2p2t).avif' },
            { name: 'SLIDING (4P2T)', desc: 'Concealed-profile sound barrier 4 panels sliding window.', icon: 'sliding', image: '/images/atis-plus/window/sliding (4p2t).avif' },
            { name: 'SLIDING (3P3T)', desc: 'Concealed-profile sound barrier 3 panels sliding window.', icon: 'sliding', image: '/images/atis-plus/window/sliding (3p3t).avif' },
            { name: 'CASEMENT WINDOW', desc: 'Heavy double-glazed soundproof casement window.', icon: 'casement', image: '/images/atis-plus/window/casement window.avif' },
            { name: 'AWNING WINDOW', desc: 'Heavy double-glazed soundproof awning window.', icon: 'awning', image: '/images/atis-plus/window/awning window.avif' },
            { name: 'FIXED WINDOW', desc: 'Double-glazed sound insulating fixed picture window.', icon: 'fixed', image: '/images/atis-plus/window/fixed window.avif' },
            { name: 'CORNER FIXED WINDOW', desc: 'Premium soundproof corner fixed glass window.', icon: 'fixed', image: '/images/atis-plus/window/corner fixed window.avif' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Concealed-profile sound barrier 2 panels sliding door.', icon: 'door-sliding', image: '/images/atis-plus/door/sliding (2p2t).avif' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Concealed-profile sound barrier 4 panels sliding door.', icon: 'door-sliding', image: '/images/atis-plus/door/sliding (4p2t).avif' },
            { name: 'SLIDING (3P3T) DOOR', desc: 'Concealed-profile sound barrier 3 tracks sliding door.', icon: 'door-sliding', image: '/images/atis-plus/door/sliding (3p3t).avif' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Soundproof outswing entrance door with multi-point lock.', icon: 'door-swing', image: '/images/atis-plus/door/out swing door (single leaf).avif' }
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
            { name: 'SLIDING (2P2T)', desc: 'Standard everyday sliding window configuration.', icon: 'sliding', image: '/images/we 70/window/sliding (2p2t).avif' },
            { name: 'SLIDING (4P2T)', desc: 'Standard everyday 4 panels sliding window.', icon: 'sliding', image: '/images/we 70/window/sliding (4p2t).avif' },
            { name: 'SLIDING (3P2T) - SFS WINDOW', desc: '3 panels sliding window with SFS track system.', icon: 'sliding', image: '/images/we 70/window/sliding (3p2t)-sfs.avif' },
            { name: 'CASEMENT WINDOW (SINGLE LEAF)', desc: 'Standard everyday outswing single casement window.', icon: 'casement', image: '/images/we 70/window/casement window (single).avif' },
            { name: 'CASEMENT WINDOW (DOUBLE LEAF)', desc: 'Standard everyday outswing double casement window.', icon: 'casement', image: '/images/we 70/window/casement window (double).avif' },
            { name: 'AWNING WINDOW', desc: 'Traditional outswing awning window.', icon: 'awning', image: '/images/we 70/window/awning window.avif' },
            { name: 'ALUMINIUM LOUVER', desc: 'Everyday ventilation aluminium louver panels.', icon: 'fixed', image: '/images/we 70/window/aluminium louver.webp' },
            { name: 'CORNER FIXED WINDOW (W1 & W2)', desc: 'Everyday corner fixed window system for structural views.', icon: 'fixed', image: '/images/we 70/window/corner fix window (window w1&w2).avif' },
            { name: 'FIXED WINDOW', desc: 'Standard everyday stationary fixed window.', icon: 'fixed', image: '/images/we 70/window/fix window.avif' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Standard everyday 2 panels sliding patio door.', icon: 'door-sliding', image: '/images/we 70/door/sliding (2p2t).avif' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Standard everyday 4 panels sliding patio door.', icon: 'door-sliding', image: '/images/we 70/door/sliding (4p2t).webp' },
            { name: 'SLIDING (3P2T) - SFS DOOR', desc: '3 panels sliding door with SFS track system.', icon: 'door-sliding', image: '/images/we 70/door/sliding (3p2t)-sfs.avif' },
            { name: 'SLIDING (3P3T) DOOR', desc: 'Standard everyday 3 panels sliding door on independent tracks.', icon: 'door-sliding', image: '/images/we 70/door/sliding (3p3t).avif' },
            { name: 'SLIDING (6P3T) DOOR', desc: 'Standard everyday 6 panels sliding patio door.', icon: 'door-sliding', image: '/images/we 70/door/sliding (6p3t).avif' },
            { name: 'ENTRANCE SLIDING (2P2T) DOOR', desc: 'Everyday entrance sliding door system.', icon: 'door-sliding', image: '/images/we 70/door/entrance sliding (2p2t).webp' },
            { name: 'ENTRANCE SLIDING (4P2T) DOOR', desc: 'Everyday 4 panels entrance sliding door system.', icon: 'door-sliding', image: '/images/we 70/door/entrance sliding (4p2t).avif' },
            { name: 'AIRFLOW VENTILATION DOOR', desc: 'Unique airflow/ventilation door for fresh kitchen breeze.', icon: 'door-swing', image: '/images/we 70/door/airflow door (single leaf).webp' },
            { name: 'IN SWING DOOR (SINGLE LEAF)', desc: 'Traditional secure inswing single leaf entrance door.', icon: 'door-swing', image: '/images/we 70/door/in swing door (single leaf).webp' },
            { name: 'IN SWING DOOR (DOUBLE LEAF)', desc: 'Traditional secure inswing double leaf entrance door.', icon: 'door-swing', image: '/images/we 70/door/in swing door (double leaf).webp' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Standard everyday outswing entrance door.', icon: 'door-swing', image: '/images/we 70/door/out swing door(single leaf).webp' },
            { name: 'OUT SWING DOOR (DOUBLE LEAF)', desc: 'Standard everyday outswing double entrance door.', icon: 'door-swing', image: '/images/we 70/door/out swing door (double leaf).webp' },
            { name: 'PARTITION SLIDING (2P2T) DOOR', desc: 'Sliding partition door system with 2 panels.', icon: 'door-sliding', image: '/images/we 70/door/partition door sliding (2p2t).avif' },
            { name: 'PARTITION SLIDING (3P3T) DOOR', desc: 'Sliding partition door system with 3 panels.', icon: 'door-sliding', image: '/images/we 70/door/partition door sliding (3p3t).avif' },
            { name: 'PARTITION SLIDING (4P2T) DOOR', desc: 'Sliding partition door system with 4 panels.', icon: 'door-sliding', image: '/images/we 70/door/partition door sliding (4p2t).avif' },
            { name: 'PARTITION SLIDING (6P6T) DOOR', desc: 'Sliding partition door system with 6 panels.', icon: 'door-sliding', image: '/images/we 70/door/partition door sliding (6p6t).avif' }
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
            { name: 'SLIDING (2P2T)', desc: 'Reinforced 2 panels sliding window configuration.', icon: 'sliding', image: '/images/we-plus/window/sliding(2p2t).avif' },
            { name: 'SLIDING (4P2T) WINDOW', desc: 'Reinforced 4 panels sliding window configuration.', icon: 'sliding', image: '/images/we-plus/window/sliding (4p2t).avif' },
            { name: 'SLIDING (3P3T) WINDOW', desc: 'Reinforced 3 panels sliding window configuration on independent tracks.', icon: 'sliding', image: '/images/we-plus/window/sliding(3p3t).avif' },
            { name: 'CASEMENT WINDOW (SINGLE LOCK)', desc: 'Reinforced outswing single lock casement window.', icon: 'casement', image: '/images/we-plus/window/casement window (sinle lock).avif' },
            { name: 'CASEMENT WINDOW (MULTI LOCK)', desc: 'Reinforced outswing multi-lock casement window.', icon: 'casement', image: '/images/we-plus/window/casement window (multi lock).avif' },
            { name: 'AWNING WINDOW (SINGLE LOCK)', desc: 'Reinforced outswing single lock awning window.', icon: 'awning', image: '/images/we-plus/window/awning window (single lock).avif' },
            { name: 'AWNING WINDOW (MULTI LOCK)', desc: 'Reinforced outswing multi-lock awning window.', icon: 'awning', image: '/images/we-plus/window/awning window (multi lock).avif' },
            { name: 'CORNER FIXED WINDOW (W1 & W2)', desc: 'Reinforced corner fixed window for expansive views.', icon: 'fixed', image: '/images/we-plus/window/corner fix window (window w1&w2).avif' },
            { name: 'FIXED WINDOW', desc: 'Reinforced stationary fixed glass window.', icon: 'fixed', image: '/images/we-plus/window/fix window.avif' }
          ],
          DOOR: [
            { name: 'SLIDING (2P2T) DOOR', desc: 'Heavy-duty reinforced 2 panels sliding patio door.', icon: 'door-sliding', image: '/images/we-plus/door/sliding (2p2t).avif' },
            { name: 'SLIDING (4P2T) DOOR', desc: 'Heavy-duty reinforced 4 panels sliding patio door.', icon: 'door-sliding', image: '/images/we-plus/door/sliding (4p2t).avif' },
            { name: 'SLIDING (3P3T) DOOR', desc: 'Heavy-duty reinforced 3 panels sliding door on independent tracks.', icon: 'door-sliding', image: '/images/we-plus/door/sliding (3p3t).avif' },
            { name: 'SLIDING (6P3T) DOOR', desc: 'Heavy-duty reinforced 6 panels sliding patio door on 3 tracks.', icon: 'door-sliding', image: '/images/we-plus/door/sliding (6p3t).avif' },
            { name: 'IN SWING DOOR (SINGLE LEAF)', desc: 'Heavy-duty reinforced inswing single entrance door.', icon: 'door-swing', image: '/images/we-plus/door/in swing door (single leaf).avif' },
            { name: 'IN SWING DOOR (DOUBLE LEAF)', desc: 'Heavy-duty reinforced inswing double entrance door.', icon: 'door-swing', image: '/images/we-plus/door/in swing door (double leaf).avif' },
            { name: 'OUT SWING DOOR (SINGLE LEAF)', desc: 'Heavy-duty reinforced entrance outswing single door.', icon: 'door-swing', image: '/images/we-plus/door/out swing door (single leaf).avif' },
            { name: 'OUT SWING DOOR (DOUBLE LEAF)', desc: 'Heavy-duty reinforced entrance outswing double door.', icon: 'door-swing', image: '/images/we-plus/door/out swing door (double leaf).avif' }
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
        name: 'IN16',
        seriesLabel: '',
        tagline: 'AUTHENTIC JAPANESE CRAFTSMANSHIP',
        description: 'Intelligent design and elegant simplicity that harmonizes with Tostem’s exterior systems for a unified architectural look.',
        uniqueFeature: {
          title: 'Designed to Match',
          detail: 'Colors, finishes, and forms are specifically engineered to synchronize with Tostem windows and doors.',
        },
        img: '/images/interior_hero_main_1778838710819.png',
        specs: {
          'FRAME DEPTH': [
            'Hanging Door: 1 Track (52 mm), 2 Tracks (98 mm), 3 Tracks (144 mm), 4 Tracks (190 mm)',
            'Swing Door: 50 mm',
            'Fixed Divider: 50 mm'
          ],
          'GLASS THICKNESS': [
            'Single glass (5, 6, 8, 10 mm)',
            'Laminated glass (3+3, 4+4 mm)'
          ]
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
            { name: 'FIXED DIVIDER', desc: 'Sleek glass divider partition for modern layouts.', icon: 'fixed', image: '/images/in16/fixed devider.avif' }
          ],
          DOOR: [
            { name: 'SWING DOOR', desc: 'Minimal acoustic swing door for internal partition.', icon: 'door-swing', image: '/images/in16/swing door.avif' },
            { name: 'HANGING DOOR (1P1T)', desc: '1 panel single track space-saving hanging sliding door.', icon: 'door-sliding', image: '/images/in16/hanging door (1p1t).avif' },
            { name: 'HANGING DOOR (2P1T)', desc: '2 panels single track space-saving hanging sliding door.', icon: 'door-sliding', image: '/images/in16/hanging door (2p1t).avif' },
            { name: 'HANGING DOOR (2P2T)', desc: '2 panels double track space-saving hanging sliding door.', icon: 'door-sliding', image: '/images/in16/hanging door (2p2t).avif' },
            { name: 'HANGING DOOR (3P3T)', desc: '3 panels triple track space-saving hanging sliding door.', icon: 'door-sliding', image: '/images/in16/hanging door (3p3t).avif' },
            { name: 'HANGING DOOR (4P4T)', desc: '4 panels quadruple track space-saving hanging sliding door.', icon: 'door-sliding', image: '/images/in16/hanging door (4p4t).avif' },
            { name: 'HANGING DOOR (6P3T)', desc: '6 panels triple track space-saving hanging sliding door.', icon: 'door-sliding', image: '/images/in16/hanging door (6p3t).avif' }
          ]
        }
      },
    ],
  },
];
