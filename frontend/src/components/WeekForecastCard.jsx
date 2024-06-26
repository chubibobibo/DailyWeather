// material tailwind imports
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// implement context
import { useContext } from "react";
import { WeatherDataContext } from "../pages/Index";
//weather code imports
import { weatherCodes, weatherCond } from "../utils/weatherCodes.js";

function WeekForecastCard() {
  // obtain data context
  const context = useContext(WeatherDataContext);
  const data1 = context?.value1; // weather data
  const data2 = context?.value2; // formatted time
  //   console.log(data1);
  //   console.log(data2);
  const weekData = data1?.daily?.weather_code;
  console.log(weekData);
  return (
    <main className='sm:flex-wrap md:flex justify-evenly'>
      {weekData?.map((newWeather) => {
        return (
          <section
            key={newWeather.key}
            className='flex max-w-[25rem] max-h-[25rem] '
          >
            <Card className='mx-4 my-10'>
              <CardHeader color='blue-gray' className='relative h-56'>
                <img
                  src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
                  alt='card-image'
                />
              </CardHeader>
              <CardBody>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  UI/UX Review Check
                </Typography>
                {/* <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography> */}
              </CardBody>
              <CardFooter className='pt-0'>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </section>
        );
      })}
    </main>
  );
}
export default WeekForecastCard;
