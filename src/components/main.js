import React, { useEffect } from 'react';
import '../styles/main.css';

const Main = () => {
    const handleRegstr = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScKR8yVMH_huauSrgHYZxj43OqkrWvNWdfvbCYuchow64CSLA/viewform", "_blank");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 0) {
                window.scrollTo(0, 0); 
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
        <div className='container'>
            <div className='main-container'>
                <div className='school-name-container'>
                    <h2 className='school-name'>МЕЖДУНАРОДНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ “САПАТ”</h2>
                </div>
                <div className='ismart-olimp-container'>
                    <h1 className='ismart-olimp'>ISMART OLYMPIAD</h1>
                </div>
                <div className='info2-container'>
                    <h2 className='info1'>Олимпиада по робототехнике</h2>
                    <h2 className='info2'>11 мая 2024 Cambridge school</h2>
                </div>
                <button onClick={handleRegstr} className='results-btn'>Регистрация</button>
            </div>
        </div>
    );
};

export default Main;
