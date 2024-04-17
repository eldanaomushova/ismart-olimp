import React from 'react';
import Navbar from './navbar';
import Organization from './organization';
import Main from './main';
import Footer from './footer';
import Team from './team';

const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <Main />
            <Organization />
            <Team />
            <Footer/>
        </div>
    );
};

export default Home;