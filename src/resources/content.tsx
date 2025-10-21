import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jayme",
  lastName: "Ramos",
  name: "Jayme Ramos",
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "jfrancisramos028@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JaymeFrancis",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jayme-francis-ramos-1b1852287",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into high-performing web experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: "I'm Jayme, a full stack developer passionate about clean design, efficient code, and bringing ideas to life through modern web technologies.",
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/639173694774?text=Hi%20Jayme!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20development%20project%20with%20you.",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A Philippines-based Full Stack Web Developer with over a year of experience
        building scalable SaaS platforms using ReactJS, Next.js, and Laravel.
        Specializes in creating responsive, high-performance web and mobile applications
        and has hands-on experience with DevOps and Linux server deployments.
        Passionate about clean code, modern development practices, and continuous learning,
        leverages AI tools to streamline workflow and deliver efficient solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Debugged Solutions Sdn Bhd",
        timeframe: "May 2024 - October 2025",
        role: "Lead Frontend and Full Stack Developer",
        achievements: [
          "Led frontend development of multiple SaaS platforms using ReactJS, TypeScript, and TailwindCSS, ensuring clean architecture and responsive design.",
          "Developed and integrated RESTful APIs with Laravel for scalable backend systems and optimized query performance with Redis caching.",
          "Implemented various third-party API integrations including custom payment gateways, Google APIs, and social login systems (Google, Facebook, etc.).",
          "Built and maintained a WebSocket proxy server to stream real-time cryptocurrency and stock data from the Polygon API, enhancing live analytics dashboards.",
          "Created admin dashboards and CMS tools using Laravel Filament to simplify client-side content and data management.",
          "Managed Ubuntu Linux server deployments, CI/CD pipelines, and system optimizations for improved scalability and uptime.",
          "Collaborated with cross-functional teams in weekly sprints using Git branching workflows (feature → staging → main) and handled code reviews.",
          "Utilized AI-assisted tools for code generation, debugging, and documentation to streamline workflow and accelerate development.",
          "Contributed to mobile app prototypes using React Native (Expo), aligning features with existing web ecosystems.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     "Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.",
      //     "Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.",
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Saint Louis College of San Fernando La Union",
        description: <>Bachelor of Science in Information Technology</>,
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "React & Next.js",
        description: (
          <>
            Building responsive and high-performance web applications using
            ReactJS, TypeScript, and Next.js. Experienced in state management,
            API integration, and optimizing UI rendering for scalable SaaS
            solutions.
          </>
        ),
        tags: [
          { name: "ReactJS", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "TailwindCSS", icon: "tailwind" },
        ],
        images: [],
      },
      {
        title: "Laravel & API Development",
        description: (
          <>
            Skilled in developing robust backends with Laravel and Laravel API,
            integrating third-party services such as custom payment gateways,
            Google APIs, and social logins. Experienced in building CMS and admin
            panels using Laravel Filament.
          </>
        ),
        tags: [
          { name: "Laravel", icon: "laravel" },
          { name: "PHP", icon: "php" },
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
        images: [],
      },
      {
        title: "DevOps & Server Management",
        description: (
          <>
            Managing CI/CD pipelines, Git-based workflows, and Ubuntu Linux server
            deployments for production systems. Skilled in optimizing server
            performance, Redis caching, and WebSocket proxy setup for real-time
            data handling.
          </>
        ),
        tags: [
          { name: "Linux", icon: "linux" },
          { name: "GitHub Actions", icon: "github" },
          { name: "Redis", icon: "redis" }
        ],
        images: [],
      },
      {
        title: "AI-Assisted & Modern Tooling",
        description: (
          <>
            Leveraging AI tools to improve code generation, debugging, and
            documentation. Experienced with Postman, VSCode, Cursor, Windsurf, and
            Trello for an efficient, collaborative workflow.
          </>
        ),
        tags: [
          { name: "AI Tools", icon: "claude" },
          { name: "VSCode", icon: "vscode" },
          { name: "Postman", icon: "postman" },
          { name: "Trello", icon: "trello" },
        ],
        images: [],
      },
    ],
  },  
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
