export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  url?: string;
  skills: string[];
  summary: string;
};

export const certifications: Certification[] = [
  {
    slug: "Hack2Skill- Google Solution Challenges",
    title: "Hack2Skill- Google Solution Challenges",
    issuer: "Top 105 Teams (among 16,000+). Hack2Skill ",
    year: "2024",
    credentialId: "2025H2S01GSC-T200252",
    url: "https://certificate.hack2skill.com/legacy/2025H2S01GSC-T200252",
    skills: ["React", "Amazon RDS PostgreSQL", "Node.js", "Express.js"],
    summary:
      "We built AidAlert, an AI-powered platform designed to help streamline disaster prediction and emergency response—leveraging tech to save time, lives, and resources when it matters most.",
  },
  {
    slug: "AI Fluency: Framework and Foundations",
    title: "AI Fluency: Framework and Foundations",
    issuer: "ANTHROPIC",
    year: "2026",
    credentialId: "Course Completion Certificate",
    url: "/certificates/certificate-anthropic.pdf",
    skills: ["GenAI", "Delegation", "AI Fluency"],
    summary:
      "The AI Fluency Frameworks— four interconnected competencies (Delegation, Description, Discernment, and Diligence) — enables more effective, efficient, ethical, and safe human-AI collaboration, regardless of which new AI models or tools emerge.",
  },
  {
    slug: "React JS Certification",
    title: "React JS Certification",
    issuer: "LearnTube.ai",
    year: "2025",
    credentialId: "React-JS-Certification",
    url: "/certificates/React_JS_Kaushani_Certificate.pdf",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    summary:
      "Comprehensive understanding of React.js, including components, state management, and best practices.",
  },
  {
    slug: "German A1 Course Completion",
    title: "German A1 Course Completion",
    issuer: "Goethe Institut",
    year: "2023",
    credentialId: " A1 Course Completion",
    url: "/certificates/GermanA1.pdf",
    skills: ["German", "Language Learning"],
    summary:
      "Completion of the Goethe Institut's A1 German course, demonstrating foundational language skills.",
  },
];