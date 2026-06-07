import bgImage from "../assets/bgImage.png";

export default function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "Tailwind CSS",
        "Material-UI",
        "Framer Motion",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "Postman",
        "Cloudinary",
        "Vercel / Netlify",
        "Render",
        "VS Code",
        "Figma",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen py-16 px-6 md:px-16 
    bg-[#f8f8f8]">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[#546B41] font-semibold tracking-widest mb-3">
          MY SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Technical <span className="text-[#546B41]">Skills</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {skillsData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-3xl p-8 shadow-lg text-white 
            relative overflow-hidden"
          >
            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/45"></div> */}

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#5b8236] mb-6">
                {item.title}
              </h2>

              <ul className="space-y-3">
                {item.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-lg text-black/60 font-medium flex items-center gap-2"
                  >
                    <span className="text-[#A4D07B]">◆</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}