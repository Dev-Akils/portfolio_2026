import {
  GraduationCap,
  BookOpen,
  Laptop,
  Pencil,
} from "lucide-react";

const educationData = [
  {
    year: "2021-2023",
    icon: <GraduationCap size={24} />,
    title: "MCA (Master of Computer Applications)",
    college:
      "Manonmanium Sundharanar University - Tirunelveli",
    percentage: "79%",
  },
  {
    year: "2018-2021",
    icon: <Laptop size={24} />,
    title: "BCA (Bachelor of Computer Applications)",
    college:
      "Manonmanium Sundharanar University Constituent College - Kanyakumari",
    percentage: "83%",
  },
  {
    year: "2017-2018",
    icon: <BookOpen size={24} />,
    title: "HSC",
    college:
      "Manonmanium Sundharanar University - Tirunelveli",
    percentage: "79%",
  },
  {
    year: "2015-2016",
    icon: <Pencil size={24} />,
    title: "SSLC",
    college:
      "Manonmanium Sundharanar University - Tirunelveli",
    percentage: "79%",
  },
];

export default function EducationJourney() {
  return (
    <div className="w-screen overflow-hidden min-h-screen bg-[#f8f8f6] px-6 md:px-16 py-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-[4px] text-[#6D7D57] uppercase mb-4">
            Education
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            My Learning <br />
            <span className="text-[#6D7D57]">
              Journey
            </span>
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            A journey of continuous learning and growth
            that has shaped my skills and expertise.
          </p>

          <p className="text-gray-700 leading-8 mb-10">
            Focused on building impactful and user-friendly
            digital experiences through creativity,
            consistency, and hands-on development.
          </p>

          {/* Quote Card */}
          <div className="bg-[#f3f0e7] p-6 rounded-2xl shadow-md max-w-xs">
            <p className="text-gray-600 italic text-sm leading-6">
              “Education is not the learning of facts,
              but the training of the mind to think.”
            </p>

            <p className="mt-4 text-xs text-gray-500">
              — Albert Einstein
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2 relative">
          
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#6D7D57] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-6"
              >
                
                {/* Year */}
                <div className="flex justify-end">
                  <div className="bg-[#7B8D5F] text-white 
                  px-4 py-2 md:px-8 md:py-4 
                  rounded-md shadow-md text-[11px] md:text-lg font-semibold">
                    {item.year}
                  </div>
                </div>

                {/* Icon */}
                <div className="z-10 w-16 h-16 rounded-full border-4 border-[#7B8D5F] bg-white flex items-center justify-center text-[#7B8D5F] shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="bg-[#f5f1e8] p-6 rounded-2xl shadow-md">
                  <h3 className="font-bold text-[12px] md:text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-7 text-[12px] md:text-sm">
                    {item.college}
                  </p>

                  <p className="mt-2 text-[10px] md:text-[15px] font-medium text-[#6D7D57]">
                    Percentage : {item.percentage}
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