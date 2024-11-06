import banner from "../assets/img1.png";
import wave from  "../assets/wave.png";
import { Link } from "react-router-dom";

const Plans = () => {
   let data = [
    {
      name: "BLUEPRINT TO SIZE",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-blueprint-to-size.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Transform",
      gender: "Female, Male",
      duration:"4 weeks",
     
    },
    {
      name: "3 WEEKS 2 SIZE",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-3weeks2size.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Build Muscle",
      gender: "Female, Male",
      duration:"3 weeks",
      
    },
    {
      name: "SHORTCUT TO SHRED",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-shortcuttoshred.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Transform",
      gender: "Female, Male",
      duration:"3 weeks",
     
    },
    {
      name: "ULTIMATE 30-DAY FITNESS",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ultimate-30day-fitness.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Build Muscle",
      gender: "Female, Male",
      duration:"3 weeks",
    
    },
    {
      name: "IRON EVERY DAY",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ironeveryday.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Build Muscle",
      gender: "Male",
      duration:"4 weeks",
     
    },
    {
      name: "STRONGER THAN YESTERDAY",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-stronger-than-yesterday-2.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Lose Fat ",
      gender: "Male",
      duration:"5 weeks",
    
    },
    {
      name: "POWER BODYBUILDING",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-power-bodybuilding.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Build Muscle",
      gender: "Female, Male",
      duration:"3 weeks",
   
    },
    {
      name: "START HERE YOUR NEW YEAR",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-start-here-your-new-year.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Lose Fat",
      gender: "Female",
      duration:"1 weeks",
      
    },
    {
      name: "LEAN BODY",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-leanbody.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Lose Fat",
      gender: "Female",
      duration:"4 weeks",
     
    },
    {
      name: "IRON EVERY DAY",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ironeveryday.jpg",
      desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
      type:"Build Muscle",
      gender: "Male",
      duration:"4 weeks",
     
    },
    
  ];

  return (
    <div className="w-full ">
      <div className="mx-auto">
        {/* Banner Section */}
        <div className="relative flex flex-col items-center justify-center h-[70vh] space-y-5 bg-gradient-to-b from-gray-700 to-black overflow-hidden">
          <h1 className="text-white mt-12 text-4xl md:text-5xl lg:text-6xl">Plans</h1>
          <nav className="text-white">
            <ul className="flex space-x-3">
              <li className="transition transform hover:scale-105">
                <Link to="/">Home</Link>
              </li>
              <li className="transition transform hover:scale-105">
                <Link to="/our-services">Plans</Link>
              </li>
            </ul>
          </nav>
          <img
            src={banner}
            className="absolute w-[200px] md:w-[350px] lg:w-[400px] xl:w-[600px] right-0"
            alt="Banner"
          />
          <img
            src={wave}
            className="absolute top-[-400px] opacity-20"
            alt="Wave"
          />
          <img
            src={banner}
            className="absolute w-[200px] md:w-[350px] lg:w-[400px] xl:w-[600px] left-0 transform scale-x-[-1]"
            alt="Banner Mirror"
          />
        </div>

        {/* Plans Section */}
        <div className="flex justify-center py-8 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 max-w-screen-xl">
            {data.map((item, index) => (
              <div key={index} className="max-w-xs  mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-4 text-center text-white">
                  <h2 className="text-sm font-bold uppercase">{item.name}</h2>
                  <p className="mt-1 text-blue-500 text-sm">Workout Plan</p>
                  <p className="mt-2 mb-2 text-xs">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center px-4 py-2 text-white text-sm bg-gray-950 rounded-b-lg">
                  <span><i className="fas fa-trophy"></i> {item.type}</span>
                  <span><i className="fas fa-person-half-dress"></i> {item.gender}</span>
                  <span><i className="far fa-clock"></i> {item.duration}</span>
                </div>
                <div className="flex justify-center py-3">
                  <Link to={`/plans/${item.name}`}>
                    <button className="px-4 py-2 bg-blue-600 text-xs font-bold text-white uppercase rounded-lg hover:bg-white hover:text-blue-600">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
