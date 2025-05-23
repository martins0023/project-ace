import { Building2, Hotel, MapPinned, Theater } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import { ace1, ace10, ace11, ace12, ace13, ace14, ace2, ace3, ace4, ace6, ace9 } from "../assets";

export const navItems = [
  { label: "Events Centers", href: "#" },
  { label: "Create a service", href: "/create-service" },
  { label: "Lookup service", href: "/lookup-service" },
  { label: "Hotels", href: "#" },
  { label: "Workspaces", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    location: "Ibadan, Oyo State",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    location: "Ikeja, Lagos State",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    location: "Ibadan, Oyo State",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    location: "Wuse, Kwara State",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    location: "Osogbo, Osun State",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    location: "Ibadan, Oyo State",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const reviews = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Building2 />,
    text: "Conferences",
    image: ace10,
    tagline: "Luxury for you",
  },
  {
    icon: <Theater />,
    text: "Ceremonies",
    image: ace11,
    tagline: "Cozy celebrations",
  },
  {
    icon: <MapPinned />,
    text: "Workspace",
    image: ace13,
    tagline: "Privacy is yours",
  },
  {
    icon: <Hotel />,
    text: "Hotels",
    image: ace14,
    tagline: "A second home",
  },
];

export const hotels = [
  {
    hotelname: "Maisis Hotel",
    address: "Soka Avenue Street",
    price: "370,000",
    rating: 4,
    image: ace12
  },
  {
    hotelname: "Elect Hotel",
    address: "Alakia Avenue Street",
    price: "270,000",
    rating: 4.5,
    image: ace13
  },
];

export const lookups =[
  {
    id: 1,
    lookupType: "Events Centre",
    lookupName: "Gualdo conference",
    lookupLocation: "New Garage, Ibadan",
    verification: "Verified",
    reviews: 4, // star rating (4 out of 5)
    image: ace1,
    pricing: 900,
    distance: "3,000",
    // Additional data for the detail page
    tagline: "Check out this event centre out for your next ceremony...",
    services: ["Stage Performance", "Security Personnel", "Photography", "Artists", "Catering"],
    moreInformation: [
      "Event space instruction",
      "Privacy policy",
      "Event restriction",
      "Cancellation Policy",
    ],
    reviewsList: [
      {
        rating: 4.5,
        reviewer: "Aishat",
        comment: "A very excellent platform built to serve any society an opportunity to grow",
      },
      {
        rating: 4.0,
        reviewer: "Dores",
        comment: "A very excellent platform built to serve any society an opportunity to grow",
      },
    ],
    comments: [
      {
        commenter: "Ibadan, Oyo state",
        text: "4 stars",
      },
      {
        commenter: "Another user",
        text: "5 stars",
      },
    ],
  },
  {
    lookupType: "Events Centre",
    lookupName: "Sablak events centre",
    lookupLocation: "New Garage, Ibadan",
    verification: "Verified",
    reviews: 3,
    image: ace4,
    pricing: "1,900",
    distance: "2,0000"
  },
  {
    lookupType: "Events Centre",
    lookupName: "Landmark Centre",
    lookupLocation: "Victoria Island, Lagos",
    verification: "Verified",
    reviews: 3,
    image: ace9,
    pricing: "1,900",
    distance: "2,0000"
  },
  {
    lookupType: "Events Centre",
    lookupName: "Baring workspace",
    lookupLocation: "New Garage, Ibadan",
    verification: "Verified",
    reviews: 3,
    image: ace6,
    pricing: "1,900",
    distance: "2,0000"
  },
]

export const eventsCentres = [
  {
    centreName: "Landmark Events",
    address: "Lagos, Victoria Island",
    price: "200,000",
    rating: 4,
    image: ace14
  },
  {
    centreName: "Kaankafo Hall",
    address: "Liberty Road, Challenge Ibadan",
    price: "170,000",
    rating: 4.5,
    image: ace11
  },
];

export const nearby = [
  {
    title: "Lucas Hotel",
    kilometres: "33km",
    type: "New",
    location: "Ibadan",
    image: ace1
  },
  {
    title: "Fobina Workspace",
    kilometres: "23km",
    location: "Lagos",
    type: "Old",
    image: ace2
  },
  {
    title: "Sablak Events Centre",
    kilometres: "12km",
    location: "Lagos",
    type: "Old",
    image: ace3
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "How to use" },
  { href: "#", text: "Reference" },
  { href: "#", text: "Privacy Policy" },
];

export const communityLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Features" },
  { href: "#", text: "News" },
  { href: "#", text: "FAQs" },
  { href: "#", text: "Jobs" },
];

export const platformLinks = [
  { href: "#", text: "projectx@gmail.com" },
];
