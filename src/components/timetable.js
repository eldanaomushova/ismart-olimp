import React from 'react';
import '../styles/timetable.css';

const timetable = () => {
    const data = [
        { id: 1, name: '8:30', value1: 'Регистрация', value2: '', value3: '', value4:'' },
        { id: 2, name: '9:30', value1: 'Открытие', value2: '', value3: '' , value4:'' },
        { id: 3, name: '10:00', value1: 'Sumo, Гонки', value2: 'Кубок Голдберга', value3: 'Line Follower', value4:'Перетягивание Каната'},
        { id: 4, name: '11:00', value1: 'Кок-Бору', value2: 'Дроны Програм.', value3: 'Вездеход', value4:'Сборка "Майло"'  },
        { id: 5, name: '13:00', value1: 'Sumo (2ч)', value2: 'Кегель ринг', value3: 'Перетягивание Каната (2ч) ', value4:''  },
        { id: 6, name: '10:00-13:30', value1: 'Выступление', value2: '', value3: '' , value4:'' },
        { id: 7, name: '14:00', value1: 'Кок-Бору (2ч)', value2: 'Кубок Голдберга', value3: 'Дроны Управляемые', value4:''  },
        { id: 8, name: '15:00-16:00', value1: 'Концерт, Шоу программа', value2: '', value3: '', value4:''  },
        { id: 9, name: '16:00', value1: 'Награждение', value2: '', value3: '' , value4:'' },
        { id: 10, name: '16:30', value1: 'Закрытие', value2: '', value3: '', value4:''  },
        { id: 11, name: '17:00', value1: 'Завершение олимпиады', value2: '', value3: '' , value4:'' },
    ];
    return (
    <div className='timetable-conctainer'>
        <h1 id = 'header'>Расписание Олимпиады ISMART 2024</h1>
        <table>
            <tbody>
                {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.value1}</td>
                    <td>{item.value2}</td>
                    <td>{item.value3}</td>
                    <td>{item.value4}</td>
                    <td>{item.value5}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default timetable
