import bgImage from "../assets/HeroSection.png";

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="poppins-font h-screen w-full bg-cover bg-center flex items-center px-6 md:px-16 text-white"
    >
      <div className="max-w-2xl">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm Akila
        </h1>

        <p className="text-xl md:text-2xl font-medium mb-6">
          MERN Stack Developer | React.js Developer
        </p>

        <p className="text-base md:text-lg leading-8 mb-6 text-gray-200">
          MERN Stack Developer specializing in React.js,
          Node.js, Express.js, and MongoDB.
          Passionate about building responsive and scalable
          web applications.
        </p>

        <p className="text-sm md:text-base text-gray-300 leading-7">
          2.5+ years of experience building scalable admin
          dashboards, responsive web applications, and REST
          API integrations.
        </p>

      </div>
    </div>
  );
}