import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const err = useRouteError();
  console.error(err);

  return (
    <div>
      <h1>Error! 404 Page Not Found</h1>
      <p>Please try a different route</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;