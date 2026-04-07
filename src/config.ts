export interface Project {
  name: string;
  description: string;
  link: string;
  skills: string[];
}

export interface Experience {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email: string;
    linkedin: string;
    github: string;
  };
  location: string;
  workAuthorization: string;
  aboutMe: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

export const siteConfig: SiteConfig = {
  name: "Rohit Nagotkar",
  title:
    "Software Engineer — 3 yrs building production AI systems, data-intensive backends & full-stack apps | Python • TypeScript • AWS | M.S. CS '25",
  description:
    "Software Engineer with 3 years of experience building production AI systems, data-intensive backends, and full-stack applications. Experienced owning features end-to-end, from system design and deployment, with a focus on reliability and measurable impact. Recent work spans LLMs, RAG pipelines, and scalable cloud infrastructure on AWS.",
  accentColor: "#1d4ed8",
  social: {
    email: "rohitajaynagotkar@gmail.com",
    linkedin: "https://linkedin.com/in/rohit-nagotkar",
    github: "https://github.com/rxhxt",
  },
  location: "Seattle, WA • Open to relocation",
  workAuthorization: "",
  aboutMe:
    "Software Engineer with 3 years of experience building production AI systems, data-intensive backends, and full-stack applications. I own features end-to-end—from system design to deployment—with a focus on reliability and measurable impact. Recent work spans LLMs, RAG pipelines, multi-tenant platforms, and scalable cloud infrastructure on AWS.",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "React",
    "Node.js",
    "REST APIs",
    "AWS (Lambda, ECS, S3, DynamoDB, Textract)",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "CI/CD (GitHub Actions, Vercel)",
    "Elasticsearch",
    "Concurrency Tuning",
    "Latency Optimization",
    "Event-Driven Architecture",
    "FastAPI",
    "Flask",
    "LangChain",
    "RAG",
    "Vector Search (Pinecone, FAISS)",
    "LLM Evaluation",
    "OpenAI APIs",
    "Prompt Engineering",
    "Computer Vision",
    "Tableau",
  ],
  projects: [
    {
      name: "Legal Statement Drafting Application",
      description:
        "AI legal drafting system using FAISS-backed retrieval, tuning chunk size and overlap parameters to balance semantic completeness against precision, reducing manual drafting effort by 70%. Validated LLM output quality via semantic coverage (74.4%) and perplexity (184) benchmarks for a high-stakes legal use case.",
      link: "https://github.com/rxhxt/CPSC-5830-Team-4",
      skills: ["Python", "FAISS", "RAG", "LLM Evaluation"],
    },
    {
      name: "University Knowledge Base Chatbot",
      description:
        "Multi-turn conversational retrieval system comparing dense and hybrid retrieval approaches, improving response relevance by 40%. Reduced irrelevant retrieval by 30% in long-running sessions by refining semantic indexing and query handling across diverse student question types.",
      link: "https://github.com/rxhxt/SU-Rag-Chat",
      skills: ["LangChain", "Pinecone", "RAG", "Gemini", "Vector Search"],
    },
    {
      name: "DocuMentor",
      description:
        "GenAI learning tool (React + Flask) that explains PDFs, generates FAQs, and creates up to 50 customized questions per document to improve retention.",
      link: "https://github.com/rxhxt/ai-pdf-assist",
      skills: ["React", "Python", "Flask", "AI"],
    },
    {
      name: "Netflix Data Analysis",
      description:
        "Interactive Tableau dashboard exploring geographic and yearly distribution of titles to inform marketing decisions.",
      link: "https://public.tableau.com/views/NetflixDataAnalysis_17210824390090/Dashboard1",
      skills: ["Python", "Data Science", "Tableau"],
    },
    {
      name: "Spotify Hits Analysis",
      description:
        "End-to-end ML workflow for popularity prediction (80% accuracy). Emphasis on feature selection and model tuning; reproducible notebooks and pipeline.",
      link: "https://github.com/rxhxt/Spotify-Hits-Prediction-and-Classification",
      skills: ["Python", "Machine Learning", "Data Science"],
    },
    {
      name: "Heart Attack Classification",
      description:
        "EDA + ML classifiers (LogReg, KNN, SVC). Achieved 94% precision and 0.93 recall for heart-disease risk prediction (KNN).",
      link: "https://github.com/rxhxt/Heart-Disease-Indicator",
      skills: ["Python", "Machine Learning", "Data Science"],
    },
    {
      name: "SSi-FAANG (Market Sentiment)",
      description:
        "Daily social-sentiment insights for FAANG to support trading decisions; web app with regular updates and fixes.",
      link: "https://faang.finsoftai.com",
      skills: ["Python", "Data Science", "React", "Node.js", "AWS"],
    },
    {
      name: "Quantum RL for Zero-Sum Games",
      description:
        "Quantum feed-forward layers inside DQN; outperformed classical DQN on Tic-Tac-Toe in sample efficiency.",
      link: "https://github.com/rxhxt/Quantum-Deep-Reinforcement-Learning-on-Tic-Tac-Toe",
      skills: ["Python", "Machine Learning"],
    },
    {
      name: "Real-Time Emotion Recognition",
      description:
        "Custom CNN trained on fer2013 with augmentation; real-time webcam inference across seven emotions.",
      link: "",
      skills: ["Python", "Machine Learning", "Computer Vision"],
    },
    {
      name: "Mamoo",
      description:
        "Event planning app connecting users with vendors; assisted across React/AWS/TypeScript backend and UI flows.",
      link: "",
      skills: ["React", "AWS", "JavaScript", "TypeScript", "Node.js"],
    },
  ],
  experience: [
    {
      company: "The AI Collective",
      title: "Founding Software Engineer",
      dateRange: "Dec 2025 – Present",
      bullets: [
        "Designed and maintained a multi-tenant platform serving 5,000+ users across 100+ countries, owning the full stack from PostgreSQL schema design and REST API development to production deployment on Vercel.",
        "Shortened the release cycle from monthly to weekly by establishing CI/CD pipelines on Vercel and GitHub Actions with automated test gates and rollback support.",
        "Instrumented the platform with PostHog, using behavioral signals to prioritize features that achieved 70% adoption across the user base within two quarters.",
        "Built internal tools via an MCP server for AI agents to consume, shipped an automated invite system that drafted personalized messages, and surfaced platform analytics trends to users through an insights dashboard.",
      ],
    },
    {
      company: "PACR",
      title: "AI Engineer Intern",
      dateRange: "Sep 2025 – Dec 2025",
      bullets: [
        "Delivered a production document intelligence platform on AWS Lambda and ECS covering multi-format ingestion, OCR via Textract and Tesseract, RAG-based retrieval, and live summarization APIs.",
        "Benchmarked Groq-hosted models across latency, throughput, and cost, achieving sub-2-second response times by selecting the optimal model-serving configuration.",
        "Improved retrieval precision by 32% (recall@k on a held-out set) by designing chunking strategies and semantic indexing across PDF, DOC, and scanned documents.",
      ],
    },
    {
      company: "Halo AI",
      title: "AI Engineer",
      dateRange: "Mar 2024 – Aug 2024",
      bullets: [
        "Built the intent recognition system by evaluating multiple edge model architectures for latency and accuracy trade-offs, with request queuing to handle traffic bursts without dropping inputs.",
        "Automated 7 user workflows including reminders, goal setting, todos, and mailing via OpenAI function calling, reducing execution time from ~4 minutes to under 10 seconds.",
      ],
    },
    {
      company: "Seattle University",
      title: "Software Developer",
      dateRange: "Jul 2024 – Jul 2025",
      bullets: [
        "Maintained university web properties for reliability and accessibility; triaged and resolved production issues.",
        "Improved site quality via testing and CI checks, reducing regressions and time-to-fix.",
      ],
    },
    {
      company: "Seattle University",
      title: "Graduate Teaching Assistant",
      dateRange: "Feb 2024 – Apr 2024",
      bullets: [
        "Supported CPSC 5071 (Data Management for Data Science): problem-solving sessions and grading with targeted feedback.",
        "Drove student engagement via office hours/Teams; clarified database and ETL concepts.",
      ],
    },
    {
      company: "Seattle University",
      title: "SUM Corps Maths Tutor",
      dateRange: "Oct 2023 – Apr 2024",
      bullets: [
        "1:1 and group tutoring (algebra, geometry, calculus); improved confidence and test performance.",
      ],
    },
    {
      company: "FinSoftAi",
      title: "Lead Fullstack Engineer",
      dateRange: "Sep 2020 – Aug 2023",
      bullets: [
        "Architected end-to-end ML pipelines using a fan-out ingestion design with batching and ordered processing across 100+ news and social sources, handling 10,000+ client requests per day.",
        "Optimized Elasticsearch index mappings and custom analyzers on AWS Lambda, cutting system latency by 40% and feature-store lookup time by 30% for analyst research workflows.",
        "Guided a team of engineers through sprint planning, code reviews, and architectural decisions on the data ingestion and serving layers.",
      ],
    },
    {
      company: "Omdena",
      title: "Junior Data Scientist",
      dateRange: "Apr 2020 – Jun 2020",
      bullets: [
        "Collaborated with 34 contributors and WFP to identify items in cyclone-hit regions from imagery.",
        "Cleaned and analyzed proprietary/public datasets; surfaced modeling features with matplotlib/seaborn.",
      ],
    },
  ],
  education: [
    {
      school: "Seattle University",
      degree: "M.S. in Computer Science",
      dateRange: "Sep 2023 – Jun 2025",
      achievements: [
        "GPA: 3.9/4.0",
        "Relevant Coursework: Large Language Models, Big Data Analytics, Machine Learning, AI, Visual Analytics, Ethics, Capstone",
      ],
    },
    {
      school: "P.I.C.T. College",
      degree: "B.E. in Electronics & Telecommunications",
      dateRange: "Aug 2018 – Jun 2021",
      achievements: [
        "GPA: 3.9/4.0",
        "Relevant Coursework: Fundamentals of Programming, Data Structures and Algorithms, OOPs",
      ],
    },
  ],
};
