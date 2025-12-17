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
    "Frontend developer since 2021, focused on building robust, maintainable, and high-performance web applications. I work primarily with JavaScript, TypeScript, React and Tailwind CSS.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "First version of my personal portfolio website built with React, TypeScript, and Tailwind CSS to show my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/ruben10pintob/my-portfolio-react",
    projectLink: "https://my-portfolio-react-uoug-git-main-rubens-projects-221fedf2.vercel.app/"
  },
  {
    id: 2,
    name: "Pokedex",
    description:
      "Mobile applicatoin built with React Native and TypeScript to show a list of pokemons, this application gets data in real time from PokéAPI using AXIOS to do HTTP request.",
    image: projectImage2,
    githubLink: "https://github.com/ruben10pintob/pokedex-react-native",
  },
  {
    id: 3,
    name: "Fitness application",
    description:
      "Front end project built with React, TypeScript and Tailwind to advertise on internet and show his services",
    image: projectImage3,
    githubLink: "https://github.com/ruben10pintob/fitness-app",
    projectLink: "https://fitness-app-pi-seven.vercel.app/"
  }
];

export const BIO = [
  "I am a frontend developer with a solid technical base who started his carrer in 2020 in the technology sector. I took up my formation with an Intermediate Vocational Training where I got knowlodge in hardware, software, operating systems networking, and basic IT security before that, I completed an Advanced Vocational Training getting a solid base in programming languages such as HTML, CSS, JavaScript, PHP and SQL, as well as databases, client/server enviroments, and web development best practices.",
  "I started my professional carrer in a technological startup where I worked for 3 months and I learned about how to perform in a professional enviroment and working with technologies such as React, JavaScript and TypeScript, then I continued with my carrer in the banking sector where currently I am still working, developing frontend new applications or functionalities for the manager enviroments.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3+ years",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "5+ years",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2+ years",
  },
  {
    icon: <SiJira className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Jira",
    experience: "4+ years",
  },
  {
    icon: <FaBitbucket className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Bitbucket",
    experience: "4+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Tailwind",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Frontend Engineer",
    company: "Minsait",
    duration: "April 2021 - Present",
    description:
      "As a frontend egineer I care about developing new applications or functionalities for the banking sector. I have grown as a professional in technologies like JavaScript, TypeScript and frameworks like React. I participate in meetings with product owner, UX team, and backend team to define the new applications or the application evolution. I manage litle junior developer team to integration them into customer technologies.",
  },
  {
    title: "Junior Web Developer",
    company: "Internet 4e",
    duration: "September 2020 - December 2020",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I got experience in HTML, CSS, JavaScript, React to create web sites or landing pages for startups. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Advanced Vocational Training",
    institution: "Laguna de Joatzel",
    duration: "September 2018 - June 2020",
    description:
      "Specialized trainig in designing, developing, and maintaing web applications. Got solid knowledge of programming languages such as HTML, CSS, JavaScript, PHP and SQL, as well as databases, client/server enviroments, and web development best practices.",
  },
  {
    degree: "Intermediate Vocational Training",
    institution: "Laguna de Joatzel",
    duration: "September 2016 - June 2018",
    description:
      "Focused on the installation, configuration, and maintenance of cumputer systems and local networks. Got knowledge in hardware software, operating systems networking, and basic IT security.",
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
