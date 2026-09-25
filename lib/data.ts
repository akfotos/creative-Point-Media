export type Category =
  | "All"
  | "Photography"
  | "Film & Motion"
  | "Brand Identity"
  | "Production";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: Exclude<Category, "All">;
  image: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  overview: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const navLinks: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const categories: Category[] = [
  "All",
  "Photography",
  "Film & Motion",
  "Brand Identity",
  "Production",
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Nocturne Campaign",
    client: "Lumière Beauty",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
  {
    id: "2",
    title: "Velocity Launch Film",
    client: "Apex Motors",
    category: "Film & Motion",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
  {
    id: "3",
    title: "Monolith Rebrand",
    client: "Monolith Audio",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80",
    year: "2023",
  },
  {
    id: "4",
    title: "Azure Editorial",
    client: "Vogue Italia",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    year: "2023",
  },
  {
    id: "5",
    title: "Solstice Commercial",
    client: "Solstice Skincare",
    category: "Film & Motion",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
  {
    id: "6",
    title: "Terra Lookbook",
    client: "Terra Studios",
    category: "Production",
    image:
      "https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=1200&q=80",
    year: "2023",
  },
  {
    id: "7",
    title: "Forma Identity System",
    client: "Forma Architecture",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
  {
    id: "8",
    title: "Obsidian Fashion Week",
    client: "Obsidian Label",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
  {
    id: "9",
    title: "Pulse Documentary",
    client: "Pulse Records",
    category: "Film & Motion",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    year: "2023",
  },
];

export const services: Service[] = [
  {
    id: "photo",
    title: "Commercial Photography",
    icon: "Aperture",
    overview:
      "High-impact stills for product, fashion, and editorial campaigns. We light, shoot, and finish every frame in-house.",
    deliverables: [
      "Campaign photography",
      "Product & lifestyle stills",
      "Editorial lookbooks",
      "Color grading & retouching",
    ],
  },
  {
    id: "film",
    title: "Film & Video Production",
    icon: "Clapperboard",
    overview:
      "Cinematic motion content from concept to final color. Built for screens of every size and attention spans of every length.",
    deliverables: [
      "TVCs & brand films",
      "Music videos",
      "Documentary storytelling",
      "Social cutdowns",
    ],
  },
  {
    id: "direction",
    title: "Creative Direction & Branding",
    icon: "Lightbulb",
    overview:
      "Strategic identity work that translates culture into design systems, campaigns, and cohesive brand worlds.",
    deliverables: [
      "Brand strategy & positioning",
      "Visual identity systems",
      "Art direction",
      "Campaign guidelines",
    ],
  },
  {
    id: "post",
    title: "Post-Production & Retouching",
    icon: "Wand2",
    overview:
      "The invisible craft behind every great image: edit, grade, composite, and finish to the highest commercial standard.",
    deliverables: [
      "Video editing & color",
      "Photo retouching",
      "Sound design & mix",
      "Motion graphics & VFX",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Creative Point Media turned our product launch into a cinematic event. The craft and attention to detail was unmatched.",
    author: "Elena Voss",
    role: "Creative Director",
    company: "Lumière Beauty",
  },
  {
    id: "2",
    quote:
      "They don't just shoot campaigns — they build worlds. Every frame felt intentional, premium, and culturally relevant.",
    author: "Marcus Chen",
    role: "Head of Marketing",
    company: "Apex Motors",
  },
  {
    id: "3",
    quote:
      "Fast, strategic, and creatively fearless. The rebrand film they produced still gets mentioned in every board meeting.",
    author: "Sarah Bennett",
    role: "VP Brand",
    company: "Monolith Audio",
  },
];

export const clients: string[] = [
  "Lumière Beauty",
  "Apex Motors",
  "Vogue Italia",
  "Monolith Audio",
  "Solstice Skincare",
  "Pulse Records",
  "Forma Architecture",
  "Obsidian Label",
  "Terra Studios",
  "Harper's Bazaar",
  "Nike",
  "Sonos",
];

export const stats = [
  { label: "Projects Delivered", value: 240, suffix: "+" },
  { label: "Years of Craft", value: 12, suffix: "" },
  { label: "Global Campaigns", value: 60, suffix: "+" },
];

export const studioInfo = {
  location: "Ghana - Accra",
  email: "hello@creativepointmedia.com",
  phone: "054 094 4255",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/creativepoint.media/", handle: "@creativepoint.media" },
    { label: "Vimeo", href: "https://vimeo.com", handle: "@creativepoint" },
    { label: "LinkedIn", href: "https://linkedin.com", handle: "/company/creativepoint" },
    { label: "YouTube", href: "https://youtube.com", handle: "@creativepoint" },
  ],
};
