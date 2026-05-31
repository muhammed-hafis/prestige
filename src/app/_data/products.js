export const productCategories = [
  {
    id: 'tostem',
    title: 'Window & Door',
    description: 'World-class aluminium window and door systems by Tostem, featuring Japanese innovation and timeless design.',
    img: '/images/product-windows.png',
    heroImg: '/images/hero.png',

    series: [
      {
        id: 'grants',
        heroImg: '/images/grants/grants.avif',
        name: 'GRANTS',
        seriesLabel: 'Series',
        tagline: 'MASTERING THE ART OF LIVING SPACE',
        description: 'GRANTS, crafted for low-rise residences, transforms spaces with expansive glass panels, seamless lines, and refined aesthetics. Blending innovation with elegance, it frames homes with timeless design and open views.',
        uniqueFeature: {
          title: "A Perfect Balance Of Life's Perspective",
          detail: 'Symmetrical frame design for perfect balance of artistic perspective.',
        },
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
        heroImg: '/images/grants/grants.avif',
        name: 'GRANTS Plus',
        seriesLabel: 'Series',
        tagline: 'SUPERIOR RESISTANCE AND ARCHITECTURAL STRENGTH',
        description: 'GRANTS Plus elevates performance to international standards with certified ASTM weather and wind insulation, designed specifically for premium high-rise residences.',
        uniqueFeature: {
          title: 'ASTM Certified High-Rise Strength',
          detail: 'Engineered for high-altitude wind resistance and water tight-locking mechanism.',
        },
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
        heroImg: '/images/atis/atis.avif',
        name: 'ATIS',
        seriesLabel: 'Series',
        tagline: 'STREAMLINED DESIGN FOR MODERN LIVING',
        description: 'ATIS combines aesthetic appeal with advanced innovation and technology. Guided by a simple design concept, every product seamlessly unites the indoors with the outdoors without compromise.',
        uniqueFeature: {
          title: 'Streamlined Design',
          detail: 'Seamless design with beautiful functionality, offering smooth lines, surfaces, and operation.',
        },
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
        heroImg: '/images/atis/atis.avif',
        name: 'ATIS Plus',
        seriesLabel: 'Series',
        tagline: 'SUPERIOR NOISE SHIELD AND EXTRA INSULATION',
        description: 'ATIS Plus enhances the classic ATIS configuration with an acoustically-engineered noise shield, offering up to 30 dB sound dampening for serene urban living.',
        uniqueFeature: {
          title: 'Acoustic PVB Noise Shield',
          detail: 'Heavy sound-insulating glass integration with multi-chamber profiles.',
        },
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
        heroImg: '/images/we 70/we.avif',
        name: 'WE 70',
        seriesLabel: 'Series',
        tagline: 'JAPANESE CRAFTSMANSHIP FOR EVERYDAY',
        description: "WE 70 delivers TOSTEM's legendary quality for everyday living. Designed for wider accessibility while maintaining strict standards, it ensures trusted performance for all.",
        uniqueFeature: {
          title: 'Airflow Slot / Ventilation Door',
          detail: 'Airflow Slot / Ventilation Door lets fresh air in while the door stays closed, reducing odors, moisture, and heat, with secure 35 mm locked ventilation when away.',
        },
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
        heroImg: '/images/we 70/we.avif',
        name: 'WE Plus',
        seriesLabel: 'Series',
        tagline: 'REINFORCED STRENGTH AND HEAVY-DUTY HARDWARE',
        description: 'WE Plus takes Japanese craftsmanship to the next level, incorporating robust structural reinforcement and high-performance weatherproofing gaskets.',
        uniqueFeature: {
          title: 'Weatherproof Gasket System',
          detail: 'Premium weatherproofing seals engineered to block heavy monsoon rainfall and wind pressure.',
        },
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
      {
        id: 'giesta',
        heroImg: '/images/giesta/giesta.avif',
        name: 'GIESTA',
        seriesLabel: 'Doors',
        tagline: 'HIGH-SECURITY PREMIUM ENTRANCE DOORS',
        description: 'GIESTA combines sophisticated wooden aesthetics with a robust steel core and multi-point security locks, creating the ultimate grand entryway for modern Saudi estates.',
        uniqueFeature: {
          title: 'Insulated Steel Core & Multi-Point Locking',
          detail: 'A reinforced internal steel frame covered by wood-grain laminate, ensuring absolute safety and premium thermal weatherproofing.',
        },
        img: '/images/giesta/giesta.avif',
        specs: {
          'FRAME DEPTH': ['101.6 mm'],
          'HEIGHT OF SILL': ['Out-swing 50 mm', 'In-swing outside 30 / inside 14 mm'],
          'DOOR FRAME': [
            'Top and side frame:',
            '- Wood pattern type: wood pattern resin sheet, wrapping on aluminum profile with synthetic rubber',
            '- Painted type: anodized aluminum profile',
            'Sill: Anodized aluminum profile'
          ],
          'DOOR PANEL': [
            'External sheet:',
            '- Wood pattern type: (External) resin laminated sheet / (Internal) anti-rust epoxy coating',
            '- Polystyrene (EPS foam)',
            'Insulating glass thickness 23 mm (cleared 3 + air gap 16 + patterned glass 4)'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL PRODUCT', value: 'S-2 (1200PA)', sub: '(JIS A 1515)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'W-2 (150PA)', sub: '(JIS A 1517)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'A-4 (2)', sub: '(JIS A 1516)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL PRODUCT', value: 'N/A', sub: '(JIS A 1416)' }
          ]
        },
        colors: [
          'Turin Pine',
          'Crea Mocha',
          'Crea Rusk',
          'Teak',
          'Polish Silver',
          'Silky White',
          'Autumn Brown'
        ],
        configurations: {
          DOOR: [
            { name: 'GIESTA D01 ENTRANCE DOOR', desc: 'Premium high-security door with vertical panelling.', icon: 'door-swing', image: '/images/giesta/door/entrance door d01.avif' },
            { name: 'GIESTA D02 ENTRANCE DOOR', desc: 'Classic double-inset panel design with premium hardware.', icon: 'door-swing', image: '/images/giesta/door/entrance door d02.avif' },
            { name: 'GIESTA D03 ENTRANCE DOOR', desc: 'Modern horizontal-stripe panel design.', icon: 'door-swing', image: '/images/giesta/door/entrance door d03.avif' },
            { name: 'GIESTA G01 GLASS DOOR', desc: 'Elegant entrance door featuring vertical glass lights.', icon: 'door-swing', image: '/images/giesta/door/entrance door g01.avif' },
            { name: 'GIESTA G02 GLASS DOOR', desc: 'Premium entrance door with dual vertical glass panels.', icon: 'door-swing', image: '/images/giesta/door/entrance door g02.avif' },
            { name: 'GIESTA G03 GLASS DOOR', desc: 'Modern entrance door with frosted geometric glass.', icon: 'door-swing', image: '/images/giesta/door/entrance door g03.avif' },
            { name: 'GIESTA G04 GLASS DOOR', desc: 'High-security door with asymmetrical glass slit.', icon: 'door-swing', image: '/images/giesta/door/entrance door g04.avif' },
            { name: 'GIESTA P01 PATTERNED DOOR', desc: 'Premium wood-patterned entrance door.', icon: 'door-swing', image: '/images/giesta/door/entrance door p01.avif' },
            { name: 'GIESTA P02 PATTERNED DOOR', desc: 'Sophisticated wood-texture horizontal panel door.', icon: 'door-swing', image: '/images/giesta/door/entrance door p02.avif' },
            { name: 'GIESTA P03 PATTERNED DOOR', desc: 'Clean metallic finish wood-grain door.', icon: 'door-swing', image: '/images/giesta/door/entrance door p03.avif' },
            { name: 'GIESTA 302 ENTRANCE DOOR', desc: 'Structural high-security insulated door.', icon: 'door-swing', image: '/images/giesta/door/entrance door 302.avif' }
          ]
        }
      },
      {
        id: 'giesta-airflow',
        heroImg: '/images/giesta-airflow/giesta-airflow.avif',
        name: 'GIESTA Airflow',
        seriesLabel: 'Doors',
        tagline: 'INTEGRATED NATURAL VENTILATION ENTRANCE DOORS',
        description: 'GIESTA Airflow combines the high-security structural steel core and wood-pattern styling of the Giesta series with an integrated vertical sliding glass ventilation panel.',
        uniqueFeature: {
          title: 'Integrated Secure Airflow Slot',
          detail: 'Allows constant fresh air circulation while the door is locked and secured, blocking desert heat and sand.',
        },
        img: '/images/giesta-airflow/giesta-airflow.avif',
        specs: {
          'FRAME DEPTH': ['101.6 mm'],
          'HEIGHT OF SILL': ['Out-swing 50 mm', 'In-swing outside 30 / inside 14 mm'],
          'DOOR FRAME': [
            'Top and side frame:',
            '- Wood pattern type: wood pattern resin sheet, wrapping on aluminum profile with synthetic rubber',
            '- Painted type: anodized aluminum profile',
            'Sill: Anodized aluminum profile'
          ],
          'DOOR PANEL': [
            'External sheet:',
            '- Wood pattern type: (External) resin laminated sheet / (Internal) anti-rust epoxy coating',
            '- Polystyrene (EPS foam)',
            'Insulating glass thickness 23 mm (cleared 3 + air gap 16 + patterned glass 4)'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [
            { label: 'GENERAL PRODUCT', value: 'S-2 (1200PA)', sub: '(JIS A 1515)' }
          ],
          'WATER TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'W-2 (150PA)', sub: '(JIS A 1517)' }
          ],
          'AIR TIGHTNESS': [
            { label: 'GENERAL PRODUCT', value: 'A-4 (2)', sub: '(JIS A 1516)' }
          ],
          'NOISE INSULATION': [
            { label: 'GENERAL PRODUCT', value: 'N/A', sub: '(JIS A 1416)' }
          ]
        },
        colors: [
          'Turin Pine',
          'Crea Mocha',
          'Crea Rusk',
          'Teak'
        ],
        configurations: {
          DOOR: [
            { name: 'GIESTA AIRFLOW SYSTEM', desc: 'Premium secure vertical-ventilation entrance door system.', icon: 'door-swing', image: '/images/giesta-airflow/door/giest-airflow.avif' }
          ]
        }
      },
    ],
  },
  {
    id: 'ozone',
    title: 'OZONE Stealth Series',
    description: 'Minimalist Framed Glass Partition Systems.',
    img: '/images/home/ozone.webp',
    heroImg: '/images/home/ozone.webp',
    series: [
      {
        id: 'single-double',
        name: 'Single Sliding (1+1) & Double Sliding (2+2)',
        seriesLabel: 'Minimalist Sliders',
        tagline: 'THE QUINTESSENTIAL SLIDING SYSTEM',
        description: 'The quintessential minimalist door system for premium office enclosures and private residential lounges.',
        uniqueFeature: {
          title: 'Concealed Rail Suspension',
          detail: 'Compact tracks hidden in the drop ceiling for architectural clean lines.',
        },
        img: '/images/ozone/single&double(1+1 & 2+2)/Axis Slim Frame (4507) Single Sliding System (1+1).webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles custom-engineered'],
          'HEIGHT OF SILL': ['Zero bottom track (top-hung tracking)'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Soft-Open & Soft-Close mechanism'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'ACOUSTIC ISOLATION', value: 'Up to 35 dB', sub: 'Acoustic PVB/EPDM gaskets' }]
        },
        colors: ['BL-LX-G', 'BM', 'Phantom Grey', 'Tan Brass', 'VBL-B', 'Vintage Brass Brush', 'Rose Gold Luxe Brush'],
        configurations: {
          DOOR: [
            { name: 'Axis Slim Frame (4507) — 1+1', desc: 'Single sliding panel system built on Axis 4507 profile.', icon: 'door-sliding', image: '/images/ozone/single&double(1+1 & 2+2)/Axis Slim Frame (4507) Single Sliding System (1+1).webp' },
            { name: 'Axis Slim Frame (4507) — 2+2', desc: 'Double sliding panel system built on Axis 4507 profile.', icon: 'door-sliding', image: '/images/ozone/single&double(1+1 & 2+2)/Axis Slim Frame (4507) Single Sliding System (2+2).webp' },
            { name: 'Linea Slim Frame (4507) — 1+1', desc: 'Single sliding panel system built on Linea 4507 profile.', icon: 'door-sliding', image: '/images/ozone/single&double(1+1 & 2+2)/Linea Slim Frame (4507) Single Sliding System(1+1).webp' },
            { name: 'Linea Slim Frame (4507) — 2+2', desc: 'Double sliding panel system built on Linea 4507 profile.', icon: 'door-sliding', image: '/images/ozone/single&double(1+1 & 2+2)/Linea Slim Frame (4507) Single Sliding System(2+2).webp' },
            { name: 'Slim Frame (4516) — 1+1', desc: 'Single sliding panel system built on Slim 4516 profile.', icon: 'door-sliding', image: '/images/ozone/single&double(1+1 & 2+2)/Slim Frame (4516) Single Sliding System (1+1).webp' },
            { name: 'Slim Frame (4516) — 2+2', desc: 'Double sliding panel system built on Slim 4516 profile.', icon: 'door-sliding', image: '/images/ozone/single&double(1+1 & 2+2)/Slim Frame (4516) Single Sliding System (2+2).webp' }
          ]
        }
      },
      {
        id: 'synchronised',
        name: 'Synchronized Sliding (2+2)',
        seriesLabel: 'Symmetric Sliders',
        tagline: 'SMART ARCHITECTURAL SYMMETRY',
        description: 'A smart architectural system where moving one sliding panel smoothly glides the opposing panel open or shut in perfect, effortless symmetry.',
        uniqueFeature: {
          title: 'Symmetrical Cable Drive',
          detail: 'Moving one panel automatically drives the other panel in perfect sync.',
        },
        img: '/images/ozone/sysnchronised Sliding (2+2)/Axis Slim Frame (4507) Synchronised Sliding System (2+2).webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles custom-engineered'],
          'HEIGHT OF SILL': ['Zero bottom track (top-hung tracking)'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Synchronized mechanical transmission'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'ACOUSTIC ISOLATION', value: 'Up to 35 dB', sub: 'Acoustic PVB/EPDM gaskets' }]
        },
        colors: ['Natural Silver', 'Matte Black', 'Anodized Bronze'],
        configurations: {
          DOOR: [
            { name: 'Axis Slim Frame (4507) Sync', desc: 'Synchronized double sliding on Axis 4507 profile.', icon: 'door-sliding', image: '/images/ozone/sysnchronised Sliding (2+2)/Axis Slim Frame (4507) Synchronised Sliding System (2+2).webp' },
            { name: 'Linea Slim Frame (4507) Sync', desc: 'Synchronized double sliding on Linea 4507 profile.', icon: 'door-sliding', image: '/images/ozone/sysnchronised Sliding (2+2)/Linea Slim Frame (4507) Synchronised Sliding System (2+2).webp' },
            { name: 'Slim Frame (4516) Sync', desc: 'Synchronized double sliding on Slim 4516 profile.', icon: 'door-sliding', image: '/images/ozone/sysnchronised Sliding (2+2)/Slim Frame (4516) Synchronised Sliding System (2+2).webp' }
          ]
        }
      },
      {
        id: 'telescopic',
        name: 'Telescopic Sliding Series (1+2 / 1+3 / 1+4)',
        seriesLabel: 'Space-Saving Sliders',
        tagline: 'MAXIMIZED RETRACTABLE WALKWAYS',
        description: 'The ultimate space-saving solution for wide structural openings. Multiple glass sheets glide stacked behind a single fixed panel, allowing you to maximize the walkthrough clearance when fully retracted.',
        uniqueFeature: {
          title: 'Multi-Slider Overlap',
          detail: 'Glides and stacks multiple sheets on parallel tracks simultaneously.',
        },
        img: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Axis Slim Frame (4507) Telescopic Sliding System (1+2).webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles custom-engineered'],
          'HEIGHT OF SILL': ['Zero bottom track (top-hung tracking)'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Telescopic interlocking guides'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'ACOUSTIC ISOLATION', value: 'Up to 35 dB', sub: 'Acoustic PVB/EPDM gaskets' }]
        },
        colors: ['Natural Silver', 'Matte Black', 'Anodized Bronze'],
        configurations: {
          DOOR: [
            { name: 'Axis (4507) — 1+2', desc: 'Telescopic sliding system built on Axis 4507 (1 fixed + 2 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Axis Slim Frame (4507) Telescopic Sliding System (1+2).webp' },
            { name: 'Axis (4507) — 1+3', desc: 'Telescopic sliding system built on Axis 4507 (1 fixed + 3 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Axis Slim Frame (4507) Telescopic Sliding System (1+3).webp' },
            { name: 'Axis (4507) — 1+4', desc: 'Telescopic sliding system built on Axis 4507 (1 fixed + 4 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Axis Slim Frame (4507) Telescopic Sliding System (1+4).webp' },
            { name: 'Linea (4507) — 1+2', desc: 'Telescopic sliding system built on Linea 4507 (1 fixed + 2 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Linea Slim Frame (4507) Telescopic Sliding System (1+2).webp' },
            { name: 'Linea (4507) — 1+3', desc: 'Telescopic sliding system built on Linea 4507 (1 fixed + 3 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Linea Slim Frame (4507) Telescopic Sliding System (1+3).webp' },
            { name: 'Linea (4507) — 1+4', desc: 'Telescopic sliding system built on Linea 4507 (1 fixed + 4 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Linea Slim Frame (4507) Telescopic Sliding System (1+4).webp' },
            { name: 'Slim (4516) — 1+2', desc: 'Telescopic sliding system built on Slim 4516 (1 fixed + 2 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Slim Frame (4516) Telescopic Sliding System (1+2).webp' },
            { name: 'Slim (4516) — 1+3', desc: 'Telescopic sliding system built on Slim 4516 (1 fixed + 3 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Slim Frame (4516) Telescopic Sliding System (1+3).webp' },
            { name: 'Slim (4516) — 1+4', desc: 'Telescopic sliding system built on Slim 4516 (1 fixed + 4 sliding panels).', icon: 'door-sliding', image: '/images/ozone/Telescopic Sliding Series (1+2  1+3  1+4)/Slim Frame (4516) Telescopic Sliding System (1+4).webp' }
          ]
        }
      },
      {
        id: 'pocket',
        name: 'Pocket Sliding Systems',
        seriesLabel: 'Concealed Sliders',
        tagline: 'CONCEALED WALL RECOVERY',
        description: 'A brilliant concealed design where the slim-framed glass doors slide completely inside hollow wall pockets, vanishing from sight entirely when opened.',
        uniqueFeature: {
          title: 'Zero Profile Footprint',
          detail: 'Doors retract completely into wall pockets to maximize room openings.',
        },
        img: '/images/ozone/Pocket Sliding Systems/Axis Slim Frame (4507) Pocket Sliding System.webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles custom-engineered'],
          'HEIGHT OF SILL': ['Zero bottom track (top-hung tracking)'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Pocket guide tracks with soft-return buffer'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'ACOUSTIC ISOLATION', value: 'Up to 35 dB', sub: 'Acoustic PVB/EPDM gaskets' }]
        },
        colors: ['Natural Silver', 'Matte Black', 'Anodized Bronze'],
        configurations: {
          DOOR: [
            { name: 'Axis Slim Frame (4507) Pocket', desc: 'Pocket sliding on Axis 4507 profile.', icon: 'door-sliding', image: '/images/ozone/Pocket Sliding Systems/Axis Slim Frame (4507) Pocket Sliding System.webp' },
            { name: 'Linea Slim Frame (4507) Pocket', desc: 'Pocket sliding on Linea 4507 profile.', icon: 'door-sliding', image: '/images/ozone/Pocket Sliding Systems/Linea Slim Frame (4507) Pocket Sliding System.webp' },
            { name: 'Slim Frame (4516) Pocket', desc: 'Pocket sliding on Slim 4516 profile.', icon: 'door-sliding', image: '/images/ozone/Pocket Sliding Systems/Slim Frame (4516) Pocket Sliding System.webp' }
          ]
        }
      },
      {
        id: 'sliding-folding',
        name: 'Sliding & Folding Systems (Offset Sliding / Centre Sliding)',
        seriesLabel: 'Movable Partition Walls',
        tagline: 'FLEXIBLE MULTI-ZONE CONFIGURATION',
        description: 'High-end movable glass walls that slide and fold neatly to the edge, utilizing specific offset or centred axis physics to partition large multi-functional corporate zones or conference spaces instantly.',
        uniqueFeature: {
          title: 'Offset & Centre Folding Physics',
          detail: 'Engineered pivots to stack multiple folding panels without structural deflection.',
        },
        img: '/images/ozone/Sliding & Folding Systems (Offset Sliding  Centre Sliding)/Sliding & Folding System - Center Sliding.webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles custom-engineered'],
          'HEIGHT OF SILL': ['Zero bottom track (top-hung tracking)'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Offset or centre hinge fold tracking'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'ACOUSTIC ISOLATION', value: 'Up to 35 dB', sub: 'Acoustic PVB/EPDM gaskets' }]
        },
        colors: ['Natural Silver', 'Matte Black', 'Anodized Bronze'],
        configurations: {
          DOOR: [
            { name: 'Centre Sliding Folding', desc: 'Centre sliding and folding layout for symmetrical stacking.', icon: 'door-sliding', image: '/images/ozone/Sliding & Folding Systems (Offset Sliding  Centre Sliding)/Sliding & Folding System - Center Sliding.webp' },
            { name: 'Offset Sliding Folding', desc: 'Offset sliding and folding layout for edge-aligned stacking.', icon: 'door-sliding', image: '/images/ozone/Sliding & Folding Systems (Offset Sliding  Centre Sliding)/Sliding & Folding System - Offset Sliding.webp' },
            { name: 'Soft-Open & Close Folding (Offset)', desc: 'Soft damping folding layout on offset axis.', icon: 'door-sliding', image: '/images/ozone/Sliding & Folding Systems (Offset Sliding  Centre Sliding)/Soft-Open & Close Sliding Folding System (Offset).webp' }
          ]
        }
      },
      {
        id: 'floor-spring',
        name: 'Frame Door System with Integrated Floor Spring',
        seriesLabel: 'Pivot Entrances',
        tagline: 'IMPOSING HEAVY-DUTY PIVOT STATEMENTS',
        description: 'Imposing, full-height glass doors equipped with heavy-duty hidden hydraulic floor springs. Engineered with a built-in double-action mechanism to open smoothly both ways and return softly to center.',
        uniqueFeature: {
          title: 'Concealed Hydraulic Springs',
          detail: 'Heavy-duty springs pocketed inside floor cavities for a completely hidden frame visual.',
        },
        img: '/images/ozone/Frame Door System with Integrated Floor Spring/Axis Frame (4507) Door System with Floor Spring.webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles matching Stealth Slide and Swing'],
          'HEIGHT OF SILL': ['Flush floor spring (concealed floor pocket)'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Integrated double-action pivot with hydraulic self-closing spring'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'DURABILITY', value: '500,000 Cycles', sub: 'Certified' }]
        },
        colors: ['Natural Silver', 'Matte Black', 'Anodized Bronze'],
        configurations: {
          DOOR: [
            { name: 'Axis Frame (4507) Floor Spring', desc: 'Frame door with integrated floor spring on Axis 4507 profile.', icon: 'door-swing', image: '/images/ozone/Frame Door System with Integrated Floor Spring/Axis Frame (4507) Door System with Floor Spring.webp' },
            { name: 'Standard Frame Floor Spring', desc: 'Standard frame door with integrated floor spring.', icon: 'door-swing', image: '/images/ozone/Frame Door System with Integrated Floor Spring/Frame Door System with Floor Spring.webp' },
            { name: 'Linea Frame (4507) Floor Spring', desc: 'Frame door with integrated floor spring on Linea 4507 profile.', icon: 'door-swing', image: '/images/ozone/Frame Door System with Integrated Floor Spring/Linea Frame (4507) Door System with Floor Spring.webp' }
          ]
        }
      },
      {
        id: 'swing-closer',
        name: 'Swing Door Solution with Overhead Door Closer',
        seriesLabel: 'Casement Entrances',
        tagline: 'CONTROLLED SILENT CASEMENT ENTRY',
        description: 'A highly secure, streamlined casement configuration utilizing sleek, surface-mounted or concealed overhead closers to ensure controlled, silent closing operations.',
        uniqueFeature: {
          title: 'Controlled Overhead Closer',
          detail: 'Adjustable damping overhead arm ensures soft-closing without impact.',
        },
        img: '/images/home/ozone-glass.webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles matching Stealth Slide and Swing'],
          'HEIGHT OF SILL': ['Concealed or surface overhead closer'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Overhead hydraulic door closer with adjustable speed parameters'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'DURABILITY', value: '500,000 Cycles', sub: 'Certified' }]
        },
        colors: ['Natural Silver', 'Matte Black', 'Anodized Bronze'],
        configurations: {
          DOOR: [
            // No variants, page displays fallback placeholder text
          ]
        }
      },
      {
        id: 'revolving',
        name: 'Framed 360° Revolving Door Systems',
        seriesLabel: 'Dramatic Entry Statement',
        tagline: 'THE ART OF DRAMATIC ENTRY STATEMENT',
        description: 'A breath-taking masterclass in interior engineering. Designed as a full-height, centre-pivot grand glass panel that rotates a complete 360 degrees on a heavy-duty concealed axis, creating a dramatic, premium entryway statement for executive offices and luxury villa showrooms.',
        uniqueFeature: {
          title: '360° Continuous Pivot Axis',
          detail: 'Grand full-height glass panel rotating freely 360 degrees on dynamic pivots.',
        },
        img: '/images/ozone/Framed 360° Revolving Door Systems/Framed 360° Revolving Door.webp',
        specs: {
          'FRAME DEPTH': ['Ultra-slim profiles matching Stealth Slide and Swing'],
          'HEIGHT OF SILL': ['Concealed floor/ceiling pivot points'],
          'DOOR PANEL': [
            'Glass Thickness: up to 12 mm safety tempered or laminated glass',
            'Grand pivot mechanism with 360-degree axis rotation'
          ]
        },
        performanceDetails: {
          'WIND PRESSURE': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'WATER TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'AIR TIGHTNESS': [{ label: 'INTERNAL USE', value: 'N/A', sub: 'Internal Partition' }],
          'NOISE INSULATION': [{ label: 'DURABILITY', value: '100,000 Cycles', sub: 'Certified' }]
        },
        colors: ['Natural Silver', 'Matte Black', 'Anodized Bronze'],
        configurations: {
          DOOR: [
            { name: '360° Revolving Door', desc: 'Grand framed 360° revolving single leaf door.', icon: 'door-swing', image: '/images/ozone/Framed 360° Revolving Door Systems/Framed 360° Revolving Door.webp' }
          ]
        }
      }
    ]
  },
  {
    id: 'alamin',
    title: 'ALAMIN Thermal Break Systems',
    description: 'High-performance, thermal-break aluminium profiles engineered specifically to block Gulf heat and fully comply with the Saudi Building Code (SBC).',
    img: '/images/home/al-amin.webp',
    heroImg: '/images/home/al-amin.webp',
    series: [
      { id: 'sl150', name: 'SL 150 Slim', seriesLabel: 'Minimalist' },
      { id: 'sl120', name: 'SL 120', seriesLabel: 'Premium Slider' },
      { id: 'sl120g', name: 'SL 120 Gradual', seriesLabel: 'Desert Seal' },
      { id: 'sl120m', name: 'SL 120 Monorail', seriesLabel: 'Pressure Seal' },
      { id: 'cc110', name: 'CC 110', seriesLabel: 'Casement Network' },
      { id: 'bifold', name: 'Bifold Doors', seriesLabel: 'Large-Span' },
      { id: 'liftslide', name: 'Lift & Slide + Tilt', seriesLabel: 'Dual-Function' },
      { id: 'entrance', name: 'Premium Entrance Doors', seriesLabel: 'Grand Entry' }
    ]
  }
];
