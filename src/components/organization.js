import React from 'react';
import '../styles/organization.css';
import img2 from '../images/img2.jpeg';
import img5 from '../images/img5.jpeg';
import wedo from '../images/wedo.jpeg';
import ev3 from '../images/ev3.jpeg';
import { IoDocumentTextOutline, IoLogoYoutube } from "react-icons/io5";

const Organization = () => {
    return (
        <div className='organization-container'>
            <p className='text'>Мы приглашаем учеников принять участие в захватывающем конкурсе роботов! Это увлекательное соревнование предоставляет возможность командам учеников проявить свои навыки в конструировании, программировании и стратегическом мышлении.</p>
            <p className='rules'>Команда должна состоять из 1-3 человек, 1 команда может участвовать максимум в 2 категориях. Просим участников принести на олимпиаду роботов lego ev3, spike или wedo 2.0. Прочтите положения ниже, чтобы ознакомиться с правилами игр.</p>
            <div className='data-container'>
                <div className='container'>
                    <img src={ev3} alt="lego ev3" />
                    <h2 className='photo-desc'>LEGO EV3</h2>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Sumo</h3>
                            <a href='https://drive.google.com/file/d/1isLFoq5XWdJ5YhwMGeB8UwEOXW-WzF_f/view' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/Cq3cHJblTfw' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                            <p>Участникам необходимо подготовить автономного робота,
                                способного наиболее эффективно вытолкнуть робота-противника
                                за пределы круга, очерчивающего ринг - за черную линию ринга.</p>
                        
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Line follower</h3>
                            <a href='https://drive.google.com/file/d/1sht1u2ARG2bPB4hDJUA3s_zYybE6swzI/view' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/OYAcNhoaX34' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                            <p>Для соревнований роботов участникам необходимо
                                подготовить автономного робота, способного проехать от
                                старта до финиша, следуя черной линии.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Кегель ринг</h3>
                            <a href='https://drive.google.com/file/d/1-2RWrnwc8J4zCHITdGUPk9gH9QCUkcqy/view?usp=drive_link' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/f33a-SdjCNk' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                            <p>За наиболее короткое время робот, не выходя более чем на 5 секунд за
                                пределы круга, очерчивающего ринг, должен вытолкнуть
                                расположенные в нем кегли.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Кок-бору</h3>
                            <a href='https://drive.google.com/file/d/1KFknnKECiq-SjbIrDA4h5zLSN710A8TZ/view?usp=sharing' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                            <p>Кок-бору — это симбиоз скачек и игры. Мы предлагаем перенести эту игру на поле состязания
                                роботов. Две команды борются за захват и удерживание максимального количества животных.</p>
                    </div>
                </div>
                    <div className='container'>
                        <img src={img2} alt="DRONE" />
                        <h2 className='photo-desc'>DRONE</h2>
                        <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Соревнования дронов</h3>
                            <a href='https://docs.google.com/document/d/1HFoQ5DoowgoUA8nY-cxrhU3geOj2TNRc/edit#heading=h.gjdgxs' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://www.youtube.com/watch?v=MJmr-wMZApk' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                            <p>Роботу необходимо, перемещаясь по воздуху в ограниченном пространстве, 
                                выполнить задания облета препятствий, пролета вдоль линии, посадки на поверхность.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Дрон-рейсинг</h3>
                            <a href='https://docs.google.com/document/d/1e51Mq1ZV2aiLICJuLX7e-EskqMdnReugwmpDVSTLzdU/edit?usp=sharing' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                            <p>Дроны проходят через трассу с препятствиями, стараясь пройти её как можно быстрее.</p>
                        </div>
                    </div>
                <div className='container'>
                    <img src={img5} alt="Ev3 Mindstorm" />
                    <h2 className='photo-desc'>Миникубок Голдберга</h2>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Миникубок Голдберга</h3>
                            <a href='https://docs.google.com/document/d/1eNlIue8Bmxt-dWnSpmBXW5Zwo_AYG8-IPONBz1CGqK4/edit?usp=sharing' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/QfZEm4kbE9A?si=hkqaxKIC_WxmJj_b' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                        <p>Соревнования Голдберга проводятся с целью популяризации технологического творчества и профессии инженера среди школьников.</p>
                    </div>
                </div>
                <div className='container'>
                    <img src={wedo} alt="lego wedo 2.0" />
                    <h2 className='photo-desc'>LEGO WEDO 2.0</h2>
                    <div className='info'>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Гонка</h3>
                            <a href='https://drive.google.com/file/d/131CVESawqDdYHYwIT3TOI5ZojDbBkEBy/view' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/mPP3Wc_SZqI' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота,
                                способного наиболее быстро проехать от старта до финиша.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Перетягивание каната</h3>
                            <a href='https://drive.google.com/file/d/1xFf2M-KPyiPVyxag1sLmhVK6UJ_ojfm1/view' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/sdhbYD0WvVc?si=r5B0LtA5y6Bq2ERl' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                        <p>Участникам необходимо собрать робота, который сможет перетянуть робота соперника на свою половину используя канат.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Сборка "Майло"</h3>
                            <a href='https://drive.google.com/file/d/1Z59S8FCgoZIqq8khxzKd1htHrTdKcOm7/view?usp=sharing' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/prpGB8BhnVU' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                        <p>Участникам необходимо успешно собрать робота "Майло" по памяти и на время.</p>
                        <div className='name-links'>
                            <h3 className='types' id='competitions'>Вездеход-полоса препятствий</h3>
                            <a href='https://drive.google.com/file/d/1VAfFqzNbloXxPlIesla-Jr043kp2kYow/view?usp=drivesdk' target="_blank" className='doc-link'><IoDocumentTextOutline id='icon'/></a>
                            <a href='https://youtu.be/vbXJSc8UauQ' target="_blank" className='doc-link'><IoLogoYoutube id='icon'/></a>
                        </div>
                        <p>В этом состязании участникам необходимо подготовить автономного мобильного робота,
                                cпособного наиболее быстро проехать от старта до финиша.</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Organization;
