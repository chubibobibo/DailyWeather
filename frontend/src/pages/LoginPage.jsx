import { toast } from "react-toastify";
import axios from "axios";
import { redirect, Form } from "react-router-dom";

//import components
import CardComponents from "../components/CardComponents";

//action function to submit login
export const action = async ({ request }) => {
  const formData = await request.formData(); //obtain data from form
  const data = Object.fromEntries(formData); // converts data to object
  try {
    await axios.post("api/users/login", data);
    return redirect("/");
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

function LoginPage() {
  return (
    <main className='h-screen'>
      <section className='flex flex-col items-center justify-center h-full'>
        <Form method='post'>
          <CardComponents label={"Login"} route={"/register"} />
        </Form>
      </section>
    </main>
  );
}
export default LoginPage;
