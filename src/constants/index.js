import {
  Chronos,
  Objectivize,
  SIGF,
  backend,
  creator,
  css,
  docker,
  eventease,
  figma,
  git,
  github,
  html,
  javascript,
  linkedin,
  mobile,
  mongodb,
  mse,
  nodejs,
  pendulum,
  reactjs,
  redux,
  scriptscan,
  shop287,
  tailwind,
  techOptimum,
  threejs,
  twitter,
  typescript,
  vulcan,
  web,
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
    link: "https://github.com/AviralDhingra",
  },
  {
    id: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/aviral-dhingra-328392212/",
  },
  {
    id: "Twitter",
    icon: twitter,
    link: "https://twitter.com/dhingra_aviral",
  },
];

const services = [
  {
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Ethical Hacker",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
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
  {
    title: "Founder & CEO",
    company_name: "Script Scan",
    icon: scriptscan,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Indie Hacking",
      "Building an AI-based chrome extension for developers",
    ],
  },
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
    title: "Course Instructor",
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
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
    source_code_link: "https://github.com/AviralDhingra/ClockHacks_Pendulum",
  },
  {
    name: "Chronos",
    description:
      "Chatbot for Holistic Real-time Organization and Navigation of Structured data: Analyzing data on your terms. Ask your data questions in english and get insightful replies and automated reports. No more wasting time on BI tools.",
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
    image: Chronos,
    source_code_link: "https://github.com/AviralDhingra/ClockHacks_Pendulum",
  },
  {
    name: "Pendulum",
    description:
      "Helping reduce user's temptation for instant gratification by presenting math puzzles on procrastination-prone websites. This was made since outright blocking the site has no effect on most users as they go back to old habits if it becomes too hard.",
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
    name: "EventEase",
    description:
      "EventEase is a digital booking system that uses QR codes to lock events in neighbourhood shops. You can sign up as a user interested in saving time or as a shop owner that is tired of customer churn due to daunting queues.",
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
    image: eventease,
    source_code_link: "https://github.com/AviralDhingra/vaa-hacksters",
  },
];

export {
  experiences,
  projects,
  services,
  socialLinks,
  technologies,
  testimonials,
};
