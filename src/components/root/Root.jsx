
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto'>
           {/* header */}
            <Header/>
            {/*  */}
              <Outlet></Outlet>
            {/* footer */}
             <Footer/> 
        </div>
    );
};

export default Root;