export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Meet Me", href: "/meet-me" },
  { name: "My Style", href: "/my-style" },
  { name: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "wardrobe-audit",
    title: "Wardrobe Audit",
    description: "Together, we'll refine your wardrobe and rebuild it with confidence - piece by piece. Walk away with clarity, style, and a closet that finally feels like you.",
    price: "420/480",
    duration: "10-14 days",
    formats: ["Online", "In-person"],
    href: "/services#wardrobe-audit"
  },
  {
    id: "seasonal-capsule",
    title: "Seasonal Capsule",
    description: "A curated capsule wardrobe for the season - designed to mix, match, and simplify your daily outfits. Style made effortless, every morning.",
    price: "350",
    duration: "7 days",
    formats: ["Online"],
    href: "/services#seasonal-capsule"
  },
  {
    id: "audit-capsule",
    title: "Audit + Capsule",
    description: "The most transformative service. A complete reset for your wardrobe and style identity - from edit to outfit formulas.",
    price: "600",
    duration: "14-18 days",
    formats: ["Online", "In-person"],
    href: "/services#audit-capsule"
  },
  {
    id: "event-styling",
    title: "Event Styling",
    description: "Whether it's a date, interview, or special occasion, we'll create looks that feel confident and authentically you.",
    price: "30",
    duration: "1 day",
    formats: ["Online"],
    href: "/services#event-styling"
  }
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Tanya",
    role: "Entrepreneur",
    content: "Thank you for putting together my spring capsule - you absolutely nailed it! You instantly felt my vibe and created a wardrobe that feels effortless yet perfectly me. Working with you was such a joy, and your positive energy made the whole process even more enjoyable.",
    rating: 5
  },
  {
    id: 2,
    name: "Sofia",
    role: "Director of Sales",
    content: "Dear Nika, thank you for refreshing my wardrobe! I can't believe I have so many summer outfits now. You helped me see and style my clothes in new ways. I'm already excited for winter shopping together!",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica",
    role: "Medical Assistant",
    content: "I asked Veronika to create a winter work wardrobe, and she made the entire process effortless. She carefully considered my needs and preferences, and the PDF she provided included body type insights, a color palette, and curated shopping links.",
    rating: 5
  },
  {
    id: 4,
    name: "Maria",
    role: "Marketing Manager",
    content: "Veronika transformed my entire approach to dressing for work. Her seasonal capsule service gave me 30+ outfit combinations that feel both professional and authentically me. Getting dressed is now the easiest part of my morning routine!",
    rating: 5
  },
  {
    id: 5,
    name: "Elena",
    role: "Interior Designer",
    content: "Working with Veronika was like having a best friend who truly understands style help me shop. She took the time to understand my lifestyle and created a wardrobe that works for both client meetings and creative work sessions.",
    rating: 5
  },
  {
    id: 6,
    name: "Natasha",
    role: "Tech Lead",
    content: "I was skeptical about online styling, but Veronika's process was incredibly thorough. The wardrobe audit revealed so many pieces I'd forgotten about, and her styling tips helped me create looks I never thought possible with my existing clothes.",
    rating: 5
  }
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/veronika_karpiuk",
  youtube: "https://youtube.com/@veronika_karpiuk",
  email: "hello@veronikak.com"
} as const;