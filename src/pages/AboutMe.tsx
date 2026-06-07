import icon1 from "../assets/aboutMe/code_blocks_24dp_78A75A_FILL0_wght400_GRAD0_opsz24 1.png";
import icon2 from "../assets/aboutMe/encrypted_24dp_78A75A_FILL0_wght400_GRAD0_opsz24 1.png";
import icon3 from "../assets/aboutMe/rocket_launch_24dp_78A75A_FILL0_wght400_GRAD0_opsz24 1.png";
import icon4 from "../assets/aboutMe/terminal_24dp_78A75A_FILL0_wght400_GRAD0_opsz24 1.png";
import girl from "../assets/aboutMe/girl 1.png";

export default function AboutMe() {
  const features = [
    {
      icon: icon1,
      title: "Full Stack Development",
      desc: "Building robust web applications using MERN stack.",
    },
    {
      icon: icon2,
      title: "Authentication & Security",
      desc: "Implementing secure login and authorization systems.",
    },
    {
      icon: icon3,
      title: "Scalable Applications",
      desc: "Creating responsive and scalable enterprise solutions.",
    },
    {
      icon: icon4,
      title: "Clean Code Structure",
      desc: "Writing reusable and maintainable frontend architecture.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row 
    items-center justify-center px-6 md:px-16 py-10 gap-10 bg-white">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mt-5 px-2">
        
        <p className="text-[#546B41] font-semibold tracking-widest mb-3">
          GET TO KNOW ME
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-[#546B41]">Me</span>
        </h2>

        <div className="space-y-5 text-gray-700 leading-8 text-base md:text-lg">
          <p>
            MERN Stack Developer with 2.5+ years of experience
            building scalable and responsive web applications
            using React.js, Redux Toolkit, Tailwind CSS,
            Material-UI, Node.js, Express.js, and MongoDB.
          </p>

          <p>
            Worked on multiple domain-based projects including
            education platforms, insurance management systems
            with e-payment modules, and real estate applications.
          </p>

          <p>
            Experienced in developing admin panels, dashboards,
            authentication systems, REST API integration,
            reusable components, and responsive UI architecture.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12"
              />

              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={girl}
          alt="About Me"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
}