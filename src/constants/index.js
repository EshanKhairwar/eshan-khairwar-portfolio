import foodOrdering from "../assets/projects/foodOrdering.png";
import covid19 from "../assets/projects/covid19Tracker.png";
import project3 from "../assets/projects/project-3.webp";
import mernStackPortfolio from "../assets/projects/mernStackPortfolio.png";
import draxAI from "../assets/projects/draxAI.png";        // add screenshot
import githubFinder from "../assets/projects/githubUserFinder.png"; // add screenshot

export const HERO_CONTENT = `I am a passionate full stack developer with expertise in crafting robust and scalable web applications. With hands-on experience in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js, MongoDB, and PostgreSQL, I focus on delivering efficient and high-quality solutions. My goal is to leverage my skills to create innovative applications that provide seamless user experiences.`;

export const ABOUT_TEXT = `Hello! I'm Eshan, a passionate MERN Stack Developer with a strong academic foundation, having completed my Integrated Master of Computer Application (IMCA) from IPS Academy Indore in 2024. My journey in web development has been driven by a keen interest in creating dynamic and user-friendly applications. With a solid grasp of the MERN stack—MongoDB, Express.js, React.js, and Node.js—I specialize in building full-stack applications that are both efficient and scalable.

I'm always eager to learn and adapt to new challenges, continuously enhancing my skills to stay at the forefront of the ever-evolving tech landscape.

Let's create something amazing together!`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Full Stack Developer Intern",
    company: "Simtrak Solutions",
    description: `Worked on routing, middleware, and database management for scalable applications.`,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },
];

export const EDUCATION = [
  {
    year: "2019 - 2024",
    degree: "Integrated Master of Computer Application (IMCA)",
    institution: "IPS Academy, Indore (RGPV University, Bhopal)",
    description:
      "Graduated with strong foundations in computer science and software development. Focused on full-stack web development, database systems, and scalable applications. Completed multiple academic and personal projects using the MERN stack.",
    percentage: "CGPA: 8.42",
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
  },
  {
    year: "2017 - 2019",
    degree: "Higher Secondary Education (Science - PCM)",
    institution: "Dhote Bandhu Science Junior College, Gondia, Maharashtra",
    description:
      "Studied Physics, Chemistry, and Mathematics with a focus on logical reasoning and problem-solving. Developed an early interest in programming and technology.",
    percentage: "Percentage: 71.23%",
    technologies: ["C++", "Mathematics", "Problem Solving"],
  },
  {
    year: "2016 - 2017",
    degree: "Secondary School Certificate (SSC)",
    institution: "Gujarati National High School, Gondia, Maharashtra",
    description:
      "Completed secondary education with a strong academic record, building a solid foundation for higher studies.",
    percentage: "Percentage: 88.00%",
    technologies: ["Science", "Mathematics", "English"],
  },
];

export const PROJECTS = [
  {
    title: "Food Ordering Web Application",
    image: foodOrdering,
    description:
      "A full-stack food ordering application with features like menu browsing, order management, and real-time updates. Integrated React, Node.js, Express, and MongoDB for robust functionality.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://mern-food-ordering-app-frontend-2xd8.onrender.com",
  },
  {
    title: "Covid-19 Tracker Website",
    image: covid19,
    description:
      "A responsive web application that tracks Covid-19 cases globally. Built using React, SCSS, and APIs to provide real-time updates with user-friendly data visualization.",
    technologies: ["JavaScript", "React.js", "Covid API", "SCSS"],
    demo: "https://covid-19-dashboard-fpqpggqbm-eshankhairwars-projects.vercel.app/",
  },
  {
    title: "Mern Stack Portfolio Website(With Admin Panel)",
    image: mernStackPortfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Built using MERN Stack to create a clean and responsive design.",
    technologies: ["React", "Tailwind CSS", "ExpressJS", "NodeJS","MongoDB"],
    demo: "https://eshan-khairwar.netlify.app/",
  },
  {
    title: "Drax AI – ChatGPT Clone",
    image: draxAI,
    description:
      "An AI chat application inspired by ChatGPT, integrating Gemini API for intelligent conversations with Pinecone for vector search. Built with React, Node.js, Express.js, and MongoDB.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Pinecone",
      "Socket.io",
    ],
    demo: "https://drax-ai.onrender.com",
  },
  {
    title: "GitHub User Finder",
    image: githubFinder,
    description:
      "A React-based web app that allows users to search for GitHub profiles by username. Displays repositories, followers, and other public data using the GitHub API.",
    technologies: ["React", "Tailwind CSS", "GitHub API"],
    demo: "https://eshankhairwar.github.io/github-user-finder/",
  },
];

export const CONTACT = {
  address: "Zilha Parishad Colony, Gondia, Maharashtra",
  phoneNo: "+91 7588145768",
  email: "eshankhairwar@gmail.com",
  linkedin: "https://www.linkedin.com/in/eshankhairwar",
  portfolio: "https://eshankhairwar.vercel.app",
};
