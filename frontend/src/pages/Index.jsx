//components import
import WeatherCardLg from "../components/WeatherCardLg";
import WeatherCardSm from "../components/WeatherCardSm";

import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";
import axios from "axios";

//loader function to call api
export const loader = async () => {
  try {
    const weatherData = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=London"
    );
    return weatherData;
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
    return err;
  }
};

function Index() {
  //loader data
  const data = useLoaderData();
  console.log(data);
  return (
    <main className='h-screen'>
      <WeatherCardLg />
      <WeatherCardSm />
    </main>
  );
}
export default Index;
