export const siteConfig = {
  name: "Rohit Nagotkar",
  title:
    "Full-Stack & GenAI Engineer — 4 deployed apps, 20%+ UX lift | Python • Node • AWS • React | M.S. CS (Data Science) ’25 | Ex-Lead SWE",
  description:
    "Full-stack and GenAI engineer focused on shipping measurable impact. I build LLM-powered products end-to-end (Python/Node/React/AWS) and data systems that improve engagement, accuracy, and time-to-insight. M.S. CS (Data Science) @ Seattle University, graduating 2025.",
  accentColor: "#1d4ed8",
  social: {
    email: "rohitajaynagotkar@gmail.com",
    linkedin: "https://linkedin.com/in/rohit-nagotkar",
    github: "https://github.com/rxhxt"
    // Removed empty twitter to avoid dead field
  },
  location: "Seattle, WA • Open to relocation",
workAuthorization: "Open to full-time roles in 2025",
  aboutMe:
    "I design, build, and ship data-driven products—spanning React/Node frontends, Python services, AWS infra, and LLM/RAG pipelines. Recently: integrated LLM features that increased engagement by 20% and built layout-aware OCR covering ~90% of core UI flows. I’m seeking Full-Stack, ML, or GenAI engineer roles where I can own features end-to-end and prove impact with metrics.",
  skills: [
    // Curated to strengthen signal for Full-Stack + GenAI/ML roles
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "AWS (Lambda, S3, API Gateway, EC2)",
    "Docker",
    "GitHub Actions",
    "Elasticsearch",
    "LangChain",
    "OpenAI APIs",
    "RAG",
    "Vector DB (Pinecone)",
    "Prompt Engineering",
    "Computer Vision",
    "Tableau"
  ],
  projects: [
    {
      name: "DVPO Drafting Automation",
      description:
        "LLM writing assistant for Family Law Center to help survivors draft protection order petitions. Generates targeted follow-ups to improve clarity and reduce law-student interview time; designed for emotionally sensitive, legally sound narratives.",
      link: "https://github.com/rxhxt/CPSC-5830-Team-4",
      skills: ["Python", "LLM", "AI"]
      // TODO: add short demo or screenshots link
    },
    {
      name: "DocuMentor",
      description:
        "GenAI learning tool (React + Flask) that explains PDFs, generates FAQs, and creates up to 50 customized questions per document to improve retention.",
      link: "https://github.com/rxhxt/ai-pdf-assist",
      skills: ["React", "Python", "Flask", "AI"]
      // TODO: add live demo/video; include eval of learning gains or usage stats if available
    },
    {
      name: "Retrieval-Augmented GenAI Pipeline",
      description:
        "LangChain + Pinecone + OpenAI RAG pipeline for multi-turn queries; +35% document-grounded relevance and ~30% noise reduction in retrieval via chunking and embedding tuning.",
      link: "https://github.com/rxhxt/SU-Rag-Chat",
      skills: ["Python", "AI", "Machine Learning"]
    },
    {
      name: "Netflix Data Analysis",
      description:
        "Interactive Tableau dashboard exploring geographic and yearly distribution of titles to inform marketing decisions.",
      link:
        "https://public.tableau.com/views/NetflixDataAnalysis_17210824390090/Dashboard1",
      skills: ["Python", "Data Science", "Tableau"]
    },
    {
      name: "Spotify Hits Analysis",
      description:
        "End-to-end ML workflow for popularity prediction (80% accuracy). Emphasis on feature selection and model tuning; reproducible notebooks and pipeline.",
      link:
        "https://github.com/rxhxt/Spotify-Hits-Prediction-and-Classification",
      skills: ["Python", "Machine Learning", "Data Science"]
    },
    {
      name: "Heart Attack Classification",
      description:
        "EDA + ML classifiers (LogReg, KNN, SVC). Achieved 94% precision and 0.93 recall for heart-disease risk prediction (KNN).",
      link: "https://github.com/rxhxt/Heart-Disease-Indicator",
      skills: ["Python", "Machine Learning", "Data Science"]
    },
    {
      name: "SSi-FAANG (Market Sentiment)",
      description:
        "Daily social-sentiment insights for FAANG to support trading decisions; web app with regular updates and fixes.",
      link: "https://faang.finsoftai.com",
      skills: ["Python", "Data Science", "React", "Node.js", "AWS"]
      // NOTE: ensure naming matches related work (SST-Research) to avoid confusion
    },
    {
      name: "Quantum RL for Zero-Sum Games",
      description:
        "Quantum feed-forward layers inside DQN; outperformed classical DQN on Tic-Tac-Toe in sample efficiency.",
      link:
        "https://github.com/rxhxt/Quantum-Deep-Reinforcement-Learning-on-Tic-Tac-Toe",
      skills: ["Python", "Machine Learning"]
    },
    {
      name: "Real-Time Emotion Recognition",
      description:
        "Custom CNN trained on fer2013 with augmentation; real-time webcam inference across seven emotions.",
      link: "TODO_ADD_DEMO_OR_REPO",
      skills: ["Python", "Machine Learning", "Computer Vision"]
    },
    {
      name: "Mamoo",
      description:
        "Event planning app connecting users with vendors; assisted across React/AWS/TypeScript backend and UI flows.",
      link: "TODO_ADD_DEMO_OR_REPO",
      skills: ["React", "AWS", "JavaScript", "TypeScript", "Node.js"]
    }
  ],
  experience: [
    {
      company: "Halo AI",
      title: "AI Engineer",
      dateRange: "Jan 2024 – Aug 2024",
      bullets: [
        "Integrated LLMs with function calling to enable 7 intent-based actions via conversational UI.",
        "Shipped LLM features and usage tracking, informing UX changes that drove ~20% engagement lift.",
        "Built layout-aware OCR for mobile screenshots; captured structured data across ~90% of core flows."
      ]
    },
    {
      company: "Seattle University",
      title: "Software Developer",
      dateRange: "Jul 2024 – Jul 2025",
      bullets: [
        "Maintained university web properties for reliability and accessibility; triaged and resolved production issues.",
        "Improved site quality via testing and CI checks, reducing regressions and time-to-fix."
      ]
    },
    {
      company: "Seattle University",
      title: "Graduate Teaching Assistant",
      dateRange: "Feb 2024 – Apr 2024",
      bullets: [
        "Supported CPSC 5071 (Data Management for Data Science): problem-solving sessions and grading with targeted feedback.",
        "Drove student engagement via office hours/Teams; clarified database and ETL concepts."
      ]
    },
    {
      company: "Seattle University",
      title: "SUM Corps Maths Tutor",
      dateRange: "Oct 2023 – Apr 2024",
      bullets: [
        "1:1 and group tutoring (algebra, geometry, calculus); improved confidence and test performance."
      ]
    },
    {
      company: "FinSoftAi Solutions Private Limited",
      title: "Lead Full-Stack Engineer",
      dateRange: "Aug 2021 – Sep 2023",
      bullets: [
        "Led SST-Research, a React/Node/Elasticsearch platform combining sentiment, search, and TA for institutional investors; modular component architecture for customizable UIs.",
        "Automated data pipelines with AWS Lambda (Python) + REST APIs for real-time visualizations.",
        "Built mobile-friendly consumer product for market sentiment alerts with scheduled delivery."
      ]
    },
    {
      company: "FinSoftAi Solutions Private Limited",
      title: "Software Engineer",
      dateRange: "Apr 2020 – Jul 2021",
      bullets: [
        "Created a QueryBuilder to compose complex logical filters over Elasticsearch for precise results.",
        "Prototyped SST-Beat to summarize sentiment and price trends for target tickers."
      ]
    },
    {
      company: "Omdena",
      title: "Junior Data Scientist",
      dateRange: "Apr 2020 – Jun 2020",
      bullets: [
        "Collaborated with 34 contributors and WFP to identify items in cyclone-hit regions from imagery.",
        "Cleaned and analyzed proprietary/public datasets; surfaced modeling features with matplotlib/seaborn."
      ]
    }
  ],
  education: [
    {
      school: "Seattle University",
      degree: "M.S. in Computer Science (Data Science)",
      dateRange: "Sep 2023 – Jun 2025 ",
      achievements: [
        "CGPA: 3.92/4.0",
        "Relevant Coursework: Large Language Models, Big Data Analytics, Machine Learning, AI, Visual Analytics, Ethics, Capstone"
      ]
    },
    {
      school: "PICT (Pune Institute of Computer Technology)",
      degree: "B.E. in Electronics and Telecommunication",
      dateRange: "Sep 2017 – Jul 2021",
      achievements: ["CGPA: 9.4/10.0", "Relevant Coursework: Fundamentals of Programming, Data Structures and Algorithms, OOPs"]
    }
  ]
};
