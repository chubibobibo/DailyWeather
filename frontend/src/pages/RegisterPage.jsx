import { toast } from "react-toastify";
import axios from "axios";
import { redirect, Form } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

//import components
import CardComponents from "../components/CardComponents";

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
  //custom theme
  const customTheme = {
    component: {
      // defaultProps: { ... },
      // valid: { ... },
      styles: {
        color: {
          blue: "#1a237e",
        },
      },
    },
  };

  return (
    // set the height of the whole page to screen
    <main className='h-screen'>
      <section className='flex flex-col items-center justify-center h-full'>
        <Form method='post'>
          <ThemeProvider value={customTheme}>
            <CardComponents label={"Register"} route={"/login"} />
          </ThemeProvider>
        </Form>
      </section>
    </main>
  );
}
export default RegisterPage;
