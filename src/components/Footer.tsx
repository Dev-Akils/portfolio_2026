import akila from '../assets/botanical-capital-letter.png';
import arrow from '../assets/arrow.png'
export default function Footer() {
  return (<>
    {/* Footer */}
    <div className=" mb-1 bg-[#5F7348] rounded-sm p-10 text-white grid grid-cols-1 md:grid-cols-4 gap-10">

      <div>
        <div className='flex gap-5'>
          <img src={akila} className='w-16 h-16' alt="akila" />
          <h2 className="text-2xl gap-1 flex flex-col font-bold mb-4">
            Akila S
            <span className='text-sm font-medium'>Full Stack Dev</span>
          </h2>

        </div>

        <p className="text-sm leading-7 text-gray-200">
          MERN Stack Developer building scalable and
          responsive web applications.

        </p>
        <p className="text-sm leading-7 text-gray-200 ">Building modern and responsive web applications 
          with clean UI, scalable backend systems, and seamless user experiences.</p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-sm text-gray-200 w-52">
          <li className="flex justify-between items-center">
            <span>Home</span>
            <img className="w-2.5 h-2.5" src={arrow} alt="" />
          </li>

          <li className="flex justify-between items-center">
            <span>About Me</span>
            <img className="w-2.5 h-2.5" src={arrow} alt="" />
          </li>

          <li className="flex justify-between items-center">
            <span>Skills</span>
            <img className="w-2.5 h-2.5" src={arrow} alt="" />
          </li>

          <li className="flex justify-between items-center">
            <span>Education</span>
            <img className="w-2.5 h-2.5" src={arrow} alt="" />
          </li>

          <li className="flex justify-between items-center">
            <span>Experience</span>
            <img className="w-2.5 h-2.5" src={arrow} alt="" />
          </li>

          <li className="flex justify-between items-center">
            <span>Projects</span>
            <img className="w-2.5 h-2.5" src={arrow} alt="" />
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold  mb-4">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-3">
          {["React.js", "Node.js", "MongoDB", "Tailwind CSS", "MUI", "Git & Github", "Redux Toolkit", "JavaScript", "TypeScript"].map(
            (tech, index) => (
              <span
                key={index}
                className="bg-white/10 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">
          Newsletter
        </h3>

        <div className="flex bg-white rounded-xl overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 text-black outline-none"
          />

          <button className="bg-[#A4D07B] px-5">
            →
          </button>
        </div>
      </div>
    </div>

  </>)
}