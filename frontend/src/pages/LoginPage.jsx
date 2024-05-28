import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <main>
      <p>No Account yet?</p>
      <Link to='/register'>Click here to register</Link>
    </main>
  );
}
export default LoginPage;
