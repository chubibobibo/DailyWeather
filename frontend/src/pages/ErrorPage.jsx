import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const errorData = useRouteError();
  console.log(errorData);
  return (
    <main>
      {/* //implement image if error is 404 */}
      {errorData.status === 404 ? (
        <>
          <section>
            <img
              className='h-96 w-screen rounded-lg object-contain object-center '
              src='/src/assets/404.jpg'
              alt='404'
            />
          </section>
        </>
      ) : (
        <section>
          <p>Something went wrong</p>
          <p>{errorData.error.message}</p>
        </section>
      )}
      <section className='flex justify-center'>
        <Link to='/'>Click to go back Home</Link>
      </section>
    </main>
  );
}
export default ErrorPage;
