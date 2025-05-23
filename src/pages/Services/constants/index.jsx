import { bgpremium, service1, service10, service11, service12, service2, service3, service4, service5, service6, service7, service8, service9, user1,
  user2,
  user3, } from "../../../assets";

// src/constants/plans.jsx
export const plans = {
  billingOptions: ["Yearly", "Monthly"],
  plans: [
    {
      name: "Pro",
      price: { yearly: 100, monthly: 10 },
      features: [
        "Up to 100 file uploads",
        "Up to 5000 monthly questions",
        "Up to 50MB file size",
        "Multi-file chat",
        "Access to GPT-4",
        "Priority customer support",
        "Early access to new features",
      ],
    },
    {
      name: "Premium",
      price: { yearly: 200, monthly: 20 },
      features: [
        "Up to 1000 file uploads",
        "Up to 50,000 monthly questions",
        "Up to 200MB file size",
        "All Pro features",
      ],
    },
  ],
};

// src/constants/educationLevels.jsx
export const educationLevels = [
  "High School",
  "Associate Degree",
  "Bachelor’s Degree",
  "Master’s Degree",
  "Doctorate (PhD)",
  "Other",
];

// src/constants/users.js
export const users = [
  {
    id: 1,
    profilePic: user1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Maple St, Springfield",
    country: "Nigeria",
    social: {
      linkedin: "https://linkedin.com/in/alice",
      twitter: "https://twitter.com/alice_j",
    },
  },
  {
    id: 2,
    profilePic: user2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Ave, Metropolis",
    country: "Morocco",
    social: {
      linkedin: "https://linkedin.com/in/bob",
      instagram: "https://instagram.com/bob_art",
    },
  },
  // …other users…
];


// src/constants/services.jsx
export const services = [
  {
    id: 1,
    userId: 1,                         // ← assign Alice (user id 1)
    title: "Public Speaking",
    category: "Presentations",
    type: "On-site",
    price: 150,
    workStyle: "Freelance",
    image: service4,
    premium: false,
    description:
      "Engage your audience with confidence. I deliver keynote speeches, workshops, and motivational talks tailored to your event’s theme and goals.",
    features: [
      "Keynote speeches",
      "Interactive workshops",
      "Custom presentation slides",
      "Audience Q&A facilitation",
      "On-site coaching",
    ],
  },
  {
    id: 2,
    userId: 2,                         // ← assign Alice (user id 1)
    title: "Makeup Artist",
    category: "Beauty",
    type: "On-site",
    price: 200,
    workStyle: "Freelance",
    image: service3,
    premium: false,
    description:
      "Professional makeup services for weddings, photo shoots, and special events. Using top-quality products for a flawless look.",
    features: [
      "Bridal makeup",
      "Editorial/photo shoot makeup",
      "Special effects makeup",
      "Touch-up services",
      "Skin consultation",
    ],
  },
  {
    id: 3,
    userId: 2,                         // ← assign Alice (user id 1)
    title: "Music Performance",
    category: "Entertainment",
    type: "On-site",
    price: 300,
    workStyle: "Freelance",
    image: service2,
    premium: false,
    description:
      "Live music performances—from solo instrumental sets to full band shows—customized to fit your event’s mood and style.",
    features: [
      "Solo acoustic set",
      "Full band performance",
      "DJ collaboration",
      "Custom song requests",
      "Sound equipment included",
    ],
  },
  {
    id: 4,
    userId: 1,
    title: "Artist (Painter)",
    category: "Art & Design",
    type: "Remote",
    price: 250,
    workStyle: "Freelance",
    image: service5,
    premium: false,
    description:
      "Original artwork commissions, live painting sessions, and custom murals to add a creative touch to your space or event.",
    features: [
      "Canvas commissions",
      "Live event painting",
      "Mural design & installation",
      "Digital illustrations",
      "Framing options",
    ],
  },
  {
    id: 5,
    userId: 2,
    title: "Party Decorator",
    category: "Event Planning",
    type: "On-site",
    price: 400,
    workStyle: "Freelance",
    image: service6,
    premium: false,
    description:
      "Transform any venue with stunning decor—balloons, florals, lighting, and themed setups to make your event unforgettable.",
    features: [
      "Venue styling",
      "Floral arrangements",
      "Themed decor packages",
      "Balloon arches & installations",
      "Lighting design",
    ],
  },
  {
    id: 6,
    userId: 2,
    title: "Event Design & Decorator",
    category: "Event Planning",
    type: "On-site",
    price: 500,
    workStyle: "Agency",
    image: service7,
    premium: false,
    description:
      "Full-service event design: concept development, floor planning, and décor execution for weddings, corporate events, and more.",
    features: [
      "Concept & mood boards",
      "3D floor plans",
      "Vendor coordination",
      "Day-of setup & breakdown",
      "Custom signage",
    ],
  },
  {
    id: 7,
    userId: 1,
    title: "Public Speaking & Moderator",
    category: "Presentations",
    type: "Hybrid",
    price: 180,
    workStyle: "Freelance",
    image: service8,
    premium: false,
    description:
      "Combine keynote presentations with panel moderation to guide discussions and keep your event on track and engaging.",
    features: [
      "Keynote addresses",
      "Panel moderation",
      "Live audience polling",
      "Virtual event hosting",
      "Agenda management",
    ],
  },
  {
    id: 8,
    userId: 2,
    title: "Hair Stylist & Hair Dressing",
    category: "Beauty",
    type: "On-site",
    price: 220,
    workStyle: "Freelance",
    image: service9,
    premium: false,
    description:
      "Expert hairstyling for weddings, photoshoots, and special occasions. From classic updos to modern cuts and color treatments.",
    features: [
      "Bridal hairstyling",
      "Color & highlights",
      "Updos & braiding",
      "Hair treatments",
      "Extensions & styling",
    ],
  },
  {
    id: 9,
    userId: 1,
    title: "Nature Photography",
    category: "Photography",
    type: "Remote",
    price: 350,
    workStyle: "Freelance",
    image: service10,
    premium: false,
    description:
      "Capture the beauty of landscapes, wildlife, and outdoor adventures. High-resolution photos, prints, or digital delivery.",
    features: [
      "Landscape shoots",
      "Wildlife photography",
      "Aerial drone shots",
      "Photo editing & retouching",
      "Print licensing",
    ],
  },
  {
    id: 10,
    userId: 1,
    title: "Food Catering & Baking",
    category: "Catering",
    type: "On-site",
    price: 600,
    workStyle: "Agency",
    image: service11,
    premium: false,
    description:
      "Delicious catering for events of any size: custom menus, buffet setups, plated dinners, and specialty cakes and desserts.",
    features: [
      "Custom menu design",
      "Buffet & plated service",
      "Dietary accommodations",
      "Wedding cakes",
      "Dessert displays",
    ],
  },
  {
    id: 11,
    userId: 1,
    title: "Fashion Design & Tailoring",
    category: "Fashion",
    type: "Remote",
    price: 450,
    workStyle: "Freelance",
    image: service12,
    premium: false,
    description:
      "Bespoke clothing design and tailoring services: custom outfits, alterations, and made-to-measure pieces for any occasion.",
    features: [
      "Custom garment design",
      "Made-to-measure service",
      "Alterations & repairs",
      "Fashion sketches",
      "Fabric sourcing",
    ],
  },
  {
    id: 12,
    userId: 2,
    title: "Cleaning Services",
    category: "Home Services",
    type: "On-site",
    price: 120,
    workStyle: "Freelance",
    image: service1,
    premium: false,
    description:
      "Professional cleaning for homes and offices: regular maintenance, deep cleans, move-in/move-out services, and eco-friendly options.",
    features: [
      "Standard cleaning",
      "Deep cleaning",
      "Move-in/move-out service",
      "Eco-friendly products",
      "Carpet & upholstery cleaning",
    ],
  },
  // You can add more services here...
];

// src/constants/filters.jsx
export const filterOptions = {
  categories: ["Content", "Design", "Development", "Consulting"],
  types: ["Remote", "On-site", "Hybrid"],
  workStyles: ["Full-time", "Part-time", "Freelance"],
  priceRanges: [
    { label: "$0–$50", min: 0, max: 50 },
    { label: "$50–$200", min: 50, max: 200 },
    { label: "$200+", min: 200, max: Infinity },
  ],
};


// A dummy premium promo card
export const premiumPromo = {
  id: "promo",
  title: "Upgrade to Premium",
  subtitle: "Get featured & boost sales",
  image: bgpremium,
  premium: true,
};
