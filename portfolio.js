import emoji from "react-easy-emoji";

export const greetings = {
  name: "Khairoune Aymen",
  title: "Welcome.",
  description:
    "I am a passionate Full Stack developer. I have experience building Applications with Angular,  Spring Boot,  Java,  Nodejs,  Express and some other cool libraries and frameworks.",
  resumeLink: "https://khairouneaymen.github.io/Resume/aymenresume.pdf",
};

export const openSource = {
  githubUserName: "KhairouneAymen",
};

export const contact = {};

export const socialLinks = {
  instagram: "https://www.instagram.com/aymen_krn/",
  github: "https://github.com/KhairouneAymen",
  linkedin: "https://www.linkedin.com/in/aymen-khairoune/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json",
      skills: [
        emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web applications.",
        ),
        emoji(
            "⚡ Develop secure Backend web applications with latest technologies.",
        ),
        emoji(
          "⚡ Progressive Web Applications ( PWA ) in SPA Stacks.",
        )
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MySQL-icon",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "spring-boot",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "kafka",
          fontAwesomeClassname: "logos:kafka",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
];

export const educationInfo = [
  {
      schoolName: "Free university of Tunis - ULT",
    subHeader: "Scientific Preparatory Cycle",
    duration: "September 2019 - June 2021",
    desc: "Speciality: MPSI",
    descBullets: [
      "Acquire the necessary knowledge for the development of engineering skills, Address more concrete teachings from the preparatory cycle, such as computer science.",
    ],
    github: "https://github.com/KhairouneAymen",
  },
  {
    schoolName: "Private Higher School of Engineering and Technology",
    subHeader: "Computer Engineering Cycle",
    duration: "September 2021 - September 2024",
    desc: "Speciality : Web development",
    descBullets: [
      "  Web Application Development: HTML, CSS, JavaScript, Java, Spring Boot",
      "  Database Programming: Spring JDBC/DAO, Table Design, SQL, PostgreSQL, MongoDB",
    ],
    github: "https://github.com/BrendanGlancy/BreweryLocater",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Hydatis",
    companylogo: "/img/icons/common/Hydatis.jpg",
    date: "February 2024 – August 2024 ",
    descBullets:[
      "Developed a web platform integrating IoT devices for personal protection with real-time alert management.",
      "Implemented a scalable microservices architecture to handle large volumes of data efficiently with event sourcing."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Hydatis",
    companylogo: "/img/icons/common/Hydatis.jpg",
    date: "July 2023 - September 2023",
    descBullets: [
      "Developed a web application that enables companies to verify the identity and legitimacy of their clients for regulatory compliance and fraud.",
      "Designed and developed intuitive, user-friendly interfaces using Angular and Tailwind CSS for a seamless onboarding process."
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Hydatis",
    companylogo: "/img/icons/common/Hydatis.jpg",
    date: "June 2022 – august 2022 ",
    descBullets: [
      "Engineered a comprehensive university management system to facilitate the management of teachers, students, courses, and exams."
    ],
  }
];

export const projects = [
  {
    name: "Individual Safety Platform (Heelp mee)",
    desc:
      "Developed a web platform integrating IoT devices for personal protection with real-time alert management",
    link: "http://178.32.120.242:8003/landing",
    tags: ["Java", "Angular", "Kafka", "PostgreSQL", "MongoDB"],
  },
  {
    name: "KYC (Know your customer)",
    desc:
      "Contributor on a system that enables businesses to verify customer identity and legitimacy by collecting, storing, and analyzing personal and financial information, crucial for regulatory compliance and fraud prevention.",
    github: "https://github.com/manarLABIDI/project_kyc",
    tags: ["Java", "Angular", "Kafka", "PostgreSQL", "MongoDB"],
  },
  {
    name: "ReSupply",
    desc:
      "Contributor on A platform for selling used school tools and donating to reach a specific goal, with the ability to share posts on a mini social networking website and share lessons for free.",
    github: "https://github.com/aminhl/re-supply-back",
    link: "https://re-supply.netlify.app/",
    tags: ["Angular", "Nodejs", "machine learning","express", "mongodb"],
  },
  {
    name: "Esprit Management",
    desc:
      "Developed A web project aiming for a university management system to facilitate the management of teachers, students, courses, and exams.",
    github: "https://github.com/aminhl/SpringBoot-Kaddem-Project",
    tags: ["Java", "Springboot",],
  }
];

export const feedbacks = [
  {
    name: "Austin Coontz",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
  {
    name: "Andrew Rose",
    feedback:
      "Brendan Glancy, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.",
  },
];

export const seoData = {
  title: "Aymen's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image: "https://media.licdn.com/dms/image/C4D03AQE05l9QbseKBw/profile-displayphoto-shrink_800_800/0/1652710593633?e=1707955200&v=beta&t=nvqjBph-ySRz0QMeOIZrxTcZJIgcNLphmO8jOOthu2I",
  keywords: [
    "Aymen Khairoune",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Developer",
    "web developer",
    "Software engineer",
    "Hydatis",
    "Resupply",
    "Student",
    "Tunisia",
  ],
};
