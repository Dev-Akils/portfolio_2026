import icon1 from "../assets/icons/Rectangle 5.png";
import icon2 from "../assets/icons/image 1.png";
import icon3 from "../assets/icons/image 2.png";
import icon4 from "../assets/icons/image 3.png";
import icon5 from "../assets/icons/image 4.png";

export default function HeroDetails() {
//   const icons = [icon1, icon2, icon3, icon4, icon5];

  return (
    <div className="bg-white py-2">
      <div className="flex 
       flex-wrap 
       justify-center
       items-center
        gap-8">
        {/* {icons.map((icon, index) => (
          <div
            key={index}
            className="w-7 h-7 flex items-center justify-center 
            rounded-xl shadow-md hover:scale-110 transition duration-300"
          >
            <img
              src={icon}
              alt={`icon-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))} */}



       

           <div
            // key={index}
            className="w-5 h-5 flex items-center justify-center 
            rounded-xl shadow-md hover:scale-110 transition duration-300"
          >
            <img
              src={icon2}
            //   alt={`icon-${index}`}
              className="w-full h-full object-cover"
            />
          </div>


           <div
            // key={index}
            className="w-4 h-4 flex items-center justify-center 
            rounded-xl shadow-md hover:scale-110 transition duration-300"
          >
            <img
              src={icon3}
            //   alt={`icon-${index}`}
              className="w-full h-full object-cover"
            />
          </div>


          <div
            // key={index}
            className="w-5 h-5 flex items-center justify-center 
            rounded-xl shadow-md hover:scale-110 transition duration-300"
          >
            <img
              src={icon4}
            //   alt={`icon-${index}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            // key={index}
            className="w-4 h-4 flex items-center justify-center 
            rounded-xl shadow-md hover:scale-110 transition duration-300"
          >
            <img
              src={icon5}
            //   alt={`icon-${index}`}
              className="w-full h-full object-contain"
            />
          </div>


           <div
            // key={index}
            className="w-5 h-5 flex items-center justify-center 
            rounded-xl shadow-md hover:scale-110 transition duration-300"
          >
            <img
              src={icon1}
            //   alt={`icon-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
      </div>
    </div>
  );
}