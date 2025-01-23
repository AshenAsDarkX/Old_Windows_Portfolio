type Technologies = {
  id: number;
  type: string;
  name: string;
  image: string;
};

const technologies: Technologies[] = [
  { id: 1, type: "web", name: "React", image: "technologies/react-logo.svg" },
  { id: 2, type: "web", name: "NextJS", image: "technologies/nextjs-logo.svg" },
  { id: 3, type: "web", name: "NodeJS", image: "technologies/node-logo.svg" },

  { id: 6, type: "web", name: "MongoDB", image: "technologies/mongo-logo.svg" },
  {
    id: 7,
    type: "web",
    name: "Tailwind",
    image: "technologies/tailwind-logo.svg",
  },
  { id: 9, type: "web", name: "TypeScript", image: "technologies/ts-logo.svg" },
  { id: 10, type: "web", name: "PHP", image: "technologies/php-logo.svg" },
  {
    id: 12,
    type: "web",
    name: "JavaScript",
    image: "technologies/js-logo.svg",
  },

  {
    id: 17,
    type: "programming",
    name: "Python",
    image: "technologies/python-logo.svg",
  },
  {
    id: 18,
    type: "programming",
    name: "Java",
    image: "technologies/java-logo.svg",
  },
  {
    id: 5,
    type: "mobile",
    name: "Kotlin",
    image: "technologies/kotlin-logo.svg",
  },
  {
    id: 13,
    type: "design",
    name: "Figma",
    image: "technologies/figma-logo.svg",
  },
  {
    id: 19,
    type: "design",
    name: "After Effects",
    image: "technologies/ae-logo.svg",
  },
  {
    id: 14,
    type: "design",
    name: "Illustrator",
    image: "technologies/ai-logo.svg",
  },
  {
    id: 15,
    type: "design",
    name: "Photoshop",
    image: "technologies/ps-logo.svg",
  },
  {
    id: 16,
    type: "design",
    name: "Premiere Pro",
    image: "technologies/pr-logo.svg",
  },
  {
    id: 17,
    type: "web",
    name: "Wordpress",
    image: "technologies/wp-logo.svg",
  },
];

export default technologies;
