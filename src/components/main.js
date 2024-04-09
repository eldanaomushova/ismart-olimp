import React from 'react';
import '../styles/main.css'
import Navbar from './navbar';
import Organization from './organization';

const Main = () => {
    return (
        <div className='container'>
            <div className='main-container'>
                <div className='school-name-container'>
                    <h2 className='school-name'>МЕЖДУНАРОДНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ “САПАТ”</h2>
                </div>
                <div className='ismart-olimp-container'>
                    <h1 className='ismart-olimp'>ISMART OLYMPIAD</h1>
                </div>
                <div className='info-container'>
                    <h2 className='info'>Олимпиада по робототехнике</h2>
                </div>
                <div className='info2-container'>
                    <h2 className='info2'>11 мая 2024 Cambridge school</h2>
                </div>
                <button className='results-btn'>Результаты 2023</button>
            </div>
        </div>
    );
};

export default Main;
