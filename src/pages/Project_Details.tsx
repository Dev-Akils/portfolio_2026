import { useState } from "react";
import {
    ExternalLink,

    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";


const companyProjects = [
    {
        title: "Insurance Management",
        desc: "Admin dashboard with payment integration.",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
        title: "Real Estate Platform",
        desc: "Property listing and management application.",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    },
    {
        title: "CRM Dashboard",
        desc: "Responsive dashboard with analytics.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
     {
        title: "CRM Dashboard",
        desc: "Responsive dashboard with analytics.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
     {
        title: "CRM Dashboard",
        desc: "Responsive dashboard with analytics.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
     {
        title: "CRM Dashboard",
        desc: "Responsive dashboard with analytics.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
     {
        title: "CRM Dashboard",
        desc: "Responsive dashboard with analytics.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
];

const selfProjects = [
    {
        title: "Portfolio Website",
        desc: "Personal portfolio using React & Tailwind.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
        title: "Task Manager",
        desc: "CRUD application with authentication.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
        title: "Weather App",
        desc: "Weather forecast app using API integration.",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
];

export default function Projects() {
    const [selected, setSelected] =
        useState("Company Projects");

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const projects =
        selected === "Company Projects"
            ? companyProjects
            : selfProjects;

    const nextProject = () => {
        setCurrentIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    const prevProject = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="w-full min-h-screen bg-[#f8f8f6] px-6 md:px-16 py-20">

            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 mb-14">

                {/* Left Content */}
                <div>
                    <p className="text-sm tracking-[4px] uppercase text-[#6D7D57] mb-3">
                        PROJECTS
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Projects I’ve <br />
                        <span className="text-[#6D7D57]">
                            Worked On
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-5 max-w-lg leading-8">
                        Showcasing professional company projects
                        and self-developed applications built using
                        MERN stack technologies.
                    </p>
                </div>

                {/* Right Controls */}
                <div className="flex flex-col gap-5">

                    {/* Dropdown */}
                    <select
                        value={selected}
                        onChange={(e) => {
                            setSelected(e.target.value);
                            setCurrentIndex(0);
                        }}
                        className="bg-[#6D7D57] text-white px-5 py-3 rounded-xl outline-none"
                    >
                        <option>Company Projects</option>
                        <option>Self Projects</option>
                    </select>

                    {/* Prev Next Buttons */}
                    <div className="flex gap-4 justify-end">

                        <button
                            onClick={prevProject}
                            className="w-12 h-12 rounded-full border border-[#6D7D57] text-[#6D7D57] flex items-center justify-center hover:bg-[#6D7D57] hover:text-white transition"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={nextProject}
                            className="w-12 h-12 rounded-full bg-[#6D7D57] text-white flex items-center justify-center hover:scale-105 transition"
                        >
                            <ChevronRight />
                        </button>

                    </div>
                </div>
            </div>

            {/* Project Card */}
            <div className="bg-white rounded-3xl 
      overflow-hidden shadow-xl max-w-5xl mx-auto">

                <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-[400px] object-cover"
                />

                <div className="p-8">

                    <h3 className="text-3xl font-bold mb-4">
                        {currentProject.title}
                    </h3>

                    <p className="text-gray-600 leading-8 mb-8">
                        {currentProject.desc}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-5">

                        <button className="bg-[#6D7D57] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition">
                            Live Demo
                            <ExternalLink size={18} />
                        </button>

                        <button className="border border-[#6D7D57] text-[#6D7D57] px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#6D7D57] hover:text-white transition">
                            GitHub
                            <FaGithub size={18} />
                        </button>

                    </div>
                </div>

            </div>


            {/* Project Numbers */}
            <div className="flex gap-3 justify-end items-center flex-wrap">

                {projects.slice(0, 3).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-10 h-10 rounded-full text-sm font-medium transition
      ${currentIndex === index
                                ? "bg-[#6D7D57] text-white"
                                : "border border-[#6D7D57] text-[#6D7D57]"
                            }`}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </button>
                ))}

                {projects.length > 4 && (
                    <span className="text-[#6D7D57] text-xl">
                        ...
                    </span>
                )}

                {projects.length > 3 && (
                    <button
                        onClick={() => setCurrentIndex(projects.length - 1)}
                        className={`w-10 h-10 rounded-full text-sm font-medium transition
      ${currentIndex === projects.length - 1
                                ? "bg-[#6D7D57] text-white"
                                : "border border-[#6D7D57] text-[#6D7D57]"
                            }`}
                    >
                        {String(projects.length).padStart(2, "0")}
                    </button>
                )}
            </div>
        </div>
    );
}