import { MediaItem, Hotspot, ConfigOption } from '../types';

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'hero-villa',
    title: 'Arcadia Amethyst at Coastal Sanctuary',
    category: 'exterior',
    src: '/media/external-villa-gullwing.jpg',
    description: 'Sculpted dihedral gullwing doors aloft against a Pacific sunset, presenting the satin Amethyst finish with bespoke illuminated Spirit of Ecstasy.',
    highlight: 'Dihedral Gullwing Doors',
    details: ['Electric soft-close actuators', 'Double-glazed acoustic canopy', 'Porcelain leather surround']
  },
  {
    id: 'duotone-morph',
    title: 'Continuum Morph Duotone Transition',
    category: 'exterior',
    src: '/media/color-combinations.jpg',
    description: 'Precision hand-painted gradient transitioning seamlessly from deep regal Amethyst across the flanks into liquid Arcadia Silver chrome.',
    highlight: 'Continuum Morph Finish',
    details: ['Seven-stage clearcoat polishing', 'Micro-fine pigment blending', 'Anti-reflective nano shield']
  },
  {
    id: 'studio-stage',
    title: 'Monolithic Proportions — Studio Stage',
    category: 'exterior',
    src: '/media/stage-studio.jpg',
    description: 'Commanding stance under master studio illumination, revealing the razor-sharp waistline and iconic Pantheon-inspired grille architecture.',
    highlight: 'Pantheon Architecture',
    details: ['Hand-polished stainless steel vanes', 'Concealed active aero louvers', 'Laser crystal signature headlights']
  },
  {
    id: 'top-view',
    title: 'Aero Canopy & Panoramic Glasshouse',
    category: 'exterior',
    src: '/media/top-view.jpg',
    description: 'Overhead perspective demonstrating the tapered glasshouse teardrop profile, minimizing drag while bathing the interior sanctuary in diffused natural light.',
    highlight: 'Electrochromic Sky-Lounge',
    details: ['Full electrochromic opacity tuning', 'Dual Starlight fiber-optic matrix', 'Integrated solar trickle-cell array']
  },
  {
    id: 'high-speed',
    title: 'Dynamic High-Speed Glide',
    category: 'exterior',
    src: '/media/high-speed.jpg',
    description: 'High-speed coastal run exhibiting the Active-Morph hydraulic suspension keeping the carriage perfectly level through aggressive sweepers.',
    highlight: 'Effortless Waftability',
    details: ['Predictive road-scanning stereoscopic cameras', 'Continuous damping control (1,000 Hz)', 'Active rear-wheel steering (up to 4.5°)']
  },
  {
    id: 'rear-view-angle',
    title: 'Fastback Boat-Tail Architecture',
    category: 'exterior',
    src: '/media/rear-view-angle.jpg',
    description: 'Swept-back aerodynamic tail featuring an unbroken horizontal LED lightblade that pulses with amethyst radiance under braking.',
    highlight: 'Continuous Lightblade',
    details: ['Full-width micro-OLED blade', 'Integrated carbon-fiber diffuser', 'Concealed amethyst quad-titanium exhaust exits']
  },
  {
    id: 'midnight-city',
    title: 'Midnight Metropolitan Stance',
    category: 'environment',
    src: '/media/midnight-view.jpg',
    description: 'Under the nocturnal neon glow of the metropolis, deep purple undertones emerge from the satin paintwork.',
    highlight: 'Metropolitan Aura',
    details: ['Laser crystal matrix lighting', 'Subtle ground-level welcome carpet glow', 'Acoustic glass insulation']
  },
  {
    id: 'blazing-bumper',
    title: 'Active Aero & Underfloor Illumination',
    category: 'exterior',
    src: '/media/blazing-bumper.jpg',
    description: 'Bespoke underbody ground-effect lighting that illuminates the tarmac in synchrony with hybrid power delivery.',
    highlight: 'Kinetic Underglow',
    details: ['Dynamic luminance based on torque output', 'Carbon composite aerodynamic ground splitter', 'Diffuser venturi channels']
  },
  {
    id: 'beach-sunset',
    title: 'Seaside Coastal Solitude',
    category: 'environment',
    src: '/media/beach-view.jpg',
    description: 'Resting on the Mediterranean shore, the Amethyst coachwork harmonizes with the rhythmic ocean surf and golden twilight.',
    highlight: 'Grand Touring Poise',
    details: ['Marine-grade corrosion protection', 'Climate-conditioned glass', 'Dust and salt air filtration system']
  },
  {
    id: 'mountain-stream',
    title: 'Alpine Stream Sanctuary',
    category: 'environment',
    src: '/media/stream-view.jpg',
    description: 'Serene mountain woodland setting emphasizing the Whisper-Quiet zero-emission electric cruise mode.',
    highlight: 'Whisper Silent EV Mode',
    details: ['All-electric quiet run up to 120 km', 'Instant 1,200 Nm electric torque', 'Zero cabin vibration signature']
  },
  {
    id: 'private-garage',
    title: 'The Collector\'s Vault',
    category: 'environment',
    src: '/media/garage-view.jpg',
    description: 'Encased within an architectural concrete collector gallery alongside bespoke automotive masterworks.',
    highlight: 'Architectural Presence',
    details: ['Inductive wireless floor-charging ready', 'Automated trickle battery management', 'Custom car cover tailored in cashmere-blend']
  },
  {
    id: 'tech-dashboard',
    title: 'Bespoke Cockpit & Patek Philippe Duo',
    category: 'interior',
    src: '/media/tech-dashboard.jpg',
    description: 'Santos Palisander open-pore wood facia housing dual physical Patek Philippe tourbillon chronometers flanked by modern digital telemetry.',
    highlight: 'Horological Centerpiece',
    details: ['Dual gimbal-mounted mechanical tourbillons', 'Open-pore Santos Palisander veneer', 'Digital glass gauge cluster with amethyst accents']
  },
  {
    id: 'seats-overview',
    title: 'Porcelain Leather Sovereign Seats',
    category: 'interior',
    src: '/media/seats-overview.jpg',
    description: 'Four individual sovereign thrones hand-trimmed in immaculate Porcelain leather with amethyst French double-stitching and piping.',
    highlight: 'Artisan Upholstery',
    details: ['24-way electric adjustment with hot stone massage', 'Ventilated and heated with micro-perforations', 'Embroidered CA monogram on headrests']
  },
  {
    id: 'seats-couch',
    title: 'Executive Rear Couch Lounge Mod',
    category: 'interior',
    src: '/media/seats-couch.jpg',
    description: 'Alternative bespoke rear compartment transformed into a continuous curved luxury couch sofa for supreme relaxation.',
    highlight: 'Bespoke Chaise Lounge',
    details: ['Continuous semi-aniline leather sofa bench', 'Concealed champagne refrigeration unit', 'Fold-out Santos Palisander cocktail tables']
  },
  {
    id: 'inside-sunroof',
    title: 'Starlight & Sunroof Vista',
    category: 'interior',
    src: '/media/inside-sunroof.jpg',
    description: 'Looking skyward through the electrochromic glass roof with integrated fiber-optic constellation illumination.',
    highlight: 'Celestial Glasshouse',
    details: ['1,600 individual fiber-optic constellation points', 'Custom shooting star animation sequence', 'Variable tint from 2% to 80% light transmission']
  },
  {
    id: 'driving-seats',
    title: 'Helm & Driver Command Throne',
    category: 'interior',
    src: '/media/driving-seats.jpg',
    description: 'Driver-centric ergonomic cockpit with matching two-tone leather steering wheel engraved "Patek Philippe pour Continuum".',
    highlight: 'Driver Command',
    details: ['Tactile knurled aluminum rotary selectors', 'Heated leather rim with 12 o\'clock amethyst marker', 'Head-Up Display with augmented route guidance']
  },
  {
    id: 'boot-space-luggage',
    title: 'Bespoke Fitted Luggage Suite',
    category: 'interior',
    src: '/media/boot-space-luggage.jpg',
    description: 'Handcrafted four-piece luggage suite tailored precisely to the rear boot contours in matching Porcelain and Amethyst leather.',
    highlight: 'Four-Piece Luggage Set',
    details: ['Titanium zip pulls with monogram engraving', 'Interior lined in purple silk jacquard', 'Integrated garment carrier and weekender bags']
  },
  {
    id: 'chassis-anatomy',
    title: 'Engineering Cutaway & Anatomy',
    category: 'engineering',
    src: '/media/chassis-anatomy.jpg',
    description: 'Transparent anatomical blueprint highlighting the 3,000 HP twin-turbo V12 hybrid heart, graphene monocoque, and active hydraulics.',
    highlight: '3,000 HP Hybrid Architecture',
    details: ['Aerospace-grade V12 + Quad Axial-Flux Electric Motors', 'Graphene-Carbon structural monocoque', 'Floor-mounted solid-state battery array']
  },
  {
    id: 'engine-bonnet-view',
    title: 'Twin-Turbo V12 Powertrain Heart',
    category: 'engineering',
    src: '/media/engine-bonnet-view.jpg',
    description: 'Bespoke carbon-shrouded V12 internal combustion engine delivering visceral soundtrack and relentless grand-touring thrust.',
    highlight: 'Twin-Turbo V12 Core',
    details: ['6.75-litre bespoke aluminum block', 'Twin variable-geometry turbochargers', 'Hand-built by master technicians in Goodwood']
  },
  {
    id: 'hybrid-powertrain-parts',
    title: 'Solid-State & Axial-Flux Electric Drive',
    category: 'engineering',
    src: '/media/hybrid-powertrain-parts.jpg',
    description: 'High-voltage inverter, copper busbars, and solid-state battery modules delivering instantaneous torque to all four wheels.',
    highlight: 'Solid-State Tech',
    details: ['800-volt ultra-fast silicon-carbide architecture', '350 kW DC charging capability (10% to 80% in 12 mins)', 'Active liquid-cooled battery thermal pack']
  },
  {
    id: 'wheel-turbofan',
    title: '23" Amethyst Turbofan Aeroblade Wheel',
    category: 'engineering',
    src: '/media/wheel-turbofan.jpg',
    description: 'Forged lightweight aerodynamic wheels with amethyst inserts and self-righting center caps that remain vertical during flight.',
    highlight: 'Self-Righting Center Cap',
    details: ['Active brake cooling air extraction vanes', 'Illuminated floating monogram emblem', 'Custom Pirelli P-Zero Elect noise-cancelling tires']
  },
  {
    id: 'spirit-of-ecstasy',
    title: 'Bespoke Illuminated Amethyst Spirit of Ecstasy',
    category: 'horology',
    src: '/media/spirit-of-ecstasy.jpg',
    description: 'Cast in optical-grade frosted amethyst crystal, glowing with internal luminescence upon key approach.',
    highlight: 'Illuminated Crystal Prow',
    details: ['Precision frosted crystal glass casting', 'Edge-lit purple and warm white micro-LEDs', 'Motorized anti-theft retraction mechanism']
  },
  {
    id: 'patek-philippe-continuum',
    title: 'Patek Philippe Grand Complications — Pour Continuum',
    category: 'horology',
    src: '/media/patek-philippe-continuum.jpg',
    description: 'One-of-one haute horlogerie skeletonized grand complication timepiece paired exclusively with the Continuum Arcadia Amethyst commission.',
    highlight: 'Piece Unique Watch',
    details: ['Minute repeater with cathedral gongs', 'Tourbillon escapement with instantaneous perpetual calendar', 'Hand-stitched purple Mississippiensis alligator strap']
  },
  {
    id: 'key-fob',
    title: 'Bespoke Presentation Casket & Titanium Key Fob',
    category: 'horology',
    src: '/media/key-fob.jpg',
    description: 'Matching Santos Palisander and titanium presentation box uniting the owner’s chronometer and kinetic key fob with pulsing amethyst LED conduit.',
    highlight: 'Presentation Casket',
    details: ['Solid Santos Palisander wood casket', 'Titanium key with haptic vehicle summons button', 'Inductive charging cradle for timepiece winder and key']
  },
  {
    id: 'logo-custom',
    title: 'Bespoke Coachbuild Monogram',
    category: 'horology',
    src: '/media/logo-custom.jpg',
    description: 'The interwoven Continuum Arcadia "CA" heraldic insignia crafted from milled aerospace titanium and vitreous amethyst enamel.',
    highlight: 'Heraldic Insignia',
    details: ['Hand-applied vitreous hot enamel', 'Beveled diamond-cut titanium borders', 'Mounted against matte forged carbon fiber background']
  }
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'v12-engine',
    x: 27,
    y: 48,
    title: '3,000 HP V12 Hybrid Core',
    subtitle: 'Twin-Turbocharged 6.75L V12 + Quad Axial-Flux Electric Boost',
    specs: [
      'Combined Output: 3,000 Horsepower / 2,206 kW',
      'Peak Torque: 3,400 Nm (2,507 lb-ft) instantaneous',
      '0–100 km/h (0–62 mph): 2.1 seconds',
      'Top Speed: 380 km/h (236 mph) electronically governed'
    ],
    description: 'The apex of internal combustion majesty fused with modern electric propulsion. The hand-assembled V12 provides acoustic euphoria while four axial-flux electric motors provide instantaneous off-the-line surge.',
    relatedImage: '/media/engine-bonnet-view.jpg'
  },
  {
    id: 'graphene-chassis',
    x: 74,
    y: 28,
    title: 'Graphene-Carbon Monocoque',
    subtitle: 'Space-Age Architecture of Luxury & Torsional Rigidity',
    specs: [
      'Chassis Material: Single-piece Graphene-infused Carbon Weave',
      'Torsional Rigidity: 72,000 Nm per degree',
      'Curb Weight Reduction: -28% compared to conventional aluminum spaceframes',
      'Crash Energy Dissipation: Integrated Kevlar crumple zones'
    ],
    description: 'An unyielding passenger safety sanctuary that isolates vibrations, enhances acoustic serenity, and provides a rigid foundation for the active suspension to float over road imperfections.',
    relatedImage: '/media/stage-studio.jpg'
  },
  {
    id: 'solid-state-battery',
    x: 58,
    y: 62,
    title: 'Solid-State Battery Array',
    subtitle: 'Floor-Mounted Ultra-Dense Energy Storage',
    specs: [
      'Capacity: 110 kWh Solid-State electrolyte',
      'Energy Density: 480 Wh/kg (non-flammable ceramic separator)',
      'Pure EV Silent Range: 120 km (75 miles) whisper cruise',
      'Fast Charging: 800V DC Architecture, 10–80% in 12 minutes'
    ],
    description: 'Mounted below the floorline to maintain a center of gravity mere inches off the asphalt. The solid-state cells eliminate thermal runaway risks and provide relentless current during full-throttle deployment.',
    relatedImage: '/media/hybrid-powertrain-parts.jpg'
  },
  {
    id: 'active-hydraulics',
    x: 83,
    y: 66,
    title: 'Active-Morph Suspension',
    subtitle: 'Magic Carpet Ride with Predictive Road-Surface Scanning',
    specs: [
      'System: Electro-Hydraulic Active Dampers with Morphing Swaybars',
      'Scan Horizon: 15-meter stereoscopic forward road profiling',
      'Actuation Speed: 15 milliseconds reaction per corner',
      'Four-Wheel Steering: Counter-steers at low speed, parallels at highway velocity'
    ],
    description: 'Continuously adjusts damping and ride height proactively before the tires encounter potholes, crests, or undulations, rendering the cabin an imperceptible calm bubble.',
    relatedImage: '/media/high-speed.jpg'
  },
  {
    id: 'sovereign-interior',
    x: 60,
    y: 40,
    title: 'Porcelain & Amethyst Sanctuary',
    subtitle: 'Bespoke Coachbuilt Cabin Architecture',
    specs: [
      'Leather: Semi-aniline Scandinavian bullhide in Porcelain Cream',
      'Veneer: Santos Palisander open-pore wood with silver stringing',
      'Acoustic Deadening: 120 kg soundproofing with active active noise-cancellation',
      'Horology: Dual Patek Philippe tourbillons integrated in the center stack'
    ],
    description: 'Designed as a private sanctuary of peace. Every touchpoint is genuine cold metal, polished crystal, fine grain leather, or open-grain Santos Palisander timber.',
    relatedImage: '/media/tech-dashboard.jpg'
  }
];

export const EXTERIOR_COLOR_OPTIONS: ConfigOption[] = [
  {
    id: 'amethyst-pure',
    name: 'Arcadia Amethyst Deep Velvet',
    description: 'Deep royal amethyst purple with iridescent violet pearl under sunlight.',
    colorCode: '#4a154b',
    previewImage: '/media/external-villa-gullwing.jpg',
    badge: 'Signature Commission'
  },
  {
    id: 'continuum-morph',
    name: 'Continuum Morph Duotone',
    description: 'Graduated seamless blend from deep Amethyst front to Arcadia Liquid Silver rear.',
    colorCode: 'linear-gradient(135deg, #3d1b4d 0%, #d8d8e0 100%)',
    previewImage: '/media/color-combinations.jpg',
    badge: 'Atelier Masterpiece'
  },
  {
    id: 'arcadia-silver',
    name: 'Arcadia Liquid Chrome Silver',
    description: 'High-luminance liquid mercury finish with reflective mirror depth.',
    colorCode: '#c5c8cf',
    previewImage: '/media/stage-studio.jpg'
  },
  {
    id: 'midnight-amethyst',
    name: 'Midnight Amethyst Shadow',
    description: 'Ultra-dark near-black purple that only reveals its crystalline depths under direct illumination.',
    colorCode: '#1a0b22',
    previewImage: '/media/midnight-view.jpg'
  }
];

export const SPIRIT_OPTIONS: ConfigOption[] = [
  {
    id: 'illuminated-amethyst',
    name: 'Illuminated Amethyst Crystal',
    description: 'Hand-carved frosted amethyst glass with internal LED illumination at night.',
    previewImage: '/media/spirit-of-ecstasy.jpg',
    badge: 'Commission Standard'
  },
  {
    id: 'polished-platinum',
    name: 'Polished Solid Platinum',
    description: 'Heavy mirror-polished solid platinum with hand-engraved jeweler markings.',
    previewImage: '/media/spirit-of-ecstasy.jpg'
  },
  {
    id: 'carbon-inlay',
    name: 'Forged Amethyst Carbon Weave',
    description: 'Lightweight forged carbon fiber infused with violet resin flakes.',
    previewImage: '/media/logo-custom.jpg'
  }
];

export const INTERIOR_OPTIONS: ConfigOption[] = [
  {
    id: 'sovereign-4seat',
    name: 'Sovereign 4-Seat Executive Club',
    description: 'Individual rear captain thrones with extending legrests, personal cooling, and central console.',
    previewImage: '/media/seats-overview.jpg',
    badge: 'Grand Tourer'
  },
  {
    id: 'couch-lounge',
    name: 'Bespoke Rear Couch & Chaise Modification',
    description: 'Continuous curved residential sofa seating transforming the aft cabin into a private lounge.',
    previewImage: '/media/seats-couch.jpg',
    badge: 'Coachbuild Special'
  }
];

export const LUGGAGE_OPTIONS: ConfigOption[] = [
  {
    id: 'fitted-suite',
    name: '4-Piece Amethyst Leather Luggage Suite',
    description: 'Custom fitted weekender bags, garment carriers, and vanity case matched to cabin leather.',
    previewImage: '/media/boot-space-luggage.jpg',
    badge: 'Included in Commission'
  },
  {
    id: 'champagne-boot',
    name: 'Champagne & Caviar Boot Dressing',
    description: 'Equipped with temperature-controlled twin champagne cellars and crystal flutes.',
    previewImage: '/media/boot-space.jpg'
  }
];
