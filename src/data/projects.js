import travelos from "../assets/images/projects/travelos.png";
import habittracker from "../assets/images/projects/habittracker.png";
import jdk from "../assets/images/projects/jdk.png";
const projects = [
  {
    id: 1,

    company: "TravelOS",

    title: "Plan smarter.\nTravel better.",

    description:
      "An AI-powered travel planner that generates personalized itineraries, weather insights, optimized routes and smart budgeting.",

    technologies: [
      "React",
      "Django",
      "AI",
      "PostgreSQL",
    ],

    image: travelos,

    live: "#",

    github: "#",
  },

  {
    id: 2,

    company: "AI Habit Tracker",

    title: "Build habits.\nStay consistent.",

    description:
      "Track habits, monitor progress and receive AI-powered recommendations through an intuitive dashboard.",

    technologies: [
      "React",
      "Django",
      "AI",
    ],

    image: habittracker,

    live: "https://ai-planner-7aa2.onrender.com/",

    github: "https://github.com/bhanusanjeev/Ai-planner",
  },

  {
    id: 3,

    company: "JDK Techsphere",

    title: "Corporate training,\nreimagined.",

    description:
      "A premium consultancy website designed with modern UI, responsive layouts and smooth user interactions.",

    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],

    image: jdk,

    live: "https://jdk-techsphere.vercel.app/",

    github: "https://github.com/bhanusanjeev/JDK-Techsphere",
  },
];

export default projects;