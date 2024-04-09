import React from 'react';
import '../styles/organization.css';
import im1 from '../images/img1.jpg';
import im2 from '../images/img2.jpg';
import im3 from '../images/img3.png';

const organization = () => {
    return (
        <div className='organization-container' id='organization'>
            <div class="line"></div>
            <p className='text'>Мы приглашаем учеников принять участие в захватывающем конкурсе роботов! Это увлекательное соревнование предоставляет возможность командам студентов проявить свои навыки в конструировании, программировании и стратегическом мышлении.</p>
            <div className='data-container'>
                <div className='container'>
                    <img src={im1} alt="lego ev3" />
                    <h2 className='photo-desc'>LEGO EV3</h2>
                    <div className='info'>
                        <a href='https://drive.google.com/file/d/1isLFoq5XWdJ5YhwMGeB8UwEOXW-WzF_f/view'><button className='types' id='competitions'>Sumo</button></a>
                        <p>Участникам необходимо подготовить автономного робота,
                            способного наиболее эффективно вытолкнуть робота-противника
                            за пределы круга, очерчивающего ринг - за черную линию ринга.</p>
                        <a href='https://drive.google.com/file/d/1sht1u2ARG2bPB4hDJUA3s_zYybE6swzI/view'><button className='types'>Line follower</button></a>
                        <p>Для соревнований роботов участникам необходимо
                            подготовить автономного робота, способного проехать от
                            старта до финиша, следуя черной линии.</p>
                        <a href='https://drive.google.com/file/d/1IkLXBtoFxYEzWkYcxwVbtu5JEHuRhCkw/view'><button className='types'>Кегель ринг</button></a>
                        <p>За наиболее короткое время робот, не выходя более чем на 5 секунд за
                            пределы круга, очерчивающего ринг, должен вытолкнуть
                            расположенные в нем кегли.</p>
                    </div>
            </div>
            <div className='data-container'>
                <div className='container'>
                    <img src={im2} alt="DRONE" />
                    <h2 className='photo-desc'>DRONE</h2>
                    <div className='info'>
                        <a href='https://docs.google.com/document/d/1HFoQ5DoowgoUA8nY-cxrhU3geOj2TNRc/edit#heading=h.gjdgxs'><button className='types'>Соревнования дронов</button></a>
                        <p>Роботу необходимо, перемещаясь по воздуху в ограниченном пространстве, 
                            выполнить задания облета препятствий, пролета вдоль линии, посадки на поверхность.</p>
                        <a href='https://docs.google.com/document/d/1HFoQ5DoowgoUA8nY-cxrhU3geOj2TNRc/edit#heading=h.gjdgxs'><button className='types'>drone 2</button></a>
                        <p>Роботу необходимо, перемещаясь по воздуху в ограниченном пространстве, 
                            выполнить задания облета препятствий, пролета вдоль линии, посадки на поверхность.</p>
                    </div>
                
                </div>
            </div>
            <div className='data-container'>
                <div className='container'>
                    <img src={im3} alt="lego wedo 2.0" />
                    <h2 className='photo-desc'>LEGO WEDO 2.0</h2>
                    <div className='info'>
                        <a href='https://drive.google.com/file/d/131CVESawqDdYHYwIT3TOI5ZojDbBkEBy/view'><button className='types'>Гонки</button></a>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота,
                                способного наиболее быстро проехать от старта до финиша.</p>
                        <a href='https://drive.google.com/file/d/1Yk55Wt9s_2r-ejwIZhTSkmsGlcb464-H/view'><button className='types'>Перетягивания каната</button></a>
                        <p>Участникам необходимо собрать робота, который сможет перетянуть робота соперника на свою половину используя канат.</p>
                        <a href='https://drive.google.com/file/d/1Z59S8FCgoZIqq8khxzKd1htHrTdKcOm7/view?usp=drive_link'><button className='types'>Сборка "Майло" на память и время</button></a>
                        <p>Участникам необходимо успешно собрать робота "Майло" по памяти и на время.</p>
                        <a href='https://drive.google.com/file/d/131CVESawqDdYHYwIT3TOI5ZojDbBkEBy/view'><button className='types'>Вездеход-полоса препятствий</button></a>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота,
                                cпособного наиболее быстро проехать от старта до финиша.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default organization
