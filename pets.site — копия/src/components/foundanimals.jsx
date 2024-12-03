import React, { useState } from 'react';

import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpeg';


function FoundPets() {
    // Данные о найденных животных (могут быть загружены с API)
    const [pets, setPets] = useState([
        {
            id: 14,
            type: 'Кошка',
            description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.',
            chipNumber: 'ca-001-spb',
            district: 'Василиостровский',
            date: '24-03-2020',
            src: cat
        },
        {
            id: 18,
            type: 'Коза',
            description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.',
            chipNumber: 'go-011-spb',
            district: 'Центральный',
            date: '14-03-2022',
            src: goat
        }
        // Добавьте другие объекты животных при необходимости
    ]);

    return (
        <div>
            <h2 className="text-white bg-primary me-2 text-center">Найденные животные</h2>
            <div className="d-flex flex-row flex-wrap container">
            {pets.map(pet => (
                    <div key={pet.id} className="border card m-3" style={{ minWidth: 300, width: '30%' }}>
                        <img src={pet.src} className="card-img-top" alt={`рисунок ${pet.type}`} style={{ height: '60%', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">{pet.type}</h5>
                            <p className="card-text"><strong>ID:</strong> {pet.id}</p>
                            <p className="card-text"><strong>Описание:</strong> {pet.description}</p>
                            <p className="card-text"><strong>Номер чипа:</strong> {pet.chip}</p>
                            <p className="card-text"><strong>Район:</strong> {pet.district}</p>
                            <p className="card-text"><strong>Дата:</strong> {pet.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoundPets;
