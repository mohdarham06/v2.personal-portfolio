import {
    html,
    css,
    javascript,
    typescript,
    reactjs,
    nextjs,
    threejs,
    bootstrap,
    tailwind,
    git,
    figma,

    school,
    frontend,
    english,
    college,

    cointrace,
    tangles,
    passwordsnap,
    taskstacker,
    nodejs,
    redux,
    docker,
    mongodb,
    youtubeplayer,
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
        title: "High School Graduate",
        company_name: "Anglo Arabic School",
        icon: school,
        iconBg: "#ffffff",
        date: "2023",
        points: [
            "Successfully completed grade 12.",
        ],
    },
    {
        title: "Front-End Development",
        company_name: "Self-paced Learning",
        icon: frontend,
        iconBg: "#ffffff",
        date: "2023 - 2024",
        points: [
            "Engaged in self-paced learning to acquire skills in web development.",
            "Explored many paid courses and free resources on the internet.",
            "Built numerous cool projects, overcoming challenges and gaining hands-on experience.",
        ],
    },
    // {
    //     title: "Speak English Proficiently",
    //     company_name: "Georgia Institute of Technology",
    //     icon: english,
    //     iconBg: "#ffffff",
    //     date: "2023 October - 2023 December",
    //     points: [
    //         "Completed English proficiency program at Georgia Tech on Coursera.",
    //         "Focused on enhancing verbal and written communication skills.",
    //         "Achieved proficiency for effective communication in professional and academic contexts.",
    //     ],
    // },
    {
        title: "Bachelor in Computer Science",
        company_name: "Manipal University Jaipur",
        icon: college,
        iconBg: "#ffffff",
        date: "2023 - 2026",
        points: [
            "Pursuing a comprehensive program covering computer science fundamentals and applications.",
            "Focused on areas such as DSA, programming languages, software engineering, and more.",
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
        image: cointrace,
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
        image: tangles,
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
        image: passwordsnap,
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
        image: taskstacker,
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
        image: youtubeplayer,
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
    //     image: passwordsnap,
    //     live_link: "https://simon-sonic.netlify.app",
    //     source_code_link: "https://github.com/mohdarham06/simon-game",
    // },



];

export { technologies, experiences, projects };