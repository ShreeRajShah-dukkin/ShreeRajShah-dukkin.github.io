// ─────────────────────────────────────────────────────────────
// PROJECTS DATA
// To add a project: copy one object, paste it, fill in your details.
// The UI will render the new card automatically.
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: "SEO Check AI Analyzer",
    year: "2025",
    tags: ["Full Stack", "AI Integration", "SEO", "Web Scraping"],
    problem:
      "Website owners often struggle to understand why their sites perform poorly in search rankings or user engagement, due to lack of clear and actionable SEO insights.",
    insight:
      "Basic SEO tools provide scores but lack context and actionable feedback. Combining rule-based analysis with AI can bridge this gap by explaining issues in a more human-understandable way.",
    solution:
      "Built a tool that takes a website URL, scrapes its content, evaluates it against SEO rules, and generates a score. Integrated Grok AI to analyze the data further and provide clear, actionable suggestions to improve usability and search performance.",
    architecture: "Node.js · Web Scraping · SEO Rule Engine · Grok AI API",
    challenges:
      "Extracting meaningful and consistent data from diverse website structures while ensuring accurate SEO evaluation and aligning AI-generated suggestions with real issues.",
    impact:
      "Enabled users to quickly identify SEO weaknesses and receive actionable recommendations, reducing the need for manual audits and improving website optimization efficiency.",
    repoUrl: "https://github.com/ShreeRajShah-dukkin/SEO-Check-AI-Analysis-usingGrok",
  },
  {
    id: 2,
    title: "Xaha",
    year: "2025",
    tags: ["Full Stack", "Community Platform", "Social Network", "Developer Tools"],
    problem:
      "Developers often switch between multiple platforms like LinkedIn, GitHub, and forums to showcase work, ask for help, and collaborate, leading to fragmented workflows and scattered knowledge.",
    insight:
      "A unified platform combining professional identity, project showcasing, and community interaction can simplify how developers share, learn, and collaborate.",
    solution:
      "Built a developer-centric platform that merges features of LinkedIn, GitHub, and Reddit—allowing users to showcase projects, create posts, ask for help, and engage with a technical community in one place.",
    architecture: "Full Stack Web App · Frontend + Backend · Database · Authentication System",
    challenges:
      "Designing a balanced system that supports both professional showcasing and open community interaction while maintaining usability and content relevance.",
    impact:
      "Provides a centralized space for developers to share knowledge, seek help, and build their professional presence without switching across multiple platforms.",
    repoUrl: "https://github.com/ShreeRajShah-dukkin/XHAH",
  },
  {
    id: 3,
    title: "Chattr",
    year: "2025",
    tags: ["Full Stack", "Real-Time Communication", "Networking", "WebSockets"],
    problem:
      "Quick, local communication between devices on the same network often requires installing apps or creating accounts, creating unnecessary friction for simple interactions.",
    insight:
      "For short-lived, local conversations, users value instant access over identity or persistence. Eliminating setup steps can significantly improve usability.",
    solution:
      "Built a lightweight web-based chat application where users can join a shared room via a link and communicate in real-time with any device connected to the same Wi-Fi network, without requiring authentication or installation.",
    architecture: "Node.js · WebSockets · Local Network Communication · Browser-based UI",
    challenges:
      "Ensuring reliable real-time message delivery across devices on the same network while keeping the system simple and requiring zero user setup.",
    impact:
      "Enables instant, frictionless communication across nearby devices, making it useful for quick collaboration, classrooms, or local team interactions.",
    repoUrl: "https://github.com/ShreeRajShah-dukkin/Chattr",
  },
  {
    id: 4,
    title: "PrettyBorders",
    year: "2025",
    tags: ["Desktop App", "Windows Utility", "UI/UX", "System Tools"],
    problem:
      "Managing multiple windows on a desktop can make it difficult to quickly identify the active window, especially in multitasking environments.",
    insight:
      "A subtle visual indicator can significantly improve focus and usability without interrupting workflow, as long as it remains non-intrusive and does not block interactions.",
    solution:
      "Built a lightweight Windows utility that highlights the active window using a clean, click-through border overlay. The tool runs seamlessly in the background without interfering with user input.",
    architecture: "C# · .NET · Windows API · Overlay Rendering",
    challenges:
      "Implementing a click-through overlay that visually tracks the active window in real time without affecting performance or intercepting user interactions.",
    impact:
      "Improves desktop usability by making window focus instantly visible, enhancing productivity in multi-window workflows without adding friction.",
    repoUrl: "https://github.com/ShreeRajShah-dukkin/PrettyBorders",
  },
  {
    id: 5,
    title: "Netflix Clone",
    year: "2024",
    tags: ["Frontend", "UI/UX", "Responsive Design"],
    problem:
      "Understanding how large-scale streaming platforms design intuitive and engaging user interfaces is challenging without hands-on implementation.",
    insight:
      "Recreating an existing, well-designed product like Netflix helps break down complex UI patterns into practical, learnable components such as layout, responsiveness, and visual hierarchy.",
    solution:
      "Built a front-end clone of Netflix that replicates its core UI, including layout structure, content sections, and responsive design, to understand real-world interface design and user experience patterns.",
    architecture: "HTML · CSS · JavaScript",
    challenges:
      "Achieving a visually accurate and responsive layout across different screen sizes while maintaining clean structure and consistent styling.",
    impact:
      "Strengthened understanding of modern UI/UX patterns, responsive design, and frontend structuring by replicating a real-world product interface. :contentReference[oaicite:0]{index=0}",
    repoUrl: "https://github.com/ShreeRajShah-dukkin/NetflixClone",
  },
  {
    id: 6,
    title: "SEO Learning Hub",
    year: "2025",
    tags: ["Frontend", "Personal Knowledge Base", "Content Management"],
    problem:
      "Valuable ideas and psychological insights are often scattered across notes, bookmarks, and different platforms, making them hard to revisit and organize effectively.",
    insight:
      "A simple, centralized, and accessible system can make it easier to store and revisit important concepts, especially when designed for personal usability rather than complexity.",
    solution:
      "Built a lightweight web-based platform to store and organize curated psychological concepts and ideas, allowing access from anywhere with a clean and distraction-free interface.",
    architecture: "HTML · CSS · JavaScript",
    challenges:
      "Designing a simple yet usable structure for organizing content while keeping the interface minimal and easy to navigate.",
    impact:
      "Created a centralized personal knowledge base, improving accessibility and consistency in revisiting and learning key ideas over time.",
    repoUrl: "https://github.com/ShreeRajShah-dukkin/SEO-Learning-physc1001",
  },
  {
    id: 7,
    title: "Developer Portfolio",
    year: "2025",
    tags: ["Frontend", "Personal Branding", "Web Development", "UI/UX"],
    problem:
      "Developers often struggle to present their work, skills, and thinking in a clear and structured way, making it difficult for recruiters to evaluate them quickly.",
    insight:
      "A portfolio is not just a collection of projects but a narrative of problem-solving ability and technical thinking. Clear structure and simplicity improve how work is perceived.",
    solution:
      "Built a personal portfolio website to showcase projects, skills, and technical work in a clean and organized manner, enabling easy navigation and quick understanding for recruiters and non-technical viewers.",
    architecture: "HTML · CSS · JavaScript",
    challenges:
      "Designing a layout that balances simplicity with enough detail to communicate technical depth without overwhelming the viewer and trying to incoperate the physcologyy.",
    impact:
      "Provides a centralized and professional representation of projects and skills, improving visibility and making it easier for recruiters to assess capabilities quickly.",
    repoUrl: "https://github.com/ShreeRajShah-dukkin/Portfolio",
  },
];
