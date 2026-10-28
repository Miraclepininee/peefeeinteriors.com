/**
 * PeeFee Interiors - Brand Configuration & Central Data Store
 * All facts, contact details, and locations are strictly verified from official PeeFee Interiors data.
 */

export interface LocationInfo {
  type: string;
  label: string;
  address: string;
  city: string;
  state: string;
  country: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  involves: string[];
  image: string;
  isAuthenticMedia: boolean;
  illustrativeNote?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'luxury';
  categoryLabel: string;
  serviceId: string;
  serviceName: string;
  image: string;
  isAuthenticWork: boolean;
  illustrativeNotice?: string;
  location: string;
  summary: string;
  description: string;
  highlights: string[];
  materials?: string[];
}

export const BRAND = {
  name: "PeeFee Interiors",
  legalName: "PeeFee Interiors",
  tagline: "We don't just decorate rooms—we transform living experiences.",
  motto: "You imagine it. We create it.",
  credo: "Every detail has purpose. Every space tells a story.",
  actionSlogan: "We Build. We Design. We Construct. We Deliver.",
  phone: "+2348165762086",
  phoneDisplay: "+234 816 576 2086",
  email: "peefeeinteriors@gmail.com",
  websiteUrl: "https://www.peefeeinteriors.com",
  primaryMarket: "Port Harcourt, Rivers State, Nigeria",
  
  // WhatsApp link with prefilled message
  whatsappUrl: "https://wa.me/2348165762086?text=Hello%20PeeFee%20Interiors,%20I%20would%20like%20to%20discuss%20a%20project.",
  
  // Strictly verified locations
  locations: [
    {
      type: "Office",
      label: "Main Design Office",
      address: "175 Chu-Ngewe Street",
      city: "Port Harcourt",
      state: "Rivers State",
      country: "Nigeria",
      description: "Client consultations, architectural planning, and design presentations."
    },
    {
      type: "Store",
      label: "Showroom & Store",
      address: "Abuloma Road, Trans Amadi",
      city: "Port Harcourt",
      state: "Rivers State",
      country: "Nigeria",
      description: "Material finishes, curated display fixtures, and fabric selection."
    },
    {
      type: "Production Area",
      label: "Custom Fabrication Workshop",
      address: "Ada George Road",
      city: "Port Harcourt",
      state: "Rivers State",
      country: "Nigeria",
      description: "Bespoke carpentry, TV console fabrication, and master upholstery workshop."
    }
  ] as LocationInfo[]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "interior-design",
    name: "Interior Design",
    shortDescription: "Tailored residential and commercial living environments crafted with bespoke spatial harmony.",
    detailedDescription: "From private residences and duplexes to corporate headquarters, we curate interiors that merge modern elegance with effortless living. Every layout, light balance, and surface texture is calculated to reflect your personality and enhance your everyday rhythm.",
    involves: [
      "Spatial planning and layout optimization",
      "Full living room, bedroom, and dining transformations",
      "Commercial office and executive suite styling",
      "Curated color schemes, textures, and wall finishes",
      "Bespoke joinery and architectural woodwork coordination"
    ],
    image: "/assets/aistudio/Interior_services_d0114eeb.webp",
    isAuthenticMedia: true
  },
  {
    id: "tv-console-design",
    name: "TV Console Design",
    shortDescription: "Bespoke multimedia wall installations, architectural acoustic paneling, and floating cabinetry.",
    detailedDescription: "Our signature TV consoles are engineered as architectural focal points. Featuring precision fluted wall panels, integrated ambient LED channels, concealed cable management, and bespoke storage, each unit is built to measure in our Ada George production facility.",
    involves: [
      "Custom wall paneling (fluted oak, acoustic slats, marble finishes)",
      "Floating console drawers and display niches",
      "Integrated concealed cable raceways and component storage",
      "Concealed ambient backlighting and architectural profile lights",
      "Precision site measurement and bespoke in-house fabrication"
    ],
    image: "/assets/aistudio/Tv_console_services_d32cee67.webp",
    isAuthenticMedia: true
  },
  {
    id: "architecture",
    name: "Architecture",
    shortDescription: "End-to-end architectural spatial planning, structural concepts, and refined building blueprints.",
    detailedDescription: "Thoughtful architectural design grounds every lasting structure. We translate your site conditions, lifestyle requirements, and aesthetic ambitions into cohesive architectural concepts, elevations, and structural flow diagrams built for timeless durability.",
    involves: [
      "Architectural concept creation and 3D visualization",
      "Spatial planning and functional circulation flow",
      "Facade composition and natural daylight analysis",
      "Detailed structural elevations and design specifications",
      "Coordination with engineering and construction teams"
    ],
    image: "/assets/aistudio/Architecture_services_714769b2.webp",
    isAuthenticMedia: true
  },
  {
    id: "upholstery",
    name: "Upholstery",
    shortDescription: "Master artisan furniture tailoring, bespoke curved seating, and restoration craftsmanship.",
    detailedDescription: "At our Port Harcourt workshop, our upholstery masters hand-craft and restore distinctive seating. From sculptural curved sectionals and accent armchairs to acoustic headboards, we employ durable internal hardwood framing, high-density foam, and luxury fabrics.",
    involves: [
      "Custom curved sofas and sculptural lounge sectionals",
      "Premium bouclé, velvet, performance linen, and top-grain leather",
      "Bespoke upholstered dining chairs and acoustic wall beds",
      "Heritage furniture restoration and meticulous restyling",
      "Reinforced hardwood internal framing and high-resilience cushioning"
    ],
    image: "/src/assets/images/upholstery_craftsmanship_1793174875809.jpg",
    isAuthenticMedia: false,
    illustrativeNote: "Illustrative representation of artisan upholstery craftsmanship at PeeFee workshop"
  },
  {
    id: "exterior-design",
    name: "Exterior Design",
    shortDescription: "Striking building façades, entrance portals, outdoor terraces, and architectural finishes.",
    detailedDescription: "First impressions begin outside. We transform exterior building envelopes with contemporary cladding, stone veneers, architectural screening, lighting accents, and terrace flow that seamlessly connects outdoor leisure with indoor elegance.",
    involves: [
      "Modern residential villa and commercial façade makeovers",
      "Architectural exterior cladding and stone panel integration",
      "Grand entrance gates, canopies, and statement portals",
      "Exterior accent illumination and landscape wall integration",
      "Weather-resistant finishes suited for the South-South Nigerian climate"
    ],
    image: "/src/assets/images/exterior_design_villa_1793174875380.jpg",
    isAuthenticMedia: false,
    illustrativeNote: "Illustrative architectural exterior concept — replace with site-specific PeeFee build photo"
  },
  {
    id: "electrical-solutions",
    name: "Electrical Solutions",
    shortDescription: "Architectural lighting design, concealed LED coves, magnetic tracks, and smart installations.",
    detailedDescription: "Lighting defines the emotion of any luxury space. We plan and implement comprehensive architectural electrical solutions, including magnetic track systems, indirect warm cove lighting, designer switches, and balanced load distribution tailored for modern electronics.",
    involves: [
      "Architectural lighting schematics and ambient cove illumination",
      "Magnetic track spotlights and low-glare ceiling fixtures",
      "Designer luxury switches, brass plates, and USB wall sockets",
      "Concealed wiring for smart TVs, soundbars, and automation",
      "Balanced residential and commercial distribution installation"
    ],
    image: "/src/assets/images/electrical_solutions_lighting_1793174877083.jpg",
    isAuthenticMedia: false,
    illustrativeNote: "Illustrative representation of architectural cove & magnetic track lighting"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "fluted-tv-multimedia-suite",
    title: "Signature Fluted Wall & Floating Media Console",
    category: "residential",
    categoryLabel: "Residential",
    serviceId: "tv-console-design",
    serviceName: "TV Console Design",
    image: "/assets/aistudio/Tv_console_services_d32cee67.webp",
    isAuthenticWork: true,
    location: "Port Harcourt",
    summary: "Custom natural timber wall paneling with integrated horizontal slats and floating storage console.",
    description: "An authentic signature installation by PeeFee Interiors. This bespoke living room media wall pairs horizontal oak paneling with a full-length cantilevered console and dedicated multimedia storage cavities. Crafted and installed with precise cable concealment.",
    highlights: ["Bespoke horizontal oak wood wall", "Integrated floating shelf unit", "Dual media display integration", "Full cable concealment"],
    materials: ["Treated oak veneer", "Satin brass hardware", "Concealed steel mounting brackets"]
  },
  {
    id: "curved-sculptural-salon",
    title: "Sculptural Curved Lounge & Acoustic Panel Wall",
    category: "luxury",
    categoryLabel: "Luxury",
    serviceId: "interior-design",
    serviceName: "Interior Design & Upholstery",
    image: "/assets/aistudio/Why_choose_us_section_full_image_0bc0bf13.jpg",
    isAuthenticWork: true,
    location: "Port Harcourt",
    summary: "Organic multi-tiered timber wall feature paired with a bespoke curved boucle sectional sofa.",
    description: "Demonstrating PeeFee Interiors' mastery of fluid forms. The cascading wooden acoustic slats wrap the perimeter with indirect warm illumination, framing a custom curved ivory sofa crafted in-house.",
    highlights: ["Cascading fluted timber ceiling-to-wall feature", "Bespoke curved ivory bouclé sofa", "Concealed warm perimeter cove illumination", "Architectural acoustic dampening"],
    materials: ["Architectural fluted timber", "High-resilience bouclé upholstery", "Warm 2700K LED ribbons"]
  },
  {
    id: "monochrome-executive-living",
    title: "Trans Amadi Executive Walkthrough & Entertainment Wall",
    category: "residential",
    categoryLabel: "Residential",
    serviceId: "tv-console-design",
    serviceName: "TV Console & Interior Design",
    image: "/assets/aistudio/image_01b0ed9e.png",
    isAuthenticWork: true,
    location: "Trans Amadi, Port Harcourt",
    summary: "Sophisticated charcoal fluted slat wall with dual up-and-down architectural sconces and lowline console.",
    description: "Completed project showcasing the integration of vertical fluting, dual directional sconces, and low-profile cabinetry for an executive residence. The space was also captured in PeeFee Interiors' walk-through video.",
    highlights: ["Vertical acoustic fluting in dark charcoal finish", "Direct wall-mount multimedia integration", "Dual-beam architectural sconces", "Minimalist low-profile floating credenza"],
    materials: ["Matted charcoal finish woodwork", "Black anodized aluminum", "Sculptural cream accent lounge chairs"]
  },
  {
    id: "contemporary-curved-living-suite",
    title: "Organic Curve Living Suite & Ambient Sconces",
    category: "residential",
    categoryLabel: "Residential",
    serviceId: "interior-design",
    serviceName: "Interior Design & Upholstery",
    image: "/assets/aistudio/Interior_services_d0114eeb.webp",
    isAuthenticWork: true,
    location: "Port Harcourt",
    summary: "Curved modular lounge arrangement with nested round coffee tables and sculpted wall art lighting.",
    description: "Authentic PeeFee Interiors living room design showcasing organic circular geometry, custom upholstered olive and ecru modular seating, and statement interlocking ring wall sconces.",
    highlights: ["Interlocking geometric halo wall sculpture", "Custom dual-tone curved modular sectional", "Nested fluted black marble & brass coffee tables", "Low-profile acoustic wall cladding"],
    materials: ["Fine linen upholstery", "Black Marquina marble", "Antique brass fixtures"]
  },
  {
    id: "modern-villa-exterior-facade",
    title: "Contemporary Limestone & Timber Villa Façade",
    category: "residential",
    categoryLabel: "Residential",
    serviceId: "exterior-design",
    serviceName: "Exterior Design & Architecture",
    image: "/src/assets/images/exterior_design_villa_1793174875380.jpg",
    isAuthenticWork: false,
    illustrativeNotice: "Illustrative exterior concept — replace with site-specific PeeFee build photo",
    location: "Port Harcourt Suburbs",
    summary: "Two-story luxury villa exterior combining natural honed limestone, charred timber cladding, and cantilevered balconies.",
    description: "A showcase of modern tropical residential architecture. The design balances generous glass openings with deep structural overhangs for solar shading, integrated pool coping, and concealed uplighting.",
    highlights: ["Cantilevered upper terrace with glass balustrades", "Honed limestone ashlar masonry", "Integrated reflective lap pool", "Concealed dusk-to-dawn exterior lighting"],
    materials: ["Natural limestone", "Thermally treated dark timber", "Structural safety glass"]
  },
  {
    id: "corporate-executive-boardroom",
    title: "Executive Boardroom & Corporate Acoustic Lounge",
    category: "commercial",
    categoryLabel: "Commercial",
    serviceId: "interior-design",
    serviceName: "Commercial Interior Design",
    image: "/src/assets/images/commercial_office_lounge_1793174877851.jpg",
    isAuthenticWork: false,
    illustrativeNotice: "Illustrative commercial project — replace with verified client installation photo",
    location: "Port Harcourt Commercial District",
    summary: "High-spec corporate meeting space featuring fluted walnut paneling, Calacatta marble conference table, and acoustic glass dividers.",
    description: "Engineered for executive privacy and commanding presentation presence. Custom acoustic fluted walling wraps the conference zone, paired with tailored cognac leather seating and integrated video conferencing.",
    highlights: ["Calacatta marble monolithic conference table", "Integrated video-conference display surround", "Cognac top-grain executive seating", "Brass-framed acoustic glass partitions"],
    materials: ["Fluted American walnut", "Calacatta gold marble", "Acoustic laminated glass"]
  },
  {
    id: "penthouse-dining-suite",
    title: "Private Penthouse Travertine Dining Suite",
    category: "luxury",
    categoryLabel: "Luxury",
    serviceId: "interior-design",
    serviceName: "Interior Design & Upholstery",
    image: "/src/assets/images/luxury_penthouse_dining_1793174877882.jpg",
    isAuthenticWork: false,
    illustrativeNotice: "Illustrative luxury dining concept — replace with verified client installation photo",
    location: "Port Harcourt Penthouse",
    summary: "Sculptural hand-carved travertine table paired with bespoke bouclé dining chairs and fluted architectural joinery.",
    description: "An intimate dining environment framed by floor-to-ceiling city views, bespoke built-in display cabinetry, and a minimalist brass linear pendant luminaire.",
    highlights: ["Hand-carved organic travertine dining table", "Custom bouclé upholstered dining armchairs", "Fluted oak niche cabinetry with warm display lighting", "Full-height linen acoustic drapery"],
    materials: ["Raw roman travertine", "Italian bouclé wool", "Brushed antique brass"]
  },
  {
    id: "architectural-master-blueprints",
    title: "Architectural Concept & Spatial Blueprint Study",
    category: "luxury",
    categoryLabel: "Luxury",
    serviceId: "architecture",
    serviceName: "Architecture",
    image: "/assets/aistudio/Architecture_services_714769b2.webp",
    isAuthenticWork: true,
    location: "Port Harcourt",
    summary: "Precise scaled 3D architectural model and detailed technical drafts for a luxury residence.",
    description: "Authentic representation of PeeFee Interiors' architectural drafting and spatial analysis phase, establishing structural envelopes, sun path alignment, and circulation hierarchy before construction.",
    highlights: ["Scale physical architectural study", "Comprehensive spatial zoning plan", "Material schedule integration", "Construction-ready documentation"],
    materials: ["Architectural drafting models", "CAD technical specifications"]
  }
];

export const PROCESS_STAGES = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding your vision, lifestyle & space",
    description: "Every great space begins with listening. We explore your functional requirements, daily routines, aesthetic preferences, and budget parameters to establish a unified project vision."
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Spatial analysis, concepts & material direction",
    description: "We map precise dimensions, structural possibilities, circulation paths, lighting orientation, and material swatches. We present clear 3D visualizations and concept boards before any work begins."
  },
  {
    number: "03",
    title: "Design & Execution",
    subtitle: "Bespoke fabrication & meticulous on-site construction",
    description: "Our in-house artisans in Port Harcourt fabricate custom joinery, TV consoles, and upholstery while our site managers oversee structural finishes, electrical runs, and installation with zero compromise."
  },
  {
    number: "04",
    title: "Final Handover",
    subtitle: "Detail inspection, styling & client reveal",
    description: "We conduct rigorous quality walkthroughs, fine-tune every hinge and lighting switch, curate final accessories, and formally present the completed space ready for you to experience."
  }
];
