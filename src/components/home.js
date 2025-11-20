import React from 'react';
import Navbar from './navbar';
import Organization from './organization';
import Main from './main';
import Footer from './footer';
import Team from './team';
import Timetable from './timetable';
import Gallery from './gallery';

const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <Main />
            <Timetable />
            <Organization />
            <Gallery />
            <Team />
            <Footer/>
        </div>
    );
};

export default Home;