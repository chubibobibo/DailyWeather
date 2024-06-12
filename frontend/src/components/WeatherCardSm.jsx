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

//context
import { useContext } from "react";
import { WeatherDataContext } from "../pages/Index";

//weather conditions object
import { weatherCodes, weatherCond } from "../utils/weatherCodes";

function WeatherCardSm() {
  //obtain data from context
  const context = useContext(WeatherDataContext);
  const data = context;

  //obtaining 2 datas from context
  const data1 = data?.value1;
  const data2 = data?.value2;

  //obtain the path of the weather code
  const weatherCode = data1?.current?.weather_code;

  return (
    <section className='flex mx-2 my-4 justify-center md:hidden'>
      <Card className='max-w-[24rem] overflow-hidden bg-[#eeeeee]'>
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 rounded-none flex justify-center'
        >
          <img src={weatherCodes[weatherCode]} alt='weather condition' />
        </CardHeader>
        <CardBody>
          <Typography variant='h4' color='blue-gray'>
            {`Today's Weather: ${weatherCond[weatherCode]}`}
          </Typography>
          <Typography variant='h6' color='blue-gray'>
            {data2}
          </Typography>
          <Typography variant='h6' color='gray'>
            {`Temperature: ${data1?.current?.temperature_2m} C`}
          </Typography>
          {/* <Typography variant='lead' color='gray' className='mt-3 font-normal'>
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography> */}
        </CardBody>
        <CardFooter className='flex items-center justify-between'>
          <div className='flex items-center -space-x-3'></div>
        </CardFooter>
      </Card>
    </section>
  );
}
export default WeatherCardSm;
