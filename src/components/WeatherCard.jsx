import {
  WiNightClear,
  WiCloud,
  WiDaySunny,
  WiRain,
  WiSnow
} from "react-icons/wi";

import { motion } from "framer-motion";
import { useState } from "react";

function WeatherCard({ weather, setWeather }) {

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {

    try {

      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {

        setError(data.message);
        setWeather(null);

      }

      else {

        setWeather(data);

      }

    }

    catch {

      setError("Something went wrong");
      setWeather(null);

    }

    finally {

      setLoading(false);

    }

  }

  let weatherIcon = <WiNightClear />;

  if (weather?.weather?.[0]?.main === "Clear")
    weatherIcon = <WiDaySunny />;

  else if (weather?.weather?.[0]?.main === "Clouds")
    weatherIcon = <WiCloud />;

  else if (weather?.weather?.[0]?.main === "Rain")
    weatherIcon = <WiRain />;

  else if (weather?.weather?.[0]?.main === "Snow")
    weatherIcon = <WiSnow />;

  return (

    <motion.div

      initial={{ opacity: 0, y: 100 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 1, type:"spring", bounce:0.5 }}

      // className="w-[40px] p-10 bg-white/20 rounded-3xl backdrop-blur-xl shadow-2xl"
      className="w-[90%] w-[450px] p-10 bg-white/20 rounded-3xl backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-500"

    >

      <div className="text-center">

        <div className="text-yellow-300 text-8xl mx-auto animate-pulse">

          {weatherIcon}

        </div>

        <input

          type="text"

          placeholder="Enter city"

          value={city}

          onChange={(e) => setCity(e.target.value)}

          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              handleSearch();
            }
          }}

          className="w-full bg-white/20 p-4 rounded-2xl text-white outline-none mb-8 placeholder-gray-300 focus:ring-2 focus:ring-cyan-400"

        />

        <button

          onClick={handleSearch}

          className="
          bg-blue-500
            w-full
            mb-8
            text-white 
            p-4
            rounded-2xl
            shadow-[0_0_30px-cyan]
            hover:scale-105
            hover:bg-cyan-400
            duration-300
            
            "

        >

          Search

        </button>

        {

          loading &&

          <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>

        }

        {

          error &&

          <h1 className="text-red-400 mt-5">

            {error}

          </h1>

        }

        {

          weather &&

          <>

            <h2 className="text-white mt-5">
              <h2 className="text-white">
                🕰️ {new Date().toLocaleTimeString()}
              </h2>
              {new Date().toDateString()}
            </h2>

            <h1 className="text-white text-5xl font-bold mt-5">

              {weather.name}

            </h1>

            <motion.h1  

            initial={{ scale:0 }}
            animate={{ scale:1 }}
            transition={{
              duration:0.8
            }}
            
            className="text-white text-7xl mt-5">

              {weather.main.temp}°C

            </motion.h1>

            <h2 className="text-gray-300 text-2xl mt-5 capitalize">

              {weather.weather[0].description}
              <hr className="mt-5 border-white/30" />

            </h2>

            <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:0.5}}
            className="mt-8 text-white grid grid-cols-2 gap-4 text-sm">

              <h3>

                💧 Humidity : {weather.main.humidity}%

              </h3>

              <h3 className="mt-2">

                🌬 Wind : {weather.wind.speed} km/h

              </h3>

              <h3 className="mt-2">

                🌡 Feels Like : {weather.main.feels_like}°C

              </h3>

              <h3 className="mt-2">

                🌍 Country : {weather.sys.country}

              </h3>

              <h3 className="mt-2">
               ⏱️ Longitude : {weather.coord.lon}
              </h3>

              <h3 className="mt-2">
               ⏱️ Latitude : {weather.coord.lat}
              </h3>

              <h3 className="mt-2">
                ⬆️ Max Temp : {weather.main.temp_max}°C
              </h3>

              <h3 className="mt-2">
                ⬇️ Min Temp : {weather.main.temp_min}°C
              </h3>

              <h3 className="mt-2">
                🌡️ Pressure : {weather.main.pressure} hPa 
              </h3>

              <h3 className="mt-2">
                👀 Visibility : {(weather.visibility/1000).toFixed(1)} km
              </h3>

              <h3 className="mt-2">
                🌄 Sunrise : {
                  new Date(weather.sys.sunrise*1000).toLocaleTimeString()
                }
              </h3>

              <h3 className="mt-2">
                🌇 Sunset : {
                  new Date(weather.sys.sunset*1000).toLocaleTimeString()
                }
              </h3>

            </motion.div>

          </>

        }

      </div>

    </motion.div>

  );

}

export default WeatherCard;