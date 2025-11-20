import React, { useEffect } from 'react';
import '../styles/main.css';

const Main = () => {
    const handleRegstr = () => {
        window.open("https://docs.google.com/forms/u/1/d/e/1FAIpQLScJfkNXAiPlSGQrQSa9K3-xxNmlzaGszmEE-jWp0lOE4-bWCw/viewform", "_blank");
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
        <div className='container' id='start'>
            <div className='main-container'>
                <div className='school-name-container'>
                    <h2 className='school-name'>МЕЖДУНАРОДНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ “САПАТ”</h2>
                </div>
                <div className='ismart-olimp-container'>
                    <h1 className='ismart-olimp'>ISMART OLYMPIAD</h1>
                </div>
                <div className='info2-container'>
                    <h2 className='info1'>Олимпиада по робототехнике</h2>
                    <h2 className='info2'>17 мая 2025 Cambridge school</h2>
                </div>
                {/* <button onClick={handleRegstr} className='results-btn'>Регистрация</button> */}
                <h2 className='free'>Взнос - 350 сом с участника</h2>
                <h2 className='deadline'>Дедлайн: 13 мая 17:00</h2>
            </div>
        </div>
    );
};

export default Main;
