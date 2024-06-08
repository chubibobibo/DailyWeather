//components import
import WeatherCardLg from "../components/WeatherCardLg";
import WeatherCardSm from "../components/WeatherCardSm";

import { toast } from "react-toastify";
// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, createContext } from "react";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

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

  //function to obtain location using browsers geolocation
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
  // console.log(position.latitude);
  // console.log(position.longitude);

  //api
  const apiBase = {
    //current weather condition reading
    // apiUrl:
    //   `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,weather_code`,
    apiUrl: `https://api.open-meteo.com/v1/forecast?latitude=${position.latitude}&longitude=${position.longitude}&current=temperature_2m,is_day,weather_code`,
    // apiKey: "661f40b7510beeb48bf0c439faf87066",
  };

  //obtain weather data using api in render
  useEffect(() => {
    const dataWeather = async () => {
      //geolocation then set state for position
      try {
        await getLocation();
        if (position) {
          const data = await axios.get(`${apiBase.apiUrl}`);
          setWeatherData(data.data);
        }
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.message);
      }
    };
    dataWeather();
  }, [apiBase.apiUrl]); //rerender the page if url changes. url changes with different position

  //date format import
  // .format(LLLL) converts to time to: Saturday, June 8, 2024 10:00 PM
  dayjs.extend(localizedFormat);
  const formattedTime = dayjs(weatherData?.current?.time).format("LLLL");

  return (
    <main className='h-screen'>
      {/* Note: passing 2 values keep it 2 key-value pair to access in the child component*/}
      <WeatherDataContext.Provider
        value={{ value1: weatherData, value2: formattedTime }}
      >
        <WeatherCardLg />
        <WeatherCardSm />
      </WeatherDataContext.Provider>
    </main>
  );
}
export default Index;
