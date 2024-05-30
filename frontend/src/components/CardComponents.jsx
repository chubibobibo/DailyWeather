//material tailwind imports
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
  Button,
} from "@material-tailwind/react";

import { useNavigation } from "react-router-dom";

//component imnports
import TextInput from "./TextInput";

function CardComponents() {
  //isntantiate useNavigation
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Card className='w-96'>
      <CardHeader
        variant='gradient'
        color='blue'
        className='mb-4 grid h-28 place-items-center'
      >
        <Typography variant='h3' color='white'>
          Register
        </Typography>
      </CardHeader>
      <CardBody className='flex flex-col gap-4'>
        <TextInput
          label={"Name"}
          type={"text"}
          name={"name"}
          size={"lg"}
          required={true}
        />
        <TextInput
          label='Last Name'
          type='text'
          name='lastName'
          size='lg'
          required={true}
        />
        <TextInput
          label='Email'
          type='email'
          name='email'
          size='lg'
          required={true}
        />
        <TextInput
          label='Password'
          type='password'
          name='password'
          size='lg'
          required={true}
        />
        <div className='-ml-2.5'>
          <Checkbox label='Remember Me' />
        </div>
      </CardBody>
      <CardFooter className='pt-0'>
        {isSubmitting ? (
          <Button variant='gradient' fullWidth type='submit' loading={true}>
            Submitting...
          </Button>
        ) : (
          <Button
            variant='gradient'
            fullWidth
            type='submit'
            className='bg-[#fdf8f6]'
          >
            Register
          </Button>
        )}

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
  );
}
export default CardComponents;
