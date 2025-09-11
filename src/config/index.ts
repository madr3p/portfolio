import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Zarif - Portfolio",
  author: "Muhammad Zarif",
  description:
    "Aspiring game designer and developer from Malaysia. Passionate about crafting immersive digital worlds, building intuitive gameplay, and blending creativity with technology.",
  lang: "en",
  siteLogo: "/zarif.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/zarifshamliza" },
    { text: "Github", href: "https://github.com/madr3p" },
    { text: "Instagram", href: "https://www.instagram.com/m4drep/" },
  ],
  socialImage: "/",
  canonicalURL: "https://madrep.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Zarif",
    specialty: "Aspiring Game Designer, Programmer & Developer",
    summary:
      "I’m an aspiring Game Developer pursuing a Diploma in Game Design and Development at Universiti Pendidikan Sultan Idris, with a focus on programming, backend logic, and gameplay systems. Currently learning C++, Python, and Lua, I enjoy coding mechanics and solving problems to transform ideas into functional, engaging player experiences.",
    email: "zarifshamliza77@gmail.com",
  },
  experience: [
    {
      company: "Universiti Pendidikan Sultan Idris",
      position: "Diploma Student - Game Design & Development",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "Learning the foundations of C++ programming, digital art, and interactive media to create engaging game mechanics and immersive worlds.",
        "Developing projects that bridge creativity with technical skill, focusing on gameplay systems, storytelling, and player experience.",
        "Collaborating with peers to prototype, test, and refine ideas that push the boundaries of digital entertainment.",
      ],
    },
    {
      company: "Self-Learning",
      position: "Independent Projects in Games & Digital Creativity",
      startDate: "2020",
      endDate: "Present",
      summary: [
        "Explored Roblox Studio to design & program interactive experience mechanics and environments.",
        "Learned basic Lua programming to script gameplay features and mechanics within Roblox & Growtopia.",
        "Gained entrepreneurial skills as a Growtopia trader, developing strategy and an understanding of digital economies.",
      ],
    },
  ],
  projects: [
    {
      name: "Project 1",
      summary: "Coming Soon.",
      linkPreview: "/",
      linkSource: "/",
      image: "/coming-soon.jpg",
    },
    {
      name: "Project 2",
      summary: "Coming Soon.",
      linkPreview: "/",
      linkSource: "/",
      image: "/coming-soon.jpg",
    },
    {
      name: "Project 3",
      summary: "Coming Soon.",
      linkPreview: "/",
      linkSource: "/",
      image: "/coming-soon.jpg",
    },
  ],
  about: {
    description: `
      I’m an aspiring Game Developer currently pursuing a Diploma in Game Design and Development at Universiti Pendidikan Sultan Idris (UPSI), with a growing focus on game programming, backend logic, and gameplay systems.

      Currently learning Lua, Python, and C++, I enjoy applying my skills to build interactive features, implement core mechanics, and develop functional game systems. My interests lie in creating the underlying code that powers engaging player experiences, from gameplay logic to efficient data handling.

      While I understand UI/UX concepts, my main passion is coding and problem-solving, transforming ideas into fully functional, playable realities. I’m committed to continually improving my technical expertise and contributing to projects that combine creative design with solid programming foundations.
    `,
    image: "/zarif.jpg",
  },
};

// #5755ff
