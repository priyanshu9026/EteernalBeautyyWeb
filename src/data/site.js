// Single source of truth for business details and page content.
// Update copy, prices and imagery here rather than inside components.

export const studio = {
  name: "Eteernal Beautyy",
  fullName: "Eteernal Beautyy Makeup Studio",
  artist: "Sanjoli Singh",
  city: "Lucknow",
  email: "eteernalbeautyy@gmail.com",
  phoneDisplay: "+91 73792 30137",
  phoneHref: "tel:+917379230137",
  whatsappNumber: "917379230137",
  addressLines: [
    "Shop No. 5, S.L Complex (V-BAZAAR)",
    "Bangla Bazaar, opp. Indian Oil Petrol Pump",
    "Lucknow, Uttar Pradesh",
  ],
  hours: [
    { days: "Monday — Saturday", time: "10:00 am — 8:00 pm" },
    { days: "Sunday", time: "By appointment only" },
    { days: "Wedding mornings", time: "From 4:00 am, on booking" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Bangla%20Bazaar%2C%20Lucknow%2C%20Uttar%20Pradesh&output=embed",
  copyrightYear: 2026,
};

export const whatsappLink = (message) =>
  `https://wa.me/${studio.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage = `Hello ${studio.artist}, I found Eteernal Beautyy online and would like to check your availability.`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "facebook",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: "youtube",
  },
];

export const marqueeItems = [
  "Bridal",
  "Engagement",
  "HD Makeup",
  "Saree Draping",
  "Hair Styling",
  "Airbrush",
  "Makeup Classes",
];

// Four signature offers surfaced on the home page.
export const signatureServices = [
  {
    numeral: "01",
    title: "Bridal Artistry",
    description:
      "A full wedding-day look built over a trial — long-wear HD or airbrush base, hair, and draping, finished to last from the haldi to the vidaai.",
    from: "₹18,000",
    image: "/assets/bridal-01.jpg",
    alt: "Bride in a red and gold lehenga with kundan jewellery and warm bridal makeup",
  },
  {
    numeral: "02",
    title: "Party & Occasion",
    description:
      "Engagement, sangeet, reception and festive looks — luminous skin, a considered eye, and nothing that fights your outfit.",
    from: "₹3,500",
    image: "/assets/party-02.jpg",
    alt: "Guest in soft glam makeup and a mint embroidered outfit at an engagement",
  },
  {
    numeral: "03",
    title: "Hair & Draping",
    description:
      "Braided buns, soft waves and open styles, plus saree, lehenga and dupatta setting that holds through a full day of photographs.",
    from: "₹1,500",
    image: "/assets/hair-01.jpg",
    alt: "Braided bridal bun dressed with baby's breath and a gold hair chain",
  },
  {
    numeral: "04",
    title: "Makeup Classes",
    description:
      "Small-batch teaching at the Bangla Bazaar studio — a one-day self-makeup masterclass, or the six-week professional bridal course.",
    from: "₹6,000",
    image: "/assets/studio-detail.jpg",
    alt: "Makeup brushes, a bronze eyeshadow palette and a gold lipstick on cream marble",
  },
];

// Full service list for /services, grouped into four categories.
export const serviceGroups = [
  {
    id: "bridal",
    numeral: "01",
    title: "Bridal",
    blurb:
      "Booked with a trial so nothing about your wedding morning is a surprise. Travel to your venue or home is available across Lucknow.",
    image: "/assets/bridal-02.jpg",
    alt: "Bride in profile wearing a peach embroidered dupatta and jasmine in her hair",
    items: [
      {
        name: "Signature Bridal Look",
        description:
          "Wedding-day HD or airbrush makeup with hairstyling and draping included.",
        price: "₹18,000",
        duration: "3 hrs",
      },
      {
        name: "Reception & Walima Look",
        description:
          "A lighter, more contemporary evening finish photographed under warm venue light.",
        price: "₹15,000",
        duration: "2.5 hrs",
      },
      {
        name: "Bridal Trial",
        description:
          "A full run-through of the look, adjusted with you and photographed for reference.",
        price: "₹5,000",
        duration: "1.5 hrs",
      },
      {
        name: "Bridesmaids & Family",
        description:
          "Coordinated looks for sisters, friends and mothers, priced per person.",
        price: "₹3,500",
        duration: "45 mins",
      },
    ],
  },
  {
    id: "occasion",
    numeral: "02",
    title: "Party & Occasion",
    blurb:
      "For the evenings around the wedding, and for every celebration that has nothing to do with one.",
    image: "/assets/party-01.jpg",
    alt: "Woman in smoky bronze party makeup with gold statement earrings",
    items: [
      {
        name: "Engagement Look",
        description:
          "Soft glam with a luminous base, built to sit well under ring-ceremony photography.",
        price: "₹8,000",
        duration: "2 hrs",
      },
      {
        name: "Haldi, Mehndi & Sangeet",
        description:
          "Lighter, sweat-resistant looks for daytime functions and long dance evenings.",
        price: "₹6,000",
        duration: "1.5 hrs",
      },
      {
        name: "Editorial & Portfolio",
        description:
          "Camera-first makeup for shoots, pageants and designer lookbooks.",
        price: "₹7,500",
        duration: "2 hrs",
      },
      {
        name: "Party Glam",
        description:
          "A polished evening look for birthdays, receptions and cocktail nights.",
        price: "₹3,500",
        duration: "1 hr",
      },
      {
        name: "Festive & Karwa Chauth",
        description:
          "Quick, elegant seasonal makeup — walk-ins welcome when the studio is free.",
        price: "₹3,000",
        duration: "45 mins",
      },
    ],
  },
  {
    id: "hair",
    numeral: "03",
    title: "Hair & Draping",
    blurb:
      "Booked on their own, or folded into a makeup appointment at a reduced rate.",
    image: "/assets/draping-01.jpg",
    alt: "Hands arranging the pallu of an ivory silk saree with a gold zari border",
    items: [
      {
        name: "Bridal Hairstyling",
        description:
          "Braided or textured buns dressed with fresh flowers, pins and hair jewellery.",
        price: "₹4,000",
        duration: "1 hr",
      },
      {
        name: "Occasion Hairstyling",
        description: "Blow-dry waves, sleek ponytails and half-open sets.",
        price: "₹1,800",
        duration: "45 mins",
      },
      {
        name: "Saree Draping",
        description:
          "Classic Nivi, Bengali, lehenga-saree and butterfly drapes, pleated and pinned to hold.",
        price: "₹1,500",
        duration: "30 mins",
      },
      {
        name: "Dupatta & Lehenga Setting",
        description:
          "Single or double dupatta setting arranged for your jewellery and photographs.",
        price: "₹1,200",
        duration: "20 mins",
      },
    ],
  },
  {
    id: "classes",
    numeral: "04",
    title: "Classes",
    blurb:
      "Taught in batches of four or fewer, with a kit list shared before you start.",
    image: "/assets/editorial-01.jpg",
    alt: "Model with sculpted bronze editorial makeup against a warm beige backdrop",
    items: [
      {
        name: "Self-Makeup Masterclass",
        description:
          "One day on your own face — base, brows, eyes and a look you can repeat.",
        price: "₹6,000",
        duration: "1 day",
      },
      {
        name: "Professional Bridal Course",
        description:
          "Six weeks covering skin prep, HD and airbrush, hair, draping and client handling.",
        price: "₹45,000",
        duration: "6 weeks",
      },
      {
        name: "Advanced HD & Airbrush Module",
        description:
          "For working artists — colour theory, airbrush technique and camera testing.",
        price: "₹22,000",
        duration: "2 weeks",
      },
    ],
  },
];

export const serviceOptions = [
  "Bridal makeup",
  "Bridal trial",
  "Engagement or reception",
  "Party or festive makeup",
  "Hair styling only",
  "Saree draping only",
  "Editorial or portfolio shoot",
  "Makeup classes",
  "Something else",
];

export const testimonials = [
  {
    quote:
      "I had almost given up on finding someone who would not turn me three shades lighter. Sanjoli matched my skin exactly, and by the end of the reception my base had not moved once.",
    name: "Ananya Srivastava",
    detail: "Wedding · Gomti Nagar",
  },
  {
    quote:
      "She came to our house at half past four in the morning and stayed calm while the rest of us were not. My mother and both my sisters were done on time and every photograph shows it.",
    name: "Priyanka Mishra",
    detail: "Wedding & family · Aliganj",
  },
  {
    quote:
      "I booked a trial expecting the usual heavy look and got something that actually looked like me. That is the reason I went back for my engagement and my sister's sangeet.",
    name: "Sneha Agarwal",
    detail: "Engagement · Hazratganj",
  },
];

export const stats = [
  { value: "9", label: "Years behind the chair" },
  { value: "400+", label: "Brides made ready" },
  { value: "60+", label: "Artists trained" },
  { value: "2018", label: "Studio opened in Lucknow" },
];

export const credentials = [
  {
    year: "2015",
    title: "Advanced Makeup Artistry",
    place: "Lakmé Academy, Lucknow",
  },
  {
    year: "2017",
    title: "HD & Airbrush Certification",
    place: "Kryolan Professional, New Delhi",
  },
  {
    year: "2018",
    title: "Eteernal Beautyy opens",
    place: "Bangla Bazaar, Lucknow",
  },
  {
    year: "2021",
    title: "Bridal Hair & Draping Intensive",
    place: "Studio workshop series, Mumbai",
  },
];

export const galleryImages = [
  {
    src: "/assets/bridal-01.jpg",
    alt: "Bride in a red and gold lehenga with a maang tikka and warm bridal makeup",
    category: "Bridal",
    caption: "Wedding day · Gomti Nagar",
    orientation: "portrait",
  },
  {
    src: "/assets/party-01.jpg",
    alt: "Smoky bronze party makeup with gold hoop earrings against a dark background",
    category: "Party",
    caption: "Reception evening",
    orientation: "portrait",
  },
  {
    src: "/assets/hair-01.jpg",
    alt: "Braided bridal bun dressed with baby's breath and a gold hair chain",
    category: "Bridal",
    caption: "Hair · braided low bun",
    orientation: "portrait",
  },
  {
    src: "/assets/editorial-01.jpg",
    alt: "Sculpted bronze editorial beauty look on a warm beige backdrop",
    category: "Editorial",
    caption: "Portfolio shoot",
    orientation: "portrait",
  },
  {
    src: "/assets/bridal-feature.jpg",
    alt: "Bride in a deep maroon veil lit by a single warm side light",
    category: "Bridal",
    caption: "Signature bridal",
    orientation: "landscape",
  },
  {
    src: "/assets/bridal-02.jpg",
    alt: "Bride in profile wearing a peach dupatta with jasmine flowers in her hair",
    category: "Bridal",
    caption: "Morning nikah",
    orientation: "portrait",
  },
  {
    src: "/assets/party-02.jpg",
    alt: "Engagement guest in soft glam makeup and a mint embroidered outfit",
    category: "Party",
    caption: "Engagement · Aliganj",
    orientation: "portrait",
  },
  {
    src: "/assets/draping-01.jpg",
    alt: "Ivory silk saree with a gold zari border being draped and pinned",
    category: "Editorial",
    caption: "Draping study",
    orientation: "portrait",
  },
  {
    src: "/assets/detail-mehndi.jpg",
    alt: "Bridal hands with dark mehndi resting on an ivory embroidered lehenga",
    category: "Bridal",
    caption: "Mehndi morning",
    orientation: "landscape",
  },
  {
    src: "/assets/studio-detail.jpg",
    alt: "Makeup brushes, a bronze palette and a gold lipstick on cream marble",
    category: "Editorial",
    caption: "At the studio",
    orientation: "landscape",
  },
  {
    src: "/assets/home-model1.jpg",
    alt: "Client wearing a soft daytime makeup look",
    category: "Party",
    caption: "Daytime function",
    orientation: "portrait",
  },
  {
    src: "/assets/bridal-makeup2.jpg",
    alt: "Close-up of finished bridal makeup with defined eyes",
    category: "Bridal",
    caption: "Studio bridal",
    orientation: "portrait",
  },
  {
    src: "/assets/home-model2.jpg",
    alt: "Client photographed after a party makeup appointment",
    category: "Party",
    caption: "Cocktail night",
    orientation: "portrait",
  },
  {
    src: "/assets/home-model3.jpg",
    alt: "Client photographed after a festive makeup appointment",
    category: "Party",
    caption: "Festive look",
    orientation: "portrait",
  },
];

export const galleryFilters = ["All", "Bridal", "Party", "Editorial"];
