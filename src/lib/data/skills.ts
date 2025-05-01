import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Domain', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
    defineSkill({
        slug: 'html',
        color: 'orange',
        description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of a website.',
        logo: Assets.HTML,
        name: 'HTML',
        category: 'markup-style'
    }),
    defineSkill({
        slug: 'css',
        color: 'blue',
        description: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). It controls the layout, colors, fonts, and other visual aspects of a website.',
        logo: Assets.CSS,
        name: 'CSS',
        category: 'markup-style'
    }),
    defineSkill({
        slug: 'javascript',
        color: 'yellow',
        description: 'JavaScript is a high-level, interpreted programming language primarily used to add interactivity to web pages. It can manipulate the DOM, handle events, and make asynchronous requests.',
        logo: Assets.JavaScript,
        name: 'JavaScript',
        category: 'pro-lang' // Programming Languages
    }),
    defineSkill({
        slug: 'reactjs',
        color: 'cyan',
        description: 'React is a JavaScript library for building user interfaces or UI components. It allows developers to create reusable UI elements and efficiently update the DOM through a virtual DOM.',
        logo: Assets.ReactJs,
        name: 'React Js',
        category: 'library'
    }),
    defineSkill({
        slug: 'nodejs',
        color: 'green', // As per the Node.js logo
        description: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is commonly used for building server-side and networking applications.',
        logo: Assets.NodeJs,
        name: 'Node Js',
        category: 'framework' // While a runtime, often used as a base framework
    }),
    defineSkill({
        slug: 'bootstrap',
        color: 'purple', // Or a similar shade
        description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It provides a collection of CSS and JavaScript components for building consistent and responsive layouts.',
        logo: Assets.Bootstrap,
        name: 'Bootstrap',
        category: 'framework'
    }),
    defineSkill({
        slug: 'machine-learning',
        color: 'brain-like color', // You can choose a neutral color
        description: 'Machine Learning is a subfield of artificial intelligence that enables computer systems to learn from data without being explicitly programmed. It involves algorithms that can improve their performance on a task over time with more data.',
        logo: Assets.MachineLearning, // Machine Learning doesn't have a direct logo in your list
        name: 'Machine Learning',
        category: 'soft' // Could be considered a domain knowledge, but doesn't fit the other tech categories well
    }),
    defineSkill({
        slug: 'artificial-intelligence',
        color: 'robot-like color', // You can choose a neutral color
        description: 'Artificial Intelligence (AI) is a broad field encompassing the development of intelligent agents, which are systems that can reason, learn, and act autonomously. Machine learning is a key component of AI.',
        logo: Assets.ArtificialIntelligence, // Artificial Intelligence doesn't have a direct logo
        name: 'Artificial Intelligence',
        category: 'soft' // Similar to Machine Learning
    }),
    defineSkill({
        slug: 'data-science',
        color: 'data-chart color', // You can choose a neutral color
        description: 'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.',
        logo: Assets.DataScience, // Data Science doesn't have a direct logo
        name: 'Data Science',
        category: 'soft' // Again, more of a domain
    }),
    defineSkill({
        slug: 'computer-vision',
        color: 'eye-like color', // You can choose a neutral color
        description: 'Computer Vision is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. It involves tasks like image recognition, object detection, and image segmentation.',
        logo: Assets.ComputerVision, // Computer Vision doesn't have a direct logo
        name: 'Computer Vision',
        category: 'soft' // Another domain-specific area
    }),
    defineSkill({
        slug: 'aws',
        color: 'orange', // As per the AWS logo
        description: 'Amazon Web Services (AWS) is a comprehensive and widely adopted cloud platform, offering a vast array of services including computing power, storage, databases, networking, machine learning, and more.',
        logo: Assets.AWS,
        name: 'AWS',
        category: 'devops'
    }),
    defineSkill({
        slug: 'sql',
        color: 'blue', // As per the SQL logo
        description: 'SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It is used for tasks such as querying, inserting, updating, and deleting data.',
        logo: Assets.SQL, // SQL doesn't have a direct logo in your list
        name: 'SQL',
        category: 'db' // While used with databases, it's a query language
    }),
    defineSkill({
        slug: 'mongodb',
        color: 'green', // As per the MongoDB logo
        description: 'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It is known for its scalability and ease of development.',
        logo: Assets.MongoDB,
        name: 'MongoDB',
        category: 'db'
    }),
	defineSkill({
		slug: 'tableau',
		color: '#E97627', // Orange color from the Tableau logo
		description: 'Tableau is a powerful data visualization tool used for business intelligence and data analytics. It allows users to connect to various data sources, create interactive dashboards and visualizations, and share insights effectively.',
		logo: Assets.Tableau, // You'll need to add 'Tableau: a('tableau.svg')' to your Assets object
		name: 'Tableau',
		category: 'devtools' // Or potentially 'data-science' depending on your categorization
	}),
	defineSkill({
		slug: 'llm',
		color: '#8e44ad', // A purple color, often associated with advanced technology and AI
		description: 'Large Language Models (LLMs) are deep learning models with billions of parameters, trained on vast amounts of text data to understand and generate human-like text. They are used for various natural language processing tasks, including text generation, translation, and question answering.',
		logo: Assets.LLM, // You'll need to add an appropriate logo to your Assets object
		name: 'Large Language Models',
		category: 'soft' // Or potentially 'domain-knowledge' depending on your categorization scheme
	}),
	defineSkill({
		slug: 'elasticsearch',
		color: '#00a9e5', // A shade of blue from the Elasticsearch logo
		description: 'Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data for lightning-fast search, fine‑tuned relevancy, and powerful analytics that scale with ease.',
		logo: Assets.ElasticSearch, // You'll need to add 'Elasticsearch: a('elasticsearch.svg')' to your Assets object
		name: 'Elasticsearch',
		category: 'db' // While primarily a search engine, it's often used as a NoSQL data store
	}),
    defineSkill({
        slug: 'postgresql',
        color: 'blue', // As per the PostgreSQL logo
        description: 'PostgreSQL is a powerful, open-source relational database management system known for its extensibility and SQL compliance.',
        logo: Assets.PostgreSQL,
        name: 'PostgreSQL',
        category: 'db'
    }),
    defineSkill({
        slug: 'vscode',
        color: 'blue', // As per the VS Code logo
        description: 'Visual Studio Code (VS Code) is a widely used, free source code editor made by Microsoft for Windows, Linux, and macOS. It offers extensive features like debugging support, Git integration, syntax highlighting, and extensions.',
        logo: Assets.VSCode, // VS Code doesn't have a direct logo
        name: 'VS Code',
        category: 'devtools'
    }),
    defineSkill({
        slug: 'github',
        color: 'black', // As per the GitHub logo
        description: 'GitHub is a web-based platform used for version control and collaboration. It is primarily used for code hosting and allows developers to work together on projects.',
        logo: Assets.Github, // GitHub doesn't have a direct logo
        name: 'Github',
        category: 'devtools' // Version control system
    }),
    defineSkill({
        slug: 'docker',
        color: 'blue', // As per the Docker logo
        description: 'Docker is a platform for developing, shipping, and running applications in isolated environments called containers. It simplifies the deployment and management of applications.',
        logo: Assets.Docker,
        name: 'Docker',
        category: 'devops'
    }),
    defineSkill({
        slug: 'python',
        color: 'blue-yellow', // Representing the Python logo colors
        description: 'Python is a high-level, interpreted, general-purpose programming language. It is known for its readability and is widely used in web development, data science, machine learning, and more.',
        logo: Assets.Python,
        name: 'Python',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'c++',
        color: 'blue', // As per the C++ logo
        description: 'C++ is a powerful, general-purpose programming language. It is an extension of the C language and is often used for system programming, game development, and high-performance applications.',
        logo: Assets.Cpp, // Using Cpp as C++
        name: 'C++',
        category: 'pro-lang'
    })
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
