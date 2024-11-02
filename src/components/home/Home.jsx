import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Books from '../books/books';

const Home = () => {

    const data = useLoaderData();
    return (
        <div>
            <h1 className='text-center text-5xl font-bold playFair py-10'>Books : {data.length}</h1>
           <Books books={data} />
        </div>
    );
};

export default Home;