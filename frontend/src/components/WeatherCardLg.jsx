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
import { weatherCodes, weatherCond } from "../utils/weatherCodes.js";

function WeatherCardLg() {
  const context = useContext(WeatherDataContext);
  const data = context;
  console.log(data);
  const codeData = data?.current?.weather_code; // save response from API to var to use as key in weatherCodes
  console.log(codeData);
  // console.log(weatherCodes?.[0]); //acess key in object if key is int

  return (
    <section className='hidden md:flex lg:flex'>
      <Card className='w-full max-w-[125rem] max-h-[35rem] bg-[#eeeeee] flex-row mx-2 my-1'>
        <CardHeader
          shadow={false}
          floated={false}
          className='m-0 w-2/5 shrink-0 rounded-r-none bg-[#eeeeee] flex justify-center'
        >
          <img
            src={weatherCodes?.[codeData]} //acess key in object if key is int
            alt='card-image'
            className='h-30 w-30 object-contain m-2'
          />
        </CardHeader>
        <CardBody>
          <Typography variant='h4' color='blue-gray' className='mb-2'>
            {weatherCond?.[codeData]}
          </Typography>
          <Typography variant='h6' color='gray' className='mb-4 uppercase'>
            Temperature: {data?.current?.temperature_2m} C
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
