import React, { useState } from 'react';

import cat from '../images/кошка.jpg';
import goat from '../images/коза.jpeg';
import dog1 from '../images/собака.jpg';
import hamster from '../images/мышь.jpg';
import parrot from '../images/capibara.jpg';
import rat from '../images/белка.jpg';


const animals = [
    {
        id: 14,
        type: 'Кошка',
        description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.',
        chip: 'ca-001-spb',
        district: 'Василиостровский',
        date: '24-03-2020',
        src: cat
    },
    {
        id: 18,
        type: 'Коза',
        description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.',
        chip: 'go-011-spb',
        district: 'Центральный',
        date: '14-03-2022',
        src: goat
    },
    {
        id: 22,
        type: 'Собака',
        description: 'Потерялась собака, миниатюрная, коричневого цвета. Отзывчивая, дружелюбная.',
        chip: 'dog-123-msk',
        district: 'Московский',
        date: '01-04-2023',
        src: dog1
    },
    {
        id: 25,
        type: 'Крыса',
        description: 'Сбежала крыса, черная, любит бананы.',
        chip: '(нет)',
        district: 'Фрунзенский',
        date: '10-05-2023',
        src: hamster
    },
    {
        id: 28,
        type: 'Капибара',
        description: 'Пропала капибара. Большая и лсковая, выпрашивает шоколадки".',
        chip: '(нет)',
        district: 'Адмиралтейский',
        date: '20-06-2023',
        src: parrot
    },
    {
        id: 31,
        type: 'Белка',
        description: 'Пропала ручная белка, кличка Симба, может спрятаться в капюшоне.',
        chip: '(нет)',
        district: 'Выборгский',
        date: '25-07-2023',
        src: rat
    }
];

// Функция для сортировки по дате в убывающем порядке
const sortedAnimals = animals.sort((a, b) => new Date(b.date) - new Date(a.date));

function CardPats() {
    const [email, setEmail] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6; // Количество карточек на одной странице
    const [selectedAnimal, setSelectedAnimal] = useState(null); // Состояние для выбранного животного

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing with ${email}`);
    };

    // Индексы карточек для текущей страницы
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = sortedAnimals.slice(indexOfFirstCard, indexOfLastCard);

    // Количество страниц
    const totalPages = Math.ceil(sortedAnimals.length / cardsPerPage);

    // Функции для смены страниц
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Функция для открытия карточки питомца
    const openAnimalCard = (animal) => {
        setSelectedAnimal(animal);
    };

    // Функция для возврата к списку
    const closeAnimalCard = () => {
        setSelectedAnimal(null);
    };

    return (
        <div>
            {/* Если животное выбрано, показываем его карточку, иначе слайдер, список животных и подписку */}
            {selectedAnimal ? (
               <div>
               <div className="search-box text-center text-white bg-primary me-2 p-2">
                 <h3>Карточка объявления</h3>
               </div>
         
               <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
              <div className="card-details d-flex flex-wrap align-items-center border p-2" style={{ width: '90%', height: '500px'}}>
                   <div className="image-container" style={{ maxWidth: '100%' }}>
                     <img
                       src={selectedAnimal.src}
                       alt={`рисунок ${selectedAnimal.type}`}
                       style={{
                        height: '400px',
                        width: '600px',
                         objectFit: 'cover'
                       }}
                       className="animal-image"
                     />
                   </div>
                   <div className="text-container ms-4" style={{ maxWidth: '100%' }}>
                     <h5>{selectedAnimal.type}</h5>
                     <p><strong>ID:</strong> {selectedAnimal.id}</p>
                     <p><strong>Описание:</strong> {selectedAnimal.description}</p>
                     <p><strong>Номер чипа:</strong> {selectedAnimal.chip}</p>
                     <p><strong>Район:</strong> {selectedAnimal.district}</p>
                     <p><strong>Дата:</strong> {selectedAnimal.date}</p>
                     <button className="btn btn-primary" onClick={closeAnimalCard}>Назад к списку</button>
                   </div>
                 </div>
               </div>
             
               {/* CSS медиа-запросы */}
               <style jsx>{`
                 @media (max-width: 768px) {
                   .card-details {
                     flex-direction: column;
                     text-align: center;
                   }
             
                   .image-container {
                     max-width: 100%;
                     margin-bottom: 20px;
                   }
             
                   .animal-image {
                     max-height: 300px;
                     width: auto;
                   }
             
                   .text-container {
                     margin-left: 0;
                   }
                 }
               `}</style>
             </div>
             
            ) : (
                <>
                   

                    {/* Список карточек */}
                    <div>
                        <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
                        <div className="d-flex flex-wrap justify-content-center">
                            {currentCards.map(animal => (
                                <div key={animal.id} className="border card m-3" style={{ minWidth: 300, width: '30%' }} onClick={() => openAnimalCard(animal)}>
                                    <img src={animal.src} className="card-img-top" alt={`рисунок ${animal.type}`} style={{ height: '60%', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{animal.type}</h5>
                                        <p className="card-text"><strong>ID:</strong> {animal.id}</p>
                                        <p className="card-text"><strong>Описание:</strong> {animal.description}</p>
                                        <p className="card-text"><strong>Номер чипа:</strong> {animal.chip}</p>
                                        <p className="card-text"><strong>Район:</strong> {animal.district}</p>
                                        <p className="card-text"><strong>Дата:</strong> {animal.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Пагинация */}
                        <nav aria-label="pagination" className="m-auto">
                            <ul className="pagination pagination-lg justify-content-center">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={() => paginate(index + 1)}
                                        >
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

               
                 
                 
                </>
            )}
        </div>
    );
}

export default CardPats;
