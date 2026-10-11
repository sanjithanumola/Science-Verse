import { Experiment } from '../types';

export const EXPERIMENTS_DATA: Experiment[] = [
  // Physics Experiments
  {
    id: 'gravity-free-fall',
    title: 'Gravity & Free Fall Motion',
    category: 'physics',
    difficulty: 'Beginner',
    tag: 'Classical Mechanics',
    description: 'Investigate how mass, drop height, gravitational acceleration, and air resistance affect falling bodies.',
    learningObjective: 'Observe Galileo’s principle that in a vacuum, all objects fall with the exact same acceleration independent of mass.',
    whatYouLearned: 'In the absence of air drag, acceleration due to gravity is constant ($g$). Terminal velocity occurs when air resistance balances the downward gravitational force ($F_g = F_d$).',
    safetyNotes: 'Educational virtual simulation. Real lab drop tests should ensure soft landing zones.'
  },
  {
    id: 'projectile-motion',
    title: 'Projectile Trajectory & Kinematics',
    category: 'physics',
    difficulty: 'Intermediate',
    tag: 'Kinematics',
    description: 'Launch cannonballs at adjustable launch velocities and angles to study parabolic paths, peak heights, and maximum horizontal ranges.',
    learningObjective: 'Understand the independence of perpendicular horizontal ($v_x = v_0 \cos\theta$) and vertical ($v_y = v_0 \sin\theta - gt$) motions.',
    whatYouLearned: 'In the absence of air drag, a 45° launch angle maximizes horizontal range ($R = v_0^2 \sin(2\theta) / g$). Maximum altitude occurs when vertical velocity becomes zero.',
    safetyNotes: 'Pure mathematical simulation of classical projectile equations.'
  },
  {
    id: 'simple-pendulum',
    title: 'Simple Harmonic Motion: Pendulum',
    category: 'physics',
    difficulty: 'Beginner',
    tag: 'Harmonic Motion',
    description: 'Swing a suspended bob with variable string length, mass, local planetary gravity, and air damping.',
    learningObjective: 'Verify that pendulum period depends primarily on length ($L$) and gravity ($g$), not on bob mass for small angles.',
    whatYouLearned: 'For small oscillations ($\theta < 15^\circ$), the period is given by $T = 2\pi\sqrt{L/g}$. Lengthening the string increases period; higher gravity decreases period.',
    safetyNotes: 'Computer simulation of simple harmonic oscillations.'
  },
  {
    id: 'light-refraction',
    title: 'Optics: Reflection & Snell’s Law',
    category: 'physics',
    difficulty: 'Intermediate',
    tag: 'Wave Optics',
    description: 'Direct a laser ray across boundaries of different optical densities (air, water, glass, diamond) to observe refraction and total internal reflection.',
    learningObjective: 'Apply Snell’s Law ($n_1 \sin\theta_1 = n_2 \sin\theta_2$) and calculate the critical angle for total internal reflection.',
    whatYouLearned: 'Light bends toward the normal when entering a denser optical medium with a higher refractive index ($n$). Total internal reflection occurs when incident angle exceeds $\theta_c = \arcsin(n_2/n_1)$.',
    safetyNotes: 'Virtual optical ray tracing. High-power laboratory lasers require protective eyewear.'
  },
  {
    id: 'electric-circuit',
    title: 'Direct Current Circuit & Ohm’s Law',
    category: 'physics',
    difficulty: 'Beginner',
    tag: 'Electromagnetism',
    description: 'Construct a closed direct-current circuit with a battery, adjustable resistor, switches, and a filament light bulb.',
    learningObjective: 'Master Ohm’s Law ($V = I \cdot R$) and Joule’s law of electric power ($P = V \cdot I = I^2 \cdot R$).',
    whatYouLearned: 'Current is directly proportional to voltage and inversely proportional to resistance. Increased power dissipation manifests as higher filament glow brightness.',
    safetyNotes: 'Simulation handles short circuits virtually. In real life, zero-resistance loops can cause battery rupture or fire.'
  },
  {
    id: 'magnetic-field',
    title: 'Magnetic Dipole & Compass Lines',
    category: 'physics',
    difficulty: 'Beginner',
    tag: 'Magnetism',
    description: 'Visualize magnetic field lines and the orientation of compass needles around a dipole bar magnet.',
    learningObjective: 'Explore magnetic dipole field morphology, polarity rules (opposites attract, likes repel), and inverse-cube field decay.',
    whatYouLearned: 'Magnetic flux lines emerge from the North pole and curve back into the South pole. Isolated magnetic monopoles have never been observed in nature.',
    safetyNotes: 'Harmless digital dipole field simulation.'
  },

  // Chemistry Experiments
  {
    id: 'atom-structure',
    title: 'Bohr Atom Structure & Isotopes',
    category: 'chemistry',
    difficulty: 'Beginner',
    tag: 'Atomic Theory',
    description: 'Assemble subatomic particles (protons, neutrons, and electrons) to synthesize elements, observe electron shell filling, and test isotope stability.',
    learningObjective: 'Understand how atomic number ($Z$) determines element identity, mass number ($A = Z + N$), net charge, and shell capacities (2, 8, 18, 32).',
    whatYouLearned: 'Protons dictate element type; neutrons determine isotopic stability; electrons in outermost valence shells govern chemical reactivity.',
    safetyNotes: 'Atomic model visualization based on Bohr-Rutherford quantum mechanics.'
  },
  {
    id: 'molecule-builder',
    title: '2D Molecule Builder & Covalent Bonds',
    category: 'chemistry',
    difficulty: 'Intermediate',
    tag: 'Chemical Bonding',
    description: 'Combine carbon, hydrogen, oxygen, and nitrogen atoms to construct stable covalent molecules following the octet rule.',
    learningObjective: 'Understand valence electron sharing, single/double/triple covalent bonds, and common molecular geometries.',
    whatYouLearned: 'Atoms share electrons to achieve stable noble gas electron configurations (octet rule). Hydrogen forms 1 bond, oxygen 2, nitrogen 3, and carbon 4.',
    safetyNotes: 'Safe molecular structural modeling.'
  },
  {
    id: 'acids-bases-ph',
    title: 'Acids, Bases & The pH Scale',
    category: 'chemistry',
    difficulty: 'Beginner',
    tag: 'Aqueous Chemistry',
    description: 'Test solutions ranging from battery acid to bleach using a simulated pH probe and universal indicator color palette.',
    learningObjective: 'Understand that pH is a negative logarithmic scale: $\\text{pH} = -\\log_{10}[\\text{H}^+]$, where each unit represents a tenfold change.',
    whatYouLearned: 'A pH of 7 represents neutrality ($[\\text{H}^+] = [\\text{OH}^-] = 10^{-7}\\text{ M}$). Solutions with pH < 7 are acidic, while pH > 7 are alkaline/basic.',
    safetyNotes: 'Educational simulated liquids. Real concentrated acids and bases require safety goggles, gloves, and fume hoods.'
  },
  {
    id: 'states-of-matter',
    title: 'States of Matter & Kinetic Theory',
    category: 'chemistry',
    difficulty: 'Intermediate',
    tag: 'Thermodynamics',
    description: 'Heat and cool particles in a sealed vessel to observe phase transitions between solid, liquid, and gas phases along with pressure shifts.',
    learningObjective: 'Explore how thermal kinetic energy competes with intermolecular attractions to produce solid lattices, fluid liquids, and high-energy gases.',
    whatYouLearned: 'Temperature is a direct measure of average particle kinetic energy ($E_k = \\frac{3}{2} k_B T$). Heating causes particles to vibrate and overcome intermolecular bonds.',
    safetyNotes: 'Sealed vessel kinetic simulation demonstrating ideal gas behaviors.'
  },
  {
    id: 'chemical-balancer',
    title: 'Chemical Equation Stoichiometry',
    category: 'chemistry',
    difficulty: 'Intermediate',
    tag: 'Stoichiometry',
    description: 'Balance chemical reactions by adjusting stoichiometric coefficients to satisfy the Law of Conservation of Mass.',
    learningObjective: 'Verify that matter cannot be created or destroyed: the total count of each atomic species must match on reactant and product sides.',
    whatYouLearned: 'Changing coefficients changes the number of molecules; changing subscripts alters the chemical substance itself. Both mass and charge are conserved.',
    safetyNotes: 'Virtual equation balancer.'
  },

  // Biology Experiments
  {
    id: 'cell-explorer',
    title: 'Cell Anatomy: Plant vs Animal Cells',
    category: 'biology',
    difficulty: 'Beginner',
    tag: 'Cytology',
    description: 'Interact with high-detail cell diagrams to compare organelles: nucleus, mitochondria, chloroplasts, ribosomes, cell wall, and vacuoles.',
    learningObjective: 'Identify unique organelles of plant cells (chloroplasts, cellulose cell wall, large central vacuole) versus animal cells (centrioles, lysosomes).',
    whatYouLearned: 'Cells are the fundamental units of life. Mitochondria produce ATP via cellular respiration; chloroplasts produce sugars via photosynthesis.',
    safetyNotes: 'Virtual microscopic cytological examination.'
  },
  {
    id: 'photosynthesis-sandbox',
    title: 'Photosynthesis Rate Simulation',
    category: 'biology',
    difficulty: 'Intermediate',
    tag: 'Plant Physiology',
    description: 'Control sunlight intensity, ambient CO₂ levels, water, and temperature to observe the production of oxygen bubbles and glucose.',
    learningObjective: 'Understand the overall equation: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{light} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$ and limiting factor curves.',
    whatYouLearned: 'Photosynthesis rate is constrained by whichever essential resource is in lowest supply (Liebig’s Law of the Minimum). Excessive heat denatures metabolic enzymes.',
    safetyNotes: 'Simulated biological ecosystem response.'
  },
  {
    id: 'dna-helix',
    title: 'DNA Structure & Base Pairing',
    category: 'biology',
    difficulty: 'Beginner',
    tag: 'Molecular Genetics',
    description: 'Assemble a complementary strand of DNA following Chargaff’s rules (Adenine pairs with Thymine, Cytosine with Guanine).',
    learningObjective: 'Learn the antiparallel double-helix architecture, deoxyribose phosphate backbones, and purine-pyrimidine hydrogen bonding.',
    whatYouLearned: 'Adenine (A) forms 2 hydrogen bonds with Thymine (T); Guanine (G) forms 3 hydrogen bonds with Cytosine (C). This ensures faithful replication and transcription.',
    safetyNotes: 'Biochemical structural puzzle.'
  },
  {
    id: 'heart-circulation',
    title: 'Human Heart & Blood Circulation',
    category: 'biology',
    difficulty: 'Intermediate',
    tag: 'Cardiovascular System',
    description: 'Follow blood flow through the 4 chambers of the heart, valves, pulmonary circulation (lungs), and systemic circulation (body tissues).',
    learningObjective: 'Trace deoxygenated blood through right atrium and ventricle to lungs, and oxygenated blood from left atrium and ventricle out the aorta.',
    whatYouLearned: 'The heart is a dual-pump muscular organ. Valves (tricuspid, bicuspid/mitral, aortic, pulmonary) ensure unidirectional flow and prevent backflow.',
    safetyNotes: 'Educational anatomical model.'
  }
];
