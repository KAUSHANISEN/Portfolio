import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/Hack2skill-Certificate (1).png"; 
import p7 from "@/assets/aidalert1.png";
import p8 from "@/assets/aidalert2.png";
import hero from "@/assets/hero-noir.jpg";
import tf from "@/assets/taskflow1.png";
import tf2 from "@/assets/taskflow2.png";
import tf3 from "@/assets/taskflow3.png";
import vdo from "@/assets/Medi1.gif";
import vdo2 from "@/assets/vdocall.gif";
import vdo3 from "@/assets/Medi2.gif";


export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  client: string;
  timeline: string;
  img: string;
  span: string;
  summary: string;
  overview: string[];
  roles: string[];
  stack: string[];
  gallery: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "Aid-Alert",
    title: "Aid-Alert",
    tag: "Disaster Management System",
    year: "2024",
    client: "Hack2Skill Google Solution Challenges Hackathon",
    timeline: "Jul 2024 — Sep 2024",
    img: p1,
    span: "row-span-2",
    summary:
      "AidAlert is an AI‑powered, centralized disaster response & inventory system. By integrating real‑time data from OpenWeather, Open‑Meteo, NASA, and Gemini APIs.",
    overview: [
      "Problem Statement- Disaster Management – Lack of Proper Response and Relay Mechanisms in India.",
      "we delivered- Proactive Forecasts (\"possible heavy rainfall,\" \"cyclone incoming\"), Instant Alerts & Safety Guidelines tailored to each event, SOS Emergency Button (\"Need Help?\") for users to report disasters by type & severity, Localized Risk Dashboard showing percentage‑based risk in users’ areas",
      "Role‑Based Panels - NGO Panel for viewing, adding, and confirming resource donations, Admin Panel for user management, inventory tracking, incident logs, and AI risk analysis",
    ],
    roles: ["Tech Lead", "UI/UX Designer", "Frontend Developer"],
    stack: ["React", "Next.js", "Node.js", "Express.js", "Amazon RDS PostgreSQL", "AWS EC2 instance", "ngnix", "Vercel"],
    gallery: [p8, p7, p6],
    githubUrl: "https://github.com/udayan-majumder/AidAlert", 
    demoUrl: "https://aid-alert.vercel.app/",
  },
  {
    slug: "Medi-Mitra",
    title: "Medi-Mitra",
    tag: "Healthcare Application",
    year: "2025",
    client: "Smart India Hackathon",
    timeline: "Sept — Nov 2025",
    img: p2,
    span: "",
    summary:
      "Comprehensive healthcare solution that bridges the gap between patients, doctors, and pharmacies through cutting-edge technology — making healthcare more connected, accessible, and efficient.",
    overview: [
      "Multi-Role Platform: Patients (Access consultations, symptom checker, pharmacy locator) Doctors (Manage appointments, conduct video consultations) Pharmacies (Handle inventory, fulfill prescriptions).",
      "AI-Powered Features: Voice-enabled symptom checker (English & Hindi), Smart pharmacy recommendations based on location, Real-time medicine availability tracking.",
      "Key Features: Multilingual support (English/Hindi), Video consultations with doctors AI symptom analysis with voice input, Real-time pharmacy stock tracking Prescription upload & management, Location-based medicine finder, Complete inventory management for pharmacies",
      "Test Credentials: Patient: user1@gmail.com, Doctor: doctor1@gmail.com, Pharmacy: pharmacy1@gmail.com, Password: 12345678 (same for all test accounts)",
      "Making healthcare accessible to everyone, especially in underserved communities, by connecting all stakeholders in one unified platform. Built with love for better healthcare accessibility. ",
    ],
    roles: ["Frontend Developer", "UI/UX Designer"],
    stack: ["Next.JS", "React", "Node.JS", "Express.JS", "TailWindCSS", "PostgreSQL", "Socket.io", "Cloudinary"],
    gallery: [vdo, vdo2, vdo3],
    githubUrl: "https://github.com/udayan-majumder/Medi_Mitra", 
    demoUrl: "https://lnkd.in/p/dVMy9jEv",
  },
  {
    slug: "Task-Manager",
    title: "Task Manager",
    tag: "Task Management Application",
    year: "2026",
    client: "Brinavv Technologies Pvt. Lmtd.",
    timeline: "Feb — Mar 2026",
    img: p3,
    span: "row-span-2",
    summary:
      "A complete React frontend for the MERN Task Management System, built with React, React Router, and Tailwind CSS. All data is persisted in localStorage—no backend required.",
    overview: [
            "Local Storage Keys- taskflow_users – Registered users, taskflow_user – Current logged-in user, taskflow_token – Auth token,taskflow_projects_<userId> – Projects and tasks per user =======",
            "Features include Authentication: Login, Register, Logout (stored in localStorage), Protected Routes: Auth-guarded dashboard and app sections, User Profile: View and update profile, Projects: Create, Read, Update, Delete projects, Tasks: Full CRUD for tasks under projects, Task Status: Todo, In Progress, Done, Task Priority: Low, Medium, High, Dashboard: Project list and task statistics",
            "This project is the frontend implementation of a Task Management System built using React. The application provides an intuitive and responsive user interface for managing projects and tasks efficiently. It focuses on seamless navigation, clean component architecture, and a modern UI design.",
    ],
    roles: ["Frontend Developer", "UI/UX Designer"],
    stack: ["React", "Vite", "React Router", "Tailwind CSS", "localStorage"],
    gallery: [tf, tf2, tf3],
  },
  
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);