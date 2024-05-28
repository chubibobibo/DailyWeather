import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const errorData = useRouteError();
  console.log(errorData);
  return (
    <main>
      ErrorPage
      <h2>{errorData.error.message}</h2>
      <h3>{errorData.error.stack}</h3>
      <Link to='/'>Click to go back Home</Link>
    </main>
  );
}
export default ErrorPage;
