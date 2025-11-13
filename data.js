// data.js


export const portfolioData = {
  /**
   * User's personal and contact information.
   */
  userData: {
    name: "Rithishkumar G",
    shortName: "Rithish",
    title: "Full-Stack Developer",
    email: "rithishkumarbe@gmail.com",
  },

  /**
   * Social media and professional links.
   */
  links: {
    instagram: "https://www.instagram.com/rambo_587",
    facebook: "https://www.facebook.com/share/19uTXwHszH/", 
    github: "https://github.com/Rithishkumar3107",
    linkedin: "https://linkedin.com/in/rithishkumar-g123",
  },

  /**
   * Asset paths.
   */
  assets: {
    hero: "./assets/hero.png",
    about: "./assets/about.png",
    resumeImg: "./assets/resume.jpg",
    resumePdf: "./assets/Resume/Rithishkumar Resume.docx",
    resumeDownloadName: "Rithish_CV.docx",
  },

  /**
   * List of user's skills.
   */
  skillsDetails: [
    { id: 1, name: "HTML 5", image: "./assets/html.png" },
    { id: 2, name: "CSS 3", image: "./assets/css.png" },
    { id: 3, name: "Javascript", image: "./assets/js.png" },
    { id: 4, name: "React Js", image: "./assets/react.png" },
    { id: 5, name: "Node JS", image: "./assets/node.png" },
    { id: 6, name: "Express Js", image: "./assets/express.png" },
    { id: 8, name: "Tailwind", image: "./assets/tailwind.png" },
    { id: 9, name: "MongoDB", image: "./assets/mongodb.png" },
  ],

  /**
   * List of user's projects.
   */
  projectDetails: [
    {
      id: 1,
      name: "Library Management",
      description:
        "Library Management System Using React JS , Express Js , SQL , Bootstrap ",
      img: "./assets/library.png",
      gitLink: "",
    },
    {
      id: 2,
      name: "Event Management",
      description:
        "Event Management System Using React JS , Express Js , MongoDb and NodeJS ",
      img: "./assets/EMS.jpg",
      gitLink: "",
    },
    {
      id: 3,
      name: "Portfolio",
      description:
        "Responsive personal portfolio website using React and Tailwind CSS",
      img: "./assets/portfolio.png",
      gitLink: "",
    },
    {
      id: 4,
      name: "Learning Management System",
      description: "E-Learning Platform using Mern Stack",
      img: "./assets/LMS.png",
      gitLink: "",
    },
    // {
    //   id: 5,
    //   name: "Todo",
    //   description:
    //     "Responsive Todo app with Login Build with Tailwind , React , Zustand , Express , MongoDB",
    //   img: "./assets/todo.jpeg",
    //   gitLink: "https://github.com/Karthikeyan-BE/Todo_Mern.git",
    // },
  ],
};
