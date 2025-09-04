import { meta, shopify, tesla, starbucks, Headstarter_logo, hackuta2024, scai, uta, APEC_logo } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "AI Engineer Intern",
        company_name: "EVISION Atlanta",
        icon: APEC_logo,
        iconBg: "#5271FF",
        date: "August 2025 - Present",
        points: [
            "Collaborated with a senior developer to design and deploy an AI-powered Help/Support Chat Bot, enhancing customer service.",
            "Led the integration of web applications across multiple client websites, ensuring optimal performance and scalability.",
            "Developed an AI-driven lead generation funnel, automating client acquisition and improving digital marketing effectiveness.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Atlanta Petroleum Equipment Company",
        icon: APEC_logo,
        iconBg: "#FF6B6B",
        date: "July 2025 - Present",
        points: [
            "Led the consolidation and transfer of 25+ critical I.T. systems and software platforms including MSFT Azure, SQL Server, Ventus, Acumatica, and Zoho, ensuring 100% continuity in operations across three major offices (ATL, HOU, and MPC).",
            "Administered access control, credential management, and surveillance systems for 50+ devices and endpoints including servers, mobile data systems, and proprietary software—achieving full audit compliance and minimizing downtime.",
            "Streamlined the onboarding of internal tools by documenting and transferring admin-level knowledge for 10+ enterprise systems (e.g., Microsoft 365, DFS, Clockshark), directly supporting cross-departmental digital transformation.",
        ],
    },
    {
        title: "Datathon 2024 Developer",
        company_name: "The University of Texas at Arlington",
        icon: uta,
        iconBg: "#F28C28",
        date: "November 2024 - April 2025",
        points: [
            "Engineered a cutting-edge, user-centric website using React, Next.js, and Node.js, enhancing participant engagement and operational efficiency.",
            "Spearheaded the robust management of event databases, ensuring smooth and secure participant interactions from check-in through completion."
        ],
    },
    {
        title: "Engineering Senator, Student Government",
        company_name: "The University of Texas at Arlington",
        icon: uta,
        iconBg: "#F28C28",
        date: "October 2024 - April 2025",
        points: [
            "Championed engineering student interests, effectively influencing university policies to better align with student needs.",
            "Fostered strong collaborations with academic and administrative stakeholders to launch initiatives that significantly boosted the engineering community's growth and success."
        ],
    },
    {
        title: "CSE tutor",
        company_name: "The University of Texas at Arlington",
        icon: uta,
        iconBg: "#F28C28",
        date: "August 2024 - April 2025",
        points: [
            "Providing one-on-one tutoring for UTA CSE undergraduate courses, assisting students in mastering subject material, debugging programs, and solving complex programming problems.",
            "Manage daily operations of the CSE Student Success Center, including preparing lab computers, organizing work areas, and ensuring smooth appointment check-ins.",
        ],
    },
    {
        title: "Undergraduate Research Assistant",
        company_name: "The University of Texas at Arlington",
        icon: uta,
        iconBg: "#F28C28",
        date: "July 2024 - April 2025",
        points: [
            "Developed a novel security model using IMU data for covert emotional state detection, enhancing privacy protections against unauthorized app tracking.",
            "Leveraged Kalman filtering to optimize data accuracy and machine learning performance in real-time emotional detection systems.",
        ],
    },

    {
        title: "HeadstarterAI Fellowship",
        company_name: "The University of Texas at Arlington",
        icon: Headstarter_logo,
        iconBg: "#5271FF",
        date: "July 2024 - September 2024",
        points: [
            "Spearheaded the development of commercially viable AI-based full-stack applications, integrating advanced AI models to enhance system performance by 20% and implementing microservices architecture on AWS, reducing server response time by 30%.",
            "Engaged in weekly hackathons and collaborative coding sessions, improving problem-solving skills and fostering a team-oriented approach. Actively participated in resume reviews and interview preparation sessions, significantly boosting job readiness.",
            "Led a capstone project focused on achieving 1,000 user sign-ups or generating $1,000 in revenue, utilizing data-driven strategies and iterative design processes to meet and exceed objectives, demonstrating expertise in building scalable, robust, and market-ready solutions.",
        ],
    },

    {
        title: "Society of Computing and Artificial Intelligence (SCAI) Developer and Outreach Officer",
        company_name: "The University of Texas at Arlington",
        icon: scai,
        iconBg: "#6B48FF",
        date: "May 2024 - April 2025",
        points: [
            "Working with a team of individuals to develop and modify the website for SCAI.",
            "Making use of Node.js, Next.js, React, and Typescript to create their first ever website.",
        ],
    },

    {
        title: "HackUTA 2024 Developer",
        company_name: "The University of Texas at Arlington",
        icon: hackuta2024,
        iconBg: "#FF6B6B",
        date: "March 2024 - December 2024",
        points: [
            "Working with a team of individuals to develop and modify the website for HackUTA.",
            "Making use of React and MongoDB to modify webpages and add features to them.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/InshaadMerchant',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/inshaadmerchant',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'EduPort',
        description: 'Developed a mobile platform using Java and XML in Android Studio to enhance educational connectivity with features like post creation, advanced search, and filtering, integrated user registration and login with Firebase for real-time data operations and Microsoft Azure AD for secure authentication, and incorporated GPS functionality for location-based educational interactions and resource sharing.',
        link: 'https://github.com/InshaadMerchant/CCN',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'BugHouse',
        description: 'Led the design and development of a Flutter-based tutoring app for the CSE Student Success Center at UTA, incorporating Firebase, Node.js, OAuth 2.0, and PostgreSQL, featuring a session management system with magnetic stripe attendance tracking, a real-time feedback and rating system for tutors, dynamic availability scheduling, and robust reporting for performance metrics to enhance teaching effectiveness and student engagement.',
        link: 'https://github.com/InshaadMerchant/BugHouse',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'SecureContactAPI',
        description: 'Engineered a Secure Phone Book REST API with input validation and comprehensive security features, enhancing data integrity and security. I implemented OAuth 2.0 for sophisticated user role-based access control, safeguarding sensitive API endpoints.Also, leveraged Docker to ensure consistent, scalable deployments and streamlined CI/CD processes',
        link: 'https://github.com/InshaadMerchant/phonebookFASTAPI',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'FinGuru',
        description: 'Engineered an Android app using Java, XML, and Firebase that provides tailored financial advice by analyzing personal financial data and global market trends through machine learning, featuring a user-friendly interface with easy navigation and interactive elements to maintain engagement and deliver timely financial insights.',
        link: 'https://github.com/InshaadMerchant/FinGuru',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'MLHConnect',
        description: 'Developed MLHConnect, a dynamic networking app for hackathons, enhancing participant interaction and event accessibility. I integrated it with MongoDB to handle large volumes of user data securely and efficiently, supported by robust authentication and multimedia support',
        link: 'https://github.com/InshaadMerchant/MLHConnect',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'HackUTA website 2024',
        description: 'Revamped the HackUTA event website, enhancing user engagement and accessibility with a modern tech stack including Next.js and React. I integrated live chat functionality using ChatGPT API, providing 24/7 support and real-time event updates to participants. I implemented MongoDB and SendGrid for efficient data handling and email communications, ensuring a seamless user experience',
        link: 'https://github.com/InshaadMerchant/HackUTA2024',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-yellow',
        name: 'AI Customer Support',
        description: 'Engineered an AI-driven customer support system with Next.js and React, reducing response times by 50% through intelligent automation with OpenAI.',
        link: 'https://github.com/InshaadMerchant/AI_customersupport',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'AI Flashcards - SaaS',
        description: 'Developed an AI-enhanced SaaS platform using Next.js and React for dynamic educational flashcard generation from textual inputs via OpenAI.',
        link: 'https://github.com/InshaadMerchant/AIflashcards-saas',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Pantry Tracker',
        description: 'Developed a pantry tracker app using next.js and react that could help people make daily list of their pantries to ensure what they have and what they need to shop from stores. It allows people to add and remove items from the pantry list and search the list for items readily.',
        link: 'https://github.com/InshaadMerchant/Pantry-Tracking-App',
    }
];
