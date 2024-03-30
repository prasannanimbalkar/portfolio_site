/* eslint-disable @typescript-eslint/no-unused-vars */
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import javaicon from "../../assets/icons/icons8-java-77.svg"
import awsicon from "../../assets/icons/icons8-amazon-web-services-77.svg";
import awsiconwhite from "../../assets/icons/icons8-aws-white.svg";
import teraformicon from "../../assets/icons/icons8-terraform.svg";
import jenkinsicon from "../../assets/icons/icons8-jenkins.svg";
import angularicon from "../../assets/icons/icons8-angular.svg";
import springBootIcon from "../../assets/icons/icons8-spring-boot.svg";
import dockericon from "../../assets/icons/icons8-docker.svg";
import kubernetesIcon from "../../assets/icons/icons8-kuber-77.svg";
import redisIcon from "../../assets/icons/icons8-redis.svg";
import pythonIcon from "../../assets/icons/icons8-python-77.svg";
import prometheusIcon from "../../assets/icons/icons8-prometheus.svg";
import grafanaIcon from "../../assets/icons/icons8-grafana.svg";


import tastyMockup from "../../assets/img/tasty.png";
import f1app from "../../assets/img/F1.jpeg"
import cornerPizza from "../../assets/img/pizza_shop.png"
import myntraElasticSearchMockup from "../../assets/img/myntra_elasticSearch.png"
import movieWishlistMockup from "../../assets/img/movie_wishlist.png"
import realItyMockup from "../../assets/img/Real-ty.png"
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";

import profilepicture from "../img/me4.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Alpay",
    en: "Hi, I'm Prasanna",
  },
  subtitle: "Software Developer ",
  description: {
    de: "Ich bin Alpay, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Prasanna Nimbalkar, a fullstack developer with a knack for transforming complex problems into seamless digital solutions.  Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    type: "web",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Vercel", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://tasty-recipe-app-one.vercel.app/",
    githuburl: "https://github.com/prasannanimbalkar/Tasty-recipe-app",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "F1 App",
    type: "mob",
    description:
      "Eine App zur Verfolgung der Formel 1 Rennen, Ergebnisse und Fahrerstatistiken. Entwickelt mit React Native und verschiedenen APIs zur Datenbeschaffung. Als Front-End Entwickler implementierte ich Funktionen wie Live-Updates, Fahrerprofile und Rennhighlights. Das Design wurde mit Figma und Adobe XD umgesetzt, und die App ist für verschiedene Bildschirmgrößen optimiert.",
    description_EN:
      "An app for tracking Formula 1 races, results, and driver statistics. Developed with React Native and various APIs for data retrieval. As the front-end developer, I implemented features like live updates, driver profiles, and race highlights. The design was created using Figma and Adobe XD, and the app is optimized for various screen sizes.",
    technologies: [
      // { name: "React Native", icon: reactNativeIcon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      // { name: "Firebase", icon: firebaseicon },
      // { name: "Git", icon: giticon },
    ],
    image: f1app,
    deploymenturl: "",
    githuburl: "https://github.com/prasannanimbalkar/F1-app-react-native",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#e10600", // Example color code for F1
    },
  },
  {
    title: "Corner Pizza",
    type: "web",
    description:
      "Eine Food-Ordering-App für Corner Pizza, die es Kunden ermöglicht, online Bestellungen aufzugeben. Entwickelt mit Next.js für eine verbesserte SEO und schnelle Ladezeiten. Ich war verantwortlich für das Backend-Management, einschließlich Datenbankintegration und API-Routen. Das Design ist benutzerfreundlich und für Mobilgeräte optimiert, erstellt mit Tailwind CSS.",
    description_EN:
      "A food ordering app for Corner Pizza, enabling customers to place orders online. Developed with Next.js for enhanced SEO and fast loading times. I was responsible for the backend management, including database integration and API routes. The design is user-friendly and mobile-optimized, created with Tailwind CSS.",
    technologies: [
      { name: "Next.js", icon: nextjsiconwhite },
      { name: "React", icon: reacticon },
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Express", icon: expressicon },
      { name: "MongoDB", icon: mongodbicon },
      // { name: "Stripe", icon: stripeIcon },
      // { name: "Git", icon: giticon },
      // { name: "Jira", icon: jiraicon },
    ],
    image: cornerPizza,
    deploymenturl: "",
    githuburl: "https://github.com/prasannanimbalkar/food-ordering-master",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "#d9534f", // Pizza red color
      second: "#ffd700", // Cheese yellow color
      icon: "white",
      projectcolor: "#e0e0e0", // Background gray color
    },
  },
  {
    title: "Myntra ElasticSearch",
    type: "web",
    description:
      "Ein ElasticSearch-Cluster für die Myntra-Einzelhandelsplattform, um die Sucheffizienz und Produktfilterung zu verbessern. Implementiert und containerisiert mit Docker für eine einfache Skalierung und Wartung. Ich war für die Architektur des Suchsystems, die Optimierung der Suchalgorithmen und die Integration mit der Myntra-Datenbank zuständig.",
    description_EN:
      "An ElasticSearch cluster for the Myntra retail platform to enhance search efficiency and product filtering. Implemented and containerized using Docker for easy scaling and maintenance. I was responsible for the search system architecture, optimizing search algorithms, and integrating with the Myntra database.",
    technologies: [
      // { name: "ElasticSearch", icon: elasticSearchIcon },
      // { name: "Docker", icon: dockerIcon },
      // { name: "Kibana", icon: kibanaIcon },
      // { name: "Logstash", icon: logstashIcon },
      // { name: "Kubernetes", icon: kubernetesIcon },
      // { name: "Java", icon: javaIcon },
      { name: "Node.js", icon: nodejsicon },
      // { name: "Git", icon: giticon },
      // { name: "Jenkins", icon: jenkinsIcon },
    ],
    image: myntraElasticSearchMockup,
    deploymenturl: "https://myntra.com/search",
    githuburl: "https://github.com/prasannanimbalkar/ElasticSearch-semantic-search",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "#E40046", // Myntra's brand color
      second: "#FFCE00", // Secondary color for contrast
      icon: "white",
      projectcolor: "#F3F3F3", // Background color
    },
  },
  {
    title: "Movie Wishlist",
    type: "web",
    description:
      "Eine Anwendung zur Erstellung einer Wunschliste für Filme, die mit React entwickelt wurde und Moment.js für die Datums- und Zeitverwaltung nutzt. Als Entwickler war ich für das Design der Benutzeroberfläche, die Implementierung der Wishlist-Funktionalität und die Integration der Datumsverwaltung mit Moment.js verantwortlich. Die App ermöglicht es Benutzern, Filme hinzuzufügen, zu bearbeiten und zu löschen, mit personalisierten Erinnerungen und Terminplanungen.",
    description_EN:
      "An application for creating a movie wishlist, developed with React and utilizing Moment.js for date and time management. As a developer, I was responsible for designing the user interface, implementing the wishlist functionality, and integrating date management with Moment.js. The app allows users to add, edit, and delete movies, with personalized reminders and scheduling.",
    technologies: [
      { name: "React", icon: reacticon },
      // { name: "Moment.js", icon: momentJsIcon },
      // { name: "HTML", icon: htmlIcon },
      // { name: "CSS", icon: cssIcon },
      // { name: "JavaScript", icon: javascriptIcon },
      { name: "Node.js", icon: nodejsicon },
      // { name: "Webpack", icon: webpackIcon },
      // { name: "Git", icon: giticon },
      // { name: "Jira", icon: jiraicon },
    ],
    image: movieWishlistMockup,
    deploymenturl: "https://movie-wishlist-718e.vercel.app/",
    githuburl: "https://github.com/prasannanimbalkar/movie-wishlist",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "#333333", // Dark color for a cinema-like feel
      second: "#E50914", // Bright color for accents, reminiscent of Netflix
      icon: "white",
      projectcolor: "#f4f4f4", // Light background color
    },
  },
  {
    title: "Real-ity",
    type: "web",
    description:
      "Eine Real-Estate-App, die Immobilienanzeigen aggregiert und Nutzern ermöglicht, schnell und effizient ihre Traumimmobilien zu finden. Entwickelt mit Next.js und React, nutzt die App Axios für Netzwerkanfragen, Framer Motion für flüssige Animationen und Millify zur Formatierung von Zahlen. NProgress verbessert die Benutzererfahrung durch visuelles Feedback bei Ladevorgängen.",
    description_EN:
      "A real estate app aggregating property listings, allowing users to find their dream properties quickly and efficiently. Developed with Next.js and React, the app uses Axios for network requests, Framer Motion for smooth animations, and Millify for number formatting. NProgress enhances user experience by providing visual feedback during loading processes.",
    technologies: [
      { name: "Axios", icon: axiosicon },
      // { name: "Framer Motion", icon: framerMotionIcon },
      // { name: "Millify", icon: millifyIcon },
      { name: "Next.js", icon: nextjsicon },
      // { name: "NProgress", icon: nprogressIcon },
      { name: "React", icon: reacticon },
      // { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Node.js", icon: nodejsicon },
      // { name: "Git", icon: giticon },
      // { name: "Jenkins", icon: jenkinsIcon },
    ],
    image: realItyMockup,
    deploymenturl: "https://real-estate-app-next-js-tau.vercel.app/",
    githuburl: "https://github.com/prasannanimbalkar/Real-Estate-App-Next.js",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn", // Primary color for Next.js branding
      second: "secondary-btn", // Accent color for real estate vibes
      icon: "white",
      projectcolor: "#e5e5e5", // Light grey background color
    },
  },
{
    title: "Silentmoon",
    type: "web",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:"/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    type: "web",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Angular",
        hash: "#Angular",
        icon: angularicon,
        color: "#d61313",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataBackend = [
  {
    skillsTitle: "BackEnd",
    skills: [
      { title: "Java", hash: "#Java", icon: javaicon, color: "#1665C0" },
      { title: "Spring Boot", hash: "#Spring Boot", icon: springBootIcon, color: "#8BC34B" }, 
      { title: "Python", hash: "#Python", icon: pythonIcon, color: "#0277BD" }, 
      { title: "Node.js", hash: "#Node.js", icon: nodejsicon, color: "#83CD29"},
    ],
  },
] as const;

export const skillsTools = [
  {
    skillsTitle: "Tools",
    skills: [
      { title: "Terraform", hash: "#Terraform", icon: teraformicon, color: "#611ef2" },
      { title: "Jenkins", hash: "#Jenkins", icon: jenkinsicon, color: "#251a32"},
      { title: "AWS", hash: "#AWS", icon: [awsicon, awsiconwhite], color: ["#FF9900","#FF9900"] },
      { title: "Docker", hash: "#Docker", icon: dockericon, color: "#2187f4" },
      { title: "Kubernetes", hash: "#Kubernetes", icon: kubernetesIcon, color: "#0277BD" },
      { title: "Redis", hash: "#Redis", icon: redisIcon, color: "#E53835"}

    ],
  },
] as const;

export const skillsObservability = [
  {
    skillsTitle: "Observability",
    skills: [
      { title: "Prometheus", hash: "#Prometheus", icon: prometheusIcon, color: "#DE4B1B" },
      { title: "Grafana", hash: "#Grafana", icon: grafanaIcon, color: "#ED8902"},
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const navLinksProjects = [
  { de: "Home", en: "Home", hash: "/", icon: GoHome },
  { de: "Projekte", en: "Projects", hash: "/projects", icon: GoProject },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:nimbalkar.p@northeastern.edu",
  text: "nimbalkar.p@northeastern.edu",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/prasanna-nimbalkar/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/prasannanimbalkar",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:nimbalkar.p@northeastern.edu",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"Debugging is like solving a puzzle with an infinite number of pieces, but finding that one missing piece brings the whole picture into clarity."`,
    // author: "Andrew Hunt",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"Writing code is like composing poetry in a language only machines understand, yet the beauty of its functionality speaks to the world."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Prasanna may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
