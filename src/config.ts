export const siteConfig = {
  name: "Rohit Nagotkar",
  title: "Full‑Stack & GenAI Engineer – Deployed 4 web apps & doubled UX engagement | Python • Node • AWS • React | M.S. CS‑Data Science '25 | Ex‑Lead SWE, crafting people‑centric products at scale",
  description: "A passionate Full Stack Developer and Data Science Enthusiast pursuing a Master's in Computer Science with a specialization in Data Science at Seattle University. With expertise in Machine Learning, Data Science, and Web Development, I thrive on using technology to solve real-world problems.",
  accentColor: "#1d4ed8",
  social: {
    email: "rohitajaynagotkar@gmail.com",
    linkedin: "https://linkedin.com/in/rohit-nagotkar",
    twitter: "",
    github: "https://github.com/rxhxt",
  },
  aboutMe:
    "A passionate Full Stack Developer and Data Science Enthusiast pursuing a Master's in Computer Science with a specialization in Data Science at Seattle University. With expertise in Machine Learning, Data Science, and Web Development, I thrive on using technology to solve real-world problems. My goal is to create impactful solutions that drive innovation and positive change.",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript", 
    "React",
    "Node.js",
    "AWS",
    "Machine Learning",
    "Data Science",
    "Computer Vision",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Elasticsearch",
    "Flask",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tableau",
    "LLM",
    "Artificial Intelligence"
  ],
  projects: [
    {
      name: "DVPO Drafting Automation",
      description: "Collaborated with Family Law Center to develop an LLM-powered writing assistant aimed at supporting survivors of domestic violence in drafting emotionally sensitive and legally sound protection order petitions. The tool generates personalized feedback questions to help survivors provide clearer, more detailed narratives, significantly reducing the time law students spend on follow-up interviews.",
      link: "https://github.com/rxhxt/CPSC-5830-Team-4",
      skills: ["Python", "LLM", "AI"],
    },
    {
      name: "DocuMentor",
      description: "Intelligent learning tool designed to help students better understand and retain concepts from PDF documents. Built with Generative AI (GenAI), React, and Flask, the tool enhances learning by generating explanations, FAQs, and up to 50 unique, customized questions for every uploaded document.",
      link: "https://github.com/rxhxt/ai-pdf-assist.git",
      skills: ["React", "Python", "Flask", "AI"],
    },
    {
      name: "Retrieval-Augmented GenAI Pipeline for Multi-Turn Q&A",
      description: "Formulated a retrieval-augmented GenAI pipeline using LangChain, Pinecone, and OpenAI, achieving a 35% increase in document-grounded response relevance across multi-turn user queries. Vectorized document data to optimize chunk-level embedding relevance, achieving a 30% drop in noise during context retrieval in multi-turn queries.",
      link: "https://github.com/rxhxt/SU-Rag-Chat",
      skills: ["Python", "AI", "Machine Learning"],
    },
    {
      name: "Netflix Data Analysis",
      description: "Created a dashboard which gives geographical and annual distribution of TV shows and movies. This dashboard is an effective way to play around and extract insights which will help in global marketing.",
      link: "https://public.tableau.com/views/NetflixDataAnalysis_17210824390090/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      skills: ["Python", "Data Science", "Tableau"],
    },
    {
      name: "Spotify Hits Analysis",
      description: "Collaborated with a team to create a strong process for cleaning and analyzing Spotify song data. Utilized statistical methods and machine learning to predict song popularity with 80% accuracy, showing the importance of selecting the right features and fine-tuning models.",
      link: "https://github.com/rxhxt/Spotify-Hits-Prediction-and-Classification.git",
      skills: ["Python", "Machine Learning", "Data Science"],
    },
    {
      name: "Heart Attack Classification",
      description: "Conducted exploratory data analysis to identify significant health and demographic factors, which improved the audience's understanding. Developed predictive models like Logistic Regression, K-Nearest Neighbors, and Support Vector Classifier, achieving 94% precision and an recall of 0.93 for heart disease risk prediction using KNN.",
      link: "https://github.com/rxhxt/Heart-Disease-Indicator.git",
      skills: ["Python", "Machine Learning", "Data Science"],
    },
    {
      name: "SSi - FAANG",
      description: "Spearheaded SSi-FAANG, a tool to get daily social sentiment details for FAANG Companies to get insights and make trading decisions. Developed the website and performed regular updates and bug fixes.",
      link: "https://faang.finsoftai.com",
      skills: ["Python", "Data Science", "React", "Node.js", "AWS"],
    },
    {
      name: "Quantum RL for Zero-Sum Games",
      description: "Developed a Quantum Deep Reinforcement Learning model by integrating Quantum feed-forward layers into a Deep Reinforcement Learning setup. Trained using Deep Q-learning, it demonstrated superior performance compared to classical Deep Q-Network models in zero-sum games such as Tic-Tac-Toe.",
      link: "https://github.com/rxhxt/Quantum-Deep-Reinforcement-Learning-on-Tic-Tac-Toe.git",
      skills: ["Python", "Machine Learning"],
    },
    {
      name: "Real Time Emotion Recognition",
      description: "Implemented a custom Convolutional Neural Net model which is trained on the fer2013 challenge dataset, incorporating data augmentation techniques for enhanced model robustness and performance. Developed a model capable of analyzing real-time webcam feeds to accurately identify users' emotions, with the ability to detect up to seven different emotional states.",
      link: "",
      skills: ["Python", "Machine Learning", "Computer Vision"],
    },
    {
      name: "Mamoo",
      description: "Assisted to develop Mamoo, an event organizer app that helps users plan events smoothly by connecting them with vendors and offering tools for easier management. It simplifies event planning for both users and vendors alike.",
      link: "",
      skills: ["React", "AWS", "JavaScript", "TypeScript", "Node.js"],
    },
  ],
  experience: [
    {
      company: "Halo AI",
      title: "Lead Machine Learning Engineer",
      dateRange: "Feb 2024 - Sep 2024",
      bullets: [
        "Enabled intent-based automation by integrating large language models with function calling and custom prompt design, supporting 7 distinct user-intent actions through conversational interfaces",
        "Integrated LLM-driven features into the product MVP and implemented usage tracking, leading to a 20% improvement in user engagement through data-informed experience enhancements",
        "Architected an end-to-end OCR system for mobile screenshots to extract on-screen text and visual context, enabling layout-aware analysis and capturing structured data across 90% of core UI flows",
      ],
    },
    {
      company: "Seattle University",
      title: "Software Developer",
      dateRange: "Jul 2024 - Jul 2025",
      bullets: [
        "Building, testing, and maintaining the Seattle University Website and other similar websites related to the university to ensure seamless functionality and user experience",
        "Troubleshooting technical issues related to university websites and web applications, ensuring timely and effective resolution",
      ],
    },
    {
      company: "Seattle University",
      title: "Graduate Teaching Assistant",
      dateRange: "Feb 2024 - Apr 2024",
      bullets: [
        "Supported students enrolled in the CPSC 5071: Data Management for Data Science course, offering explanations of complex concepts, and assisting with problem-solving to enhance understanding",
        "Assisted in the grading process for assignments, projects, and exams, ensuring fair and constructive feedback to aid students' learning and improvement",
        "Facilitated open communication channels through Teams, creating an accessible environment for students to seek guidance and receive timely assistance",
      ],
    },
    {
      company: "Seattle University",
      title: "SUM Corps Maths Tutor",
      dateRange: "Oct 2023 - Apr 2024",
      bullets: [
        "Provided one-on-one and group tutoring for high school mathematics for students at Seattle World School, improving student performance",
        "Explained complex topics such as calculus, algebra, and geometry in a clear and approachable manner, enhancing student confidence and problem-solving abilities",
      ],
    },
    {
      company: "FinSoftAi Solutions Private Limited",
      title: "Lead Software Engineer, Fullstack",
      dateRange: "Aug 2021 - Sep 2023",
      bullets: [
        "Spearheaded SST-Research, an adaptable component-based tool made using React.js, Node.js and ElasticSearch which combines sentiment, search and technical analysis to provide diverse visualization and real-time insights for institutional investors while also adding diverse UI/UX potential clients",
        "Automated data processing for visualizations using REST-based serverless APIs developed in Python and AWS Lambda",
        "Developed the mobile-friendly alternative product for consumers to get regular and timely market sentiment alerts",
      ],
    },
    {
      company: "FinSoftAi Solutions Private Limited",
      title: "Software Engineer",
      dateRange: "Apr 2020 - Jul 2021",
      bullets: [
        "Engineered the Querybuilder, a flexible querying tool to develop complex logically grouped queries and to provide precise results from the ElasticSearch database",
        "Offered a concise overview of sentiment and price trends for specific stocks through the initial prototype SST-Beat",
      ],
    },
    {
      company: "Omdena",
      title: "Junior Machine Learning Engineer",
      dateRange: "Apr 2020 - Jun 2020",
      bullets: [
        "Collaborated with 34 AI experts, data scientists, and the World Food Program globally to predict food and non-food items in cyclone-struck areas",
        "Extracted insights from a proprietary dataset based on public data using seaborn and matplotlib by performing data cleaning and EDA to gain important features to use for modelling",
      ],
    },
  ],
  education: [
    {
      school: "Seattle University",
      degree: "M.S. in Computer Science, Specialization in Data Science",
      dateRange: "Sep 2023 - Present",
      achievements: [
        "CGPA: 3.92/4.0",
        "Relevant Coursework: Big Data Analytics, Machine Learning, Artificial Intelligence, Large Language Models, Capstone, Ethics, Visual Analytics"
      ],
    },
    {
      school: "PICT (Pune Institute of Computer Technology)",
      degree: "B.E. in Electronics and Telecommunication",
      dateRange: "Sep 2017 - Jul 2021",
      achievements: [
        "CGPA: 9.4/10.0",
        "Location: Pune, Maharashtra, India"
      ],
    },
  ],
};
