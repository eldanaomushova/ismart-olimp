import React from 'react';
import '../styles/timetable.css';

const timetable = () => {
    const data = [
        { id: 1, name: '8:30', value1: 'Регистрация', value2: '', value3: '', value4:'' },
        { id: 2, name: '9:30', value1: 'Открытие', value2: '', value3: '' , value4:'' },
        { id: 3, name: '10:00', value1: 'Sumo', value2: 'Кубок Голдберга', value3: 'Гонки', value4:'Перетягивание Каната'},
        { id: 4, name: '10:00', value1: 'Дроны', value2: 'Future Creators', value3: 'FTC', value4:''  },
        { id: 5, name: '11:00', value1: 'Сборка "Майло"', value2: 'Вездеход', value3: 'Кок-бору', value4:''  },
        { id: 6, name: '12:00-13:00', value1: 'Обед', value2: '', value3: '' , value4:'' },
        { id: 7, name: '13:00', value1: 'Line Follower', value2: 'Дроны', value3: 'Кегель ринг', value4:''  },
        { id: 8, name: '15:00-16:00', value1: 'Концерт', value2: 'Шоу программа', value3: '', value4:''  },
        { id: 9, name: '16:00', value1: 'Награждение', value2: '', value3: '' , value4:'' },
        { id: 10, name: '16:30', value1: 'Закрытие', value2: '', value3: '', value4:''  },
        { id: 11, name: '17:00', value1: 'Завершение олимпиады', value2: '', value3: '' , value4:'' },
    ];
    return (
    <div className='timetable-conctainer'>
        <h1 id = 'header'>Расписание Олимпиады ISMART 2025</h1>
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
