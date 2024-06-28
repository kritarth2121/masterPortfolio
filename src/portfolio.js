/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
  showOpenSource: true,
};

//SEO Related settings
const seo = {
  title: "Kritarth's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kritarth Sharma Portfolio",
    type: "website",
    url: "http://kritarth2121.com/",
  },
};

//Home Page
const greeting = {
  title: "Kritarth Sharma",
  logo_name: "Kritarth Sharma",
  nickname: "Not your average software developer ",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1JD6Lu-JylTZ6EemZuqHM3vbbJhOHsMa9sxtj050QYS4/edit",
  portfolio_repository: "https://github.com/kritarth2121",
  githubProfile: "https://github.com/kritarth2121",
  introYtVideo: "https://www.youtube.com/embed/YJ4DjnHKo-4",
};

const loader = {
  first: "Kritarth",
  second: "Sharma",
  third: "Portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kritarth2121",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/kritarth-sharma-15721216b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kritarth2121@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kritarth21",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/13728341/kritarth-sharma",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#DA680B", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Angular etc",
        "⚡ Creating application backend in Node, Express, Python, Java etc",
        "⚡ Developing mobile applications using React Native",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa6-brands:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Next JS",
          fontAwesomeClassname: "devicon:nextjs-wordmark",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "vscode-icons:file-type-tailwind",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Nest Js",
          fontAwesomeClassname: "skill-icons:nestjs-light",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "skill-icons:redux",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Nx",
          fontAwesomeClassname: "logos:nx",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "skill-icons:django",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting Lambda functions on AWS to cust costs and automatic scaling",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/kritarth21",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/kritarth2121/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/kritarth21",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/kritarth56294",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gla University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "GLA_University_logo.png",
      alt_name: "Gla Mathura",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
        "⚡ Ranked in the top 5 coders of College among more than 1000 students.",
        "⚡ Managed lots of events with more than 100 students participation.",
      ],
      website_link: "https://www.gla.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React Redux Ecommerce - Master MERN Stack Web Development",
      subtitle: "- Ryan Dhungel",
      logo_path: "logo-udemy.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6c8faef1-adff-4f1d-ac2c-a30e1e4f0d03/",
      color_code: "#1F70C199",
    },
    {
      title: " Python eCommerce | Build a Django eCommerce Web Application",
      subtitle: "- Justin Mitchel",
      logo_path: "logo-udemy.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6ff82286-4417-4de2-a99d-50d405ef3ea8/",
      color_code: "#1F70C199",
    },
    {
      title: "Silver Award The OLX Group challenge",
      subtitle: "- Codility",
      logo_path: "codility.webp",
      certificate_link:
        "https://app.codility.com/cert/view/certSEBK85-UJ727ZWQHHBMEV6G/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Problem Solving",
      subtitle: "- HackerRank",
      logo_path: "HackerRank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/3bd3d4ff7314",
      alt_name: "HackerRank",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Full Stack Developer, Designer and Software Architect. I have also worked with some well established companies. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "DevsLane",
          company_url: "https://devslane.com/",
          logo_path: "devslane.png",
          duration: "May 2021 - Present",
          location: "Remote",
          description: `Worked with React JS, Angular Js, AdonishJS, ExpressJs, PostgreSQL, MySql, NextJs, NodeJS, Tailwind CSS, Java, Sass, Redis, AWS, Rabbit MQ etc to provide end-to-end solutions for multiple projects.
            Performed several complicated tasks like generating reports having lots of micro-functions behind them, pdf generators, automated email with spam, bounce rate check, etc.
            Successfully modified numerous software applications that increased user-friendliness by 20%.
            Led the development of a project. Wrote 80% of the code, and reviewed the other 20%. Shipped three weeks ahead of schedule. Achieved excellent stability.
            Introduced methodologies and best practices that enhanced product definition, release processes and customization of applications to user needs.
            Excelled in rapid application development and management of technological issues for assigned projects, earning the highest customer satisfaction rating for all software solutions delivered.`,
          color: "#0879bf",
        },
        {
          title: "Software Engineer (Freelancer)",
          company: "Freelancer",
          company_url: "https://devslane.com/",
          logo_path: "freelance.png",
          duration: "April 2019 - May 2021",
          location: "Remote",
          description: ` Implemented enterprise applications using Express, React, AngularJS, AWS, and MySQL. 
             Designed and developed systems facilitating marketers to perform various optimization experiments.
             For a client ,I developed their marketing portal from scratch which included tracking their analytics of different social media handles
               which led them to funding for $500,000 .
             For a client , I created a productivity web app that helped the company to log the productivity metrics of the employees which logs the 
               keys pressed, commits done ,takes random screenshot and present all of them in an interactive way
            For a client, I integrated video call feature, which helped its trainers to directly help students , improved the UI ,made it mobile and tablet 
              Responsive.
          `,
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me / Hire Me",
    profile_image_path: "kritarth.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with  React, Angular, NodeJS, Cloud etc.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://hashnode.com/@kritarth",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Kumharon Ka Baas, Shiv Mandir Road, Ladnun, Nagaur, Rajasthan, India 341306",
    locality: "Kanodar",
    country: "IN",
    region: "Rajasthan",
    postalCode: "341306",
    streetAddress: "Kumharon Ka Baas, Shiv Mandir Road",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Shiv+Mandir+Rd,+Ladnun,+Rajasthan+341306/@27.6465048,74.3989255,17z/data=!3m1!4b1!4m6!3m5!1s0x396b2e29238d94df:0x233c76fff1871329!8m2!3d27.6465048!4d74.4015004!16s%2Fg%2F11fslxqgjh?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  loader,
};
