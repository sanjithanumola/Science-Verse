import { CelestialBody } from '../types';

export const SOLAR_SYSTEM_DATA: CelestialBody[] = [
  {
    id: 'sun',
    name: 'The Sun',
    type: 'star',
    diameterKm: 1392700,
    massKg: '1.989 × 10³⁰ kg (99.86% of solar system mass)',
    distanceFromSunMillionKm: 0,
    orbitalPeriodDays: 0,
    rotationPeriodHours: 609.12, // ~25-35 Earth days
    moonsCount: 0,
    meanTempC: 5500, // Surface; core is 15,000,000°C
    atmosphere: ['73% Hydrogen', '25% Helium', '1% Oxygen', 'Carbon, Neon, Iron traces'],
    color: '#FBBF24',
    orbitRadiusPx: 0,
    sizePx: 38,
    overview: 'A G-type main-sequence yellow dwarf star at the center of the Solar System. Generates energy via thermonuclear fusion converting hydrogen into helium.',
    keyFacts: [
      'Over 1.3 million Earths could fit inside the Sun.',
      'Core temperature reaches 15 million °C under extreme gravitational pressure.',
      'Light takes approximately 8 minutes and 20 seconds to travel from the Sun to Earth.',
      'Produces the solar wind, a stream of charged particles shaping the heliosphere.'
    ],
    missions: ['Parker Solar Probe', 'SOHO (Solar and Heliospheric Observatory)', 'Solar Dynamics Observatory (SDO)']
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    diameterKm: 4879,
    massKg: '3.301 × 10²³ kg (0.055 Earths)',
    distanceFromSunMillionKm: 57.9,
    orbitalPeriodDays: 88,
    rotationPeriodHours: 1407.6, // 58.6 Earth days
    moonsCount: 0,
    meanTempC: 167, // -180°C night to +430°C day
    atmosphere: ['Oxygen 42%', 'Sodium 29%', 'Hydrogen 22%', 'Helium 6% (extremely thin exosphere)'],
    color: '#9CA3AF',
    orbitRadiusPx: 45,
    sizePx: 8,
    overview: 'The smallest and innermost planet in the Solar System. Has no substantial atmosphere to trap heat, leading to extreme temperature swings between day and night.',
    keyFacts: [
      'Orbits the Sun faster than any other planet at ~47 km/s.',
      'Experiences the most extreme temperature swings in the solar system (-180°C to 430°C).',
      'Has a massive metallic iron core taking up 85% of its radius.',
      'Radar has detected water ice trapped in permanently shadowed polar craters.'
    ],
    missions: ['Mariner 10', 'MESSENGER', 'BepiColombo (en route)']
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    diameterKm: 12104,
    massKg: '4.867 × 10²⁴ kg (0.815 Earths)',
    distanceFromSunMillionKm: 108.2,
    orbitalPeriodDays: 224.7,
    rotationPeriodHours: -5832.5, // Retrograde rotation 243 days
    moonsCount: 0,
    meanTempC: 464,
    atmosphere: ['96.5% Carbon Dioxide', '3.5% Nitrogen', 'Clouds of Sulfuric Acid (H₂SO₄)'],
    color: '#F59E0B',
    orbitRadiusPx: 70,
    sizePx: 13,
    overview: 'Often called Earth’s twin in size, but possesses a runaway greenhouse effect making it the hottest planet in the Solar System with crushing atmospheric pressure 92 times Earth’s.',
    keyFacts: [
      'Rotates backwards (retrograde) compared to most planets; Sun rises in the west.',
      'A day on Venus (243 Earth days) is longer than its year (225 Earth days).',
      'Surface atmospheric pressure equals being 900 meters underwater on Earth.',
      'Surface is hot enough to melt lead at 464 °C (867 °F).'
    ],
    missions: ['Venera series (USSR)', 'Magellan (NASA)', 'Venus Express (ESA)', 'Akatsuki (JAXA)']
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    diameterKm: 12742,
    massKg: '5.972 × 10²⁴ kg',
    distanceFromSunMillionKm: 149.6,
    orbitalPeriodDays: 365.25,
    rotationPeriodHours: 23.93,
    moonsCount: 1,
    meanTempC: 15,
    atmosphere: ['78% Nitrogen (N₂)', '21% Oxygen (O₂)', '0.93% Argon', '0.04% Carbon Dioxide'],
    color: '#3B82F6',
    orbitRadiusPx: 100,
    sizePx: 14,
    overview: 'The third planet from the Sun and the only astronomical object known to harbor life. Rich in liquid surface water, an active magnetic field, and a protective ozone layer.',
    keyFacts: [
      'Only planet known with stable liquid water oceans covering 71% of its surface.',
      'The molten iron core creates a protective magnetosphere deflecting harmful cosmic rays.',
      'Tilted at 23.4 degrees, giving rise to distinct annual seasons.',
      'Plate tectonics continuously recycle carbon and reshape continents.'
    ],
    missions: ['Terra & Aqua', 'Landsat', 'International Space Station (ISS)', 'Hubble Space Telescope']
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    diameterKm: 6779,
    massKg: '6.417 × 10²³ kg (0.107 Earths)',
    distanceFromSunMillionKm: 227.9,
    orbitalPeriodDays: 687,
    rotationPeriodHours: 24.62,
    moonsCount: 2, // Phobos, Deimos
    meanTempC: -63,
    atmosphere: ['95.3% Carbon Dioxide', '2.6% Nitrogen', '1.9% Argon', '0.13% Oxygen'],
    color: '#EF4444',
    orbitRadiusPx: 135,
    sizePx: 10,
    overview: 'The "Red Planet", colored by iron oxide (rust) on its surface. Host to the solar system’s largest volcano (Olympus Mons) and deepest canyon (Valles Marineris).',
    keyFacts: [
      'Olympus Mons is a shield volcano 22 km tall—nearly 3 times the height of Mt. Everest.',
      'Valles Marineris is 4,000 km long and up to 7 km deep, dwarfing the Grand Canyon.',
      'Liquid water carved rivers and lakes billions of years ago; water ice persists at poles and sub-surface.',
      'Has two tiny captured asteroid moons named Phobos and Deimos.'
    ],
    missions: ['Perseverance & Ingenuity', 'Curiosity', 'Viking 1 & 2', 'Mars Reconnaissance Orbiter', 'Tianwen-1']
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    diameterKm: 139820,
    massKg: '1.898 × 10²⁷ kg (317.8 Earths, 2.5× all other planets combined)',
    distanceFromSunMillionKm: 778.6,
    orbitalPeriodDays: 4333, // ~11.86 Earth years
    rotationPeriodHours: 9.93,
    moonsCount: 95,
    meanTempC: -110,
    atmosphere: ['90% Hydrogen', '10% Helium', 'Methane, Ammonia, Water vapor traces'],
    color: '#D97706',
    orbitRadiusPx: 185,
    sizePx: 26,
    ring: true,
    overview: 'The gas giant king of planets, with a mass greater than twice all other planets combined. Famous for its colorful cloud bands and the Great Red Spot storm.',
    keyFacts: [
      'The Great Red Spot is a persistent anticyclonic storm larger than Earth, raging for over 350 years.',
      'Has the shortest day of any planet in the solar system (under 10 hours).',
      'The Galilean moons include Europa (subsurface ocean) and Io (most volcanic body).',
      'Acts as a gravitational shield, deflecting or capturing comets from reaching inner planets.'
    ],
    missions: ['Juno', 'Galileo', 'Voyager 1 & 2', 'JUICE (ESA, en route)', 'Europa Clipper (NASA, en route)']
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    diameterKm: 116460,
    massKg: '5.683 × 10²⁶ kg (95.2 Earths)',
    distanceFromSunMillionKm: 1433.5,
    orbitalPeriodDays: 10759, // ~29.45 Earth years
    rotationPeriodHours: 10.7,
    moonsCount: 146,
    meanTempC: -140,
    atmosphere: ['96% Hydrogen', '3% Helium', '0.4% Methane', 'Ammonia'],
    color: '#FCD34D',
    orbitRadiusPx: 235,
    sizePx: 22,
    ring: true,
    overview: 'Known as the "Jewel of the Solar System" for its dazzling, extensive ring system made of billions of chunks of ice and rock dust.',
    keyFacts: [
      'The rings span up to 282,000 km wide but are remarkably thin—often less than 10 meters thick!',
      'Saturn is the least dense planet in the solar system (0.687 g/cm³)—it would float in a giant bathtub of water.',
      'Its largest moon, Titan, is the only moon with a thick atmosphere and liquid methane lakes.',
      'Enceladus sprays water vapor geysers from a global subsurface ocean into space.'
    ],
    missions: ['Cassini-Huygens', 'Pioneer 11', 'Voyager 1 & 2']
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    diameterKm: 50724,
    massKg: '8.681 × 10²⁵ kg (14.5 Earths)',
    distanceFromSunMillionKm: 2872.5,
    orbitalPeriodDays: 30687, // ~84 Earth years
    rotationPeriodHours: -17.24,
    moonsCount: 28,
    meanTempC: -195,
    atmosphere: ['83% Hydrogen', '15% Helium', '2.3% Methane (gives cyan-blue color)'],
    color: '#06B6D4',
    orbitRadiusPx: 280,
    sizePx: 16,
    ring: true,
    overview: 'An ice giant that rotates on its side with an axial tilt of 97.8 degrees, rolling along its orbit like a bowling ball.',
    keyFacts: [
      'Rotates nearly sideways (axial tilt 97.8°), possibly caused by a giant ancient collision.',
      'Atmospheric methane absorbs red light, giving Uranus its distinctive pale cyan hue.',
      'Reaches the coldest atmospheric temperatures in the solar system (-224 °C).',
      'Has 13 faint concentric rings and 28 moons named after characters from Shakespeare and Alexander Pope.'
    ],
    missions: ['Voyager 2 (only close flyby in 1986)']
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    diameterKm: 49244,
    massKg: '1.024 × 10²⁶ kg (17.1 Earths)',
    distanceFromSunMillionKm: 4495.1,
    orbitalPeriodDays: 60190, // ~164.8 Earth years
    rotationPeriodHours: 16.11,
    moonsCount: 16,
    meanTempC: -201,
    atmosphere: ['80% Hydrogen', '19% Helium', '1.5% Methane'],
    color: '#2563EB',
    orbitRadiusPx: 325,
    sizePx: 16,
    ring: true,
    overview: 'The most distant major planet from the Sun. A vivid azure ice giant home to the fastest supersonic winds recorded anywhere in the Solar System.',
    keyFacts: [
      'Features the fastest winds in the Solar System, whipping up to 2,100 km/h (1,300 mph).',
      'First planet located through mathematical calculations (by Le Verrier and Adams) before being observed.',
      'Takes nearly 165 Earth years to complete one single orbit around the Sun.',
      'Its largest moon Triton has active nitrogen cryovolcanoes and orbits backward in retrograde.'
    ],
    missions: ['Voyager 2 (flyby in 1989)']
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'dwarf-planet',
    diameterKm: 2376,
    massKg: '1.309 × 10²² kg (0.002 Earths)',
    distanceFromSunMillionKm: 5906.4,
    orbitalPeriodDays: 90560, // ~248 Earth years
    rotationPeriodHours: -153.3,
    moonsCount: 5, // Charon, Nix, Hydra, Kerberos, Styx
    meanTempC: -229,
    atmosphere: ['Nitrogen', 'Methane', 'Carbon Monoxide (seasonal atmosphere)'],
    color: '#C084FC',
    orbitRadiusPx: 365,
    sizePx: 6,
    overview: 'A famous dwarf planet in the Kuiper Belt with a heart-shaped nitrogen ice glacier named Tombaugh Regio.',
    keyFacts: [
      'Reclassified as a dwarf planet by the IAU in 2006 because it has not cleared its orbital neighborhood.',
      'Its moon Charon is so large relative to Pluto that they orbit a mutual barycenter outside Pluto itself.',
      'Features towering water-ice mountains 3,500 meters high and nitrogen glaciers.',
      'Takes 248 Earth years to orbit the Sun, with an inclined (17°) elliptical orbit.'
    ],
    missions: ['New Horizons (historic flyby in July 2015)']
  }
];

export const DEEP_SPACE_OBJECTS = [
  {
    id: 'stellar-lifecycle',
    title: 'Life Cycle of Stars',
    category: 'Astrophysics',
    summary: 'From stellar nebulae to main sequence stars, red giants, planetary nebulae, white dwarfs, supernovas, neutron stars, and black holes.',
    content: 'Stars are born in molecular clouds of interstellar gas. When gravitational collapse triggers nuclear fusion of hydrogen into helium, a star enters the Main Sequence. Low-to-medium mass stars (like our Sun) swell into Red Giants and shed outer shells into Planetary Nebulae, leaving a dense White Dwarf. High-mass stars (>8 solar masses) explode in catastrophic Type II Supernovas, leaving ultra-dense Neutron Stars or collapsing past the Tolman-Oppenheimer-Volkoff limit into Black Holes.'
  },
  {
    id: 'black-holes',
    title: 'Black Holes & The Event Horizon',
    category: 'General Relativity',
    summary: 'Regions of spacetime where gravitational acceleration is so intense that nothing—not even electromagnetic radiation like light—can escape.',
    content: 'Described by Einstein’s General Relativity. The boundary of no return is the Event Horizon, whose radius is given by the Schwarzschild radius: r_s = 2GM / c². At the center lies a gravitational singularity where curvature becomes theoretically infinite. Supermassive black holes (millions to billions of solar masses, such as Sagittarius A* in the Milky Way) anchor galaxies and power quasars.'
  },
  {
    id: 'galaxies-nebulae',
    title: 'Galaxies & Cosmic Web',
    category: 'Cosmology',
    summary: 'Vast gravitationally bound systems of stars, stellar remnants, interstellar gas, dust, and dark matter.',
    content: 'Hubble classified galaxies into Spirals (like the Milky Way and Andromeda), Ellipticals (smooth, featureless distributions of older stars), and Irregulars. Galaxies cluster into groups, superclusters, and cosmic filaments separated by cosmic voids. The observable universe contains an estimated 2 trillion galaxies across 93 billion light-years.'
  }
];
