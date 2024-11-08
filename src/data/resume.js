import SQL from "../images/sql.pdf"
import C1 from "../images/c1.png"
import C2 from "../images/C2.png"
const resume = {
  education: [
    {
      id: 1,
      title: " Matric (Science)",
      institute: "Govt. Girls Secondary School 5/E & 11/E UP",
      duration: "2014 - 2016",
      certificate: "",

    },
    {
      id: 2,
      title: "Intermediate (Pre-Engineering)",
      institute: "Govt. Degree Girls College, Bufferzone",
      duration: "2018 - 2020",
      certificate: "",

    },
    {
      id: 3,
      title: "Fehm-ul-Quran (Diploma)",
      institute: "Quran Institute Campus 2",
      duration: "2016 - 2018",
      certificate: "",

    },
    {
      id: 4,
      title: " Web and Mobile Application Development",
      institute: "Saylani Mass IT Training (SMIT)",
      duration: "2022 - 2023",
      certificate: C2,
    },
    {
      id: 5,
      title: "JavaScript Algorithms and Data Structures",
      institute: "freeCodeCamp",
      duration: "2023 - 2023",
      certificate: C1,
    },
    {
      id: 6,
      title: "JavaScript Core and Advanced Techniques",
      institute: "Udemy",
      duration: "2024 - ongoing",
      certificate: "",
    },
    {
      id: 7,
      title: "SQL Intermediate",
      institute: "DataCamp",
      duration: "2023 - 2023",
      certificate: SQL,
    },
    {
      id: 8,
      title: "Backend Development (JavaScript, Node.js, Express)",
      institute: "Microsoft",
      duration: "2023 - 2023",
      certificate: "https://www.cert.devtown.in/verify/Zn1NBz",
    },
  ],

  experience: [
    {
      id: 1,
      title: "Full Stack Position",
      institute: "Matonity Networks",
      duration: "2024 - 2024",
      description: `At Mayonity Networks, I worked as a Full Stack Developer, where I improved my skills in both front-end and back-end development. I gained valuable experience with new technologies, including MySQL and Next.js, while also working with the MERN stack. This diverse exposure has significantly enhanced my overall development capabilities.`,
    },
    {
      id: 2,
      title: "Lead Trainer",
      institute: "SMIT",
      duration: "2023 - ongoing",
      description: `I am providing services as a trainer to teach web and mobile app development to students of SAYLANI Mass IT`,
    },
    {
      id: 3,
      title: "Trainer",
      institute: "QRS&C",
      duration: "2022 - 2023",
      description: `I was serving as a trainer to teach web and mobile app development to the students of Quaid-i-Azam Rangers College.`,
    },
  ],
};
export default resume;
