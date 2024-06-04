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

function CardComponents({ label, route }) {
  //isntantiate useNavigation
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Card className='md:w-74 lg:w-96'>
      <CardHeader
        variant='gradient'
        color='blue'
        className='mb-4 grid h-28 place-items-center'
      >
        <Typography variant='h3' color='white'>
          {label}
        </Typography>
      </CardHeader>
      <CardBody className='flex flex-col gap-4'>
        {/* Dynamically render additional text fields if label equals to Register */}
        {label === "Register" && (
          <>
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
          </>
        )}

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
            // className='bg-[#0d47a1]'
            variant='gradient'
            fullWidth
            type='submit'
            color='blue'
          >
            {label}
          </Button>
        )}
        {/* Dynamically change label and href depending on the label passed as props */}
        <Typography variant='small' className='mt-6 flex justify-center'>
          {label === "Login"
            ? "Don't have an account? "
            : "Do you have an account already? "}
          <Typography
            as='a'
            href={route}
            variant='small'
            color='blue-gray'
            className='ml-1 font-bold'
          >
            {label === "Login" ? "Register" : "Login"}
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
export default CardComponents;
