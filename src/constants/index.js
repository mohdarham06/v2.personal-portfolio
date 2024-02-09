import {
    html,
    css,
    javascript,
    typescript,
    reactjs,
    nextjs,
    bootstrap,
    tailwind,
    redux,
    git,
    nodejs,
    mongodb,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
];
// {
//     name: "Redux Toolkit",
//     icon: redux,
// },
// {
//     name: "Node JS",
//     icon: nodejs,
// },
// {
//     name: "MongoDB",
//     icon: mongodb,
// },
// {
//     name: "docker",
//     icon: docker,
// },

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];




const projects = [
    {
        name: "CoinTrace",
        description:
            "React.js Web App providing real-time cryptocurrency data and visualizations. Stay updated on prices, market info, and more with its user-friendly interface and responsive design.",
        tags: [
            {
                name: "Reactjs",
                color: "custom-blue-text",
            },
            {
                name: "API",
                color: "custom-green-text",
            },
            {
                name: "JavaScript",
                color: "custom-pink-text",
            },
            {
                name: "CSS",
                color: "custom-blue-text",
            },
            {
                name: "Html",
                color: "custom-green-text",
            },
        ],
        image: carrent,
        live_link: "https://cryptocointrace.netlify.app",
        source_code_link: "https://github.com/mohdarham06/cointrace",
    },
    {
        name: "Tangles — Social Media",
        description:
            "Social Media Web App with a rich UI, offering seamless content exploration, user search, notifications, bookmarking, personalized profiles, and customizable themes on any device.",
        tags: [
            {
                name: "Reactjs",
                color: "custom-blue-text",
            },
            {
                name: "JavaScript",
                color: "custom-green-text",
            },
            {
                name: "Html",
                color: "custom-pink-text",
            },
            {
                name: "CSS",
                color: "custom-blue-text",
            },
        ],
        image: jobit,
        live_link: "https://tangles.netlify.app",
        source_code_link: "https://github.com/mohdarham06/tangles",
    },
    {
        name: "PasswordSnap",
        description:
            "Sleek and efficient password generator app. Customize length and characters effortlessly. Copy generated passwords with a click.",
        tags: [
            {
                name: "Reactjs",
                color: "custom-blue-text",
            },
            {
                name: "Tailwind CSS",
                color: "custom-green-text",
            },
            {
                name: "JavaScript",
                color: "custom-pink-text",
            },
            {
                name: "Html",
                color: "custom-blue-text",
            },
        ],
        image: tripguide,
        live_link: "https://passwordsnap.netlify.app",
        source_code_link: "https://github.com/mohdarham06/passwordsnap",
    },
    {
        name: "TaskStacker",
        description:
            "A web app for managing your to-do list. Create, edit, mark as completed and save data with ease",
        tags: [
            {
                name: "Html",
                color: "custom-blue-text",
            },
            {
                name: "CSS",
                color: "custom-green-text",
            },
            {
                name: "JavaScript",
                color: "custom-pink-text",
            },
        ],
        image: tripguide,
        live_link: "https://taskstacker.netlify.app",
        source_code_link: "https://github.com/mohdarham06/taskstacker",
    },
    {
        name: "Youtube Player",
        description:
            "Lightweight Youtube video player focused on video and volume controls proficiency.",
        tags: [
            {
                name: "Html",
                color: "custom-blue-text",
            },
            {
                name: "CSS",
                color: "custom-green-text",
            },
            {
                name: "JavaScript",
                color: "custom-pink-text",
            },
        ],
        image: tripguide,
        live_link: "https://youtube-player19.netlify.app",
        source_code_link: "https://github.com/mohdarham06/youtube-player",
    },



    // {
    //     name: "Simon Game",
    //     description:
    //         "A classic memory and pattern recognition game. Click 'Start' to begin, memorize, and repeat the sequence of colors/sounds.",
    //     tags: [
    //         {
    //             name: "Html",
    //             color: "custom-blue-text",
    //         },
    //         {
    //             name: "CSS",
    //             color: "custom-green-text",
    //         },
    //         {
    //             name: "JavaScript",
    //             color: "custom-pink-text",
    //         },
    //     ],
    //     image: tripguide,
    //     live_link: "https://simon-sonic.netlify.app",
    //     source_code_link: "https://github.com/mohdarham06/simon-game",
    // },



];

export { technologies, experiences, projects };