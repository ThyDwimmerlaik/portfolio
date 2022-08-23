// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaReact,
  FaGithubSquare,
  FaLink,
  FaJava,
  FaAws,
  FaStripe,
  FaPython
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiWordpress, 
  SiAlgolia,
  SiFirebase,
  SiMongodb,
  SiFlutter,
  SiMysql,
  SiPostgresql
 } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ThyDwimmerlaik";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <SiJavascript className="display-4" />,
    name: "Javascript",
  },
  {
    id: 2,
    skill: <SiTypescript className="display-4" />,
    name: "Typescript",
  },
  {
    id: 3,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 4,
    skill: <FaAws className="display-4" />,
    name: "AWS",
  },
  {
    id: 5,
    skill: <FaGithubSquare className="display-4" />,
    name: "Github",
  },
  {
    id: 6,
    skill: <FaJava className="display-4" />,
    name: "Java"
  },
  {
    id: 7,
    skill: <SiWordpress className="display-4" />,
    name: "Wordpress"
  },
  {
    id: 8,
    skill: <SiAlgolia className="display-4" />,
    name: "Algolia"
  },
  {
    id: 9,
    skill: <FaStripe className="display-4" />,
    name: "Stripe"
  },
  {
    id: 10,
    skill: <SiMongodb className="display-4" />,
    name: "MongoDB"
  },
  {
    id: 11,
    skill: <SiFirebase className="display-4" />,
    name: "Firebase"
  },
  {
    id: 12,
    skill: <SiFlutter className="display-4" />,
    name: "Flutter"
  },
  {
    id: 13,
    skill: <SiMysql className="display-4" />,
    name: "Mysql"
  },
  {
    id: 14,
    skill: <SiPostgresql className="display-4" />,
    name: "Postgresql"
  },
  {
    id: 15,
    skill: <FaPython className="display-4" />,
    name: "Python"
  }
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mayknqyy";
