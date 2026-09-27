export type ServiceItem = {
  title: string;
  body: string;
  img: string;
};

export type Service = {
  slug: string;
  name: string;
  /** Second display line on the hero. */
  tagline: string;
  blurb: string;
  intro: string;
  bullets: string[];
  hero: string;
  heroAlt: string;
  items: ServiceItem[];
  pairs: { before: string; after: string }[];
};

const P = "/images/services";

export const SERVICES: Service[] = [
  {
    slug: "roofing",
    name: "Roofing",
    tagline: "Done in days.",
    blurb: "Replace, repair & storm help",
    intro:
      "Roof replacement, repair, storm help, new builds, and free inspections across the Texas Hill Country — one licensed crew, backed by a 25-year written warranty.",
    bullets: [
      "Full tear-off and haul-away",
      "New decking wherever wood is soft",
      "Ice-and-water shield in every valley",
      "Impact-rated shingles",
    ],
    hero: "/images/home/services/replacement.webp",
    heroAlt: "Fresh roof decking on a home surrounded by trees",
    items: [
      {
        title: "Roof Replacement",
        body: "Down to the bare deck and rebuilt in layers — asphalt, metal, cedar, or tile. Most homes take one to two days.",
        img: "/images/home/services/replacement.webp",
      },
      {
        title: "Roof Repair",
        body: "Leaks traced to their real source and fixed the first visit, with photos of what we found.",
        img: "/images/home/services/shingle-repair.webp",
      },
      {
        title: "Metal Roofing",
        body: "Standing seam panels custom-cut to length on site — a clean look that stands up to Hill Country hail for fifty years.",
        img: `${P}/roofing/metal-roof.webp`,
      },
      {
        title: "Commercial Roofing",
        body: "Flat and low-slope systems for shops, offices, and rentals — installed around your business hours, not through them.",
        img: `${P}/roofing/commercial-roof.webp`,
      },
    ],
    pairs: [
      { before: `${P}/roofing/shake-before.webp`, after: `${P}/roofing/shake-after.webp` },
      { before: `${P}/roofing/tile-before.webp`, after: `${P}/roofing/tile-after.webp` },
      { before: `${P}/roofing/shingle-before.webp`, after: `${P}/roofing/shingle-after.webp` },
      { before: `${P}/roofing/reroof-before.webp`, after: `${P}/roofing/reroof-after.webp` },
    ],
  },
  {
    slug: "gutters",
    name: "Gutters",
    tagline: "Water where it belongs.",
    blurb: "Seamless gutters & guards",
    intro:
      "Seamless gutters, downspouts, and gutter guards across the Texas Hill Country. Formed on-site, matched to your trim, and hung in a day.",
    bullets: [
      "Seamless gutters formed on-site",
      "Downspouts and splash extensions",
      "Gutter guards that keep leaves out",
      "Colors matched to your trim",
    ],
    hero: `${P}/gutters/gutter-trim-hero.webp`,
    heroAlt: "Seamless gutter and downspout on a blue-sided home",
    items: [
      {
        title: "Seamless Gutters",
        body: "Rolled to length in your driveway, so there are no seams to split and no joints to leak down the line.",
        img: `${P}/gutters/seamless-rain.webp`,
      },
      {
        title: "Gutter Installation",
        body: "Hidden hangers every two feet and the right pitch for Hill Country downpours — hung and flowing in a day.",
        img: `${P}/gutters/gutter-install.webp`,
      },
      {
        title: "Gutter Guards",
        body: "Micro-mesh screens that keep oak leaves and pine needles out while the water keeps moving.",
        img: `${P}/gutters/gutter-guard.webp`,
      },
      {
        title: "Downspouts & Drainage",
        body: "Downspouts and splash extensions that put roof runoff well clear of your foundation and flower beds.",
        img: `${P}/gutters/downspout-drainage.webp`,
      },
    ],
    pairs: [
      { before: `${P}/gutters/leaves-before.webp`, after: `${P}/gutters/guards-after.webp` },
      { before: `${P}/gutters/seamless-before.webp`, after: `${P}/gutters/seamless-after.webp` },
      { before: `${P}/gutters/replacement-before.webp`, after: `${P}/gutters/replacement-after.webp` },
      { before: `${P}/gutters/newrun-before.webp`, after: `${P}/gutters/newrun-after.webp` },
    ],
  },
  {
    slug: "siding",
    name: "Siding",
    tagline: "The whole house, protected.",
    blurb: "Vinyl, fiber cement & wood",
    intro:
      "Insulated vinyl, fiber cement, and engineered wood siding installed over a proper moisture barrier — by the same licensed crew that stands behind our roofs.",
    bullets: [
      "Old siding removed and hauled off",
      "Wall inspection before anything goes on",
      "Moisture barrier under every panel",
      "Vinyl, fiber cement & engineered wood",
    ],
    hero: `${P}/siding/two-tone-siding.webp`,
    heroAlt: "Two-tone siding on a new craftsman home",
    items: [
      {
        title: "Insulated Vinyl",
        body: "Thick insulated lap siding that shrugs off hail and never needs painting — the fastest way to change how a house looks.",
        img: `${P}/siding/vinyl-lap.webp`,
      },
      {
        title: "Fiber Cement",
        body: "James Hardie board cut and fastened to spec. It takes paint beautifully and does not care about sun, rot, or woodpeckers.",
        img: `${P}/siding/fiber-cement.webp`,
      },
      {
        title: "Engineered Wood",
        body: "Real wood texture with a treated core, for the craftsman look without the maintenance of raw cedar.",
        img: `${P}/siding/engineered-wood.webp`,
      },
      {
        title: "Soffit, Fascia & Trim",
        body: "Wrapped soffit and fascia that seal the edges of your roof and keep wasps and squirrels out of the attic.",
        img: `${P}/siding/soffit-fascia-trim.webp`,
      },
    ],
    pairs: [
      { before: `${P}/siding/lap-before.webp`, after: `${P}/siding/lap-after.webp` },
      { before: `${P}/siding/reside-before.webp`, after: `${P}/siding/reside-after.webp` },
      { before: `${P}/siding/sanmarcos-before.webp`, after: `${P}/siding/sided-home-dusk.webp` },
      { before: `${P}/siding/newlap-before.webp`, after: `${P}/siding/newlap-after.webp` },
    ],
  },
  {
    slug: "windows",
    name: "Windows",
    tagline: "Measured to the quarter inch.",
    blurb: "Energy-efficient replacements",
    intro:
      "Energy-efficient replacement windows, custom-made for every opening and installed level, sealed, and square — so your house stays cool through a Texas summer.",
    bullets: [
      "Every opening measured to ¼ inch",
      "Windows custom-made to fit",
      "ENERGY STAR certified glass",
      "Insulated frames and tight seals",
    ],
    hero: `${P}/windows/dormer-window.webp`,
    heroAlt: "White double-hung window in a siding dormer",
    items: [
      {
        title: "Double-Hung Windows",
        body: "The classic that tilts in for cleaning. Custom-built to your opening, so there are no shims holding up the difference.",
        img: `${P}/windows/double-hung.webp`,
      },
      {
        title: "Energy-Efficient Glass",
        body: "Low-E coatings and argon fill that turn away the August sun and keep your air conditioner from running all afternoon.",
        img: `${P}/windows/energy-efficient-glass.webp`,
      },
      {
        title: "Whole-House Replacement",
        body: "Every window in the house swapped in one visit, with the trim and caulk finished the same day.",
        img: `${P}/windows/replacement-row.webp`,
      },
      {
        title: "Modern & Picture Windows",
        body: "Big fixed panes and black frames for a clean, current look — with the Hill Country view left uninterrupted.",
        img: `${P}/windows/modern-windows.webp`,
      },
    ],
    pairs: [
      { before: `${P}/windows/window-before.webp`, after: `${P}/windows/window-after.webp` },
      { before: `${P}/windows/frame-before.webp`, after: `${P}/windows/frame-after.webp` },
      { before: `${P}/windows/sash-before.webp`, after: `${P}/windows/sash-after.webp` },
      { before: `${P}/windows/wholehouse-before.webp`, after: `${P}/windows/wholehouse-after.webp` },
    ],
  },
  {
    slug: "masonry",
    name: "Masonry",
    tagline: "Built to last.",
    blurb: "Chimneys, tuckpointing & stone",
    intro:
      "Chimney repair, tuckpointing, and stone veneer across the Texas Hill Country — the same licensed crew that fixes your roof fixes the brick around it.",
    bullets: [
      "Chimney inspection with photos",
      "Crowns and caps rebuilt and sealed",
      "Flashing where brick meets roof",
      "Mortar color-matched to your home",
    ],
    hero: `${P}/masonry/hero.webp`,
    heroAlt: "Brick chimney rising from a tile roof at sunset",
    items: [
      {
        title: "Chimney Repair",
        body: "Cracked crowns rebuilt, caps replaced, and the flashing where brick meets shingle sealed properly for once.",
        img: `${P}/masonry/chimney-repair.webp`,
      },
      {
        title: "Tuckpointing",
        body: "Failed mortar ground out and replaced with a color-matched mix, so the repair disappears into the wall.",
        img: `${P}/masonry/tuckpointing.webp`,
      },
      {
        title: "Stone Veneer",
        body: "Natural and manufactured stone laid on columns, skirting, and chimneys to give a plain elevation some weight.",
        img: `${P}/masonry/stone-veneer.webp`,
      },
      {
        title: "Chimney Relining",
        body: "Stainless liners sized to your appliance, so a working fireplace vents safely instead of into your living room.",
        img: `${P}/masonry/chimney-relining.webp`,
      },
    ],
    pairs: [
      { before: `${P}/masonry/crown-before.webp`, after: `${P}/masonry/crown-after.webp` },
      { before: `${P}/masonry/mortar-before.webp`, after: `${P}/masonry/mortar-after.webp` },
      { before: `${P}/masonry/repoint-before.webp`, after: `${P}/masonry/repoint-after.webp` },
      { before: `${P}/masonry/rebuild-before.webp`, after: `${P}/masonry/rebuild-after.webp` },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const SERVICE_CREW = [
  { name: "Sam Calloway", role: "Founder & Master Roofer", img: `${P}/crew/sam-calloway.webp` },
  { name: "Elena Ruiz", role: "Project Manager", img: `${P}/crew/elena-ruiz.webp` },
  { name: "Marcus Bell", role: "Site Supervisor", img: `${P}/crew/marcus-bell.webp` },
  { name: "Jake Whitfield", role: "Estimator", img: `${P}/crew/jake-whitfield.webp` },
];

export const MANUFACTURERS = [
  "GAF",
  "Owens Corning",
  "CertainTeed",
  "Malarkey",
  "James Hardie",
  "Andersen",
  "Velux",
  "Alside",
];
