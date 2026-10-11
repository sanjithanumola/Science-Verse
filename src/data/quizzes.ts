import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Physics (10 questions)
  {
    id: 'phy-1',
    subject: 'physics',
    difficulty: 'Beginner',
    question: 'According to Newton’s First Law of Motion, what will an object in motion do if no net external force acts upon it?',
    options: [
      'Gradually slow down due to internal fatigue',
      'Continue moving at constant velocity in a straight line',
      'Accelerate spontaneously toward Earth',
      'Change direction at random intervals'
    ],
    correctIndex: 1,
    explanation: 'Newton’s First Law (Inertia) states that an object at rest stays at rest, and an object in motion continues at constant velocity in a straight line unless acted upon by a net unbalanced force.'
  },
  {
    id: 'phy-2',
    subject: 'physics',
    difficulty: 'Beginner',
    question: 'In a vacuum where air resistance is zero, which object falls toward the ground faster?',
    options: [
      'A 10 kg iron cannonball',
      'A 1 g bird feather',
      'Both fall at exactly the same acceleration',
      'The object with the larger cross-sectional area'
    ],
    correctIndex: 2,
    explanation: 'Galileo demonstrated that in the absence of air resistance, all objects accelerate downward at the exact same rate ($g \\approx 9.8\\text{ m/s}^2$ on Earth), regardless of their mass.'
  },
  {
    id: 'phy-3',
    subject: 'physics',
    difficulty: 'Intermediate',
    question: 'When light passes from air (lower optical density) into water (higher optical density) at an angle, what happens to the light ray?',
    options: [
      'It bends away from the normal line',
      'It bends toward the normal line and slows down',
      'It continues completely straight with higher speed',
      'It is absorbed completely with zero transmission'
    ],
    correctIndex: 1,
    explanation: 'Snell’s Law indicates that entering an optically denser medium ($n_2 > n_1$) reduces the phase speed of light ($v = c/n$), causing the ray to bend toward the normal line.'
  },
  {
    id: 'phy-4',
    subject: 'physics',
    difficulty: 'Intermediate',
    question: 'What is the period of a simple pendulum with string length 1.0 m on Earth ($g \\approx 9.8\\text{ m/s}^2$)?',
    options: [
      'Approximately 0.5 seconds',
      'Approximately 2.0 seconds',
      'Approximately 6.28 seconds',
      'Approximately 9.8 seconds'
    ],
    correctIndex: 1,
    explanation: 'Using $T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{1.0 / 9.8} \\approx 2 \\times 3.1416 \\times 0.319 \\approx 2.006\\text{ seconds}$.'
  },
  {
    id: 'phy-5',
    subject: 'physics',
    difficulty: 'Intermediate',
    question: 'According to Ohm’s Law, if a 12 V battery is connected across a 4 Ω resistor, what electrical current flows through the circuit?',
    options: [
      '48 Amperes',
      '0.33 Amperes',
      '3 Amperes',
      '16 Amperes'
    ],
    correctIndex: 2,
    explanation: 'Ohm’s law states $I = V / R$. Substituting $12\\text{ V} / 4\\ \\Omega = 3\\text{ Amperes}$.'
  },
  {
    id: 'phy-6',
    subject: 'physics',
    difficulty: 'Advanced',
    question: 'At what angle above the horizontal does an ideal projectile in a vacuum achieve its maximum horizontal displacement (range)?',
    options: [
      '30 degrees',
      '45 degrees',
      '60 degrees',
      '90 degrees'
    ],
    correctIndex: 1,
    explanation: 'The projectile range formula is $R = (v_0^2 \\sin(2\\theta)) / g$. The factor $\\sin(2\\theta)$ reaches its theoretical maximum of 1 when $2\\theta = 90^\\circ$, hence $\\theta = 45^\\circ$.'
  },
  {
    id: 'phy-7',
    subject: 'physics',
    difficulty: 'Advanced',
    question: 'Which principle states that an induced electromotive force (EMF) always opposes the magnetic flux change that produced it?',
    options: [
      'Coulomb’s Law',
      'Lenz’s Law',
      'Bernoulli’s Principle',
      'Pascal’s Principle'
    ],
    correctIndex: 1,
    explanation: 'Lenz’s Law (represented by the negative sign in Faraday’s Law of induction, $\\mathcal{E} = -d\\Phi_B/dt$) dictates that induced currents flow such that their magnetic field opposes the original flux variation.'
  },
  {
    id: 'phy-8',
    subject: 'physics',
    difficulty: 'Beginner',
    question: 'What form of energy is possessed by an object due to its motion?',
    options: [
      'Gravitational potential energy',
      'Kinetic energy',
      'Chemical energy',
      'Nuclear binding energy'
    ],
    correctIndex: 1,
    explanation: 'Kinetic energy ($E_k = \\frac{1}{2}mv^2$) is the energy an object possesses by virtue of being in motion.'
  },
  {
    id: 'phy-9',
    subject: 'physics',
    difficulty: 'Intermediate',
    question: 'What phenomenon causes the pitch of an ambulance siren to sound higher when approaching and lower when moving away?',
    options: [
      'The Doppler Effect',
      'Rayleigh Scattering',
      'Compton Scattering',
      'Wave Diffraction'
    ],
    correctIndex: 0,
    explanation: 'The Doppler effect occurs when a source of waves moves relative to an observer, compressing wavefronts ahead (higher frequency/pitch) and stretching them behind (lower frequency/pitch).'
  },
  {
    id: 'phy-10',
    subject: 'physics',
    difficulty: 'Advanced',
    question: 'What is the speed of light in a vacuum ($c$), rounded to three significant figures?',
    options: [
      '3.00 × 10⁸ m/s',
      '3.00 × 10⁶ m/s',
      '1.50 × 10⁸ m/s',
      '9.81 × 10⁸ m/s'
    ],
    correctIndex: 0,
    explanation: 'The speed of light in vacuum is exactly defined as 299,792,458 m/s, or approximately $3.00 \\times 10^8\\text{ m/s}$.'
  },

  // Chemistry (10 questions)
  {
    id: 'chm-1',
    subject: 'chemistry',
    difficulty: 'Beginner',
    question: 'What is the atomic number of Carbon?',
    options: [
      '4',
      '6',
      '12',
      '14'
    ],
    correctIndex: 1,
    explanation: 'Carbon has an atomic number of 6, meaning every neutral carbon atom contains 6 protons in its nucleus and 6 orbiting electrons.'
  },
  {
    id: 'chm-2',
    subject: 'chemistry',
    difficulty: 'Beginner',
    question: 'On the pH scale, which range represents an acidic solution?',
    options: [
      'pH greater than 7',
      'pH equal to exactly 7',
      'pH less than 7',
      'pH between 7 and 14'
    ],
    correctIndex: 2,
    explanation: 'The pH scale measures hydronium ion concentration. Solutions with $\\text{pH} < 7$ are acidic, $\\text{pH} = 7$ is neutral, and $\\text{pH} > 7$ are basic (alkaline).'
  },
  {
    id: 'chm-3',
    subject: 'chemistry',
    difficulty: 'Intermediate',
    question: 'What type of chemical bond involves the equal or unequal sharing of electron pairs between atoms?',
    options: [
      'Ionic bond',
      'Covalent bond',
      'Metallic bond',
      'Hydrogen bond'
    ],
    correctIndex: 1,
    explanation: 'A covalent bond forms when two nonmetal atoms share one or more pairs of valence electrons to satisfy stable valence shell configurations.'
  },
  {
    id: 'chm-4',
    subject: 'chemistry',
    difficulty: 'Intermediate',
    question: 'In the balanced combustion equation: CH₄ + 2 O₂ → CO₂ + ? H₂O, what is the stoichiometric coefficient for H₂O?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctIndex: 1,
    explanation: 'Methane (CH₄) contains 4 hydrogen atoms. To balance hydrogen on the products side, we need 2 H₂O molecules ($2 \\times 2 = 4$ hydrogen atoms). Hence, coefficient is 2.'
  },
  {
    id: 'chm-5',
    subject: 'chemistry',
    difficulty: 'Beginner',
    question: 'Which subatomic particle has a negative electrical charge and orbits outside the atomic nucleus?',
    options: [
      'Proton',
      'Neutron',
      'Electron',
      'Alpha particle'
    ],
    correctIndex: 2,
    explanation: 'Electrons carry a fundamental negative electrical charge ($-1.602 \\times 10^{-19}\\text{ C}$) and occupy quantized energy shells surrounding the dense positive nucleus.'
  },
  {
    id: 'chm-6',
    subject: 'chemistry',
    difficulty: 'Intermediate',
    question: 'Why are Noble Gases (Group 18: Helium, Neon, Argon, etc.) chemically unreactive under standard conditions?',
    options: [
      'They have no electrons in their outer orbitals',
      'They possess completely filled valence electron shells',
      'Their atomic nuclei lack positive protons',
      'They are unstable radioactive isotopes'
    ],
    correctIndex: 1,
    explanation: 'Noble gases have full valence shells (2 for helium, 8 for others: octet rule), making them thermodynamically stable with minimal tendency to gain, lose, or share electrons.'
  },
  {
    id: 'chm-7',
    subject: 'chemistry',
    difficulty: 'Advanced',
    question: 'What is Avogadro’s constant, representing the number of constituent particles in one mole of substance?',
    options: [
      '3.14159 × 10²³',
      '6.022 × 10²³ mol⁻¹',
      '1.602 × 10⁻¹⁹ mol⁻¹',
      '9.806 × 10²³ mol⁻¹'
    ],
    correctIndex: 1,
    explanation: 'Avogadro’s constant $N_A = 6.02214076 \\times 10^{23}\\text{ mol}^{-1}$ defines the exact number of elementary entities in one mole of any pure substance.'
  },
  {
    id: 'chm-8',
    subject: 'chemistry',
    difficulty: 'Advanced',
    question: 'According to Le Chatelier’s principle, if pressure is increased on an equilibrium mixture of N₂(g) + 3H₂(g) ⇌ 2NH₃(g), which way does the equilibrium shift?',
    options: [
      'To the left (towards reactants, 4 moles of gas)',
      'To the right (towards products, 2 moles of gas)',
      'The equilibrium does not shift at all',
      'All chemical reactions cease immediately'
    ],
    correctIndex: 1,
    explanation: 'Increasing pressure shifts equilibrium toward the side with fewer gas moles to relieve pressure. Reactants have $1 + 3 = 4\\text{ moles}$ while products have $2\\text{ moles}$, so it shifts to the right.'
  },
  {
    id: 'chm-9',
    subject: 'chemistry',
    difficulty: 'Intermediate',
    question: 'What process describes a substance transitioning directly from a solid state to a gas phase without passing through a liquid state?',
    options: [
      'Condensation',
      'Sublimation',
      'Deposition',
      'Evaporation'
    ],
    correctIndex: 1,
    explanation: 'Sublimation is the direct phase transition from solid to gas (observed in dry ice $\\text{CO}_2$ and solid iodine). Deposition is the reverse (gas directly to solid).'
  },
  {
    id: 'chm-10',
    subject: 'chemistry',
    difficulty: 'Beginner',
    question: 'What is the most abundant chemical element in the Earth’s crust by weight?',
    options: [
      'Silicon',
      'Iron',
      'Oxygen',
      'Aluminum'
    ],
    correctIndex: 2,
    explanation: 'Oxygen makes up roughly 46.1% of Earth’s crust by mass, bound primarily in silicate minerals and metal oxides.'
  },

  // Biology (10 questions)
  {
    id: 'bio-1',
    subject: 'biology',
    difficulty: 'Beginner',
    question: 'Which organelle is widely referred to as the "powerhouse of the cell" because it synthesizes cellular ATP?',
    options: [
      'Ribosome',
      'Mitochondria',
      'Endoplasmic reticulum',
      'Golgi apparatus'
    ],
    correctIndex: 1,
    explanation: 'Mitochondria generate the majority of a cell’s chemical energy currency (ATP) via aerobic cellular respiration and oxidative phosphorylation.'
  },
  {
    id: 'bio-2',
    subject: 'biology',
    difficulty: 'Beginner',
    question: 'Which organelle is found in plant cells but absent in typical animal cells?',
    options: [
      'Mitochondria',
      'Chloroplast',
      'Nucleus',
      'Cell membrane'
    ],
    correctIndex: 1,
    explanation: 'Chloroplasts contain chlorophyll pigments and conduct photosynthesis in plants and algae. Animal cells do not possess chloroplasts.'
  },
  {
    id: 'bio-3',
    subject: 'biology',
    difficulty: 'Intermediate',
    question: 'In DNA double-helix base pairing, which nitrogenous base pairs with Adenine (A)?',
    options: [
      'Cytosine (C)',
      'Guanine (G)',
      'Thymine (T)',
      'Uracil (U)'
    ],
    correctIndex: 2,
    explanation: 'According to Chargaff’s rules, in DNA Adenine (A) always pairs with Thymine (T) via 2 hydrogen bonds, while Guanine (G) pairs with Cytosine (C) via 3 hydrogen bonds.'
  },
  {
    id: 'bio-4',
    subject: 'biology',
    difficulty: 'Intermediate',
    question: 'What primary gas is absorbed by green plants during the light-independent reactions (Calvin cycle) of photosynthesis?',
    options: [
      'Nitrogen (N₂)',
      'Oxygen (O₂)',
      'Carbon Dioxide (CO₂)',
      'Methane (CH₄)'
    ],
    correctIndex: 2,
    explanation: 'Plants absorb atmospheric carbon dioxide (CO₂) through stomata, fixing inorganic carbon into organic carbohydrates like glucose using RuBisCO enzyme.'
  },
  {
    id: 'bio-5',
    subject: 'biology',
    difficulty: 'Beginner',
    question: 'Which chamber of the human heart receives oxygen-rich blood directly from the pulmonary veins coming from the lungs?',
    options: [
      'Right Atrium',
      'Right Ventricle',
      'Left Atrium',
      'Left Ventricle'
    ],
    correctIndex: 2,
    explanation: 'Oxygenated blood returns from the pulmonary capillary beds through the pulmonary veins into the Left Atrium, which pumps it to the Left Ventricle.'
  },
  {
    id: 'bio-6',
    subject: 'biology',
    difficulty: 'Intermediate',
    question: 'What biological macromolecule functions as the primary catalyst for metabolic reactions in living organisms?',
    options: [
      'Enzymes (Proteins)',
      'Triglycerides (Lipids)',
      'Glycogen (Polysaccharides)',
      'Phospholipids'
    ],
    correctIndex: 0,
    explanation: 'Enzymes are specialized globular proteins that accelerate biochemical reactions by lowering their activation energy without being consumed.'
  },
  {
    id: 'bio-7',
    subject: 'biology',
    difficulty: 'Advanced',
    question: 'During cell division, which phase of mitosis involves chromosomes lining up along the equatorial center of the cell?',
    options: [
      'Prophase',
      'Metaphase',
      'Anaphase',
      'Telophase'
    ],
    correctIndex: 1,
    explanation: 'During Metaphase (M for Middle), spindle fibers attach to the kinetochores of sister chromatids and align them along the equatorial metaphase plate.'
  },
  {
    id: 'bio-8',
    subject: 'biology',
    difficulty: 'Advanced',
    question: 'What is the end product of anaerobic glycolysis when human muscle cells experience oxygen debt during intense exercise?',
    options: [
      'Ethanol and CO₂',
      'Lactic acid (Lactate)',
      'Pyruvate only',
      'Citric acid'
    ],
    correctIndex: 1,
    explanation: 'Under anaerobic conditions, lactate dehydrogenase reduces pyruvate to lactic acid (lactate) to regenerate NAD⁺ so glycolysis can continue generating ATP.'
  },
  {
    id: 'bio-9',
    subject: 'biology',
    difficulty: 'Beginner',
    question: 'In an ecological food chain, what role do green plants and phytoplankton occupy?',
    options: [
      'Primary consumers',
      'Secondary consumers',
      'Primary producers (Autotrophs)',
      'Apex predators'
    ],
    correctIndex: 2,
    explanation: 'Plants and phytoplankton are primary autotrophic producers that synthesize organic matter from solar energy and inorganic compounds.'
  },
  {
    id: 'bio-10',
    subject: 'biology',
    difficulty: 'Intermediate',
    question: 'Which component of human blood is primarily responsible for forming clots to prevent hemorrhage?',
    options: [
      'Erythrocytes (Red blood cells)',
      'Platelets (Thrombocytes)',
      'Leukocytes (White blood cells)',
      'Blood Plasma'
    ],
    correctIndex: 1,
    explanation: 'Platelets (thrombocytes) adhere to damaged vascular endothelium and activate clotting factor cascades converting fibrinogen to insoluble fibrin mesh.'
  },

  // Astronomy & Space (10 questions)
  {
    id: 'ast-1',
    subject: 'astronomy',
    difficulty: 'Beginner',
    question: 'Which planet in our solar system has the highest surface temperature, despite not being closest to the Sun?',
    options: [
      'Mercury',
      'Venus',
      'Mars',
      'Jupiter'
    ],
    correctIndex: 1,
    explanation: 'Venus has an extreme runaway greenhouse effect caused by a dense atmosphere composed of 96.5% carbon dioxide, trapping heat at a scorching 464 °C (867 °F).'
  },
  {
    id: 'ast-2',
    subject: 'astronomy',
    difficulty: 'Beginner',
    question: 'What is the largest planet in our solar system?',
    options: [
      'Saturn',
      'Neptune',
      'Jupiter',
      'Uranus'
    ],
    correctIndex: 2,
    explanation: 'Jupiter is the largest planet, with a diameter of ~139,820 km and a mass more than 2.5 times that of all other planets in the solar system combined.'
  },
  {
    id: 'ast-3',
    subject: 'astronomy',
    difficulty: 'Intermediate',
    question: 'Approximately how long does it take for light emitted from the Sun to reach Earth across 1 Astronomical Unit?',
    options: [
      'Instantaneously (0 seconds)',
      '8 minutes and 20 seconds',
      '1 hour and 15 minutes',
      '24 hours'
    ],
    correctIndex: 1,
    explanation: 'The average Earth-Sun distance is ~149.6 million km. Dividing by the speed of light ($300,000\\text{ km/s}$) gives $\\sim 499\\text{ seconds} \\approx 8\\text{ minutes } 20\\text{ seconds}$.'
  },
  {
    id: 'ast-4',
    subject: 'astronomy',
    difficulty: 'Intermediate',
    question: 'What is the boundary around a black hole beyond which nothing, not even light, can escape called?',
    options: [
      'Accretion disk',
      'Event horizon',
      'Photon sphere',
      'Singularity center'
    ],
    correctIndex: 1,
    explanation: 'The Event Horizon is the theoretical threshold surrounding a black hole where the escape velocity equals the speed of light.'
  },
  {
    id: 'ast-5',
    subject: 'astronomy',
    difficulty: 'Advanced',
    question: 'What nuclear reaction powers our Sun and other main-sequence stars in their cores?',
    options: [
      'Nuclear fission of Uranium-235',
      'Thermonuclear fusion of Hydrogen into Helium',
      'Chemical combustion of methane and oxygen',
      'Gravitational collapse with zero nuclear reactions'
    ],
    correctIndex: 1,
    explanation: 'The Sun produces energy via the proton-proton chain nuclear fusion, converting four hydrogen protons into a helium nucleus, converting mass deficit into energy according to $E=mc^2$.'
  },
  {
    id: 'ast-6',
    subject: 'astronomy',
    difficulty: 'Beginner',
    question: 'Which moon in our solar system has a dense nitrogen atmosphere and liquid methane lakes on its surface?',
    options: [
      'Europa',
      'Titan',
      'Io',
      'Enceladus'
    ],
    correctIndex: 1,
    explanation: 'Saturn’s giant moon Titan is the only moon in the solar system with a thick atmosphere (primarily nitrogen) and stable surface lakes of liquid methane and ethane.'
  },
  {
    id: 'ast-7',
    subject: 'astronomy',
    difficulty: 'Intermediate',
    question: 'What type of galaxy is our home galaxy, the Milky Way?',
    options: [
      'Barred spiral galaxy',
      'Giant elliptical galaxy',
      'Irregular dwarf galaxy',
      'Lenticular galaxy'
    ],
    correctIndex: 0,
    explanation: 'The Milky Way is classified as a barred spiral galaxy (SBbc) with a central bar of stars and spiral arms radiating outward.'
  },
  {
    id: 'ast-8',
    subject: 'astronomy',
    difficulty: 'Advanced',
    question: 'What is the theoretical mass limit above which a non-rotating white dwarf star collapses into a neutron star, known as the Chandrasekhar limit?',
    options: [
      'Approximately 0.5 Solar masses',
      'Approximately 1.44 Solar masses',
      'Approximately 3.0 Solar masses',
      'Approximately 10.0 Solar masses'
    ],
    correctIndex: 1,
    explanation: 'Subrahmanyan Chandrasekhar calculated that electron degeneracy pressure can support a white dwarf star only up to $\\approx 1.44$ solar masses before collapse.'
  },
  {
    id: 'ast-9',
    subject: 'astronomy',
    difficulty: 'Intermediate',
    question: 'Why does Mars appear reddish in color when viewed through telescopes and the night sky?',
    options: [
      'Atmospheric methane reflects red frequencies',
      'Abundant iron oxide (rust) covering its surface regolith',
      'Active molten lava oceans covering its crust',
      'Reflections from the crimson rings of Saturn'
    ],
    correctIndex: 1,
    explanation: 'Mars is rich in iron compounds in its rocks and soil. Exposure to trace atmospheric oxygen rusted these minerals into reddish iron(III) oxide dust.'
  },
  {
    id: 'ast-10',
    subject: 'astronomy',
    difficulty: 'Beginner',
    question: 'What celestial phenomenon occurs when the Moon passes directly between the Sun and Earth, blocking sunlight?',
    options: [
      'Lunar eclipse',
      'Solar eclipse',
      'Equinox',
      'Aurora borealis'
    ],
    correctIndex: 1,
    explanation: 'A solar eclipse occurs when the Moon moves directly between the Earth and the Sun, casting its shadow (umbra and penumbra) upon portions of Earth’s surface.'
  },

  // Earth & General Science (10 questions)
  {
    id: 'ert-1',
    subject: 'earth',
    difficulty: 'Beginner',
    question: 'What is the outermost solid layer of the Earth upon which all life and continents reside?',
    options: [
      'Mantle',
      'Crust',
      'Outer core',
      'Inner core'
    ],
    correctIndex: 1,
    explanation: 'The crust is Earth’s outermost solid rocky shell, ranging from 5 km thick under oceans (oceanic crust) to 70 km under mountain belts (continental crust).'
  },
  {
    id: 'ert-2',
    subject: 'earth',
    difficulty: 'Beginner',
    question: 'Which gas makes up approximately 78% of Earth’s atmosphere by volume?',
    options: [
      'Oxygen (O₂)',
      'Carbon Dioxide (CO₂)',
      'Nitrogen (N₂)',
      'Argon (Ar)'
    ],
    correctIndex: 2,
    explanation: 'Nitrogen gas (N₂) accounts for roughly 78.08% of Earth’s dry atmosphere, followed by oxygen at 20.95% and argon at 0.93%.'
  },
  {
    id: 'ert-3',
    subject: 'earth',
    difficulty: 'Intermediate',
    question: 'What geological process causes the movement of Earth’s tectonic plates across the asthenosphere?',
    options: [
      'Thermal convection currents in the mantle',
      'Gravitational attraction from the Moon only',
      'Atmospheric hurricane winds',
      'Centrifugal forces of Earth’s daily rotation'
    ],
    correctIndex: 0,
    explanation: 'Heat from Earth’s core drives slow thermal convection currents in the semi-fluid upper mantle (asthenosphere), dragging overlying tectonic plates.'
  },
  {
    id: 'ert-4',
    subject: 'earth',
    difficulty: 'Intermediate',
    question: 'What layer of Earth’s stratosphere absorbs the majority of the Sun’s harmful ultraviolet (UVB) radiation?',
    options: [
      'The ozone layer (O₃)',
      'The ionosphere',
      'The troposphere',
      'The magnetopause'
    ],
    correctIndex: 0,
    explanation: 'The ozone layer in the stratosphere absorbs roughly 97–99% of medium-frequency ultraviolet radiation (wavelengths from ~200 nm to 315 nm).'
  },
  {
    id: 'ert-5',
    subject: 'earth',
    difficulty: 'Beginner',
    question: 'What type of rock is formed by the cooling and solidification of molten magma or lava?',
    options: [
      'Sedimentary rock',
      'Metamorphic rock',
      'Igneous rock',
      'Fossiliferous limestone'
    ],
    correctIndex: 2,
    explanation: 'Igneous rocks (such as basalt, granite, and obsidian) form from the cooling and crystallization of molten rock (magma underground or lava on the surface).'
  },
  {
    id: 'ert-6',
    subject: 'earth',
    difficulty: 'Advanced',
    question: 'What seismic wave can travel through both solid rock and liquid layers within Earth’s interior?',
    options: [
      'Primary waves (P-waves, compressional)',
      'Secondary waves (S-waves, shear)',
      'Rayleigh surface waves only',
      'Love waves only'
    ],
    correctIndex: 0,
    explanation: 'P-waves are longitudinal compressional waves that can propagate through solids, liquids, and gases. S-waves are transverse shear waves that cannot travel through liquids like Earth’s outer core.'
  },
  {
    id: 'ert-7',
    subject: 'earth',
    difficulty: 'Intermediate',
    question: 'What is the primary driver of ocean surface currents across the globe?',
    options: [
      'Global atmospheric prevailing wind patterns and Coriolis effect',
      'Underwater volcanic eruptions',
      'Tectonic plate subduction zones',
      'Direct thermal radiation from the Moon'
    ],
    correctIndex: 0,
    explanation: 'Prevailing surface winds (trade winds and westerlies), modified by Earth’s rotation (the Coriolis effect) and continent boundaries, drive major oceanic gyres.'
  },
  {
    id: 'ert-8',
    subject: 'earth',
    difficulty: 'Intermediate',
    question: 'What is the greenhouse effect?',
    options: [
      'The reflection of all solar light away from Earth by snow',
      'Gases in the atmosphere absorbing infrared radiation emitted by Earth’s surface',
      'The gradual cooling of Earth due to volcanic ash',
      'The magnetic deflection of solar protons'
    ],
    correctIndex: 1,
    explanation: 'Greenhouse gases (such as H₂O vapor, CO₂, CH₄) allow incoming visible sunlight through but absorb outgoing thermal infrared radiation, re-radiating heat back downward.'
  },
  {
    id: 'ert-9',
    subject: 'earth',
    difficulty: 'Advanced',
    question: 'What scientific radiometric isotope system with a half-life of 5,730 years is commonly used to date organic archaeological remains up to ~50,000 years old?',
    options: [
      'Uranium-Lead (U-Pb)',
      'Carbon-14 (Radiocarbon)',
      'Potassium-Argon (K-Ar)',
      'Rubidium-Strontium (Rb-Sr)'
    ],
    correctIndex: 1,
    explanation: 'Radiocarbon dating measures the decay of unstable Carbon-14 (half-life 5,730 years) assimilated by living organisms during their lifetime.'
  },
  {
    id: 'ert-10',
    subject: 'earth',
    difficulty: 'Beginner',
    question: 'What scale is commonly used by geologists to measure the scratch hardness of minerals from Talc (1) to Diamond (10)?',
    options: [
      'Richter Scale',
      'Mohs Hardness Scale',
      'Kelvin Scale',
      'Decibel Scale'
    ],
    correctIndex: 1,
    explanation: 'The Mohs Hardness Scale characterizes the scratch resistance of minerals through the ability of a harder material to scratch a softer one (1: Talc to 10: Diamond).'
  }
];

export const ACHIEVEMENTS_DATA = [
  { id: 'first_quiz', title: 'Curious Mind', description: 'Complete your first science quiz in the arena.', icon: 'Award', category: 'Quiz' },
  { id: 'quiz_master', title: 'Science Scholar', description: 'Complete 5 different science quizzes.', icon: 'CheckCircle', category: 'Quiz' },
  { id: 'high_scorer', title: 'Honor Roll', description: 'Achieve an 80% or higher score on any science quiz.', icon: 'Zap', category: 'Quiz' },
  { id: 'lab_explorer', title: 'Virtual Scientist', description: 'Experiment with at least 3 virtual science lab simulations.', icon: 'FlaskConical', category: 'Lab' },
  { id: 'periodic_voyager', title: 'Atomic Navigator', description: 'Explore elements in the 118-element periodic table.', icon: 'Atom', category: 'Chemistry' },
  { id: 'space_cadet', title: 'Cosmic Explorer', description: 'Inspect planets and orbital mechanics in the Universe Explorer.', icon: 'Compass', category: 'Space' },
  { id: 'calculator_user', title: 'Empirical Mathematician', description: 'Calculate a result using the scientific calculators & tools.', icon: 'Calculator', category: 'Tools' },
  { id: 'biology_enthusiast', title: 'Cytology Specialist', description: 'Inspect organelles in the interactive cell diagram.', icon: 'Activity', category: 'Biology' }
];
