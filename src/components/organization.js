import React from 'react';
import '../styles/organization.css';
import img2 from '../images/img2.jpeg';
import img5 from '../images/img5.jpeg';
import wedo from '../images/wedo.jpeg';
import ev3 from '../images/ev3.jpeg';


const organization = () => {
    return (
        <div className='organization-container' id='organization'>
            <p className='text'>Мы приглашаем учеников принять участие в захватывающем конкурсе роботов! Это увлекательное соревнование предоставляет возможность командам учеников проявить свои навыки в конструировании, программировании и стратегическом мышлении.</p>
            <div className='data-container'>
                <div className='container'>
                    <img src={ev3} alt="lego ev3" />
                    <h2 className='photo-desc'>LEGO EV3</h2>
                    <div className='info'>
                        <a href='https://drive.google.com/file/d/1isLFoq5XWdJ5YhwMGeB8UwEOXW-WzF_f/view'><button className='types' id='competitions'>Sumo</button></a>
                        <p>Участникам необходимо подготовить автономного робота, способного наиболее эффективно вытолкнуть робота-противника за пределы круга, очерчивающего ринг - за черную линию ринга.</p>
                        <a href='https://drive.google.com/file/d/1sht1u2ARG2bPB4hDJUA3s_zYybE6swzI/view'><button className='types'>Line follower</button></a>
                        <p>Для соревнований роботов участникам необходимо подготовить автономного робота, способного проехать от старта до финиша, следуя черной линии.</p>
                        <a href='https://drive.google.com/file/d/1-2RWrnwc8J4zCHITdGUPk9gH9QCUkcqy/view?usp=drive_link'><button className='types'>Кегель ринг</button></a>
                        <p>За наиболее короткое время робот, не выходя более чем на 5 секунд за пределы круга, очерчивающего ринг, должен вытолкнуть расположенные в нем кегли.</p>
                        <a href='https://drive.google.com/file/d/1KFknnKECiq-SjbIrDA4h5zLSN710A8TZ/view?usp=sharing'><button className='types'>Кок-бору</button></a>
                        <p>Кок-бору — это симбиоз скачек и игры. Мы предлагаем перенести эту игру на поле состязания роботов. Две команды борются за захват и удерживание максимального количества животных.</p>
                    </div>
                </div>
                    <div className='container'>
                        <img src={img2} alt="DRONE" />
                        <h2 className='photo-desc'>DRONE</h2>
                        <div className='info'>
                            <a href='https://docs.google.com/document/d/1HFoQ5DoowgoUA8nY-cxrhU3geOj2TNRc/edit#heading=h.gjdgxs'><button className='types'>Дрон-полоса препятствий</button></a>
                            <p>Роботу необходимо, перемещаясь по воздуху в ограниченном пространстве, выполнить задания облета препятствий, пролета вдоль линии, посадки на поверхность.</p>
                            <a href='https://docs.google.com/document/d/1e51Mq1ZV2aiLICJuLX7e-EskqMdnReugwmpDVSTLzdU/edit?usp=sharing'><button className='types'>Дрон-рейсинг</button></a>
                            <p>Дроны проходят через трассу с препятствиями, стараясь пройти её как можно быстрее.</p>
                        </div>
                    </div>
                <div className='container'>
                    <img src={img5} alt="Ev3 Mindstorm" />
                    <h2 className='photo-desc'>Миникубок Голдберга</h2>
                    <div className='info'>
                        <a href='https://docs.google.com/document/d/1W9JqOyXu8GK--V2S_HjPnqfUjJtPQQhGx_w3MlprFew/edit?usp=sharing'><button className='types'>Миникубок Голдберга</button></a>
                        <p>Соревнования Голдберга проводятся с целью популяризации технологического творчества и профессии инженера среди школьников.</p>
                    </div>
                </div>
                <div className='container'>
                    <img src={wedo} alt="lego wedo 2.0" />
                    <h2 className='photo-desc'>LEGO WEDO 2.0</h2>
                    <div className='info'>
                        <a href='https://drive.google.com/file/d/131CVESawqDdYHYwIT3TOI5ZojDbBkEBy/view'><button className='types'>Гонки</button></a>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота, способного наиболее быстро проехать от старта до финиша.</p>
                        <a href='https://drive.google.com/file/d/1xFf2M-KPyiPVyxag1sLmhVK6UJ_ojfm1/view'><button className='types'>Перетягивания каната</button></a>
                        <p>Участникам необходимо собрать робота, который сможет перетянуть робота соперника на свою половину используя канат.</p>
                        <a href='https://drive.google.com/file/d/1Z59S8FCgoZIqq8khxzKd1htHrTdKcOm7/view?usp=drive_link'><button className='types'>Сборка "Майло"</button></a>
                        <p>Участникам необходимо успешно собрать робота "Майло" по памяти и на время.</p>
                        <a href='https://drive.google.com/file/d/1VAfFqzNbloXxPlIesla-Jr043kp2kYow/view'><button className='types'>Вездеход-полоса препятствий</button></a>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота, cпособного наиболее быстро проехать от старта до финиша.</p>
                    </div>
                    </div>
            </div>
            
        </div>
    )
}

export default organization
