import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Ala Eddine",
  lastName: "Benna",
  initials: "AB",
  position: "a Frontend Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in Tunisia 🇹🇳",
    },
    {
      emoji: "📧",
      text: "ala.benna@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/alaeddine.benna/",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/ala_dinebn/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/Aladinebn",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/ala-eddine-benna/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/ala_benna",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
  bio: "Hello! I'm Ala Eddine. I'm a frontend developer. I studied Artificial Intelligence at Virtual University of Tunis, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
      "Python",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Project 1",
      live: "https://cryptoapp1993.netlify.app/",
      source: "https://github.com/Aladinebn/crypto-app",
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://rexmovies.netlify.app/",
      source: "https://github.com/Aladinebn/rex-movies",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://tenziesapp1993.netlify.app/",
      source: "https://github.com/Aladinebn/tenzies-app",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://traveljournal1993.netlify.app/",
      source: "https://github.com/Aladinebn/my-travel-journal",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://digital-business-card-ten-rho.vercel.app/",
      source: "https://github.com/Aladinebn/digital-business-card",
      image: mock5,
    },
  ],
};
