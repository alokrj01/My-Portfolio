// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
// import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from "./assets/tech_logo/nodejs.png";
// import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
// import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
// import csharpLogo from './assets/tech_logo/csharp.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

// Experience Section Logo's
import Logo2 from "./assets/company_logo/logo2.webp";
import Logo1 from "./assets/company_logo/logo1.avif";
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

export const experiences = [
  {
    id: 0,
    img: Logo2,
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard (Remote)",
    date: "August 2025 - October 2025",
    desc: "Engineered a dual-modal AI diagnostic system using PyTorch, Transformers, and Scikit-learn, achieving 94% accuracy in disease classification; this system performs both text-based (NLP) and image-based (CV) detection to provide immediate diagnoses. Developed a full-stack, end-to-end application by building a Python (FastAPI) backend and a responsive React.js frontend, delivering real-time diagnoses in seconds and improving model inference time by 30%.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Python",
      "Node JS",
      "Tailwind CSS",
      "Fast API",
      "Pytorch",
      "Scikit-learn",
      "Transformers",
    ],
  },
  {
    id: 1,
    img: Logo1,
    role: "Data Science & Analytics Intern",
    company: "Zidio Development Pvt. Ltd.",
    date: "July 2024 - Sept 2024",
    desc: "Leveraged Python libraries (Pandas, NumPy, Matplotlib, Scikit-learn, XGBoost) for comprehensive data analysis and predictive modeling, achieving 85% accuracy on classification tasks, boosting business decisions by 25%, and reducing data processing time by 30%.Created interactive dashboards with Power BI and Tableau, enabling real-time KPI monitoring and improving stakeholder decision making efficiency.",
    skills: [
      "Python",
      "Streamlit",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "XGBoost",
      "Power BI",
      "Tableau",
    ],
  },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "Figma",
  //     "Material UI",
  //   ],
  // },
];

// Education Section Logo's
import logoX from "./assets/education_logo/logo-X.png";
import logoxii from "./assets/education_logo/logo-xii.jpg";
import GGI_logo from "./assets/education_logo/GGI_logo.jpg";

export const education = [
  // {
  //   id: 0,
  //   img: glaLogo,
  //   school: "GLA University, Mathura",
  //   date: "Sept 2022 - July 2024",
  //   grade: "7.81 CGPA",
  //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  //   degree: "Master of Computer Applications - MCA",
  // },
  {
    id: 0,
    img: GGI_logo,
    school: "Global Group of Institutes, Amritsar",
    date: "Sept 2021 - Sept 2025",
    grade: "7.67 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science & Engineering (B. Tech.) from GGI College, Amritsar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GGI College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
  },
  {
    id: 1,
    img: logoxii,
    school: "D K C Residential Public School, Ara",
    date: "May 2018 - July 2020",
    grade: "67.6%",
    desc: "I completed my class 12 education from D K C Residential Public School, Ara, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - Physics, Chemistry & Mathematics",
  },
  {
    id: 2,
    img: logoX,
    school: "Pragya Punj Public School, Bikramganj",
    date: "March 2017 - May 2018",
    grade: "83.8%",
    desc: "I completed my class 10 education from Pragya Punj Public School, Bikramganj, under the CBSE board.",
    degree: "CBSE(X), Secondary Education",
  },
];

// Project Section Logo's
import PlantDocLogo from "./assets/work_logo/plant-doc.png";
import MojitoLogo from "./assets/work_logo/Mojito.png";
import customerLogo from "./assets/work_logo/customer.png";
import cvxpertLogo from "./assets/work_logo/CVXpert.png";
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';

export const projects = [
  {
    id: 0,
    title: "AI Plant Disease Detection System",
    description:
      "Plant Doc - An AI-powered web application that helps gardeners and farmers, diagnose plant disease through image and text-based analysis delivering diagnoses, confidence scores and actionable treatment recommendations, providing critical decision support. .",
    image: PlantDocLogo,
    tags: [
      "Python",
      "FastAPI",
      "React JS",
      "Pytorch",
      "Transformers",
      "Scikit-Learn",
      "NLP",
    ],
    github: "https://github.com/alokrj01/ai-plant-doc",
    webapp: "https://ai-plant-doc.vercel.app/",
  },
  {
    id: 1,
    title: "G-SAP Landing Page",
    description:
      "MojitoMist – A premium, fully responsive, high-performance landing page for a boutique beverage brand. Built with React and Vite, featuring immersive GSAP animations. It showcases a curated menu of Indian-inspired cocktails and mocktails with a modern, Minty - Glassmorphism UI.",
    image: MojitoLogo,
    tags: [
      "React JS",
      "Node.js",
      "Tailwind CSS",
      "GSAP Animation",
      "Split text reveals",
      "Parallax scrolling",
      "JavaScript",
    ],
    github: "https://github.com/alokrj01/gsap-landing-page",
    webapp: "https://mojito-mist.vercel.app/",
  },
  {
    id: 2,
    title: "Customer Segmentation analysis",
    description:
      "Customer Analysis - The Customer Segmentation Analysis project aims to categorize customers into distinct groups based on their purchasing behavior and demographic characteristics. This segmentation helps businesses tailor their marketing strategies, enhance customer experience, and improve overall business performance.",
    image: customerLogo,
    tags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
    ],
    github: "https://github.com/alokrj01/Customer-Segmentation",
    webapp: "https://cust-analysis.streamlit.app/",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "CVXpert - An efficient and Powerful AI Resume analyzer where you can upload your resume to get ATS friendly smart resume Insights. It can track your resume and get instants feedback about what you have to improve in your resume based on ATS score.",
    image: cvxpertLogo,
    tags: ["React JS", "Node.js", "Typescript"],
    github: "https://github.com/alokrj01/ai-resume-analyser",
    webapp: "https://ai-resume-analyser-indol.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];

// Certifications
import nielit from "./assets/certificate_img/NIELIT.jpg";
import react from "./assets/certificate_img/React.jpg";

export const certifications = [
  {
    id: 1,
    title: "Machine Learning using Python",
    issuer: "NIELIT, Haridwar",
    date: "2023",
    image: nielit,
    link: "https://drive.google.com/file/d/1cv9Ce7qgByLJVkScd1_bgR2kRM92GRdG/view?usp=drive_link",
    tags: ["Python", "Machine Learning"],
  },
  {
    id: 2,
    title: "React.js",
    issuer: "Internshala",
    date: "2023",
    image: react,
    link: "https://drive.google.com/file/d/1XczoyiPZt4eRS90a0--pXJf7qIQPLaUk/view?usp=drive_link",
    tags: ["React.js"],
  },
];
