import { Machine, CategoryInfo } from '../models/machine.model';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'coffee',
    title: 'Espresso & Coffee Machines',
    subtitle: 'Rhea Tabletop & Standing Towers',
    description: 'High-performance bean-to-cup coffee machines delivering authentic espresso, cappuccino, and gourmet hot beverages.',
    icon: 'coffee',
    bgImage: 'assets/images/machines/coffee/Rhea-Vendors-laRhea-CINO-GRANDE-PREMIUM-1-800x800.webp',
    machineCount: 25
  },
  {
    id: 'snacks',
    title: 'Snack & Food Vendors',
    subtitle: 'Luce Zero & Multishop Series',
    description: 'Temperature-controlled, high-capacity snack, beverage, and fresh food automatic vendors built with smart touch interfaces.',
    icon: 'cookie',
    bgImage: 'assets/images/machines/snacks/luce-xl6-multishop.png',
    machineCount: 5
  }
];

export const MACHINES_DATA: Machine[] = [
  // ==========================================
  // COFFEE VENDING MACHINES
  // ==========================================

  // --- laRhea V+ Series ---
  {
    id: 'larhea-cino-grande-premium',
    name: 'laRhea Cino Grande Premium',
    category: 'coffee',
    subCategory: 'laRhea V+',
    tagline: 'Premium Italian Touchscreen Tabletop Coffee Vendor',
    shortDescription: 'High-performance tabletop espresso machine manufactured in Italy, featuring an interactive touch interface, Variflex brewing technology, and a sleek glass finish.',
    fullDescription: 'The laRhea Cino Grande Premium represents the pinnacle of Italian tabletop vending engineering. Combining elegant dark glass aesthetics with Variflex brewing precision and flexible canister configurations, it delivers barista-quality espresso, cappuccinos, and gourmet hot beverages.',
    images: ['assets/images/machines/coffee/Rhea-Vendors-laRhea-CINO-GRANDE-PREMIUM-1-800x800.webp'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Varitherm Induction System' },
      { label: 'Display', value: '7" Touch Screen' },
      { label: 'Selections', value: 'Up to 48 Direct Selections' },
      { label: 'Brewer', value: 'Variflex Brewer & Variplus Tech' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'larhea-v-plus-ec',
    name: 'laRhea V+ eC',
    category: 'coffee',
    subCategory: 'laRhea V+',
    tagline: 'High-end compact tabletop coffee solution',
    shortDescription: 'Compact high-end espresso machine with 3.5" color touch panel and Variplus brewing technology.',
    fullDescription: 'laRhea V+ eC delivers high-end espresso extractions with Variplus induction heating and Variflex brewing technology.',
    images: ['assets/images/machines/coffee/larhea-v-plus-ec.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Variplus Induction Heating' },
      { label: 'Display', value: '3.5" Color Display' },
      { label: 'Selections', value: '12 Direct Selections' },
      { label: 'Brewer', value: 'Variplus Technology' },
      { label: 'Grinders', value: '1 Grinder' },
      { label: 'Canisters', value: 'Up to 3 Canisters' }
    ]
  },
  {
    id: 'larhea-v-plus-grande',
    name: 'laRhea V+ grande',
    category: 'coffee',
    subCategory: 'laRhea V+',
    tagline: 'High-end expanded capacity coffee vendor',
    shortDescription: 'Expanded capacity laRhea V+ model with 3.5" display and Variplus technology.',
    fullDescription: 'laRhea V+ Grande provides flexible canister setups and precision extraction for medium to large offices.',
    images: ['assets/images/machines/coffee/larhea-v-plus-grande.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Variplus Induction Heating' },
      { label: 'Display', value: '3.5" Color Display' },
      { label: 'Selections', value: '12 Direct Selections' },
      { label: 'Brewer', value: 'Variplus Technology' },
      { label: 'Grinders', value: '1 Grinder' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'larhea-v-plus-grande-premium',
    name: 'laRhea V+ grande premium',
    category: 'coffee',
    subCategory: 'laRhea V+',
    tagline: '7 inch touchscreen premium coffee solution',
    shortDescription: 'Interactive 7" touch screen tabletop vendor with Variplus technology and 5 canisters.',
    fullDescription: 'Features smooth touch navigation, Varitherm temperature precision, and Variflex coffee brewing.',
    images: ['assets/images/machines/coffee/larhea-v-plus-grande-premium.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Varitherm Induction System' },
      { label: 'Display', value: '7" Touch Screen' },
      { label: 'Selections', value: 'Up to 48 Direct Selections' },
      { label: 'Brewer', value: 'Variplus Technology' },
      { label: 'Grinders', value: '1 Grinder' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'larhea-v-plus-grande-2-premium',
    name: 'laRhea V+ grande 2 premium',
    category: 'coffee',
    subCategory: 'laRhea V+',
    tagline: 'Dual grinder 7 inch touch screen flagship',
    shortDescription: 'Dual grinder high-end tabletop coffee vendor with 7" touch screen and Variplus technology.',
    fullDescription: 'Equipped with 2 grinders to serve dual coffee bean origins alongside Varitherm induction heating.',
    images: ['assets/images/machines/coffee/larhea-v-plus-grande-2-premium.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Varitherm Dual Induction' },
      { label: 'Display', value: '7" Touch Screen' },
      { label: 'Selections', value: 'Up to 48 Direct Selections' },
      { label: 'Brewer', value: 'Variplus Technology' },
      { label: 'Grinders', value: '2 Grinders' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'larhea-v-plus-doppio-cup',
    name: 'laRhea V+ doppio&cup',
    category: 'coffee',
    subCategory: 'laRhea V+',
    tagline: 'Integrated cup dispenser laRhea V+ vendor',
    shortDescription: 'High-end tabletop vendor with internal cup dispenser and 3.5" color touch panel.',
    fullDescription: 'Combines Variplus coffee technology with an internal automatic cup drop dispenser.',
    images: ['assets/images/machines/coffee/larhea-v-plus-doppio-cup.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Variplus Induction System' },
      { label: 'Display', value: '3.5" Color Display' },
      { label: 'Selections', value: '12 Direct Selections' },
      { label: 'Cup Dispenser', value: 'Internal Automatic Drop' },
      { label: 'Brewer', value: 'Variplus Technology' },
      { label: 'Canisters', value: 'Up to 6 Canisters' }
    ]
  },

  // --- rhea Business Line ---
  {
    id: 'rhea-bl-ec',
    name: 'rhea BL eC',
    category: 'coffee',
    subCategory: 'rhea Business Line',
    tagline: 'Compact elegance for executive offices and boutique lounges',
    shortDescription: 'Sleek tabletop espresso machine featuring 3.5" color touch panel, 12 direct selections, and variflex brewer.',
    fullDescription: 'The Rhea Business Line eC combines classic coffee tradition with modern energy-efficient heating technology.',
    images: ['assets/images/machines/coffee/rhea-bl-ec.png'],
    featured: true,
    badge: 'Available Now',
    specs: [
      { label: 'Heating', value: 'Energy-Efficient Boiler' },
      { label: 'Display', value: '3.5" Color Touch Panel' },
      { label: 'Selections', value: '12 Direct Selections' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Canisters', value: 'Up to 3 Canisters' }
    ]
  },
  {
    id: 'rhea-bl-grande',
    name: 'rhea BL grande',
    category: 'coffee',
    subCategory: 'rhea Business Line',
    tagline: 'Expanded capacity business line coffee vendor',
    shortDescription: 'High demand tabletop coffee vendor with 3.5" color touch panel and up to 5 canisters.',
    fullDescription: 'Rhea BL Grande expands capacity for corporate breakrooms and high-footfall locations requiring continuous coffee service.',
    images: ['assets/images/machines/coffee/rhea-bl-grande.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'High-Capacity Boiler System' },
      { label: 'Display', value: '3.5" Color Display' },
      { label: 'Selections', value: '12 Direct Selections' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'rhea-bl-grande-vho',
    name: 'rhea BL grande vho',
    category: 'coffee',
    subCategory: 'rhea Business Line',
    tagline: 'Visible coffee bean hopper edition',
    shortDescription: 'Specialty VHO coffee machine featuring clear visible bean hopper on top and variflex brewer.',
    fullDescription: 'Showcases fresh coffee beans through its visible top hopper, reinforcing freshness and barista quality.',
    images: ['assets/images/machines/coffee/rhea-bl-grande-vho.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'High-Capacity Boiler System' },
      { label: 'Hopper', value: 'Visible Bean Hopper' },
      { label: 'Display', value: '3.5" Color Display' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'rhea-bl-doppio-cup',
    name: 'rhea BL doppio & cup',
    category: 'coffee',
    subCategory: 'rhea Business Line',
    tagline: 'Automatic internal cup drop dispenser unit',
    shortDescription: 'Integrated automatic cup dispenser tabletop machine with up to 6 canisters.',
    fullDescription: 'Combines the convenience of an internal automatic cup drop dispenser with the compact footprint of a Business Line tabletop machine.',
    images: ['assets/images/machines/coffee/rhea-bl-doppio-cup.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'High-Capacity Boiler System' },
      { label: 'Cup Dispenser', value: 'Internal Automatic Drop' },
      { label: 'Display', value: '3.5" Color Display' },
      { label: 'Canisters', value: 'Up to 6 Canisters' }
    ]
  },

  // --- rhTT Line ---
  {
    id: 'rhtt1-v-plus',
    name: 'rhTT1.V+',
    category: 'coffee',
    subCategory: 'rhTT',
    tagline: 'Varitherm induction heater & variflex precision brewing',
    shortDescription: 'Top-tier rhTT tabletop espresso machine with Varitherm induction heater technology and 7" touch UI.',
    fullDescription: 'Equipped with Varitherm real-time temperature control and Variflex coffee brewer.',
    images: ['assets/images/machines/coffee/Rhea-Vendors-Group-rhTT1-4-800x800.jpg'],
    featured: true,
    badge: 'Available Now',
    specs: [
      { label: 'Display', value: '7" HD Touch Screen' },
      { label: 'Heating', value: 'Varitherm Induction' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'rhtt1-e',
    name: 'rhTT1.e',
    category: 'coffee',
    subCategory: 'rhTT',
    tagline: '7 inch touch screen variflex tabletop vendor',
    shortDescription: 'Versatile 7" touch screen tabletop coffee machine with Variflex brewer and 5 canisters.',
    fullDescription: 'rhTT1.e provides smooth touch menu navigation and consistent barista coffee extraction.',
    images: ['assets/images/machines/coffee/rhtt1-e.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Precision Boiler System' },
      { label: 'Display', value: '7" Touch Screen' },
      { label: 'Selections', value: 'Up to 48 Direct Selections' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Canisters', value: 'Up to 5 Canisters' }
    ]
  },
  {
    id: 'rhtt1-i',
    name: 'rhTT1.i',
    category: 'coffee',
    subCategory: 'rhTT',
    tagline: 'High capacity 7 inch touch screen tabletop coffee solution',
    shortDescription: 'Modern tabletop coffee engine with interactive 7" touchscreen UI, up to 48 selections, and 6 canisters.',
    fullDescription: 'rhTT1.i delivers high-volume performance with up to 6 canisters and 48 direct beverage menu options.',
    images: ['assets/images/machines/coffee/rhtt1-i.png'],
    featured: true,
    badge: 'Available Now',
    specs: [
      { label: 'Heating', value: 'Precision Boiler System' },
      { label: 'Display', value: '7" Touchscreen UI' },
      { label: 'Selections', value: 'Up to 48 Selections' },
      { label: 'Canisters', value: 'Up to 6 Canisters' }
    ]
  },
  {
    id: 'rhtt3-pro',
    name: 'rhTT3.pro',
    category: 'coffee',
    subCategory: 'rhTT',
    tagline: 'The versatile one with ergonomic design',
    shortDescription: 'Tabletop coffee machine with 4.3" multicolor touch panel and extendable canister capacity.',
    fullDescription: 'rhTT3.pro offers high ergonomics, 4 canisters with extension capabilities, and Variflex brewing.',
    images: ['assets/images/machines/coffee/rhtt3-pro.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Variflex Heating System' },
      { label: 'Display', value: '4.3" Multicolor Display' },
      { label: 'Selections', value: 'Up to 12 Direct Selections' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Canisters', value: '4 Canisters (Extendable)' }
    ]
  },
  {
    id: 'rhtt10-pro',
    name: 'rhTT10',
    category: 'coffee',
    subCategory: 'rhTT',
    tagline: 'High-end touchscreen tabletop espresso vendor with fresh milk module',
    shortDescription: 'Flagship rhTT tabletop coffee engine featuring interactive touch screen UI, Varitherm induction heating, and fresh milk compatibility.',
    fullDescription: 'The rhTT10 represents the top-of-the-line tabletop coffee machine in the Rhea TT line. Designed for executive offices, high-end lounges, and premium hotel breakfast stations, it combines Varitherm induction heating precision, Variflex brewing technology, and seamless fresh milk integration for espresso drinks.',
    images: ['assets/images/machines/coffee/rhtt10.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Varitherm Induction System' },
      { label: 'Display', value: 'Interactive HD Touch Screen' },
      { label: 'Selections', value: 'Up to 48 Gourmet Selections' },
      { label: 'Milk Module', value: 'Fresh Milk & Steam Wand Compatible' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Canisters', value: 'Up to 6 Canisters' }
    ]
  },

  // --- Luce Zero Series ---
  {
    id: 'luce-zero-0',
    name: 'luce zero.0',
    category: 'coffee',
    subCategory: 'Luce Zero',
    tagline: 'Automatic standing coffee vendor tower',
    shortDescription: 'Full-standing coffee tower with 16 selections touch panel and Variflex brewer.',
    fullDescription: 'Luce Zero.0 is a robust standing vending machine built for corporate breakrooms and public sites.',
    images: ['assets/images/machines/coffee/luce-zero-0.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: '1 Boiler System' },
      { label: 'Display', value: 'Touch Panel (16 Selections)' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Boiler', value: '1 Boiler' },
      { label: 'Canisters', value: 'Up to 7 Canisters' },
      { label: 'Turret', value: '1 Cup Turret' }
    ]
  },
  {
    id: 'luce-zero-1',
    name: 'luce zero.1',
    category: 'coffee',
    subCategory: 'Luce Zero',
    tagline: '24 selections standing coffee vendor',
    shortDescription: 'Standing coffee vendor featuring 24 touch selections, up to 8 canisters, and optional lid dispenser.',
    fullDescription: 'Luce Zero.1 expands beverage selection count with high canister volume for continuous usage.',
    images: ['assets/images/machines/coffee/luce-zero-1.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: '1 Boiler System' },
      { label: 'Display', value: 'Touch Panel (24 Selections)' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Boiler', value: '1 Boiler' },
      { label: 'Canisters', value: 'Up to 8 Canisters' },
      { label: 'Turret', value: '1 Cup Turret' }
    ]
  },
  {
    id: 'luce-zero-2',
    name: 'luce zero.2',
    category: 'coffee',
    subCategory: 'Luce Zero',
    tagline: 'Dual grinder Varitherm standing coffee tower',
    shortDescription: 'Standing coffee tower with Varitherm induction heater, up to 2 grinders, and 2 cup turrets.',
    fullDescription: 'Luce Zero.2 integrates Varitherm heating technology and dual cup turrets for fast service.',
    images: ['assets/images/machines/coffee/luce-zero-2.png'],
    featured: false,
    specs: [
      { label: 'Display', value: 'Touch Panel (24 Selections)' },
      { label: 'Heating', value: 'Varitherm Induction' },
      { label: 'Grinders', value: 'Up to 2 Grinders' },
      { label: 'Canisters', value: 'Up to 9 Canisters' },
      { label: 'Turrets', value: '2 Cup Turrets' }
    ]
  },
  {
    id: 'luce-zero-premium',
    name: 'luce zero.premium',
    category: 'coffee',
    subCategory: 'Luce Zero',
    tagline: '15 inch monitor premium coffee tower',
    shortDescription: 'Standing coffee vendor equipped with 15" digital monitor display and Varitherm heater.',
    fullDescription: 'Combines dynamic 15" media screen interaction with premium coffee brewing technology.',
    images: ['assets/images/machines/coffee/luce-zero-premium.png'],
    featured: false,
    specs: [
      { label: 'Display', value: '15" Monitor Screen' },
      { label: 'Selections', value: '24 Selections Touch Panel' },
      { label: 'Heating', value: 'Varitherm Induction' },
      { label: 'Canisters', value: 'Up to 9 Canisters' },
      { label: 'Turrets', value: '2 Cup Turrets' }
    ]
  },
  {
    id: 'luce-zero-touch',
    name: 'luce zero.touch',
    category: 'coffee',
    subCategory: 'Luce Zero',
    tagline: 'Interactive touch screen coffee tower (64 selections)',
    shortDescription: 'Flagship standing coffee tower with full touchscreen interface and up to 64 selections.',
    fullDescription: 'Luce Zero Touch offers 64 interactive beverage choices, dual grinders, and Varitherm heating.',
    images: ['assets/images/machines/coffee/luce-zero-touch.png'],
    featured: false,
    specs: [
      { label: 'Display', value: 'Full Touch Screen UI' },
      { label: 'Selections', value: 'Up to 64 Direct Selections' },
      { label: 'Heating', value: 'Varitherm Induction' },
      { label: 'Grinders', value: 'Up to 2 Grinders' },
      { label: 'Canisters', value: 'Up to 9 Canisters' }
    ]
  },
  {
    id: 'luce-zero-touch-v-milk',
    name: 'luce zero.touch V+ milk',
    category: 'coffee',
    subCategory: 'Luce Zero',
    tagline: 'Fresh milk automatic standing coffee vendor',
    shortDescription: 'Touch screen coffee tower integrated with fresh milk steam preparation module.',
    fullDescription: 'Luce Zero.touch V+ Milk brews gourmet coffee using fresh liquid milk steam technology.',
    images: ['assets/images/machines/coffee/luce-zero-touch-v-milk.png'],
    featured: false,
    specs: [
      { label: 'Display', value: 'Full Touch Screen UI' },
      { label: 'Selections', value: 'Up to 64 Selections' },
      { label: 'Milk Module', value: 'Fresh Milk Steam System' },
      { label: 'Heating', value: 'Varitherm Induction' },
      { label: 'Mixing Bowls', value: '2 Mixing Bowls' }
    ]
  },

  // --- rhFS Series ---
  {
    id: 'rhfs1-buttons',
    name: 'rhFS1.buttons',
    category: 'coffee',
    subCategory: 'rhFS',
    tagline: 'Modular standing coffee tower with button panel',
    shortDescription: 'Modular standing coffee vendor with 16 direct button selections and Variflex brewer.',
    fullDescription: 'rhFS1.buttons offers reliable modular vending architecture for institutional sites.',
    images: ['assets/images/machines/coffee/rhfs1-buttons.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: '1 Boiler or Varitherm' },
      { label: 'Display', value: 'Touch Panel (16 Selections)' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Boiler', value: '1 Boiler or Varitherm' },
      { label: 'Turrets', value: 'Up to 2 Cup Turrets' },
      { label: 'Canisters', value: 'Up to 8 Canisters' }
    ]
  },
  {
    id: 'rhfs1-touch21-5',
    name: 'rhFS1.touch21.5',
    category: 'coffee',
    subCategory: 'rhFS',
    tagline: '21.5 inch touch screen standing coffee tower',
    shortDescription: 'Standing coffee vendor with 21.5" touchscreen UI and up to 64 direct selections.',
    fullDescription: 'rhFS1.touch21.5 features a high-definition 21.5" digital menu display.',
    images: ['assets/images/machines/coffee/rhfs1-touch21-5.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Varitherm Induction System' },
      { label: 'Display', value: '21.5" Touch Screen' },
      { label: 'Selections', value: 'Up to 64 Direct Selections' },
      { label: 'Brewer', value: 'Variflex Brewer' },
      { label: 'Turrets', value: 'Up to 2 Cup Turrets' },
      { label: 'Canisters', value: 'Up to 8 Canisters' }
    ]
  },
  {
    id: 'rhfs2-touch24',
    name: 'rhFS2.touch24',
    category: 'coffee',
    subCategory: 'rhFS',
    tagline: '24 inch touch screen dual grinder tower',
    shortDescription: 'High-capacity 24" touch screen coffee vendor with 2 boilers/Varitherm and 2 grinders.',
    fullDescription: 'rhFS2.touch24 provides maximum capacity for busy transport hubs and university campuses.',
    images: ['assets/images/machines/coffee/rhfs2-touch24.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Dual Boiler / Varitherm' },
      { label: 'Display', value: '24" Touch Screen' },
      { label: 'Selections', value: 'Up to 64 Direct Selections' },
      { label: 'Grinders', value: 'Up to 2 Grinders' },
      { label: 'Turrets', value: 'Up to 2 Cup Turrets' },
      { label: 'Canisters', value: 'Up to 9 Canisters' }
    ]
  },
  {
    id: 'rhfs2-touch32',
    name: 'rhFS2.touch32',
    category: 'coffee',
    subCategory: 'rhFS',
    tagline: '32 inch touch screen flagship coffee tower',
    shortDescription: 'Flagship standing coffee vendor with 32" giant touchscreen UI and dual grinders.',
    fullDescription: 'rhFS2.touch32 combines giant 32" media screen engagement with dual boiler brewing performance.',
    images: ['assets/images/machines/coffee/rhfs2-touch32.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: 'Dual Boiler System' },
      { label: 'Display', value: '32" Touch Screen' },
      { label: 'Selections', value: 'Up to 64 Direct Selections' },
      { label: 'Grinders', value: 'Up to 2 Grinders' },
      { label: 'Turrets', value: 'Up to 2 Cup Turrets' },
      { label: 'Canisters', value: 'Up to 9 Canisters' }
    ]
  },

  // --- Fresh Milk Module ---
  {
    id: 'rhmm1-v-plus',
    name: 'rhMM1.v+',
    category: 'coffee',
    subCategory: 'Fresh Milk Module',
    tagline: 'Fresh Milk Machine - Varitherm induction steam technology',
    shortDescription: 'Varitherm induction steam fresh milk module pairable with laRhea tabletop coffee vendors.',
    fullDescription: 'rhMM1.v+ prepares hot and cold micro-foam fresh milk for cappuccinos and latte macchiatos.',
    images: ['assets/images/machines/coffee/rhmm1-v-plus.jpg'],
    featured: true,
    badge: 'Available Now',
    specs: [
      { label: 'Heating', value: 'Varitherm Induction Steam' },
      { label: 'Foam Levels', value: '3 Adjustable Foam Levels' },
      { label: 'Compatibility', value: 'Pairable with laRhea Tabletop' }
    ]
  },
  {
    id: 'rhmm2-v-plus',
    name: 'rhMM2.v+',
    category: 'coffee',
    subCategory: 'Fresh Milk Module',
    tagline: 'Dual Fresh Milk Machine - Advanced Varitherm induction steam',
    shortDescription: 'Expanded dual-container fresh milk module with Varitherm induction heating for high-volume cappuccino & latte preparation.',
    fullDescription: 'rhMM2.v+ provides dual fresh milk container capacity, automated steam clean cycles, and precision Varitherm micro-foam extraction for busy coffee hubs.',
    images: ['assets/images/machines/coffee/rhMM2.v+.jpg'],
    featured: true,
    badge: 'Available Now',
    specs: [
      { label: 'Milk Containers', value: 'Dual Milk Container Capacity' },
      { label: 'Heating', value: 'Varitherm Induction Steam' },
      { label: 'Foam Levels', value: 'Programmable Micro-Foam' },
      { label: 'Clean Cycle', value: 'Automated Steam Sanitization' },
      { label: 'Compatibility', value: 'Pairable with laRhea & Rhea BL' }
    ]
  },


  // ==========================================
  // SNACKS VENDING MACHINES
  // ==========================================

  {
    id: 'luce-zero-side-snack',
    name: 'luce zero side snack',
    category: 'snacks',
    subCategory: 'Luce Snack Series',
    tagline: 'Sleek dark glass slave snack machine',
    shortDescription: 'Modern dark glass finish snack module with capacity up to 1120 products and flexspir technology.',
    fullDescription: 'Luce Zero Side Snack operates seamlessly alongside Rhea coffee towers to offer snacks and cold drinks.',
    images: ['assets/images/machines/snacks/luce-zero-snack.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: '4°C Climate Control' },
      { label: 'Capacity', value: 'Up to 1120 Products' },
      { label: 'Shelves', value: 'Up to 8 Shelves x 7 Spirals' },
      { label: 'Refrigerant', value: 'Eco R290 Hydrocarbon' },
      { label: 'Lighting', value: 'FTCA - Full LED' }
    ]
  },
  {
    id: 'luce-zero-snack',
    name: 'luce zero snack',
    category: 'snacks',
    subCategory: 'Luce Snack Series',
    tagline: 'Capacitive keyboard snack & drink vendor',
    shortDescription: 'Standalone snack vendor with 12 capacitive buttons, 4.3" color display, and 1120 product capacity.',
    fullDescription: 'Luce Zero Snack features 8 shelves, eco R290 refrigeration, and full LED cabinet illumination.',
    images: ['assets/images/machines/snacks/luce-zero-snack.png'],
    featured: true,
    badge: 'Available Now',
    specs: [
      { label: 'Heating', value: '4°C Climate Control' },
      { label: 'Interface', value: '12 Buttons Capacitive Keyboard' },
      { label: 'Display', value: '4.3" Color Display' },
      { label: 'Capacity', value: 'Up to 1120 Products' },
      { label: 'Shelves', value: 'Up to 8 Shelves x 7 Spirals' },
      { label: 'Refrigerant', value: 'Eco R290' }
    ]
  },
  {
    id: 'luce-zero-air-snack',
    name: 'luce zero air snack',
    category: 'snacks',
    subCategory: 'Luce Snack Series',
    tagline: 'Soft elevator lift for fragile products',
    shortDescription: 'Snack vendor equipped with soft lift elevator mechanism to sell fragile items and fresh food.',
    fullDescription: 'Luce Zero Air Snack uses an internal elevator lift to safely deliver glass bottles and fresh pastries.',
    images: ['assets/images/machines/snacks/luce-zero-air-snack.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: '4°C Climate Control' },
      { label: 'Interface', value: '12 Buttons Capacitive Keyboard' },
      { label: 'Display', value: '4.3" Color Display' },
      { label: 'Elevator', value: 'Lift to Sell Fragile Products' },
      { label: 'Capacity', value: 'Up to 1120 Products' },
      { label: 'Shelves', value: 'Up to 7 Shelves x 7 Spirals' }
    ]
  },
  {
    id: 'luce-zero-snack-touch',
    name: 'luce zero snack.touch',
    category: 'snacks',
    subCategory: 'Luce Snack Series',
    tagline: '32 inch touch screen snack vendor',
    shortDescription: 'Giant 32" touchscreen interactive snack vendor with capacity up to 1260 products.',
    fullDescription: 'Luce Zero Snack Touch features interactive 32" digital shopping menu, up to 48 selections, and flexspir.',
    images: ['assets/images/machines/snacks/luce-zero-snack-touch.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: '4°C Climate Control' },
      { label: 'Display', value: '32" Touch Screen' },
      { label: 'Selections', value: 'Up to 48 Selections' },
      { label: 'Capacity', value: 'Up to 1260 Products' },
      { label: 'Shelves', value: 'Up to 7 Shelves x 9 Spirals' },
      { label: 'Refrigerant', value: 'Eco R290' }
    ]
  },
  {
    id: 'luce-xl6-multishop',
    name: 'luce XL6 multishop',
    category: 'snacks',
    subCategory: 'Multishop Series',
    tagline: 'High volume glass front snack and drink vendor',
    shortDescription: 'Heavy-duty automatic snack and beverage master unit with capacitive keyboard and LED lighting.',
    fullDescription: 'Luce XL6 Multishop supports up to 1680 products across 14 shelves and 6 spirals per shelf, with eco R290 refrigeration unit.',
    images: ['assets/images/machines/snacks/luce-xl6-multishop.png'],
    featured: false,
    specs: [
      { label: 'Heating', value: '4°C Climate Control' },
      { label: 'Keyboard', value: '24 Buttons Capacitive' },
      { label: 'Capacity', value: 'Up to 1680 Products' },
      { label: 'Shelves', value: 'Up to 14 Shelves x 6 Spirals' },
      { label: 'Refrigerant', value: 'Eco R290 Hydrocarbon' }
    ]
  }
];
