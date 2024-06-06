//components import
import WeatherCardLg from "../components/WeatherCardLg";
import WeatherCardSm from "../components/WeatherCardSm";

import { toast } from "react-toastify";
// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, createContext } from "react";

//api
const apiBase = {
  // apiUrl: "http://api.openweathermap.org/data/2.5/",
  apiUrl:
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m,cloud_cover,weather_code",
  apiKey: "661f40b7510beeb48bf0c439faf87066",
};
//context to pass data to components
export const WeatherDataContext = createContext();

function Index() {
  //useState to store coordinates
  const [position, setPosition] = useState({
    longitude: null,
    latitude: null,
  });

  //state for weather data
  const [weatherData, setWeatherData] = useState(null);

  const getLocation = async () => {
    if ("geolocation" in navigator) {
      await navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  };

  //obtain weather data using api in render
  useEffect(() => {
    const dataWeather = async () => {
      //geolocation then set state for position
      await getLocation();
      try {
        if (position) {
          const data = await axios.get(
            `${apiBase.apiUrl}`
            // `${apiBase.apiUrl}/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${apiBase.apiKey}`
            // `${apiBase.apiUrl}/weather?q=London&appid=${apiBase.apiKey}`
          );
          setWeatherData(data.data);
        }
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.message);
      }
    };
    dataWeather();
  }, []);

  return (
    <main className='h-screen'>
      <WeatherDataContext.Provider value={weatherData}>
        <WeatherCardLg />
        <WeatherCardSm />
      </WeatherDataContext.Provider>
    </main>
  );
}
export default Index;
