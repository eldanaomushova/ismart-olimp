import React from 'react';
import Navbar from './navbar';
import Organization from './organization';
import Main from './main';
import Footer from './footer';
import Team from './team';
import Timetable from './timetable';

const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <Main />
            <Timetable />
            <Organization />
            <Team />
            <Footer/>
        </div>
    );
};

export default Home;