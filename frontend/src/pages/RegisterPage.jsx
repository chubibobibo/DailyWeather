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

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigation, redirect, Form } from "react-router-dom";

//implement action function
export const action = async ({ request }) => {
  const formData = await request.formData(); // Obtain data from form
  const data = Object.fromEntries(formData); // converts data from forms into
  try {
    await axios.post("/api/users/register", data);
    toast.success("User Created");
    return redirect("/login");
  } catch (err) {
    console.log(err);
    toast.error(
      Array.isArray(err?.response?.data?.message)
        ? err.response.data.message[0]
        : err.response.data.message
    );
    return err;
  }
};
function RegisterPage() {
  //instantiate useNavigate
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    // set the height of the whole page to screen
    <main className='h-screen'>
      <section className='flex flex-col items-center justify-center h-full'>
        <Form method='post'>
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
              <Input label='Name' name='name' size='lg' required />
              <Input label='Last Name' name='lastName' size='lg' required />
              <Input label='Email' name='email' size='lg' required />
              <Input label='Password' name='password' size='lg' required />
              <div className='-ml-2.5'>
                <Checkbox label='Remember Me' />
              </div>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button variant='gradient' fullWidth type='submit'>
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
          {/* <section></section> */}
        </Form>
      </section>
    </main>
  );
}
export default RegisterPage;
