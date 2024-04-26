import {
  Objectivize,
  SIGF,
  backend,
  creator,
  css,
  docker,
  figma,
  git,
  github,
  html,
  hyprland,
  javascript,
  linkedin,
  mobile,
  mongodb,
  mse,
  netflix_login,
  nodejs,
  pendulum,
  reactjs,
  redux,
  shop287,
  tailwind,
  techOptimum,
  threejs,
  twitter,
  typescript,
  vulcan,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialLinks = [
  {
    id: "Github",
    icon: github,
    link: "https://github.com/deathblade287",
  },
  {
    id: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/aviral-dhingra-328392212/",
  },
  {
    id: "Twitter",
    icon: twitter,
    link: "https://twitter.com/deathblade287",
  },
];

const services = [
  {
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "Linux Dev",
    icon: creator,
  },
  {
    title: "Ethical Hacker",
    icon: backend,
  },
  {
    title: "Web Dev",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founder & CEO",
    company_name: "Vulcan Cortex",
    icon: vulcan,
    iconBg: "#FFFFFF",
    date: "July 2023 - Present",
    points: ["Quant Development", "Building the trading bot of the future"],
  },
  // {
  //   title: "Founder & CEO",
  //   company_name: "Script Scan",
  //   icon: scriptscan,
  //   iconBg: "#383E56",
  //   date: "June 2023 - Present",
  //   points: [
  //     "Indie Hacking",
  //     "Building an AI-based chrome extension for developers",
  //   ],
  // },
  {
    title: "Flask Developer",
    company_name: "Student Internet Governance Forum",
    icon: SIGF,
    iconBg: "#FFFFFF",
    date: "April 2023 - June 2023",
    points: [
      "Maintaing the official SIGF website",
      "Fullstack development using Flask and Tailwind CSS",
    ],
  },
  {
    title: "Director Of Education",
    company_name: "Tech Optimum",
    icon: techOptimum,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Leading and vetting new hires in the education team",
      "Overlooking the progress of ongoing courses",
      "Helping the tech team publish courses",
    ],
  },
  {
    title: "Course Intrusctor",
    company_name: "Tech Optimum",
    icon: techOptimum,
    iconBg: "#383E56",
    date: "November 2022 - March 2023",
    points: [
      "Designed 4-5 hour long programming courses",
      "You can find them on: courses.techoptimum.org",
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "Shop 287",
    description:
      "Shop 287 is a modern eCommerce project for reliable data storage, authentication, and server-less functions. All features and UI components were made from scratch as part of the learning process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shop287,
    source_code_link: "https://github.com/AviralDhingra/shop287",
  },
  {
    name: "MSE Efficiency Calibrator",
    description:
      "Calculating and calibrating the efficiency of training in gradient descent by computing the product of the MSE and the number of iterations.",
    tags: [
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: mse,
    source_code_link:
      "https://github.com/AviralDhingra/MSE-Efficiency-Calibrator",
  },

  {
    name: "Objectivize",
    description:
      "An autonomous system that utilizes objective facts to deduce conclusions. Powered by AI, Objectivize efficiently processes vast amounts of information to provide logical and well-supported conclusions. ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: Objectivize,
    source_code_link: "https://github.com/deathblade287/Objectivize",
  },
  {
    name: "Dotfiles",
    description:
      "My Arch + Fedora Dotfiles for the entire system including kernel parameters, gtk themes, i3 and hyprland configs, etc.",
    tags: [
      {
        name: "linux",
        color: "blue-text-gradient",
      },
      {
        name: "kernel",
        color: "green-text-gradient",
      },
      {
        name: "neovim",
        color: "pink-text-gradient",
      },
    ],
    image: hyprland,
    source_code_link: "https://github.com/deathblade287/dotfiles",
  },
  {
    name: "Pendulum",
    description:
      "Helping reduce user's temptation for instant gratification by presenting math puzzles on procrastination-prone websites.",
    tags: [
      {
        name: "manifest v3",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: pendulum,
    source_code_link: "https://github.com/AviralDhingra/ClockHacks_Pendulum",
  },
  {
    name: "Netflix Phishing",
    description:
      "A clone of the netflix login page that is functional and saves the passwords. As an educative example of spear phishing attacks",
    tags: [
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "social engineering",
        color: "pink-text-gradient",
      },
    ],
    image: netflix_login,
    source_code_link: "https://github.com/deathblade287/Netflix-Phishing",
  },
];

export {
  experiences,
  projects,
  services,
  socialLinks,
  technologies,
  testimonials
};

