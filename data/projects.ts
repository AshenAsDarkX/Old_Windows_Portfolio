type Technologies = {
  id: number;
  description: string;
  title: string;
  image: string;
  link: string;
  buttonText: string;
  technologies: string[];
};

const technologies: Technologies[] = [
  {
    id: 1,
    description: `Pixilla is a collaborative website developed in the first year
    using HTML, CSS, and JavaScript. As a group project, it showcases
    the team's skills in web development, incorporating these
    technologies to create an interactive and visually appealing
    online platform`,
    title: "Pixilla Gaming Site",
    image: "/pixilla.png",
    link: "https://github.com/AshenAsDarkX/PIXILLA-gaming-site",
    buttonText: "Github",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    description: `Created a full-stack web app with Flask and React to estimate vehicle damage. Flask processed image data using ML models for accurate estimates, while React provided an intuitive UI. Demonstrated seamless integration of ML with backend processing...`,
    title: "Fixmatic",
    image: "/fixmatic.png",
    link: "https://github.com/KaveeshaChan/SDGP-SE-37",
    buttonText: "Github",
    technologies: ["React", "Flask", "Tailwind"],
  },
  {
    id: 3,
    description: `Inspired by Windows 98, my portfolio blends vintage aesthetics with modern functionality. Featuring nostalgic design elements and intuitive navigation, it offers a seamless user experience. Capture the essence of the classic operating system while showc...`,
    title: "Portfolio Website",
    image: "/portfolio.png",
    link: "https://github.com/AshenAsDarkX/old-windows-portfolio",
    buttonText: "Github",
    technologies: ["NextJS", "TypeScript", "Tailwind"],
  },
];

export default technologies;
