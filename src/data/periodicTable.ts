import { ChemicalElement } from '../types';

export const PERIODIC_TABLE_DATA: ChemicalElement[] = [
  {
    number: 1, symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, period: 1, group: 1,
    category: 'reactive-nonmetal', phase: 'Gas', electronConfiguration: '1s¹',
    summary: 'The lightest and most abundant chemical element in the universe, constituting roughly 75% of all baryonic mass.',
    everydayUses: ['Rocket fuel', 'Ammonia fertilizer production', 'Hydrogen fuel cells', 'Hydrogenated oils'],
    density: 0.00008988, meltingPoint: 13.99, boilingPoint: 20.271, discoveredBy: 'Henry Cavendish', yearDiscovered: 1766
  },
  {
    number: 2, symbol: 'He', name: 'Helium', atomicMass: 4.0026, period: 1, group: 18,
    category: 'noble-gas', phase: 'Gas', electronConfiguration: '1s²',
    summary: 'A colorless, odorless, inert noble gas. Second lightest and second most abundant element in the universe.',
    everydayUses: ['MRI scanner coolant', 'Party balloons', 'Deep-sea breathing mixtures', 'Semiconductor manufacturing'],
    density: 0.0001785, meltingPoint: 0.95, boilingPoint: 4.222, discoveredBy: 'Pierre Janssen, Norman Lockyer', yearDiscovered: 1868
  },
  {
    number: 3, symbol: 'Li', name: 'Lithium', atomicMass: 6.94, period: 2, group: 1,
    category: 'alkali-metal', phase: 'Solid', electronConfiguration: '[He] 2s¹',
    summary: 'The least dense of all solid elements; a soft, silvery alkali metal that reacts vigorously with water.',
    everydayUses: ['Rechargeable smartphone/EV batteries', 'Mood stabilizer medication', 'High-temp lubricating grease', 'Glass ceramics'],
    density: 0.534, meltingPoint: 453.65, boilingPoint: 1603, discoveredBy: 'Johan August Arfwedson', yearDiscovered: 1817
  },
  {
    number: 4, symbol: 'Be', name: 'Beryllium', atomicMass: 9.0122, period: 2, group: 2,
    category: 'alkaline-earth', phase: 'Solid', electronConfiguration: '[He] 2s²',
    summary: 'A relatively rare metal in the universe, stiff, lightweight, with a high melting point and transparent to X-rays.',
    everydayUses: ['James Webb Space Telescope mirrors', 'Aerospace components', 'X-ray tube windows', 'Beryllium copper alloys'],
    density: 1.85, meltingPoint: 1560, boilingPoint: 2742, discoveredBy: 'Louis Nicolas Vauquelin', yearDiscovered: 1798
  },
  {
    number: 5, symbol: 'B', name: 'Boron', atomicMass: 10.81, period: 2, group: 13,
    category: 'metalloid', phase: 'Solid', electronConfiguration: '[He] 2s² 2p¹',
    summary: 'A low-abundance metalloid formed by cosmic ray spallation, essential for plant cell wall synthesis.',
    everydayUses: ['Borosilicate heat-resistant glass (Pyrex)', 'Fibers for body armor', 'Agricultural micronutrient', 'Semiconductor dopant'],
    density: 2.34, meltingPoint: 2349, boilingPoint: 4200, discoveredBy: 'Joseph Louis Gay-Lussac, Louis Jacques Thénard', yearDiscovered: 1808
  },
  {
    number: 6, symbol: 'C', name: 'Carbon', atomicMass: 12.011, period: 2, group: 14,
    category: 'reactive-nonmetal', phase: 'Solid', electronConfiguration: '[He] 2s² 2p²',
    summary: 'The cornerstone of organic chemistry and all known terrestrial life, capable of forming four covalent bonds.',
    everydayUses: ['Organic molecules and DNA', 'Diamond jewelry & cutting tools', 'Graphite in pencils and batteries', 'Carbon fiber composites'],
    density: 2.267, meltingPoint: 3800, boilingPoint: 4300, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 7, symbol: 'N', name: 'Nitrogen', atomicMass: 14.007, period: 2, group: 15,
    category: 'reactive-nonmetal', phase: 'Gas', electronConfiguration: '[He] 2s² 2p³',
    summary: 'Constitutes approximately 78% of Earth’s atmosphere as diatomic gas N₂. Vital for amino acids and nucleic acids.',
    everydayUses: ['Food packaging preservation', 'Agricultural fertilizers (ammonia)', 'Cryogenic freezing (liquid N₂)', 'Explosives manufacturing'],
    density: 0.0012506, meltingPoint: 63.15, boilingPoint: 77.36, discoveredBy: 'Daniel Rutherford', yearDiscovered: 1772
  },
  {
    number: 8, symbol: 'O', name: 'Oxygen', atomicMass: 15.999, period: 2, group: 16,
    category: 'reactive-nonmetal', phase: 'Gas', electronConfiguration: '[He] 2s² 2p⁴',
    summary: 'Highly reactive nonmetal and oxidizing agent. Makes up 21% of Earth’s atmosphere and nearly half of Earth’s crust.',
    everydayUses: ['Aerobic cellular respiration', 'Hospital medical oxygen', 'Steelmaking combustion', 'Water (H₂O)'],
    density: 0.001429, meltingPoint: 54.36, boilingPoint: 90.2, discoveredBy: 'Carl Wilhelm Scheele, Joseph Priestley', yearDiscovered: 1774
  },
  {
    number: 9, symbol: 'F', name: 'Fluorine', atomicMass: 18.998, period: 2, group: 17,
    category: 'reactive-nonmetal', phase: 'Gas', electronConfiguration: '[He] 2s² 2p⁵',
    summary: 'The most electronegative and chemically reactive of all chemical elements, reacting with almost all other elements.',
    everydayUses: ['Toothpaste cavity prevention (fluoride)', 'Teflon non-stick coatings', 'Pharmaceutical synthesis', 'Refrigerants'],
    density: 0.001696, meltingPoint: 53.53, boilingPoint: 85.03, discoveredBy: 'Henri Moissan', yearDiscovered: 1886
  },
  {
    number: 10, symbol: 'Ne', name: 'Neon', atomicMass: 20.180, period: 2, group: 18,
    category: 'noble-gas', phase: 'Gas', electronConfiguration: '[He] 2s² 2p⁶',
    summary: 'Colorless, odorless noble gas that glows reddish-orange in high-voltage electrical discharge signs.',
    everydayUses: ['Neon illuminated signage', 'High-voltage indicators', 'Cryogenic refrigerant', 'Gas lasers (He-Ne)'],
    density: 0.0008999, meltingPoint: 24.56, boilingPoint: 27.07, discoveredBy: 'William Ramsay, Morris Travers', yearDiscovered: 1898
  },
  {
    number: 11, symbol: 'Na', name: 'Sodium', atomicMass: 22.990, period: 3, group: 1,
    category: 'alkali-metal', phase: 'Solid', electronConfiguration: '[Ne] 3s¹',
    summary: 'Soft, silvery-white alkali metal that oxidizes rapidly in air and reacts vigorously with water.',
    everydayUses: ['Table salt (NaCl)', 'Baking soda (NaHCO₃)', 'Street lighting (sodium-vapor lamps)', 'Nerve signal transmission in biology'],
    density: 0.968, meltingPoint: 370.87, boilingPoint: 1156, discoveredBy: 'Humphry Davy', yearDiscovered: 1807
  },
  {
    number: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, period: 3, group: 2,
    category: 'alkaline-earth', phase: 'Solid', electronConfiguration: '[Ne] 3s²',
    summary: 'A shiny gray alkaline earth metal. Key component of chlorophyll in plants and lightweight alloys.',
    everydayUses: ['Chlorophyll central atom for photosynthesis', 'Lightweight automotive alloys', 'Fireworks and flares', 'Antacids (milk of magnesia)'],
    density: 1.738, meltingPoint: 923, boilingPoint: 1363, discoveredBy: 'Joseph Black', yearDiscovered: 1755
  },
  {
    number: 13, symbol: 'Al', name: 'Aluminium', atomicMass: 26.982, period: 3, group: 13,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Ne] 3s² 3p¹',
    summary: 'Most abundant metal in Earth’s crust. Renowned for low density and high corrosion resistance via passivation.',
    everydayUses: ['Aircraft fuselages', 'Beverage cans and kitchen foil', 'Window frames and construction', 'Electrical power transmission lines'],
    density: 2.7, meltingPoint: 933.47, boilingPoint: 2792, discoveredBy: 'Hans Christian Ørsted', yearDiscovered: 1825
  },
  {
    number: 14, symbol: 'Si', name: 'Silicon', atomicMass: 28.085, period: 3, group: 14,
    category: 'metalloid', phase: 'Solid', electronConfiguration: '[Ne] 3s² 3p²',
    summary: 'The primary semiconductor of the digital age, forming microchips and solar cells.',
    everydayUses: ['Computer CPU/RAM microchips', 'Solar photovoltaic panels', 'Glass, concrete, and ceramic tiles', 'Silicone sealants and polymers'],
    density: 2.329, meltingPoint: 1687, boilingPoint: 3538, discoveredBy: 'Jöns Jacob Berzelius', yearDiscovered: 1824
  },
  {
    number: 15, symbol: 'P', name: 'Phosphorus', atomicMass: 30.974, period: 3, group: 15,
    category: 'reactive-nonmetal', phase: 'Solid', electronConfiguration: '[Ne] 3s² 3p³',
    summary: 'Essential element for all living organisms, forming the structural backbone of DNA, RNA, and cellular ATP energy.',
    everydayUses: ['ATP cellular energy carrier', 'DNA/RNA sugar-phosphate backbone', 'NPK agricultural fertilizers', 'Safety match strike pads'],
    density: 1.823, meltingPoint: 317.3, boilingPoint: 550, discoveredBy: 'Hennig Brand', yearDiscovered: 1669
  },
  {
    number: 16, symbol: 'S', name: 'Sulfur', atomicMass: 32.06, period: 3, group: 16,
    category: 'reactive-nonmetal', phase: 'Solid', electronConfiguration: '[Ne] 3s² 3p⁴',
    summary: 'Bright yellow crystalline solid nonmetal. Tenth most abundant element in the universe, found near volcanoes.',
    everydayUses: ['Sulfuric acid industrial production', 'Vulcanization of rubber tires', 'Gunpowder and matches', 'Essential amino acids (cysteine, methionine)'],
    density: 2.07, meltingPoint: 388.36, boilingPoint: 717.8, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: 35.45, period: 3, group: 17,
    category: 'reactive-nonmetal', phase: 'Gas', electronConfiguration: '[Ne] 3s² 3p⁵',
    summary: 'Yellow-green halogen gas with pungent odor. Powerful disinfectant and disinfectant for municipal drinking water.',
    everydayUses: ['Drinking water sanitation', 'Swimming pool sanitizers', 'PVC piping for plumbing', 'Table salt (NaCl)'],
    density: 0.0032, meltingPoint: 171.6, boilingPoint: 239.11, discoveredBy: 'Carl Wilhelm Scheele', yearDiscovered: 1774
  },
  {
    number: 18, symbol: 'Ar', name: 'Argon', atomicMass: 39.948, period: 3, group: 18,
    category: 'noble-gas', phase: 'Gas', electronConfiguration: '[Ne] 3s² 3p⁶',
    summary: 'Third most abundant gas in Earth’s atmosphere (0.93%), inert shielding gas for arc welding.',
    everydayUses: ['Shielding gas for TIG/MIG welding', 'Double-glazed insulating windows', 'Incandescent light bulb inert atmosphere', 'Titanium production shield'],
    density: 0.001784, meltingPoint: 83.8, boilingPoint: 87.3, discoveredBy: 'Lord Rayleigh, William Ramsay', yearDiscovered: 1894
  },
  {
    number: 19, symbol: 'K', name: 'Potassium', atomicMass: 39.098, period: 4, group: 1,
    category: 'alkali-metal', phase: 'Solid', electronConfiguration: '[Ar] 4s¹',
    summary: 'Soft alkali metal that oxidizes in seconds. Crucial electrolyte for human heart rhythms and neural transmission.',
    everydayUses: ['Plant fertilizers (potash)', 'Nerve impulses and cardiac rhythm', 'Potassium hydroxide liquid soaps', 'Food preservation'],
    density: 0.89, meltingPoint: 336.53, boilingPoint: 1032, discoveredBy: 'Humphry Davy', yearDiscovered: 1807
  },
  {
    number: 20, symbol: 'Ca', name: 'Calcium', atomicMass: 40.078, period: 4, group: 2,
    category: 'alkaline-earth', phase: 'Solid', electronConfiguration: '[Ar] 4s²',
    summary: 'Fifth most abundant element in Earth’s crust and the most abundant metal in the human body.',
    everydayUses: ['Bones and teeth structural mineral', 'Limestone, cement, and concrete', 'Muscle contraction signaling', 'Plaster of Paris (gypsum)'],
    density: 1.55, meltingPoint: 1115, boilingPoint: 1757, discoveredBy: 'Humphry Davy', yearDiscovered: 1808
  },
  {
    number: 21, symbol: 'Sc', name: 'Scandium', atomicMass: 44.956, period: 4, group: 3,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d¹ 4s²',
    summary: 'Lightweight transition metal often classified as a rare-earth element.',
    everydayUses: ['High-end bicycle frames', 'Aerospace components (MiG fighters)', 'Stadium lighting (metal halide lamps)', 'Solid oxide fuel cells'],
    density: 2.985, meltingPoint: 1814, boilingPoint: 3109, discoveredBy: 'Lars Fredrik Nilson', yearDiscovered: 1879
  },
  {
    number: 22, symbol: 'Ti', name: 'Titanium', atomicMass: 47.867, period: 4, group: 4,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d² 4s²',
    summary: 'Lustrous transition metal with highest strength-to-density ratio of any metallic element.',
    everydayUses: ['Orthopedic bone implants and joint replacements', 'Jet turbine blades and spacecraft frames', 'White paint pigment (TiO₂)', 'Sunscreen UV filters'],
    density: 4.506, meltingPoint: 1941, boilingPoint: 3560, discoveredBy: 'William Gregor', yearDiscovered: 1791
  },
  {
    number: 23, symbol: 'V', name: 'Vanadium', atomicMass: 50.942, period: 4, group: 5,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d³ 4s²',
    summary: 'Hard, silvery-grey, ductile transition metal used to form high-strength steel alloys.',
    everydayUses: ['High-strength tool steel (wrenches)', 'Vanadium redox flow batteries for grid storage', 'Superconducting magnets', 'Ceramic colorants'],
    density: 6.11, meltingPoint: 2183, boilingPoint: 3680, discoveredBy: 'Andrés Manuel del Río', yearDiscovered: 1801
  },
  {
    number: 24, symbol: 'Cr', name: 'Chromium', atomicMass: 51.996, period: 4, group: 6,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d⁵ 4s¹',
    summary: 'Steely-grey, lustrous, hard metal with high polish and exceptional corrosion resistance.',
    everydayUses: ['Stainless steel (min 10.5% Cr)', 'Decorative chrome plating', 'Ruby laser crystals (dopant)', 'Leather tanning agents'],
    density: 7.19, meltingPoint: 2180, boilingPoint: 2944, discoveredBy: 'Louis Nicolas Vauquelin', yearDiscovered: 1797
  },
  {
    number: 25, symbol: 'Mn', name: 'Manganese', atomicMass: 54.938, period: 4, group: 7,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d⁵ 4s²',
    summary: 'Transition metal essential to industrial iron and steel production and photosynthesis.',
    everydayUses: ['Steel deoxidizer and alloying agent', 'Alkaline batteries (MnO₂)', 'Aluminum beverage can rigidity', 'Plant photosystem II water splitting'],
    density: 7.21, meltingPoint: 1519, boilingPoint: 2334, discoveredBy: 'Johan Gottlieb Gahn', yearDiscovered: 1774
  },
  {
    number: 26, symbol: 'Fe', name: 'Iron', atomicMass: 55.845, period: 4, group: 8,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d⁶ 4s²',
    summary: 'Most common element on Earth by mass, forming much of Earth’s outer and inner core, and backbone of human hemoglobin.',
    everydayUses: ['Structural steel for buildings and bridges', 'Hemoglobin oxygen transport in red blood cells', 'Automotive chassis and engines', 'Electromagnets'],
    density: 7.874, meltingPoint: 1811, boilingPoint: 3134, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 27, symbol: 'Co', name: 'Cobalt', atomicMass: 58.933, period: 4, group: 9,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d⁷ 4s²',
    summary: 'Ferromagnetic transition metal used in lithium-ion battery cathodes and jet engine superalloys.',
    everydayUses: ['Lithium-ion EV battery cathodes', 'Jet engine turbine blade superalloys', 'Cobalt blue glass and ceramic pigments', 'Vitamin B12 central atom'],
    density: 8.9, meltingPoint: 1768, boilingPoint: 3200, discoveredBy: 'Georg Brandt', yearDiscovered: 1735
  },
  {
    number: 28, symbol: 'Ni', name: 'Nickel', atomicMass: 58.693, period: 4, group: 10,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d⁸ 4s²',
    summary: 'Silvery-white lustrous metal with slight golden tinge, resistant to corrosion.',
    everydayUses: ['Stainless steel production', 'Electric vehicle battery chemistries', 'Guitar strings and coins', 'Catalytic hydrogenation'],
    density: 8.908, meltingPoint: 1728, boilingPoint: 3003, discoveredBy: 'Axel Fredrik Cronstedt', yearDiscovered: 1751
  },
  {
    number: 29, symbol: 'Cu', name: 'Copper', atomicMass: 63.546, period: 4, group: 11,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d¹⁰ 4s¹',
    summary: 'Soft, malleable, and ductile metal with extremely high electrical and thermal conductivity.',
    everydayUses: ['Electrical building wiring', 'Plumbing pipes', 'Printed circuit board traces', 'Bronze and brass alloys'],
    density: 8.96, meltingPoint: 1357.77, boilingPoint: 2835, discoveredBy: 'Middle East civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 30, symbol: 'Zn', name: 'Zinc', atomicMass: 65.38, period: 4, group: 12,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d¹⁰ 4s²',
    summary: 'Bluish-white metal that reacts with air to form protective zinc carbonate layer.',
    everydayUses: ['Galvanized steel anti-rust coating', 'Die-cast automotive parts', 'Dietary immune supplements', 'Sunscreen mineral (ZnO)'],
    density: 7.14, meltingPoint: 692.68, boilingPoint: 1180, discoveredBy: 'Indian metallurgists', yearDiscovered: 'Ancient'
  },
  {
    number: 31, symbol: 'Ga', name: 'Gallium', atomicMass: 69.723, period: 4, group: 13,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹',
    summary: 'Soft silvery metal with melting point of 29.76 °C; melts in the palm of human hands.',
    everydayUses: ['Gallium nitride (GaN) fast chargers', 'Blue/violet LEDs and laser diodes', 'Solar cells for satellites', 'Non-toxic liquid metal alloys'],
    density: 5.91, meltingPoint: 302.91, boilingPoint: 2673, discoveredBy: 'Lecoq de Boisbaudran', yearDiscovered: 1875
  },
  {
    number: 32, symbol: 'Ge', name: 'Germanium', atomicMass: 72.630, period: 4, group: 14,
    category: 'metalloid', phase: 'Solid', electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²',
    summary: 'Lustrous, hard, grayish-white metalloid; historically used for the first radar transistors.',
    everydayUses: ['Fiber optic communication cables', 'Infrared night vision optics', 'High-efficiency space solar panels', 'Polymerization catalyst'],
    density: 5.323, meltingPoint: 1211.4, boilingPoint: 3106, discoveredBy: 'Clemens Winkler', yearDiscovered: 1886
  },
  {
    number: 33, symbol: 'As', name: 'Arsenic', atomicMass: 74.922, period: 4, group: 15,
    category: 'metalloid', phase: 'Solid', electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³',
    summary: 'Infamous toxic metalloid; vital modern n-type dopant in semiconductor chips.',
    everydayUses: ['Gallium arsenide (GaAs) RF chips', 'Lead-acid battery grid hardening', 'Semiconductor n-type doping', 'Wood preservation (historically)'],
    density: 5.727, meltingPoint: 1090, boilingPoint: 887, discoveredBy: 'Albertus Magnus', yearDiscovered: 1250
  },
  {
    number: 34, symbol: 'Se', name: 'Selenium', atomicMass: 78.971, period: 4, group: 16,
    category: 'reactive-nonmetal', phase: 'Solid', electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴',
    summary: 'Nonmetal with photovoltaic and photoconductive properties; electrical conductivity increases when illuminated.',
    everydayUses: ['Photocopy drum rollers', 'Red ruby glass de-colorizer', 'Anti-dandruff shampoo (selenium sulfide)', 'Antioxidant enzymes (glutathione peroxidase)'],
    density: 4.81, meltingPoint: 494, boilingPoint: 958, discoveredBy: 'Jöns Jacob Berzelius', yearDiscovered: 1817
  },
  {
    number: 35, symbol: 'Br', name: 'Bromine', atomicMass: 79.904, period: 4, group: 17,
    category: 'reactive-nonmetal', phase: 'Liquid', electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵',
    summary: 'The only nonmetallic element that is liquid at standard room temperature; fuming red-brown liquid.',
    everydayUses: ['Flame retardants in electronics and textiles', 'Water purification for spas', 'Pharmaceutical medicines', 'Drilling fluids for oil extraction'],
    density: 3.1028, meltingPoint: 265.8, boilingPoint: 332.0, discoveredBy: 'Antoine Jérôme Balard', yearDiscovered: 1826
  },
  {
    number: 36, symbol: 'Kr', name: 'Krypton', atomicMass: 83.798, period: 4, group: 18,
    category: 'noble-gas', phase: 'Gas', electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶',
    summary: 'Colorless, odorless noble gas; produces brilliant white light in photographic flashes and lasers.',
    everydayUses: ['High-speed airport runway flash lamps', 'Insulating double-pane architectural windows', 'Krypton fluoride excimer lasers', 'Satellite ion propulsion thrusters'],
    density: 0.003749, meltingPoint: 115.79, boilingPoint: 119.93, discoveredBy: 'William Ramsay, Morris Travers', yearDiscovered: 1898
  },
  {
    number: 37, symbol: 'Rb', name: 'Rubidium', atomicMass: 85.468, period: 5, group: 1,
    category: 'alkali-metal', phase: 'Solid', electronConfiguration: '[Kr] 5s¹',
    summary: 'Soft, highly reactive alkali metal that ignites spontaneously in air and reacts violently with water.',
    everydayUses: ['Ultra-precise atomic clocks in GPS satellites', 'Photocells and night-vision converters', 'Specialized vacuum tube getters', 'Laser cooling of atoms'],
    density: 1.532, meltingPoint: 312.46, boilingPoint: 961, discoveredBy: 'Robert Bunsen, Gustav Kirchhoff', yearDiscovered: 1861
  },
  {
    number: 38, symbol: 'Sr', name: 'Strontium', atomicMass: 87.62, period: 5, group: 2,
    category: 'alkaline-earth', phase: 'Solid', electronConfiguration: '[Kr] 5s²',
    summary: 'Soft, silver-white yellowish alkaline earth metal; famous for producing vivid crimson red flame color.',
    everydayUses: ['Brilliant red fireworks and emergency signal flares', 'Optical lattice atomic clocks', 'Glow-in-the-dark phosphor paints', 'Sensitive teeth toothpaste'],
    density: 2.64, meltingPoint: 1050, boilingPoint: 1655, discoveredBy: 'Adair Crawford', yearDiscovered: 1790
  },
  {
    number: 39, symbol: 'Y', name: 'Yttrium', atomicMass: 88.906, period: 5, group: 3,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d¹ 5s²',
    summary: 'Silvery-metallic transition metal classified chemically with rare-earth elements.',
    everydayUses: ['YBCO high-temperature superconductors', 'YAG surgical and cutting lasers', 'Red phosphors in displays', 'Spark plugs and ceramic knives'],
    density: 4.472, meltingPoint: 1799, boilingPoint: 3609, discoveredBy: 'Johan Gadolin', yearDiscovered: 1794
  },
  {
    number: 40, symbol: 'Zr', name: 'Zirconium', atomicMass: 91.224, period: 5, group: 4,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d² 5s²',
    summary: 'Lustrous, grey-white strong transition metal; exceptional resistance to corrosion and low neutron absorption.',
    everydayUses: ['Nuclear reactor fuel cladding', 'Cubic zirconia gemstone jewelry (ZrO₂)', 'Ceramic dental crowns', 'Surgical instrument blades'],
    density: 6.52, meltingPoint: 2128, boilingPoint: 4682, discoveredBy: 'Martin Heinrich Klaproth', yearDiscovered: 1789
  },
  {
    number: 41, symbol: 'Nb', name: 'Niobium', atomicMass: 92.906, period: 5, group: 5,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d⁴ 5s¹',
    summary: 'Light grey, crystalline, and ductile transition metal that turns superconducting at cryogenic temperatures.',
    everydayUses: ['Superconducting MRI magnets (Nb-Ti)', 'Particle accelerator cavities (CERN LHC)', 'High-strength low-alloy structural steel', 'Jet rocket nozzle coatings'],
    density: 8.57, meltingPoint: 2750, boilingPoint: 5017, discoveredBy: 'Charles Hatchett', yearDiscovered: 1801
  },
  {
    number: 42, symbol: 'Mo', name: 'Molybdenum', atomicMass: 95.95, period: 5, group: 6,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d⁵ 5s¹',
    summary: 'Refractory metal with one of highest melting points among pure elements; retains strength at extreme temperatures.',
    everydayUses: ['High-strength military steel armor', 'Petroleum refining desulfurization catalysts', 'High-temperature industrial furnace heaters', 'Mo-99 medical isotope production'],
    density: 10.28, meltingPoint: 2896, boilingPoint: 4912, discoveredBy: 'Carl Wilhelm Scheele', yearDiscovered: 1778
  },
  {
    number: 43, symbol: 'Tc', name: 'Technetium', atomicMass: 98, period: 5, group: 7,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d⁵ 5s²',
    summary: 'First artificially produced chemical element; lightest element with no stable isotopes.',
    everydayUses: ['Technetium-99m nuclear diagnostic medical scans', 'Bone scans and cardiac imaging', 'Radiation calibration source', 'Nuclear physics research'],
    density: 11.0, meltingPoint: 2430, boilingPoint: 4538, discoveredBy: 'Emilio Segrè, Carlo Perrier', yearDiscovered: 1937
  },
  {
    number: 44, symbol: 'Ru', name: 'Ruthenium', atomicMass: 101.07, period: 5, group: 8,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d⁷ 5s¹',
    summary: 'Rare polyvalent transition metal of platinum group; hard and corrosion resistant.',
    everydayUses: ['Hard disk drive read heads', 'Wear-resistant electrical contacts', 'Grubbs catalysts in chemical synthesis', 'Solar cell dye sensitizers'],
    density: 12.45, meltingPoint: 2607, boilingPoint: 4423, discoveredBy: 'Karl Ernst Claus', yearDiscovered: 1844
  },
  {
    number: 45, symbol: 'Rh', name: 'Rhodium', atomicMass: 102.91, period: 5, group: 9,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d⁸ 5s¹',
    summary: 'Extremely rare and precious platinum group metal with brilliant reflectivity and anti-corrosion properties.',
    everydayUses: ['Automotive catalytic converters (NOx reduction)', 'Optical mirrors and searchlights', 'White gold and sterling silver plating', 'Chemical hydrogenation catalysts'],
    density: 12.41, meltingPoint: 2237, boilingPoint: 3968, discoveredBy: 'William Hyde Wollaston', yearDiscovered: 1804
  },
  {
    number: 46, symbol: 'Pd', name: 'Palladium', atomicMass: 106.42, period: 5, group: 10,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰',
    summary: 'Lustrous silvery-white metal that can absorb up to 900 times its own volume of hydrogen gas.',
    everydayUses: ['Automotive catalytic converters', 'Hydrogen purification membranes', 'Multi-layer ceramic capacitors in electronics', 'Jewelry and dentistry'],
    density: 12.023, meltingPoint: 1828.05, boilingPoint: 3236, discoveredBy: 'William Hyde Wollaston', yearDiscovered: 1803
  },
  {
    number: 47, symbol: 'Ag', name: 'Silver', atomicMass: 107.87, period: 5, group: 11,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰ 5s¹',
    summary: 'Element with highest electrical conductivity, thermal conductivity, and reflectivity of any metal.',
    everydayUses: ['Solar panel conductive contact paste', 'Silverware and luxury jewelry', 'Medical antimicrobial wound dressings', 'High-end audio and RF conductors'],
    density: 10.49, meltingPoint: 1234.93, boilingPoint: 2435, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 48, symbol: 'Cd', name: 'Cadmium', atomicMass: 112.41, period: 5, group: 12,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰ 5s²',
    summary: 'Soft, bluish-white metal that readily absorbs thermal neutrons; toxic heavy metal.',
    everydayUses: ['Nickel-cadmium (NiCad) rechargeable batteries', 'Cadmium telluride (CdTe) thin-film solar panels', 'Brilliant yellow oil paint pigments', 'Nuclear control rods'],
    density: 8.65, meltingPoint: 594.22, boilingPoint: 1040, discoveredBy: 'Karl Samuel Leberecht Hermann, Friedrich Stromeyer', yearDiscovered: 1817
  },
  {
    number: 49, symbol: 'In', name: 'Indium', atomicMass: 114.82, period: 5, group: 13,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p¹',
    summary: 'Very soft, malleable silvery metal with a low melting point; emits a distinctive "cry" when bent.',
    everydayUses: ['Indium tin oxide (ITO) touchscreens & LCD displays', 'Lead-free solders for delicate electronics', 'Thermal interface compound for CPUs', 'High-speed semiconductors'],
    density: 7.31, meltingPoint: 429.75, boilingPoint: 2345, discoveredBy: 'Ferdinand Reich, Hieronymous Theodor Richter', yearDiscovered: 1863
  },
  {
    number: 50, symbol: 'Sn', name: 'Tin', atomicMass: 118.71, period: 5, group: 14,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p²',
    summary: 'Silvery metal that resists corrosion from water; historically combined with copper to inaugurate the Bronze Age.',
    everydayUses: ['Electronic soldering wire', 'Tin-plated steel cans for food preservation', 'Pewter and bronze alloys', 'Window float-glass manufacturing baths'],
    density: 7.287, meltingPoint: 505.08, boilingPoint: 2875, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 51, symbol: 'Sb', name: 'Antimony', atomicMass: 121.76, period: 5, group: 15,
    category: 'metalloid', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p³',
    summary: 'Lustrous gray metalloid known since antiquity as kohl eye makeup; hardens lead alloys.',
    everydayUses: ['Flame retardants in consumer plastics and furniture', 'Lead-acid battery grid plates', 'Infrared motion detectors', 'Semiconductor memory chips'],
    density: 6.697, meltingPoint: 903.78, boilingPoint: 1860, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 52, symbol: 'Te', name: 'Tellurium', atomicMass: 127.60, period: 5, group: 16,
    category: 'metalloid', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁴',
    summary: 'Brittle, mildly toxic, rare silver-white metalloid; one of the rarest elements in Earth’s crust.',
    everydayUses: ['Cadmium telluride solar panels', 'Thermoelectric cooling modules', 'Phase-change rewritable optical discs', 'Machinability additive in steel'],
    density: 6.24, meltingPoint: 722.66, boilingPoint: 1261, discoveredBy: 'Franz-Joseph Müller von Reichenstein', yearDiscovered: 1782
  },
  {
    number: 53, symbol: 'I', name: 'Iodine', atomicMass: 126.90, period: 5, group: 17,
    category: 'reactive-nonmetal', phase: 'Solid', electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁵',
    summary: 'Lustrous, purple-black solid nonmetal that sublimes into violet gas; critical trace nutrient for thyroid hormone synthesis.',
    everydayUses: ['Iodized salt to prevent goiter', 'Antiseptic surgical disinfectants (povidone-iodine)', 'Polarizing film in LCD screens', 'Cloud seeding for rain'],
    density: 4.933, meltingPoint: 386.85, boilingPoint: 457.4, discoveredBy: 'Bernard Courtois', yearDiscovered: 1811
  },
  {
    number: 54, symbol: 'Xe', name: 'Xenon', atomicMass: 131.29, period: 5, group: 18,
    category: 'noble-gas', phase: 'Gas', electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁶',
    summary: 'Dense noble gas that emits a blue glow when excited; propellant of choice for satellite ion propulsion.',
    everydayUses: ['Ion propulsion engines on deep-space probes', 'Automotive HID xenon headlights', 'Neuroprotective general anesthesia', 'Excimer lasers in eye surgery'],
    density: 0.005887, meltingPoint: 161.4, boilingPoint: 165.03, discoveredBy: 'William Ramsay, Morris Travers', yearDiscovered: 1898
  },
  {
    number: 55, symbol: 'Cs', name: 'Caesium', atomicMass: 132.91, period: 6, group: 1,
    category: 'alkali-metal', phase: 'Solid', electronConfiguration: '[Xe] 6s¹',
    summary: 'Soft, gold-colored alkali metal with melting point of 28.5 °C; defines the international SI standard second.',
    everydayUses: ['Cesium atomic clocks defining the SI second', 'Drilling fluid in petroleum extraction', 'Photoelectric cells', 'Centrifugation density gradient medium'],
    density: 1.93, meltingPoint: 301.59, boilingPoint: 944, discoveredBy: 'Robert Bunsen, Gustav Kirchhoff', yearDiscovered: 1860
  },
  {
    number: 56, symbol: 'Ba', name: 'Barium', atomicMass: 137.33, period: 6, group: 2,
    category: 'alkaline-earth', phase: 'Solid', electronConfiguration: '[Xe] 6s²',
    summary: 'Soft, silvery alkaline earth metal that produces luminous emerald green coloration in fireworks.',
    everydayUses: ['Emerald green pyrotechnic fireworks', 'Barium swallow gastrointestinal X-ray scans', 'Petroleum drilling mud weighted additive', 'Specialized optical glass'],
    density: 3.51, meltingPoint: 1000, boilingPoint: 2170, discoveredBy: 'Carl Wilhelm Scheele', yearDiscovered: 1772
  },
  {
    number: 57, symbol: 'La', name: 'Lanthanum', atomicMass: 138.91, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 5d¹ 6s²',
    summary: 'First element of the lanthanide series; soft, malleable, silvery-white rare earth metal.',
    everydayUses: ['High refractive index camera lens glass', 'Hybrid car battery electrodes (NiMH)', 'Carbon arc studio lighting', 'Petroleum cracking catalysts'],
    density: 6.162, meltingPoint: 1193, boilingPoint: 3737, discoveredBy: 'Carl Gustaf Mosander', yearDiscovered: 1839
  },
  {
    number: 58, symbol: 'Ce', name: 'Cerium', atomicMass: 140.12, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f¹ 5d¹ 6s²',
    summary: 'Most abundant of the rare-earth elements; oxidizes readily and sparks upon friction.',
    everydayUses: ['Flint strikers for cigarette lighters (mischmetal)', 'Automotive catalytic converters', 'Self-cleaning oven catalysts', 'Precision glass polishing powder'],
    density: 6.77, meltingPoint: 1068, boilingPoint: 3716, discoveredBy: 'Martin Heinrich Klaproth, Jöns Jacob Berzelius', yearDiscovered: 1803
  },
  {
    number: 59, symbol: 'Pr', name: 'Praseodymium', atomicMass: 140.91, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f³ 6s²',
    summary: 'Soft, silvery, malleable lanthanide metal; imparts bright yellow-green tint to glass.',
    everydayUses: ['Didymium protective glass for glassblowers', 'Aircraft engine high-strength alloys', 'Permanent magnets in EV motors', 'Yellow-green ceramic pigments'],
    density: 6.77, meltingPoint: 1208, boilingPoint: 3793, discoveredBy: 'Carl Auer von Welsbach', yearDiscovered: 1885
  },
  {
    number: 60, symbol: 'Nd', name: 'Neodymium', atomicMass: 144.24, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f⁴ 6s²',
    summary: 'Forms strongest commercial permanent magnets known (NdFeB), essential for clean energy and motors.',
    everydayUses: ['Super-strong neodymium magnets in EV motors and wind turbines', 'Computer hard disk drives', 'Nd:YAG lasers in surgery and cosmetics', 'Headphones and audio speakers'],
    density: 7.01, meltingPoint: 1297, boilingPoint: 3347, discoveredBy: 'Carl Auer von Welsbach', yearDiscovered: 1885
  },
  {
    number: 61, symbol: 'Pm', name: 'Promethium', atomicMass: 145, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f⁵ 6s²',
    summary: 'Only radioactive lanthanide element; extremely rare in nature, discovered through uranium fission.',
    everydayUses: ['Atomic batteries for guided missiles and pacemakers', 'Luminous instrument dials in spacecraft', 'Beta radiation thickness gauges', 'Portable X-ray sources'],
    density: 7.26, meltingPoint: 1315, boilingPoint: 3273, discoveredBy: 'Chien Shiung Wu, Jacob A. Marinsky', yearDiscovered: 1945
  },
  {
    number: 62, symbol: 'Sm', name: 'Samarium', atomicMass: 150.36, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f⁶ 6s²',
    summary: 'Lanthanide metal with high resistance to demagnetization at elevated temperatures.',
    everydayUses: ['Samarium-cobalt (SmCo) high-temperature magnets', 'Nuclear reactor neutron absorber rods', 'Cancer pain radiotherapy (Sm-153)', 'Organic chemical synthesis catalyst'],
    density: 7.52, meltingPoint: 1345, boilingPoint: 2067, discoveredBy: 'Lecoq de Boisbaudran', yearDiscovered: 1879
  },
  {
    number: 63, symbol: 'Eu', name: 'Europium', atomicMass: 151.96, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f⁷ 6s²',
    summary: 'Most reactive lanthanide metal; famous as red and blue phosphor in TV screens and anti-counterfeiting banknotes.',
    everydayUses: ['Anti-counterfeiting phosphors in Euro currency banknotes', 'Red phosphors in color displays and TV screens', 'Fluorescent light bulbs', 'Nuclear control rods'],
    density: 5.244, meltingPoint: 1099, boilingPoint: 1802, discoveredBy: 'Eugène-Anatole Demarçay', yearDiscovered: 1901
  },
  {
    number: 64, symbol: 'Gd', name: 'Gadolinium', atomicMass: 157.25, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f⁷ 5d¹ 6s²',
    summary: 'Has unusual magnetic properties; paramagnetic at room temperature, ferromagnetic below 20 °C.',
    everydayUses: ['MRI contrast enhancement agents', 'Magnetic refrigeration systems', 'Nuclear reactor emergency shutdown rods', 'Compact disc memory alloys'],
    density: 7.90, meltingPoint: 1585, boilingPoint: 3546, discoveredBy: 'Jean Charles Galissard de Marignac', yearDiscovered: 1880
  },
  {
    number: 65, symbol: 'Tb', name: 'Terbium', atomicMass: 158.93, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f⁹ 6s²',
    summary: 'Silvery-white rare earth metal that emits vibrant green light under electron stimulation.',
    everydayUses: ['Terfenol-D magnetostrictive actuators and sonar', 'Green phosphors in tricolor lamps and OLED screens', 'Fuel cell stabilizers', 'Magneto-optical storage'],
    density: 8.23, meltingPoint: 1629, boilingPoint: 3503, discoveredBy: 'Carl Gustaf Mosander', yearDiscovered: 1843
  },
  {
    number: 66, symbol: 'Dy', name: 'Dysprosium', atomicMass: 162.50, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁰ 6s²',
    summary: 'Has one of highest magnetic strengths of any element; prevents high-temp demagnetization in EV motors.',
    everydayUses: ['High-performance EV traction motor magnets', 'Control rods in nuclear reactors', 'Hard disk drive data storage', 'Terfenol-D smart materials'],
    density: 8.54, meltingPoint: 1680, boilingPoint: 2840, discoveredBy: 'Lecoq de Boisbaudran', yearDiscovered: 1886
  },
  {
    number: 67, symbol: 'Ho', name: 'Holmium', atomicMass: 164.93, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f¹¹ 6s²',
    summary: 'Has highest magnetic moment of any naturally occurring element; concentrates magnetic flux in poles.',
    everydayUses: ['Holmium surgical lasers (kidney stone breaking)', 'Magnetic pole pieces for strongest artificial fields', 'Nuclear control rods', 'Yellow/red glass colorant'],
    density: 8.79, meltingPoint: 1734, boilingPoint: 2993, discoveredBy: 'Marc Delafontaine, Jacques-Louis Soret', yearDiscovered: 1878
  },
  {
    number: 68, symbol: 'Er', name: 'Erbium', atomicMass: 167.26, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f¹² 6s²',
    summary: 'Silvery lanthanide whose ions emit at 1.55 µm, matching optical fiber minimum absorption wavelength.',
    everydayUses: ['Erbium-doped fiber amplifiers (EDFA) powering the global Internet', 'Er:YAG cosmetic and dental lasers', 'Pink coloration in designer sunglasses', 'Nuclear control absorbers'],
    density: 9.066, meltingPoint: 1802, boilingPoint: 3141, discoveredBy: 'Carl Gustaf Mosander', yearDiscovered: 1843
  },
  {
    number: 69, symbol: 'Tm', name: 'Thulium', atomicMass: 168.93, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f¹³ 6s²',
    summary: 'Second least abundant of the lanthanides; yields portable X-ray sources when bombarded in reactors.',
    everydayUses: ['Portable lightweight field X-ray devices', 'Surgical lasers for delicate tissue ablation', 'Blue phosphors in security euro notes', 'High-temperature superconductors'],
    density: 9.32, meltingPoint: 1818, boilingPoint: 2223, discoveredBy: 'Per Teodor Cleve', yearDiscovered: 1879
  },
  {
    number: 70, symbol: 'Yb', name: 'Ytterbium', atomicMass: 173.05, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 6s²',
    summary: 'Soft, malleable, ductile rare earth metal; core element of next-generation atomic clocks.',
    everydayUses: ['Optical atomic clocks with accuracy of 1 second in 15 billion years', 'High-power industrial fiber laser cutters', 'Stainless steel grain refiner', 'Earthquake stress sensor gauges'],
    density: 6.90, meltingPoint: 1097, boilingPoint: 1469, discoveredBy: 'Jean Charles Galissard de Marignac', yearDiscovered: 1878
  },
  {
    number: 71, symbol: 'Lu', name: 'Lutetium', atomicMass: 174.97, period: 6, group: 3,
    category: 'lanthanide', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹ 6s²',
    summary: 'The densest, hardest, and last element in the lanthanide series; most expensive rare earth.',
    everydayUses: ['PET scan radiation detector crystals (LSO)', 'Targeted cancer radionuclide therapy (Lu-177)', 'Petroleum hydrocracking catalysts', 'Meteorite dating in astrophysics'],
    density: 9.841, meltingPoint: 1925, boilingPoint: 3675, discoveredBy: 'Georges Urbain, Carl Auer von Welsbach', yearDiscovered: 1907
  },
  {
    number: 72, symbol: 'Hf', name: 'Hafnium', atomicMass: 178.49, period: 6, group: 4,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d² 6s²',
    summary: 'Lustrous, silvery transition metal that absorbs neutrons aggressively; chemically twins with zirconium.',
    everydayUses: ['Nuclear submarine reactor control rods', 'High-k dielectric insulator in modern CPU transistors', 'Plasma torch cutting tips', 'Rocket nozzle alloys'],
    density: 13.31, meltingPoint: 2506, boilingPoint: 4876, discoveredBy: 'Dirk Coster, George de Hevesy', yearDiscovered: 1923
  },
  {
    number: 73, symbol: 'Ta', name: 'Tantalum', atomicMass: 180.95, period: 6, group: 5,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d³ 6s²',
    summary: 'Dark, dense, ductile transition metal with immunity to acid attack; forms high-capacitance thin oxide films.',
    everydayUses: ['Miniature capacitors in smartphones and laptops', 'Biocompatible bone fixation screws & skull plates', 'Chemical processing reactors', 'Gas turbine blades'],
    density: 16.69, meltingPoint: 3290, boilingPoint: 5731, discoveredBy: 'Anders Gustaf Ekeberg', yearDiscovered: 1802
  },
  {
    number: 74, symbol: 'W', name: 'Tungsten', atomicMass: 183.84, period: 6, group: 6,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d⁴ 6s²',
    summary: 'Has the highest melting point of all known metals (3422 °C) and second highest of all elements.',
    everydayUses: ['Tungsten carbide ultra-hard drill bits & mining tools', 'Traditional incandescent bulb filaments', 'Rocket engine exhaust nozzles', 'Kinetic bombardment penetrators'],
    density: 19.25, meltingPoint: 3695, boilingPoint: 6203, discoveredBy: 'Carl Wilhelm Scheele, Fausto and Juan José Elhuyar', yearDiscovered: 1781
  },
  {
    number: 75, symbol: 'Re', name: 'Rhenium', atomicMass: 186.21, period: 6, group: 7,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d⁵ 6s²',
    summary: 'One of the rarest elements in Earth’s crust; third highest melting point of any element.',
    everydayUses: ['Single-crystal superalloys for jet engines', 'Catalysts for lead-free high-octane gasoline', 'Mass spectrometer electrical contacts', 'Thermocouples for ultra-high temperatures'],
    density: 21.02, meltingPoint: 3459, boilingPoint: 5869, discoveredBy: 'Masataka Ogawa, Walter Noddack, Ida Tacke', yearDiscovered: 1925
  },
  {
    number: 76, symbol: 'Os', name: 'Osmium', atomicMass: 190.23, period: 6, group: 8,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d⁶ 6s²',
    summary: 'The densest naturally occurring element (22.59 g/cm³), twice as dense as lead; extremely hard and brittle.',
    everydayUses: ['Fountain pen nib tips', 'Electrical contacts in severe environments', 'Staining lipids for electron microscopy', 'Phonograph stylus needles historically'],
    density: 22.59, meltingPoint: 3306, boilingPoint: 5285, discoveredBy: 'Smithson Tennant', yearDiscovered: 1803
  },
  {
    number: 77, symbol: 'Ir', name: 'Iridium', atomicMass: 192.22, period: 6, group: 9,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d⁷ 6s²',
    summary: 'Second-densest element; the most corrosion-resistant metal known. Abundant in dinosaur-extinction asteroid layer.',
    everydayUses: ['Spark plugs for aviation and racing cars', 'Crucibles for growing high-purity single crystals', 'Water electrolysis hydrogen generators (PEM)', 'The K-Pg boundary dinosaur asteroid marker'],
    density: 22.56, meltingPoint: 2719, boilingPoint: 4701, discoveredBy: 'Smithson Tennant', yearDiscovered: 1803
  },
  {
    number: 78, symbol: 'Pt', name: 'Platinum', atomicMass: 195.08, period: 6, group: 10,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d⁹ 6s¹',
    summary: 'Dense, malleable, ductile, highly unreactive noble metal; superb catalytic capabilities.',
    everydayUses: ['Automotive catalytic converters', 'Fine jewelry and watches', 'Chemotherapy medications (cisplatin)', 'Hydrogen fuel cell electrocatalysts'],
    density: 21.45, meltingPoint: 2041.4, boilingPoint: 4098, discoveredBy: 'Antonio de Ulloa', yearDiscovered: 1735
  },
  {
    number: 79, symbol: 'Au', name: 'Gold', atomicMass: 196.97, period: 6, group: 11,
    category: 'transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
    summary: 'Noble metal that does not tarnish or corrode; the most malleable and ductile metal known to science.',
    everydayUses: ['Precious jewelry and central bank gold reserves', 'Microchip wire bonding and corrosion-proof connectors', 'Astronaut helmet visors & space telescope coatings', 'Dental crowns'],
    density: 19.30, meltingPoint: 1337.33, boilingPoint: 3129, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 80, symbol: 'Hg', name: 'Mercury', atomicMass: 200.59, period: 6, group: 12,
    category: 'transition-metal', phase: 'Liquid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
    summary: 'The only metallic element that is liquid at standard temperature and pressure (quicksilver).',
    everydayUses: ['Traditional mercury thermometers and barometers', 'Fluorescent lighting vapor', 'Dental amalgam tooth fillings', 'Electrical tilt switches'],
    density: 13.534, meltingPoint: 234.32, boilingPoint: 629.88, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 81, symbol: 'Tl', name: 'Thallium', atomicMass: 204.38, period: 6, group: 13,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',
    summary: 'Soft, malleable gray metal that tarnishes rapidly; historically dubbed "the poisoner’s poison".',
    everydayUses: ['Cardiac stress testing radiopharmaceutical (Tl-201)', 'High refractive index infrared lenses', 'Low-temperature thermometers (Hg-Tl alloy)', 'High-temperature superconductors'],
    density: 11.85, meltingPoint: 577, boilingPoint: 1746, discoveredBy: 'William Crookes', yearDiscovered: 1861
  },
  {
    number: 82, symbol: 'Pb', name: 'Lead', atomicMass: 207.2, period: 6, group: 14,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
    summary: 'Heavy, soft, malleable metal with high density and low melting point; effective radiation shield.',
    everydayUses: ['Automotive lead-acid starter batteries', 'X-ray and gamma radiation shielding aprons', 'Soundproofing acoustic barriers', 'Stained glass window came'],
    density: 11.34, meltingPoint: 600.61, boilingPoint: 2022, discoveredBy: 'Ancient civilizations', yearDiscovered: 'Ancient'
  },
  {
    number: 83, symbol: 'Bi', name: 'Bismuth', atomicMass: 208.98, period: 6, group: 15,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
    summary: 'Has lowest toxicity among heavy metals; forms iridescent rainbow stepped crystals upon slow cooling.',
    everydayUses: ['Pepto-Bismol stomach relief medication (bismuth subsalicylate)', 'Non-toxic hunting shot replacing lead', 'Fire sprinkler system fusible heat plugs', 'Cosmetics pearlescent pigments'],
    density: 9.78, meltingPoint: 544.7, boilingPoint: 1837, discoveredBy: 'Claude François Geoffroy', yearDiscovered: 1753
  },
  {
    number: 84, symbol: 'Po', name: 'Polonium', atomicMass: 209, period: 6, group: 16,
    category: 'post-transition-metal', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
    summary: 'Intensely radioactive rare metalloid discovered by Marie and Pierre Curie, named after Poland.',
    everydayUses: ['Static electricity eliminator brushes in manufacturing', 'Radioisotope thermoelectric generators on Soviet Lunokhod moon rovers', 'Neutron triggers for early atomic weapons', 'Physics research'],
    density: 9.196, meltingPoint: 527, boilingPoint: 1235, discoveredBy: 'Marie and Pierre Curie', yearDiscovered: 1898
  },
  {
    number: 85, symbol: 'At', name: 'Astatine', atomicMass: 210, period: 6, group: 17,
    category: 'metalloid', phase: 'Solid', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',
    summary: 'The rarest naturally occurring element in Earth’s crust (less than 1 gram present globally at any moment).',
    everydayUses: ['Targeted alpha-particle cancer therapy (At-211 trials)', 'Nuclear physics and radiochemistry research', 'Investigational radiopharmaceuticals', 'Decay chain analysis'],
    density: 6.35, meltingPoint: 575, boilingPoint: 610, discoveredBy: 'Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segrè', yearDiscovered: 1940
  },
  {
    number: 86, symbol: 'Rn', name: 'Radon', atomicMass: 222, period: 6, group: 18,
    category: 'noble-gas', phase: 'Gas', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
    summary: 'Radioactive, colorless, odorless noble gas produced by uranium breakdown in soils; health hazard in basements.',
    everydayUses: ['Earthquake prediction precursor monitoring in groundwater', 'Radiation therapy seeds for prostate cancer', 'Hydrology groundwater tracing', 'Environmental radioactive safety mitigation'],
    density: 0.00973, meltingPoint: 202, boilingPoint: 211.3, discoveredBy: 'Friedrich Ernst Dorn', yearDiscovered: 1900
  },
  {
    number: 87, symbol: 'Fr', name: 'Francium', atomicMass: 223, period: 6, group: 1,
    category: 'alkali-metal', phase: 'Solid', electronConfiguration: '[Rn] 7s¹',
    summary: 'Extremely radioactive and unstable alkali metal; second-rarest element in Earth’s crust after astatine.',
    everydayUses: ['Laser trapping experiments in atomic physics', 'Fundamental electroweak nuclear force measurements', 'Quantum electrodynamics tests', 'No commercial everyday applications'],
    density: 1.87, meltingPoint: 300, boilingPoint: 950, discoveredBy: 'Marguerite Perey', yearDiscovered: 1939
  },
  {
    number: 88, symbol: 'Ra', name: 'Radium', atomicMass: 226, period: 6, group: 2,
    category: 'alkaline-earth', phase: 'Solid', electronConfiguration: '[Rn] 7s²',
    summary: 'Intensely radioactive alkaline earth metal that glows faint blue in darkness due to radioluminescence.',
    everydayUses: ['Bone metastases targeted radiotherapy (Ra-223)', 'Historical glow-in-the-dark watch dials (Radium Girls)', 'Early cancer radiation treatments', 'Industrial radiography sources'],
    density: 5.5, meltingPoint: 973, boilingPoint: 2010, discoveredBy: 'Marie and Pierre Curie', yearDiscovered: 1898
  },
  {
    number: 89, symbol: 'Ac', name: 'Actinium', atomicMass: 227, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 6d¹ 7s²',
    summary: 'Radioactive metallic actinide that glows with eerie pale blue light in the dark.',
    everydayUses: ['Targeted alpha therapy (TAT) in oncology (Ac-225)', 'Neutron source for neutron radiography', 'Oceanographic deep-water circulation tracing', 'Advanced nuclear research'],
    density: 10.07, meltingPoint: 1323, boilingPoint: 3471, discoveredBy: 'Friedrich Oskar Giesel', yearDiscovered: 1899
  },
  {
    number: 90, symbol: 'Th', name: 'Thorium', atomicMass: 232.04, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 6d² 7s²',
    summary: 'Naturally occurring, weakly radioactive metal named after Thor; three times more abundant than uranium.',
    everydayUses: ['Next-generation molten salt nuclear reactors (Thorium fuel cycle)', 'High-temperature camping lantern mantles', 'Tungsten welding electrode alloys', 'Heat-resistant ceramic crucibles'],
    density: 11.72, meltingPoint: 2115, boilingPoint: 5061, discoveredBy: 'Jöns Jacob Berzelius', yearDiscovered: 1829
  },
  {
    number: 91, symbol: 'Pa', name: 'Protactinium', atomicMass: 231.04, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f² 6d¹ 7s²',
    summary: 'Dense, silvery-gray radioactive actinide that becomes superconducting below 1.4 K.',
    everydayUses: ['Uranium-thorium marine sediment dating in paleoceanography', 'Advanced nuclear reactor fuel breeding studies', 'Radiochemical research', 'No commercial industrial uses'],
    density: 15.37, meltingPoint: 1841, boilingPoint: 4300, discoveredBy: 'Kasimir Fajans, Oswald Helmuth Göhring', yearDiscovered: 1913
  },
  {
    number: 92, symbol: 'U', name: 'Uranium', atomicMass: 238.03, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f³ 6d¹ 7s²',
    summary: 'Heaviest primordial element in nature; fissile isotope U-235 sustains commercial nuclear reactors.',
    everydayUses: ['Nuclear power plant fuel electricity generation', 'Depleted uranium armor plating & armor-piercing munitions', 'Historical canary-yellow uranium glass (vaseline glass)', 'Geological radiometric rock dating'],
    density: 19.1, meltingPoint: 1405.3, boilingPoint: 4404, discoveredBy: 'Martin Heinrich Klaproth', yearDiscovered: 1789
  },
  {
    number: 93, symbol: 'Np', name: 'Neptunium', atomicMass: 237, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f⁴ 6d¹ 7s²',
    summary: 'First transuranic element ever synthesized; silvery radioactive metal named after planet Neptune.',
    everydayUses: ['Precursor isotope to create Plutonium-238 for NASA deep-space batteries', 'High-energy neutron detection instruments', 'Nuclear weapons byproduct studies', 'Transuranic actinide physics'],
    density: 20.45, meltingPoint: 917, boilingPoint: 4273, discoveredBy: 'Edwin McMillan, Philip H. Abelson', yearDiscovered: 1940
  },
  {
    number: 94, symbol: 'Pu', name: 'Plutonium', atomicMass: 244, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f⁶ 7s²',
    summary: 'Actinide metal whose Pu-238 decay heat powers radioisotope thermoelectric generators in spacecraft.',
    everydayUses: ['NASA Mars rovers (Perseverance, Curiosity) & Voyager RTG batteries', 'Nuclear energy MOX fuel pellets', 'Nuclear deterrence warheads', 'Historical cardiac pacemakers'],
    density: 19.816, meltingPoint: 912.5, boilingPoint: 3505, discoveredBy: 'Glenn T. Seaborg, Edwin McMillan', yearDiscovered: 1940
  },
  {
    number: 95, symbol: 'Am', name: 'Americium', atomicMass: 243, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f⁷ 7s²',
    summary: 'Radioactive actinide synthesized by Glenn Seaborg; the only synthetic element found in everyday homes.',
    everydayUses: ['Household ionization smoke detectors (Am-241 alpha emitter)', 'Industrial thickness gauges for paper and plastics', 'Non-destructive neutron radiography probes', 'Portable neutron sources'],
    density: 12.0, meltingPoint: 1449, boilingPoint: 2880, discoveredBy: 'Glenn T. Seaborg, Ralph A. James', yearDiscovered: 1944
  },
  {
    number: 96, symbol: 'Cm', name: 'Curium', atomicMass: 247, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f⁷ 6d¹ 7s²',
    summary: 'Radioactive actinide named after Marie and Pierre Curie; produces intense alpha radiation.',
    everydayUses: ['Alpha Particle X-Ray Spectrometers (APXS) on Mars exploration rovers', 'Thermoelectric generators for remote planetary probes', 'Precursor for synthesizing heavier actinides', 'Nuclear physics research'],
    density: 13.51, meltingPoint: 1613, boilingPoint: 3383, discoveredBy: 'Glenn T. Seaborg, Ralph A. James', yearDiscovered: 1944
  },
  {
    number: 97, symbol: 'Bk', name: 'Berkelium', atomicMass: 247, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f⁹ 7s²',
    summary: 'Silvery synthetic radioactive actinide synthesized at UC Berkeley, used as target to create Tennessine.',
    everydayUses: ['Target material for synthesizing superheavy element Tennessine (117)', 'Target for Californium production in high-flux reactors', 'Fundamental coordination chemistry research', 'No commercial consumer uses'],
    density: 14.78, meltingPoint: 1259, boilingPoint: 2900, discoveredBy: 'Glenn T. Seaborg, Albert Ghiorso, Stanley G. Thompson', yearDiscovered: 1949
  },
  {
    number: 98, symbol: 'Cf', name: 'Californium', atomicMass: 251, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f¹⁰ 7s²',
    summary: 'Extremely potent neutron emitter; one microgram emits 170 million neutrons every minute.',
    everydayUses: ['Nuclear reactor startup neutron starter sources', 'Neutron moisture gauges for highway and building construction', 'Neutron activation analysis for mineral exploration', 'Cervical cancer radiation brachytherapy'],
    density: 15.1, meltingPoint: 1173, boilingPoint: 1743, discoveredBy: 'Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso, Glenn T. Seaborg', yearDiscovered: 1950
  },
  {
    number: 99, symbol: 'Es', name: 'Einsteinium', atomicMass: 252, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f¹¹ 7s²',
    summary: 'Discovered in the radioactive debris of the first thermonuclear hydrogen bomb test (Ivy Mike) in 1952.',
    everydayUses: ['Synthesis of heavier element Mendelevium (101)', 'Fundamental studies of actinide relativistic effects', 'High-energy nuclear physics experiments', 'No industrial applications'],
    density: 8.84, meltingPoint: 1133, boilingPoint: 1269, discoveredBy: 'Albert Ghiorso and team', yearDiscovered: 1952
  },
  {
    number: 100, symbol: 'Fm', name: 'Fermium', atomicMass: 257, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f¹² 7s²',
    summary: 'Heaviest element that can be prepared by neutron bombardment of lighter elements in nuclear reactors.',
    everydayUses: ['Studies of spontaneous nuclear fission dynamics', 'Heavy element nucleosynthesis benchmarking', 'Chemical complexation studies', 'No commercial applications'],
    density: 9.7, meltingPoint: 1800, boilingPoint: undefined, discoveredBy: 'Albert Ghiorso and team', yearDiscovered: 1952
  },
  {
    number: 101, symbol: 'Md', name: 'Mendelevium', atomicMass: 258, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f¹³ 7s²',
    summary: 'First element produced one atom at a time; named after Dmitri Mendeleev, father of the Periodic Table.',
    everydayUses: ['Investigation of chemical valence states in actinides', 'Single-atom radiochemistry methodologies', 'Scientific exploration of atomic stability', 'No industrial applications'],
    density: 10.3, meltingPoint: 1100, boilingPoint: undefined, discoveredBy: 'Albert Ghiorso, Bernard G. Harvey, Gregory R. Choppin, Stanley G. Thompson, Glenn T. Seaborg', yearDiscovered: 1955
  },
  {
    number: 102, symbol: 'No', name: 'Nobelium', atomicMass: 259, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f¹⁴ 7s²',
    summary: 'Penultimate actinide element, named after Alfred Nobel; exhibits unique divalent chemical behavior.',
    everydayUses: ['Basic research in relativistic atomic structure', 'Superheavy element decay studies', 'Nuclear physics research', 'No industrial uses'],
    density: 9.9, meltingPoint: 1100, boilingPoint: undefined, discoveredBy: 'Georgy Flerov and JINR team, Albert Ghiorso', yearDiscovered: 1966
  },
  {
    number: 103, symbol: 'Lr', name: 'Lawrencium', atomicMass: 266, period: 7, group: 3,
    category: 'actinide', phase: 'Solid', electronConfiguration: '[Rn] 5f¹⁴ 7s² 7p¹',
    summary: 'Final element of the actinide series; named after Ernest Lawrence, inventor of the cyclotron.',
    everydayUses: ['Testing predictions of relativistic electron orbital contractions', 'Closing the actinide series in quantum chemistry', 'Nuclear cross-section physics', 'No commercial applications'],
    density: 14.4, meltingPoint: 1900, boilingPoint: undefined, discoveredBy: 'Albert Ghiorso and team at Berkeley', yearDiscovered: 1961
  },
  {
    number: 104, symbol: 'Rf', name: 'Rutherfordium', atomicMass: 267, period: 7, group: 4,
    category: 'transition-metal', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d² 7s²',
    summary: 'First transactinide superheavy element; named after Ernest Rutherford, discoverer of the atomic nucleus.',
    everydayUses: ['Gas-phase chemical studies of superheavy halides', 'Testing periodic law in group 4 at extreme mass', 'Basic nuclear science', 'No commercial applications'],
    density: 17, meltingPoint: 2400, boilingPoint: 5800, discoveredBy: 'JINR (Dubna) & LBNL (Berkeley)', yearDiscovered: 1969
  },
  {
    number: 105, symbol: 'Db', name: 'Dubnium', atomicMass: 268, period: 7, group: 5,
    category: 'transition-metal', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d³ 7s²',
    summary: 'Superheavy element named after the scientific research town of Dubna, Russia.',
    everydayUses: ['Aqueous chemical extraction of group 5 pentavalent complexes', 'Relativistic quantum chemistry verification', 'Heavy-ion fusion science', 'No industrial applications'],
    density: 21.6, meltingPoint: undefined, boilingPoint: undefined, discoveredBy: 'JINR & LBNL', yearDiscovered: 1970
  },
  {
    number: 106, symbol: 'Sg', name: 'Seaborgium', atomicMass: 269, period: 7, group: 6,
    category: 'transition-metal', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d⁴ 7s²',
    summary: 'First element named after a living person at the time (Glenn T. Seaborg); chemistry mimics tungsten and molybdenum.',
    everydayUses: ['Synthesis of seaborgium carbonyl compounds (Sg(CO)₆)', 'Confirmation of group 6 chemical periodicity', 'Nuclear stability models', 'No industrial uses'],
    density: 23.5, meltingPoint: undefined, boilingPoint: undefined, discoveredBy: 'LBNL (Lawrence Berkeley National Lab)', yearDiscovered: 1974
  },
  {
    number: 107, symbol: 'Bh', name: 'Bohrium', atomicMass: 270, period: 7, group: 7,
    category: 'transition-metal', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d⁵ 7s²',
    summary: 'Superheavy element named in honor of Danish quantum pioneer Niels Bohr.',
    everydayUses: ['Volatile oxychloride gas chromatography research', 'Validating group 7 chemical trends for superheavy atoms', 'Decay chain physics', 'No commercial uses'],
    density: 26.3, meltingPoint: undefined, boilingPoint: undefined, discoveredBy: 'GSI Helmholtz Centre, Germany', yearDiscovered: 1981
  },
  {
    number: 108, symbol: 'Hs', name: 'Hassium', atomicMass: 269, period: 7, group: 8,
    category: 'transition-metal', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d⁶ 7s²',
    summary: 'Named after the German state of Hesse (Hassia); forms volatile tetroxide HsO₄ like osmium.',
    everydayUses: ['Single-molecule thermochromatography experiments', 'Nuclear shell model and island of stability research', 'Decay spectroscopy', 'No commercial uses'],
    density: 27.6, meltingPoint: undefined, boilingPoint: undefined, discoveredBy: 'GSI Helmholtz Centre, Germany', yearDiscovered: 1984
  },
  {
    number: 109, symbol: 'Mt', name: 'Meitnerium', atomicMass: 278, period: 7, group: 9,
    category: 'unknown', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d⁷ 7s²',
    summary: 'Named in honor of Austrian-Swedish physicist Lise Meitner, co-discoverer of nuclear fission.',
    everydayUses: ['Heavy ion collision research', 'Synthesis benchmarking of superheavy nuclides', 'Relativistic quantum chemistry testing', 'No commercial uses'],
    density: 28, meltingPoint: undefined, boilingPoint: undefined, discoveredBy: 'GSI Helmholtz Centre, Germany', yearDiscovered: 1982
  },
  {
    number: 110, symbol: 'Ds', name: 'Darmstadtium', atomicMass: 281, period: 7, group: 10,
    category: 'unknown', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d⁸ 7s²',
    summary: 'Named after the city of Darmstadt, Germany, where GSI Helmholtz Centre is situated.',
    everydayUses: ['Superheavy element decay mode investigations', 'Studies of atomic deformation and nuclear shape', 'Frontier nuclear physics', 'No commercial uses'],
    density: 26, meltingPoint: undefined, boilingPoint: undefined, discoveredBy: 'GSI Helmholtz Centre, Germany', yearDiscovered: 1994
  },
  {
    number: 111, symbol: 'Rg', name: 'Roentgenium', atomicMass: 282, period: 7, group: 11,
    category: 'unknown', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d⁹ 7s²',
    summary: 'Named after Wilhelm Conrad Röntgen, discoverer of X-rays; homologous to gold.',
    everydayUses: ['Tests of extreme relativistic effects on metallic bonding', 'Group 11 coin metal homologous behavior', 'Nuclear synthesis studies', 'No commercial uses'],
    density: 28.7, meltingPoint: undefined, boilingPoint: undefined, discoveredBy: 'GSI Helmholtz Centre, Germany', yearDiscovered: 1994
  },
  {
    number: 112, symbol: 'Cn', name: 'Copernicium', atomicMass: 285, period: 7, group: 12,
    category: 'transition-metal', phase: 'Expected Gas', electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s²',
    summary: 'Named after Nicolaus Copernicus; relativistic effects make it behave almost like a noble gas.',
    everydayUses: ['Gas chromatography on gold surfaces demonstrating high volatility', 'Understanding relativistic inertness of 7s² electrons', 'Superheavy atomic physics', 'No commercial uses'],
    density: 14.0, meltingPoint: 283, boilingPoint: 340, discoveredBy: 'GSI Helmholtz Centre, Germany', yearDiscovered: 1996
  },
  {
    number: 113, symbol: 'Nh', name: 'Nihonium', atomicMass: 286, period: 7, group: 13,
    category: 'unknown', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
    summary: 'First chemical element discovered in an Asian nation (RIKEN, Japan); named after Nihon (Japan).',
    everydayUses: ['Cold fusion reaction production benchmark', 'Investigation of 7p orbital relativistic stabilization', 'Nuclear mass formula tests', 'No commercial uses'],
    density: 16, meltingPoint: 700, boilingPoint: 1400, discoveredBy: 'RIKEN, Japan', yearDiscovered: 2004
  },
  {
    number: 114, symbol: 'Fl', name: 'Flerovium', atomicMass: 289, period: 7, group: 14,
    category: 'post-transition-metal', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
    summary: 'Named after Flerov Laboratory of Nuclear Reactions; key probe for the theoretical "island of stability".',
    everydayUses: ['Exploration of the superheavy island of stability', 'Measurement of spin-orbit splitting in 7p electrons', 'Nuclear half-life prolongation trials', 'No commercial uses'],
    density: 9.9, meltingPoint: 200, boilingPoint: 380, discoveredBy: 'JINR (Dubna) & LLNL', yearDiscovered: 1998
  },
  {
    number: 115, symbol: 'Mc', name: 'Moscovium', atomicMass: 290, period: 7, group: 15,
    category: 'unknown', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
    summary: 'Synthesized via fusion of Americium-243 and Calcium-48 beams; named after Moscow Oblast.',
    everydayUses: ['Superheavy alpha decay chain spectroscopy', 'Testing fusion cross sections of radioactive actinide targets', 'Relativistic quantum chemistry calculations', 'No commercial uses'],
    density: 13.5, meltingPoint: 670, boilingPoint: 1400, discoveredBy: 'JINR (Dubna), LLNL, and ORNL', yearDiscovered: 2003
  },
  {
    number: 116, symbol: 'Lv', name: 'Livermorium', atomicMass: 293, period: 7, group: 16,
    category: 'unknown', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
    summary: 'Named in honor of Lawrence Livermore National Laboratory in California.',
    everydayUses: ['Target studies for heavy actinide synthesis', 'Decay chain validation for superheavy nuclei', 'Frontier nuclear astrophysics modeling', 'No commercial uses'],
    density: 12.9, meltingPoint: 700, boilingPoint: 1100, discoveredBy: 'JINR and LLNL', yearDiscovered: 2000
  },
  {
    number: 117, symbol: 'Ts', name: 'Tennessine', atomicMass: 294, period: 7, group: 17,
    category: 'unknown', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
    summary: 'Synthesized using a rare target of Berkelium-249 irradiated by Calcium-48 beams; named after Tennessee.',
    everydayUses: ['Synthesized through international collaboration between ORNL, UT Knoxville, LLNL, and JINR', 'Exploring halogen group trends at extreme atomic numbers', 'Island of stability boundary mapping', 'No commercial uses'],
    density: 7.2, meltingPoint: 723, boilingPoint: 883, discoveredBy: 'JINR, LLNL, ORNL, and Vanderbilt', yearDiscovered: 2010
  },
  {
    number: 118, symbol: 'Og', name: 'Oganesson', atomicMass: 294, period: 7, group: 18,
    category: 'noble-gas', phase: 'Expected Solid', electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
    summary: 'Heaviest known chemical element. Named after Russian nuclear physicist Yuri Oganessian; predicted to be a semiconductor solid rather than a gas.',
    everydayUses: ['Marks the complete filling of the 7th period of the Periodic Table', 'Testing the limit of the periodic table and relativistic electron smearing', 'Frontier heavy-ion physics', 'No commercial uses'],
    density: 5.0, meltingPoint: 325, boilingPoint: 350, discoveredBy: 'JINR (Dubna) and LLNL', yearDiscovered: 2002
  }
];

export const CATEGORY_LABELS: Record<ChemicalElement['category'], string> = {
  'alkali-metal': 'Alkali Metals',
  'alkaline-earth': 'Alkaline Earth',
  'transition-metal': 'Transition Metals',
  'post-transition-metal': 'Post-Transition Metals',
  'metalloid': 'Metalloids',
  'reactive-nonmetal': 'Reactive Nonmetals',
  'noble-gas': 'Noble Gases',
  'lanthanide': 'Lanthanides',
  'actinide': 'Actinides',
  'unknown': 'Superheavy / Unknown'
};

export const CATEGORY_COLORS: Record<ChemicalElement['category'], { bg: string; text: string; border: string }> = {
  'alkali-metal': { bg: 'bg-rose-950/70', text: 'text-rose-300', border: 'border-rose-500/40' },
  'alkaline-earth': { bg: 'bg-amber-950/70', text: 'text-amber-300', border: 'border-amber-500/40' },
  'transition-metal': { bg: 'bg-cyan-950/70', text: 'text-cyan-300', border: 'border-cyan-500/40' },
  'post-transition-metal': { bg: 'bg-emerald-950/70', text: 'text-emerald-300', border: 'border-emerald-500/40' },
  'metalloid': { bg: 'bg-teal-950/70', text: 'text-teal-300', border: 'border-teal-500/40' },
  'reactive-nonmetal': { bg: 'bg-blue-950/70', text: 'text-blue-300', border: 'border-blue-500/40' },
  'noble-gas': { bg: 'bg-purple-950/70', text: 'text-purple-300', border: 'border-purple-500/40' },
  'lanthanide': { bg: 'bg-indigo-950/70', text: 'text-indigo-300', border: 'border-indigo-500/40' },
  'actinide': { bg: 'bg-fuchsia-950/70', text: 'text-fuchsia-300', border: 'border-fuchsia-500/40' },
  'unknown': { bg: 'bg-slate-900', text: 'text-slate-400', border: 'border-slate-700' }
};
