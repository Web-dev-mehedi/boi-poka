
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto'>
           {/* header */}
            <Header/>
               <div className='w-11/12 mx-auto min-h-screen'>
                    {/*  */}
                      <Outlet></Outlet>
                    {/* footer */}
               </div>
             <Footer/> 
        </div>
    );
};

export default Root;