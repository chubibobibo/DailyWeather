import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    <main>
      <p>Do you have an account already?</p>
      <Link to='/login'>Click here to login</Link>
    </main>
  );
}
export default RegisterPage;
