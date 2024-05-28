//material tailwind imports
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    // set the height of the whole page to screen
    <main className='h-screen'>
      <section className='flex flex-col items-center justify-center h-full'>
        <Card className='w-96'>
          <CardHeader
            variant='gradient'
            color='gray'
            className='mb-4 grid h-28 place-items-center'
          >
            <Typography variant='h3' color='white'>
              Register
            </Typography>
          </CardHeader>
          <CardBody className='flex flex-col gap-4'>
            <Input label='Email' size='lg' />
            <Input label='Password' size='lg' />
            <div className='-ml-2.5'>
              <Checkbox label='Remember Me' />
            </div>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button variant='gradient' fullWidth>
              Register
            </Button>
            <Typography variant='small' className='mt-6 flex justify-center'>
              Don&apos;t have an account?
              <Typography
                as='a'
                href='/login'
                variant='small'
                color='blue-gray'
                className='ml-1 font-bold'
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
        <section></section>
      </section>
    </main>
  );
}
export default RegisterPage;
