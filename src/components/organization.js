import React from 'react';
import '../styles/organization.css';
import img2 from '../images/img2.jpeg';
import img6 from '../images/img6.jpeg'
import wedo from '../images/wedo.jpeg';
import ev3 from '../images/ev3.jpeg';
import { IoDocumentTextOutline } from "react-icons/io5";

const Organization = () => {
    return (
        <div className='organization-container'>
            <p className='text'>Мы приглашаем учеников принять участие в захватывающем конкурсе роботов! Это увлекательное соревнование предоставляет возможность командам учеников проявить свои навыки в конструировании, программировании и стратегическом мышлении.</p>
            <p className='rules'>Команда должна состоять из 1-3 человек, 1 команда может участвовать максимум в 2 категориях. Просим участников принести на олимпиаду роботов lego ev3, spike или wedo 2.0. Прочтите положения ниже, чтобы ознакомиться с правилами игр.</p>
            <div className='data-container'>
                <div className='container'>
                    <img src={ev3} alt="lego ev3" />
                    <h2 className='photo-desc'>Lego EV3</h2>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Sumo</h3>
                            <a href='https://docs.google.com/document/d/1mGAaXGzinFxYEuiIyOpNNKlnmArcX3Rr6-WzNBFhJbQ/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                            <p>Участникам необходимо подготовить автономного робота,
                                способного наиболее эффективно вытолкнуть робота-противника
                                за пределы круга, очерчивающего ринг - за черную линию ринга.</p>
                        
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Line follower</h3>
                            <a href='https://docs.google.com/document/d/1VoiLSAT8fUms875Xj6CaFDIzw2D_hVb3WspKxLrrfVw/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                            <p>Для соревнований роботов участникам необходимо
                                подготовить автономного робота, способного проехать от
                                старта до финиша, следуя черной линии.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Кегель ринг</h3>
                            <a href='https://docs.google.com/document/d/1FZllivv2dluY7nPKlj5f6ZJlnYjOZoV6y5vYm8eBNXA/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                            <p>За наиболее короткое время робот, не выходя более чем на 5 секунд за
                                пределы круга, очерчивающего ринг, должен вытолкнуть
                                расположенные в нем кегли.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Кок-бору</h3>
                            <a href='https://docs.google.com/document/d/1-WwPaTGK1IcOs3TenuiwQtfaweTi5MHrS64PJBuU0MQ/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                            <p>Кок-бору — это симбиоз скачек и игры. Мы предлагаем перенести эту игру на поле состязания
                                роботов. Две команды борются за захват и удерживание максимального количества животных.</p>
                    </div>
                </div>
                    <div className='container'>
                        <img src={img2} alt="DRONE" />
                        <h2 className='photo-desc'>Дроны</h2>
                        <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Полоса препятствий</h3>
                            <a href='https://docs.google.com/document/u/0/d/1e51Mq1ZV2aiLICJuLX7e-EskqMdnReugwmpDVSTLzdU/mobilebasic' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                            <p>Дроны проходят через трассу с препятствиями, стараясь пройти её как можно быстрее.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Подъем-посадка</h3>
                            <a href='https://docs.google.com/document/d/1XRaWj3a7IFLcKaxVk_wSNAk1EZEJVpXwDfW_ocwhCZw/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                            <p>Дрон должен взлететь, пролететь по заданной траектории и безопасно приземлиться в ограниченную зону. Точность посадки и стабильность полёта оцениваются судьями.</p>
                        </div>
                    </div>
                
                <div className='container'>
                    <img src={wedo} alt="lego wedo 2.0" />
                    <h2 className='photo-desc'>Lego Wedo 2.0</h2>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Перетягивание каната</h3>
                            <a href='https://docs.google.com/document/d/1oCvXufswdp6Q4oyjBNkz4oJ3733ZbmdkeaKOUdAzBJQ/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                        <p>Участникам необходимо собрать робота, который сможет перетянуть робота соперника на свою половину используя канат.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Гонки</h3>
                            <a href='https://docs.google.com/document/d/1a8MVlZfoAiqVtruntxLSY1SZUXhTcVjNMwqKNn1Jxcc/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота,
                                способного наиболее быстро проехать от старта до финиша.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Сборка "Майло" на память и время</h3>
                            <a href='https://docs.google.com/document/d/1Y4vjwJmfjw3ZywhjtzvfjYKvjlwabZQDxk2XUCQ2kPk/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                        <p>Участникам необходимо успешно собрать робота "Майло" по памяти и на время.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Вездеход-полоса препятствий</h3>
                            <a href='https://docs.google.com/document/d/17f5QGpsULJmxGQHXwaidMTP5YDAt2GlSrwiCJvpgI00/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота,
                                cпособного наиболее быстро проехать от старта до финиша.</p>
                    </div>
                    </div>
                <div className='container'>
                    <img src={img6} alt="lego wedo 2.0" />
                    <h2 className='photo-desc'>Future Creators</h2>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Future Creators</h3>
                            <a href='https://docs.google.com/document/d/18tnOwMlCvgsMuIXOOTZt03myCmbTi0H4ImAKjmNsvgw/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                        <p>Команды создают инновационные проекты, объединяя технологии, дизайн и креативное мышление для решения реальных задач.</p>
                    </div>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Машина Голдберга</h3>
                            <a href='https://docs.google.com/document/d/1eNlIue8Bmxt-dWnSpmBXW5Zwo_AYG8-IPONBz1CGqK4/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                        <p>Соревнования Голдберга проводятся с целью популяризации технологического творчества и профессии инженера среди школьников.</p>
                    </div>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>FTC (First Tech Challenge)</h3>
                            <a href='https://docs.google.com/document/d/1IxUDBnBwIatI-KyYDJr35OM33jhLMKqQcTDq2Cu3RMk/edit?usp=sharing' target="_blank" rel="noreferrer" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                        </div>
                        <p>Участники должны спроектировать, построить и представить своих роботов на основе темы, предоставленной IROC. Нет ограничений по материалам или размеру, что позволяет участникам в полной мере выразить свою креативность и инновации.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Organization;
