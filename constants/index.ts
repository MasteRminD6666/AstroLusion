import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaXTwitter, FaTelegram, FaCoins } from "react-icons/fa6";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  // {
  //   name: "CA",
  //   icon: FaCoins,
  //   link: "https://twitter.com",
  // },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://x.com/AstroLusion",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    link: "",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [

  //TODO change the projects section add the space website and add Three js projects ^^
  {
    title: "Spaace.io",
    description:
      'An immersive NFT trading experience on the most rewarding NFT marketplace with 100% revenue sharing back to users. Trading Reimagined for All Spaace is built for every trader, from veterans to first- timers.Designed to match your ambitions, our marketplace redefines NFT trading to make it seamless, intuitive, and as powerful as you need it.',
    image: "/projects/space.png",
    link: "https://spaace.io/",
  },
  {
    title: "Lusion",
    description:
      'We help brands create digital experiences that connect with their audience. At Lusion, we blend creativity and technology to craft immersive, visually stunning, and interactive digital solutions. Our work pushes the boundaries of design and innovation, transforming ideas into engaging experiences that captivate users and elevate brands in the digital world.',
    image: "/projects/lusion.png",
    link: "https://lusion.co/",
  },
 
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://www.youtube.com/watch?v=gjqTuvoMdNM&t=1s",
      },
      {
        name: "X Platform",
        icon: FaXTwitter,
        link: "https://x.com/AstroLusion",
      },
      // {
      //   name: "Telegram (soon)",
      //   icon: FaTelegram,
      //   link: "",
      // },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/lusionltd/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://uk.linkedin.com/company/lusionltd",
      },
    ],
  },
  {
    title: "About Us",
    data: [
      {
        name: "Our Team",
        icon: null,
        link: "https://lusion.co/about",
      },
      {
        name: "Version 2",
        icon: null,
        link: "https://v2.lusion.co/work",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Website",
    link: "https://lusion.co/",
  },
  {
    title: "Technology",
    link: "#Tech",
  },
  // {
  //   title: "Projects",
  //   link: "#projects",
  // },
] as const;

