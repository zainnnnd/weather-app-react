import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Star from "./components/Star";
import Moon from "./components/Moon";
import Cloud from "./components/Cloud";
import Rain from "./components/Rain";
import Snow from "./components/Snow";
import Sun from "./components/Sun";
import Lightning from "./components/Lightning"

function App() {
  const [weather, setWeather] = useState(null);
  const theme=weather?.weather?.[0]?.main;

  return (
    // <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-blue-950 to-indigo-950">
    <div className={`
      min-h-screen flex justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden relative px-4

      ${
        theme==="Clear"?
        "bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-300"
        :
        theme==="Clouds"?
        "bg-gradient-to-br from-gray-500 via-slate-700 to-gray-900"
        :
        theme==="Rain"?
        "bg-gradient-to-br from-slate-900 via-blue-950  to-black"
        :
        theme==="Snow"?
        "bg-gradient-to-br from-blue-100 via-slate-300 to-white"
        :
        "bg-gradient-to-br from-black via-blue-950 to-indigo-950"
      }
    `}>
      <Star />
      <Cloud />
      <Moon />
      {
        theme === "Clear"  && <Sun />
      }

      {
        theme==="Rain" && <Lightning />
      }
      
      {
        theme==="Rain" &&<Rain />
      }

      {
        theme==="Snow" && <Snow />
      }

      <WeatherCard
        weather={weather}
        setWeather={setWeather}
      />

    </div>
  );
}

export default App;