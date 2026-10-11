export interface OrganelleInfo {
  id: string;
  name: string;
  foundIn: 'both' | 'plant-only' | 'animal-only';
  role: string;
  structure: string;
  analogy: string;
}

export const CELL_ORGANELLES: OrganelleInfo[] = [
  {
    id: 'nucleus',
    name: 'Nucleus',
    foundIn: 'both',
    role: 'Houses the cell’s genetic material (chromatin DNA) and orchestrates transcription, cell division, and metabolism.',
    structure: 'Enclosed by a double-membrane nuclear envelope with nuclear pores and a dense nucleolus where ribosomes assemble.',
    analogy: 'The City Hall / Executive Headquarters of the cell.'
  },
  {
    id: 'mitochondria',
    name: 'Mitochondria',
    foundIn: 'both',
    role: 'Generates cellular ATP energy via Krebs cycle and oxidative phosphorylation using oxygen.',
    structure: 'Dual-membrane organelle with a smooth outer membrane and folded inner cristae enclosing the mitochondrial matrix.',
    analogy: 'The Power Generating Plant of the cell.'
  },
  {
    id: 'chloroplast',
    name: 'Chloroplast',
    foundIn: 'plant-only',
    role: 'Converts solar electromagnetic energy, CO₂, and H₂O into biochemical energy (glucose) via photosynthesis.',
    structure: 'Enclosed by double membrane; contains fluid stroma and stacks of coin-like thylakoid membranes (grana) containing green chlorophyll.',
    analogy: 'The Solar Energy Array & Food Kitchen of the plant cell.'
  },
  {
    id: 'cell-wall',
    name: 'Cell Wall',
    foundIn: 'plant-only',
    role: 'Provides structural rigidity, tensile strength, protection against osmotic lysis, and defines plant shape.',
    structure: 'Rigid outer layer composed primarily of crystalline cellulose microfibrils, hemicellulose, and pectin.',
    analogy: 'The Fortified Outer City Wall.'
  },
  {
    id: 'vacuole',
    name: 'Central Vacuole',
    foundIn: 'plant-only',
    role: 'Maintains turgor pressure against the cell wall, stores water, ions, nutrients, and degrades metabolic wastes.',
    structure: 'Large fluid-filled single-membrane vesicle (tonoplast) occupying up to 90% of mature plant cell volume.',
    analogy: 'The Central Municipal Water Reservoir & Storage Facility.'
  },
  {
    id: 'ribosome',
    name: 'Ribosomes',
    foundIn: 'both',
    role: 'Translates messenger RNA (mRNA) nucleotide sequences into polypeptide amino acid chains (proteins).',
    structure: 'Non-membranous complexes consisting of ribosomal RNA (rRNA) and catalytic proteins, composed of small and large subunits.',
    analogy: 'The Molecular Factories & Assembly Lines.'
  },
  {
    id: 'er-rough',
    name: 'Rough Endoplasmic Reticulum (RER)',
    foundIn: 'both',
    role: 'Synthesizes, folds, and post-translationally modifies secretory and membrane-bound proteins.',
    structure: 'Interconnected network of flattened membranous cisternae studded on its cytoplasmic face with ribosomes.',
    analogy: 'The Primary Manufacturing & Assembly Corridor.'
  },
  {
    id: 'golgi',
    name: 'Golgi Apparatus',
    foundIn: 'both',
    role: 'Receives, sorts, chemically tags (glycosylation), and packages proteins and lipids into transport vesicles.',
    structure: 'Stack of distinct flattened curved cisternal membranes with cis (entry) and trans (shipping) faces.',
    analogy: 'The Global Postal & Shipping Distribution Hub.'
  },
  {
    id: 'cell-membrane',
    name: 'Plasma Membrane',
    foundIn: 'both',
    role: 'Regulates the selective passage of molecules, maintains ionic gradients, and mediates cellular signaling.',
    structure: 'Phospholipid bilayer with hydrophilic phosphate heads, hydrophobic fatty acid tails, cholesterol, and embedded transport proteins.',
    analogy: 'The Security Checkpoint & Permeable Border.'
  }
];

export const BODY_SYSTEMS = [
  {
    id: 'circulatory',
    name: 'Circulatory System',
    primaryOrgans: 'Heart, Arteries, Veins, Capillaries, Blood',
    function: 'Transports oxygen, nutrients, hormones, and immune cells to tissues while transporting metabolic wastes (CO₂, urea) to excretion organs.',
    keyFact: 'If all blood vessels in a human body were laid end-to-end, they would stretch roughly 100,000 kilometers—more than twice around the Earth.'
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    primaryOrgans: 'Lungs, Trachea, Bronchi, Alveoli, Diaphragm',
    function: 'Facilitates gas exchange: supplies oxygen to the bloodstream and expels metabolic carbon dioxide through alveolar membranes.',
    keyFact: 'The interior surface area of human alveoli in the lungs is approximately 70 square meters—about the size of half a tennis court.'
  },
  {
    id: 'nervous',
    name: 'Nervous System',
    primaryOrgans: 'Brain, Spinal Cord, Peripheral Nerves, Neurons',
    function: 'Detects sensory inputs, processes information, regulates autonomic reflexes, and coordinates voluntary muscle contraction via electrical action potentials.',
    keyFact: 'The human brain contains approximately 86 billion neurons, each connected to thousands of neighboring cells via trillions of synaptic junctions.'
  },
  {
    id: 'digestive',
    name: 'Digestive System',
    primaryOrgans: 'Stomach, Small Intestine, Large Intestine, Liver, Pancreas',
    function: 'Mechanically and chemically breaks down food macromolecules into absorbable monosaccharides, amino acids, and lipids.',
    keyFact: 'The human gastrointestinal tract harbors trillions of beneficial microbes (the gut microbiome) that produce vitamins and modulate immunity.'
  },
  {
    id: 'musculoskeletal',
    name: 'Musculoskeletal System',
    primaryOrgans: 'Bones (206 in adults), Skeletal Muscles, Tendons, Ligaments, Cartilage',
    function: 'Provides mechanical framework, protects vital thoracic/cranial organs, facilitates locomotion, stores calcium, and synthesizes blood cells in marrow.',
    keyFact: 'Human bone tissue is dynamic living material; compact bone has a compressive strength greater than reinforced concrete.'
  }
];

export const ECOSYSTEM_LEVELS = [
  {
    level: 1,
    title: 'Primary Producers (Autotrophs)',
    examples: 'Phytoplankton, Green Plants, Algae, Cyanobacteria',
    energyTransfer: '100% of captured solar/chemical energy',
    description: 'Capture photons via chlorophyll to fix carbon into high-energy carbohydrates.'
  },
  {
    level: 2,
    title: 'Primary Consumers (Herbivores)',
    examples: 'Zooplankton, Insects, Rabbits, Deer, Cattle',
    energyTransfer: '~10% of producer energy passed up (90% lost as heat/metabolism)',
    description: 'Consume living plant biomass for sustenance and growth.'
  },
  {
    level: 3,
    title: 'Secondary Consumers (Carnivores)',
    examples: 'Small Fish, Frogs, Spiders, Foxes, Songbirds',
    energyTransfer: '~1% of original solar energy available',
    description: 'Prey on herbivores to derive organic nutrients.'
  },
  {
    level: 4,
    title: 'Apex Predators (Tertiary Consumers)',
    examples: 'Orcas, Hawks, Lions, Polar Bears, Great White Sharks',
    energyTransfer: '~0.1% of base energy reaches this trophic pinnacle',
    description: 'Occupy the top of trophic chains with no natural non-human predators in their habitat.'
  }
];
