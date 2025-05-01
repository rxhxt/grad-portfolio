import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
    {
        slug: 'web-developer-assistant',
        company: 'Seattle University',
        description: 'Building, testing, and maintaining the Seattle University Website and other similar websites related to the university to ensure seamless functionality and user experience. Troubleshooting technical issues related to university websites and web applications, ensuring timely and effective resolution.',
        contract: ContractType.OnCampus, // Assuming based on the nature of the role
        type: 'Web Development',
        location: 'Seattle, WA', // From the image
        period: { from: new Date(2024, 6), to: new Date(2025, 6) }, // June 2023 - June 2024 (inferred from 06/2023 - Present, assuming "Present" was June 2024 when the CV was last updated)
        skills: getSkills('html', 'css', 'javascript', 'nodejs'), // Basic web development skills implied
        name: 'Web Developer Assistant',
        color: '#007bff', // A generic blue for web development
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Maintained and developed Seattle University websites.'
    },
    {
        slug: 'graduate-teaching-assistant',
        company: 'Seattle University',
        description: 'Supported students enrolled in the CPSC 5071: Data Management for Data Science course, offering explanations of complex concepts, and assisting with problem-solving to enhance understanding. Assisted in the grading process for assignments, projects, and exams, ensuring fair and constructive feedback to aid students\' learning and improvement. Facilitated open communication channels through Teams, creating an accessible environment for students to seek guidance and receive timely assistance.',
        contract: ContractType.OnCampus, // Assuming based on the nature of the role
        type: 'Teaching Assistance',
        location: 'Seattle, WA', // From the image
        period: { from: new Date(2024, 1), to: new Date(2024, 3) }, // September 2023 - December 2023 (inferred from 09/2023 - 12/2023)
        skills: getSkills('data-science','mongodb','sql'), // Supporting a Data Management for Data Science course
        name: 'Graduate Teaching Assistant',
        color: '#28a745', // A generic green for academic roles
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Supported Data Science students and assisted with grading.'
    },
    {
        slug: 'sum-corps-maths-tutor',
        company: 'Seattle University',
        description: 'Provided one-on-one and group tutoring for high school mathematics for students at Seattle World School, improving student performance. Explained complex topics such as calculus, algebra, and geometry in a clear and approachable manner, enhancing student confidence and problem-solving abilities.',
        contract: ContractType.OnCampus, // Assuming based on the nature of the role
        type: 'Tutoring',
        location: 'Seattle, WA', // From the image
        period: { from: new Date(2023, 9), to: new Date(2024, 3) }, // September 2023 - June 2024 (inferred from 09/2023 - 06/2024)
        skills: [], // No specific technical skills from your list seem directly applicable
        name: 'SUM Corps Maths Tutor',
        color: '#ffc107', // A generic yellow for tutoring
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Tutored high school students in mathematics.'
    },
    {
        slug: 'lead-software-engineer-fullstack',
        company: 'FinSoftAi Solutions Private Limited',
        description: 'Spearheaded SST-Research, an adaptable component-based tool made using React.js, Node.js and ElasticSearch which combines sentiment, search and technical analysis to provide diverse visualization and real-time insights for institutional investors while also adding diverse UI/UX potential clients. Automated data processing for visualizations using REST-based serverless APIs developed in Python and AWS Lambda. Developed the mobile-friendly alternative product for consumers to get regular and timely market sentiment alerts.',
        contract: ContractType.FullTime, // Assuming based on "Lead Software Engineer, Fullstack"
        type: 'Software Development',
        location: 'Seattle, WA', // From the image
        period: { from: new Date(2021, 7), to: new Date(2023, 8) }, // June 2021 - December 2022 (inferred from 06/2021 - 12/2022)
        skills: getSkills('reactjs', 'nodejs', 'python', 'aws', 'elasticsearch'), // Skills explicitly mentioned
        name: 'Lead Software Engineer, Fullstack',
        color: '#17a2b8', // A teal color for lead fullstack roles
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Led development of a sentiment analysis tool using React, Node.js, Elasticsearch, Python, and AWS.'
    },
    {
        slug: 'software-engineer',
        company: 'FinSoftAi Solutions Private Limited',
        description: 'Engineered the Querybuilder, a flexible querying tool to develop complex logically grouped queries and to provide precise results from the ElasticSearch database. Offered a concise overview of sentiment and price trends for specific stocks through the initial prototype SST-Beat.',
        contract: ContractType.FullTime, // Assuming based on "Software Engineer"
        type: 'Software Development',
        location: 'Kirkland, WA', // From the image
        period: { from: new Date(2020, 3), to: new Date(2021, 6) }, // October 2020 - June 2021 (inferred from 10/2020 - 06/2021)
        skills: getSkills('elasticsearch'), // Elasticsearch is explicitly mentioned
        name: 'Software Engineer',
        color: '#00c853', // A vibrant green for software engineer roles
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Developed a querying tool using Elasticsearch and a sentiment/price trend overview prototype.'
    },
    {
        slug: 'junior-machine-learning-engineer',
        company: 'Omdena',
        description: 'Collaborated with 34 AI experts, data scientists, and the World Food Program globally to predict food and non-food items in cyclone-struck areas. Extracted insights from a proprietary dataset based on public data using seaborn and matplotlib by performing data cleaning and EDA to gain important features to use for modelling.',
        contract: ContractType.Internship, // Assuming based on "Junior Machine Learning Engineer"
        type: 'Machine Learning Engineering',
        location: 'Unknown', // Location not explicitly mentioned in that section
        period: { from: new Date(2020, 3), to: new Date(2020, 5) }, // January 2020 - October 2020 (inferred from 01/2020 - 10/2020)
        skills: getSkills('python', 'machine-learning', 'data-science'), // Skills related to ML and data analysis
        name: 'Junior Machine Learning Engineer',
        color: '#673ab7', // A deep purple for ML roles
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Predicted food and non-food items in cyclone-struck areas using ML and data analysis.'
    }
]
items.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());;

export const title = 'Experience';
