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
          <Typography variant='lead' color='gray' className='mt-3 font-normal'>
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className='flex items-center justify-between'>
          <div className='flex items-center -space-x-3'>
            <Tooltip content='Natali Craig'>
              <Avatar
                size='sm'
                variant='circular'
                alt='natali craig'
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80'
                className='border-2 border-white hover:z-10'
              />
            </Tooltip>
            <Tooltip content='Tania Andrew'>
              <Avatar
                size='sm'
                variant='circular'
                alt='tania andrew'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                className='border-2 border-white hover:z-10'
              />
            </Tooltip>
          </div>
          <Typography className='font-normal'>January 10</Typography>
        </CardFooter>
      </Card>
    </section>
  );
}
export default WeatherCardSm;
