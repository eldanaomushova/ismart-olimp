import React from 'react';
import teamData from '../data/teamData';
import '../styles/team.css';
function Team () {
    return(
        <div>
            <h1 id='header'>Наша команда</h1>
            <div className='products-container'>
            {teamData.map((record) => (
                    <div className='box' key={record.id}>
                        <img src={require(`../images/teamimg/${record.name}.jpeg`)} alt={record.name} />
                        <p className='name'>{record.name}</p>
                        <p className='responsibility'>{record.responsibility}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;
