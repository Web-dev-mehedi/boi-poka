import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Books from "../books/books";
import heroImg from "../../assets/pngwing 1.png";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="py-20">
      <div className=" bg-[#1313131a] rounded-2xl mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse mx-auto py-20 px-6 gap-y-6">
          <figure className="md:w-5/12 mx-auto ">
            <img src={heroImg} className="w-full rounded-lg h-full" />
          </figure>
          <div className=" md:w-10/12 lg:w-7/12  mx-auto space-y-9 text-left">
            <h1 className="text-6xl font-bold playFair font-bolt leading-snug">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/listed-books" className="btn bg-[#23BE0A] px-7 py-3 text-white hover:text-black">
              View The List
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-center text-5xl font-bold playFair py-10">
        Books : {data.length}
      </h1>
      <Books books={data} />
    </div>
  );
};

export default Home;
