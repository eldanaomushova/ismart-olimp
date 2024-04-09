import React from 'react';
import Navbar from './navbar';
import Organization from './organization';
import Main from './main';

const Home = () => {
    return (
        <div className='container'>
        <Navbar />
        <Main />
        <Organization />

        </div>
    );
};

export default Home;
