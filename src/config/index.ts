import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Zarif - Portfolio",
  author: "Muhammad Zarif",
  description:
    "Game Design student at UPSI with a focus on stylized level design, game systems, and player-driven economies.",
  lang: "en",
  siteLogo: "/zarif.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/zarifshamliza" },
    { text: "Github", href: "https://github.com/madr3p" },
    { text: "Instagram", href: "https://www.instagram.com/m4drep/" },
    { text: "Reddit", href: "https://www.reddit.com/user/madr3p" },
  ],
  socialImage: "/",
  canonicalURL: "https://madrep.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Zarif",
    specialty: "Aspiring Game Designer & Developer",
    summary:
      "Game Design student at UPSI with an interest in stylized level design and in-game economy systems. Experienced with player-driven markets through years of hands-on engagement in online games, and passionate about efficient creative workflows.",
    email: "zarifshamliza77@gmail.com",
  },

  experience: [
    {
      company: "Sultan Idris Education University (UPSI)",
      position: "Diploma in Game Design & Development",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "Focusing on level design and technical implementation in Unity, emphasizing stylized visuals and clear player navigation.",
        "Learning foundational programming concepts in C++ and Python to support gameplay logic and simple camera systems.",
        "Using Blender to model and prototype basic 3D assets for environments and level layouts.",
        "Designing UI and visual assets with Adobe Photoshop and Illustrator for course-based projects.",
      ],
    },
    {
      company: "Player-Driven Game Economies",
      position: "Market & Systems Experience (Growtopia & Graal Era)",
      startDate: "2020",
      endDate: "Present",
      summary: [
        "Accumulated over five years of experience engaging with player-driven economies in online games.",
        "Reached a peak net worth of 600+ BGLs in Growtopia (2022) through item trading, market timing, and supply management.",
        "Developed practical insight into player behavior, inflation, scarcity, and reward-based progression systems.",
      ],
    },
    {
      company: "Technical & Creative Workflow",
      position: "Digital Tools & Asset Production",
      startDate: "2017",
      endDate: "Present",
      summary: [
        "Comfortable using creative tools such as Adobe Fresco and Aseprite for rapid sketching and asset experimentation.",
        "Built an efficient desktop workflow through years of daily use of creative and technical software.",
        "Able to quickly adapt to new tools and pipelines with a focus on speed, organization, and iteration.",
      ],
    },
  ],

projects: [
    {
      name: "Level Designing (Unity)",
      summary: "Creating immersive, vibrant environments with a focus on camera composition and player flow. Proficient in Unity's lighting and scene setup.",
      // Leave these out or set them to null
      linkPreview: undefined,
      linkSource: undefined,
      image: "/level-design.jpg", 
    },
    {
      name: "System & Economy Design",
      summary: "Applying years of high-level Growtopia/Graal market experience to design balanced game economies and reward systems.",
      linkPreview: undefined,
      linkSource: undefined,
      image: "/economy.jpg",
    },
    {
      name: "3D & 2D Asset Pipeline",
      summary: "Knowledge of Blender 3D modeling fundamentals combined with amateur-level use of Adobe Photoshop, Illustrator, and Aseprite for stylized art.",
      linkPreview: undefined,
      linkSource: undefined,
      image: "/art-suite.jpg",
    },
  ],

  about: {
    description: `
I am a Game Design student who enjoys thinking about games as interconnected systems. My long-term involvement in player-driven economies such as Growtopia and Graal Era has shaped how I approach balance, progression, and player motivation.

Currently studying at UPSI, I am developing my technical skills in Unity and Blender while focusing on stylized and cartoon-inspired visuals. I enjoy creating levels that feel intuitive, expressive, and visually clear for players.

I am particularly interested in the space where art meets systems—using simple scripting, camera work, and layout design to support strong gameplay experiences. I value fast iteration, practical learning, and continuous improvement.
    `,
    image: "/zarif2.jpg",
  },
};
