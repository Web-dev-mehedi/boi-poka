import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-6 text-center">
      <h1 className="text-5xl text-[#232323]">Oops!</h1>
      <p className="text-3xl text-[#a1a1a1]">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
       <Link className="btn btn-warning" to="/"> go home</Link>
    </div>
  );
};

export default ErrorPage;
