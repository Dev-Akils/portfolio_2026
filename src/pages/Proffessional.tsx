import {
  BriefcaseBusiness,
  Code2,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";

const experienceData = [
  {
    date: "Sep 2025 - Present",
    icon: <BriefcaseBusiness size={22} />,
    title: "Web Developer - Present",
    company: "Fute Services- Bangalore",
    desc: "Architect and develop scalable real estate applications with structured, maintainable UI architecture.",
  },
  {
    date: "Jan 2025 - Apr 2025",
    icon: <Code2 size={22} />,
    title: "Software Engineer - 4 months",
    company: "TecData Pvt. Ltd- Chennai",
    desc: "Engineered a secure E-Pay administrative module for processing and managing client financial records. ",
  },
  {
    date: "Jan 2024 - Nov 2024",
    icon: <MonitorSmartphone size={22} />,
    title: "Junior Developer - 1.2 years",
    company: "Kairaa Tech Pvt. Ltd- Chennai",
    desc: "Built an educational web platform with student enrollment, login authentication, and course management features.",
  },
  {
    date: "Aug 2022 - Nov 2022",
    icon: <Rocket size={22} />,
    title: "Frontend Developer Intern - 4 months",
    company: "Sparkz Tech Pvt. Ltd- Tirunelveli",
    desc: "Contribute to frontend design using React with Bootstrap for E-commerce site.",
  },
];

export default function ProfessionalJourney() {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f6] px-6 md:px-16 py-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-[4px] uppercase text-[#6D7D57] mb-4">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            My Professional <br />
            <span className="text-[#6D7D57]">
              Journey
            </span>
          </h2>

          <p className="text-gray-700 leading-8 mb-8">
            A journey of learning, development, and
            hands-on experience building scalable and
            user-friendly digital products.
          </p>

          {/* Quote Card */}
          <div className="bg-[#f3f0e7] p-5 rounded-2xl shadow-md max-w-xs">
            <p className="text-sm italic text-gray-600 leading-6">
              “Choose a job you love, and you will never
              have to work a day in your life.”
            </p>

            <p className="mt-4 text-xs text-gray-500">
              — Confucius
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="lg:col-span-2 relative">
          
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#6D7D57] -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-6"
              >
                
                {/* Date */}
                <div className="flex justify-end">
                  <div className="bg-[#7B8D5F] text-white 
                  px-3  md:px-6 py-3 rounded-md shadow-md text-sm md:text-base
                   font-medium">
                    {item.date}
                  </div>
                </div>

                {/* Icon */}
                <div className="z-10 w-14 h-14 rounded-full border-4 border-[#7B8D5F] bg-white flex items-center justify-center text-[#7B8D5F] shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="bg-[#f5f1e8] p-2 md:p-5 rounded-2xl shadow-md">
                  <h3 className="font-bold text-sm md:text-lg mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[#6D7D57] font-medium  text-[11px] md:text-sm mb-3">
                    {item.company}
                  </p>

                  <p className="text-gray-700 text-[11px] md:text-sm leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}