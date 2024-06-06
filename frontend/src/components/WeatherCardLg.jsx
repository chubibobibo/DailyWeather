//material tailwind imports
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

import { useContext } from "react";
import { WeatherDataContext } from "../pages/Index";

//weather code imports
import { weatherCodes } from "../utils/weatherCodes.js";

function WeatherCardLg() {
  const context = useContext(WeatherDataContext);
  const data = context;

  // console.log(data.hourly.weather_code[0]);
  console.log(context);

  //weatherCodes mapped
  const newWeatherCodes = weatherCodes.map((newCodes) => {
    return newCodes.code;
  });
  console.log(newWeatherCodes);
  // console.log(newWeatherCodes.icon);
  return (
    <section className='hidden md:flex lg:flex'>
      <Card className='w-full max-w-[125rem] max-h-[35rem] bg-[#eeeeee] flex-row mx-2 my-1'>
        <CardHeader
          shadow={false}
          floated={false}
          className='m-0 w-2/5 shrink-0 rounded-r-none bg-[#eeeeee] flex justify-center'
        >
          <img
            // src='../Icons128/fog.png'
            // src={
            //   data && data.hourly.weather_code[0] === 1
            //     ? "../Icons128/partly-cloudy.png"
            //     : "../Icons128/sun-1845.png"
            // }
            // src={weatherCodes.map((newCodes) => {
            //   // console.log(`this is from our object ${newCodes.code}`);
            //   // console.log(data?.hourly?.weather_code[0]);
            //   newCodes.code == data?.hourly?.weather_code[0]
            //     ? `${newCodes.icon}`
            //     : "../Icons128/fog.png";
            // })}
            src={
              newWeatherCodes.includes(data?.hourly?.weather_code[0])
                ? `${newWeatherCodes[0]}`
                : "../Icons128/fog.png"
            }
            alt='card-image'
            className='h-30 w-30 object-cover'
          />
        </CardHeader>
        <CardBody>
          <Typography variant='h6' color='gray' className='mb-4 uppercase'>
            startups
          </Typography>
          <Typography variant='h4' color='blue-gray' className='mb-2'>
            Lyft launching cross-platform service this week
          </Typography>
          <Typography color='gray' className='mb-8 font-normal'>
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
          <a href='#' className='inline-block'>
            <Button variant='text' className='flex items-center gap-2'>
              Learn More
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Button>
          </a>
        </CardBody>
        {/* <section>{data.elevation}</section> */}
      </Card>
    </section>
  );
}
export default WeatherCardLg;
