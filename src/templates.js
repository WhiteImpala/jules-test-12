export const templates = [
  {
    name: 'Blank',
    data: { content: [], root: {} }
  },
  {
    name: 'Landing Page (Tech)',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Innovate Your Workflow", description: "The ultimate tool for modern tech teams.", buttonText: "Get Started", backgroundColor: "#0f172a", textColor: "#ffffff" } },
        { type: "Features", props: { id: "Features-1", backgroundColor: "#f8fafc" } },
        { type: "Testimonials", props: { id: "Testimonials-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Landing Page (SaaS)',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1" } },
        { type: "Hero", props: { id: "Hero-1", title: "Grow Your Business", description: "All-in-one platform for sales and marketing.", buttonText: "Start Free Trial" } },
        { type: "ImageGallery", props: { id: "ImageGallery-1" } },
        { type: "PricingTable", props: { id: "PricingTable-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Portfolio (Creative)',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1", logoText: "My Portfolio" } },
        { type: "Hero", props: { id: "Hero-1", title: "Hi, I'm a Designer", description: "Welcome to my creative space.", buttonText: "View Work" } },
        { type: "ImageGallery", props: { id: "ImageGallery-1" } },
        { type: "ContactForm", props: { id: "ContactForm-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Blog Home',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1", logoText: "My Blog" } },
        { type: "Heading", props: { id: "Heading-1", title: "Latest Posts", textAlign: "center", paddingTop: "40px" } },
        { type: "Columns", props: { id: "Columns-1", columns: "3" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'About Us',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Our Story", description: "How we started and where we are going.", buttonText: "Join Us" } },
        { type: "Text", props: { id: "Text-1", content: "We are a team of passionate individuals dedicated to creating amazing products." } },
        { type: "Image", props: { id: "Image-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Contact Page',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1" } },
        { type: "Heading", props: { id: "Heading-1", title: "Get in Touch", textAlign: "center" } },
        { type: "ContactForm", props: { id: "ContactForm-1" } },
        { type: "FAQ", props: { id: "FAQ-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Product Launch',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Introducing Product X", description: "The next generation of awesome.", buttonText: "Buy Now", backgroundColor: "#4338ca", textColor: "#ffffff" } },
        { type: "VideoPlayer", props: { id: "VideoPlayer-1" } },
        { type: "Features", props: { id: "Features-1" } },
        { type: "PricingTable", props: { id: "PricingTable-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Event Page',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Annual Conference 2026", description: "Join industry leaders for a weekend of learning.", buttonText: "Register Now" } },
        { type: "Heading", props: { id: "Heading-1", title: "Speakers", textAlign: "center" } },
        { type: "Columns", props: { id: "Columns-1", columns: "4" } },
        { type: "FAQ", props: { id: "FAQ-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Photography Portfolio',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1", logoText: "Lens & Light" } },
        { type: "ImageGallery", props: { id: "ImageGallery-1" } },
        { type: "ImageGallery", props: { id: "ImageGallery-2" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Restaurant Menu',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1", logoText: "The Gourmet" } },
        { type: "Hero", props: { id: "Hero-1", title: "Our Menu", description: "Taste the finest ingredients.", buttonText: "Book a Table", backgroundColor: "#7f1d1d", textColor: "#ffffff" } },
        { type: "Heading", props: { id: "Heading-1", title: "Starters", textAlign: "center" } },
        { type: "Text", props: { id: "Text-1", content: "Bruschetta - $10\nCalamari - $12", textAlign: "center" } },
        { type: "Heading", props: { id: "Heading-2", title: "Mains", textAlign: "center" } },
        { type: "Text", props: { id: "Text-2", content: "Steak - $30\nPasta - $20", textAlign: "center" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'App Promo',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Download Our App", description: "Available on iOS and Android.", buttonText: "Download", backgroundColor: "#065f46", textColor: "#ffffff" } },
        { type: "Image", props: { id: "Image-1", url: "https://via.placeholder.com/400x800?text=App+Screenshot" } },
        { type: "Features", props: { id: "Features-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Webinar Registration',
    data: {
      content: [
        { type: "Heading", props: { id: "Heading-1", title: "Free Webinar: Master SEO", textAlign: "center", paddingTop: "60px" } },
        { type: "Text", props: { id: "Text-1", content: "Learn the secrets of ranking #1 on Google.", textAlign: "center" } },
        { type: "ContactForm", props: { id: "ContactForm-1", title: "Register Now", buttonText: "Save My Spot" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Consulting Services',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1" } },
        { type: "Hero", props: { id: "Hero-1", title: "Expert Consulting", description: "We help you scale your business.", buttonText: "Free Consultation" } },
        { type: "Features", props: { id: "Features-1", feature1: "Strategy", feature2: "Execution", feature3: "Growth" } },
        { type: "Testimonials", props: { id: "Testimonials-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Fitness Studio',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Get Fit With Us", description: "State of the art facilities and expert trainers.", buttonText: "View Classes", backgroundColor: "#000000", textColor: "#ffffff" } },
        { type: "VideoPlayer", props: { id: "VideoPlayer-1" } },
        { type: "PricingTable", props: { id: "PricingTable-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Real Estate Listings',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1", logoText: "Dream Homes" } },
        { type: "Hero", props: { id: "Hero-1", title: "Find Your Dream Home", description: "Explore luxury properties.", buttonText: "Search" } },
        { type: "Columns", props: { id: "Columns-1", columns: "3" } },
        { type: "ContactForm", props: { id: "ContactForm-1", title: "Contact an Agent" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'E-commerce Storefront',
    data: {
      content: [
        { type: "Navbar", props: { id: "Navbar-1", logoText: "ShopNow" } },
        { type: "Hero", props: { id: "Hero-1", title: "Summer Sale", description: "Up to 50% off select items.", buttonText: "Shop Now", backgroundColor: "#fbbf24" } },
        { type: "Heading", props: { id: "Heading-1", title: "Featured Products", textAlign: "center" } },
        { type: "Columns", props: { id: "Columns-1", columns: "4" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Agency Site',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Creative Digital Agency", description: "We build digital experiences.", buttonText: "Our Services" } },
        { type: "ImageGallery", props: { id: "ImageGallery-1" } },
        { type: "Testimonials", props: { id: "Testimonials-1" } },
        { type: "ContactForm", props: { id: "ContactForm-1" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Personal Resume',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Jane Doe", description: "Software Engineer", buttonText: "Download Resume", backgroundColor: "#1e40af", textColor: "#ffffff" } },
        { type: "Heading", props: { id: "Heading-1", title: "Experience", textAlign: "center" } },
        { type: "Text", props: { id: "Text-1", content: "Senior Dev @ TechCorp (2020-Present)\nDeveloper @ WebShop (2018-2020)" } },
        { type: "Heading", props: { id: "Heading-2", title: "Skills", textAlign: "center" } },
        { type: "Features", props: { id: "Features-1", feature1: "React", feature2: "Node.js", feature3: "Python" } },
        { type: "Footer", props: { id: "Footer-1" } }
      ],
      root: {}
    }
  },
  {
    name: 'Coming Soon',
    data: {
      content: [
        { type: "Hero", props: { id: "Hero-1", title: "Coming Soon", description: "We're working hard to launch our new site.", buttonText: "Notify Me", backgroundColor: "#000000", textColor: "#ffffff" } },
        { type: "ContactForm", props: { id: "ContactForm-1", title: "Subscribe for Updates", buttonText: "Subscribe" } }
      ],
      root: {}
    }
  }
];

export const colorPresets = [
  { name: 'Default', bg: '#ffffff', text: '#000000', primary: '#007bff' },
  { name: 'Dark Mode', bg: '#1f2937', text: '#f9fafb', primary: '#3b82f6' },
  { name: 'Ocean', bg: '#e0f2fe', text: '#0c4a6e', primary: '#0284c7' },
  { name: 'Forest', bg: '#dcfce7', text: '#14532d', primary: '#16a34a' },
  { name: 'Sunset', bg: '#ffedd5', text: '#7c2d12', primary: '#ea580c' },
  { name: 'Lavender', bg: '#f3e8ff', text: '#4c1d95', primary: '#7c3aed' },
  { name: 'Rose', bg: '#ffe4e6', text: '#881337', primary: '#e11d48' },
  { name: 'Slate', bg: '#f1f5f9', text: '#0f172a', primary: '#475569' },
  { name: 'Neon', bg: '#000000', text: '#39ff14', primary: '#ff00ff' },
  { name: 'Monochrome', bg: '#e5e5e5', text: '#171717', primary: '#525252' },
  { name: 'Earth', bg: '#fef3c7', text: '#78350f', primary: '#d97706' },
  { name: 'Cyberpunk', bg: '#111827', text: '#fcd34d', primary: '#ec4899' },
  { name: 'Pastel', bg: '#fdf4ff', text: '#701a75', primary: '#c026d3' },
  { name: 'Corporate', bg: '#ffffff', text: '#1e3a8a', primary: '#1d4ed8' },
  { name: 'Mint', bg: '#ccfbf1', text: '#115e59', primary: '#0d9488' },
  { name: 'Warm', bg: '#fef08a', text: '#713f12', primary: '#ca8a04' },
  { name: 'Cool', bg: '#cffafe', text: '#164e63', primary: '#0891b2' },
  { name: 'Berry', bg: '#fae8ff', text: '#701a75', primary: '#c026d3' },
  { name: 'Charcoal', bg: '#27272a', text: '#fafafa', primary: '#52525b' },
  { name: 'Coffee', bg: '#f5f5f4', text: '#44403c', primary: '#a8a29e' },
];
