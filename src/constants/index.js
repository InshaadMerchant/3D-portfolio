import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
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
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
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
        title: "HackUTA 2024 Developer",
        company_name: "The University of Texas at Arlington",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2024 - December 2024",
        points: [
            "Working with a team of individuals to develop and modify the website for HackUTA.",
            "Making use of React and MongoDB to modify webpages and add features to them.",
        ],
    },
    
    {
        title: "Society of Computing and Artificial Intelligence (SCAI) Developer and Outreach Officer",
        company_name: "The University of Texas at Arlington",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "May 2024 - Present",
        points: [
            "Working with a team of individuals to develop and modify the website for SCAI.",
            "Making use of Node.js, Next.js, React, and Typescript to create their first ever website.",
        ],
    },

    {
        title: "Undergraduate Research Assistant",
        company_name: "The University of Texas at Arlington",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jul 2024 - Present",
        points: [
            "Developed a novel security model using IMU data for covert emotional state detection, enhancing privacy protections against unauthorized app tracking.",
            "Leveraged Kalman filtering to optimize data accuracy and machine learning performance in real-time emotional detection systems.",
        ],
    },

    {
        title: "Engineering Senator, Student Government",
        company_name: "The University of Texas at Arlington",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "october 2024 - Present",
        points: [
            
        ],
    },

    {
        title: "Datathon 2024 Developer",
        company_name: "The University of Texas at Arlington",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "November 2024 - Present",
        points: [
            
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
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/InshaadMerchant/CCN',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'BugHouse',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'SecureContactAPI',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/InshaadMerchant/phonebookFASTAPI',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'FinGuru',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/InshaadMerchant/FinGuru',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'MLHConnect',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/InshaadMerchant/MLHConnect',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'HackUTA website 2024',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/InshaadMerchant/HackUTA2024',
    }
];