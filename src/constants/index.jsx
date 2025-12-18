import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "RUBÉN GARCÍA",
  greet: "Hello there! 👋🏻",
  description:
    "I'm a passionate Frontend Developer since 2020, specializing in crafting modern, responsive web applications. I work with React, TypeScript, JavaScript, and Tailwind CSS to create seamless user experiences that drive business results.",
};

export const PROJECTS = [
  /*{
    id: 1,
    name: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing my skills and projects. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and modern design principles to create an engaging user experience.",
    image: projectImage1,
    githubLink: "https://github.com/ruben10pintob/my-portfolio-react",
    projectLink: "https://my-portfolio-react-uoug-git-main-rubens-projects-221fedf2.vercel.app/"
  },*/
  {
    id: 2,
    name: "Pokédex App",
    description:
      "A mobile application built with React Native and TypeScript that displays comprehensive Pokémon information. Features real-time data fetching from PokéAPI using Axios, with smooth navigation and detailed Pokémon profiles.",
    image: projectImage2,
    githubLink: "https://github.com/ruben10pintob/pokedex-react-native",
  },
  {
    id: 3,
    name: "Fitness Website",
    description:
      "A modern fitness company website built with React, TypeScript, and Tailwind CSS. Features responsive design, interactive components, and modern UI/UX focused purely on frontend functionality without backend integration.",
    image: projectImage3,
    githubLink: "https://github.com/ruben10pintob/fitness-app",
    projectLink: "https://fitness-app-pi-seven.vercel.app/"
  }
];

export const BIO = [
  "I am a frontend developer with a solid technical foundation who began my career in 2020 in the technology sector. I started with an Intermediate Vocational Training where I gained knowledge in hardware, software, operating systems, networking, and basic IT security. Following that, I completed an Advanced Vocational Training, building a strong foundation in programming languages such as HTML, CSS, JavaScript, PHP, and SQL, as well as databases, client/server environments, and web development best practices.",
  "I launched my professional career at a technology startup where I worked for 3 months, learning how to perform in a professional environment while working with technologies like React, JavaScript, and TypeScript. I then continued my career in the banking sector, where I currently work with web components using LitElement and MVC architecture, developing new frontend applications and functionalities for management environments.",
];

// Función para calcular años de experiencia
export const calculateYearsOfExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return years > 1 ? `${years} years` : `${years} year`;
};

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    startYear: 2022,
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    startYear: 2020,
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "TypeScript",
    startYear: 2022,
  },
  {
    icon: <SiJira className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Jira",
    startYear: 2020,
  },
  {
    icon: <FaBitbucket className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Bitbucket",
    startYear: 2020,
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Tailwind",
    startYear: 2023,
  },
];

export const EXPERIENCES = [
  {
    title: "Frontend Engineer",
    company: "Minsait",
    duration: "April 2021 - Present",
    description:
      "As a Frontend Engineer, I focus on developing innovative applications and functionalities for the banking sector. I work with web components using LitElement library and MVC architecture, along with JavaScript and TypeScript. I work in Agile/Scrum methodology using Jira for project management and task tracking. I actively participate in meetings with product owners, UX teams, and backend teams to define new applications and guide application evolution. I also mentor junior developers, helping them integrate into customer technologies and best practices.",
  },
  {
    title: "Junior Web Developer",
    company: "Internet 4e",
    duration: "September 2020 - December 2020",
    description:
      "As a Junior Web Developer, I assisted in developing and maintaining various web applications. I gained hands-on experience with HTML, CSS, JavaScript, and React to create websites and landing pages for startups. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features and improve existing functionality.",
  },
];

export const EDUCATION = [
  {
    degree: "Advanced Vocational Training - Web Application Development",
    institution: "Laguna de Joatzel",
    duration: "September 2018 - June 2020",
    description:
      "Specialized training in designing, developing, and maintaining web applications. Gained comprehensive knowledge of programming languages including HTML, CSS, JavaScript, PHP, and SQL, as well as databases, client/server environments, and web development best practices.",
  },
  {
    degree: "Intermediate Vocational Training - Computer Systems",
    institution: "Laguna de Joatzel",
    duration: "September 2016 - June 2018",
    description:
      "Focused on installation, configuration, and maintenance of computer systems and local networks. Acquired knowledge in hardware, software, operating systems, networking, and fundamental IT security principles.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/ruben10pintob",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ruben-garcia-mier/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
