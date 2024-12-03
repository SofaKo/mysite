import React, { useState } from "react";
import cat from '../images/кошка.jpg';
import goat from '../images/коза.jpeg';
import dog1 from '../images/CAT.jpg';
import hamster from '../images/capibara.jpg';
import parrot from '../images/белка.jpg';
import rat from '../images/mous.jpg';

const Searchforads = () => {
  const [ads] = useState([
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
      type: 'Кот',
      description: 'Потерялся взрослый кот, шотландец. Ласковый, но ам к вам не подойдет.',
      chip: 'dog-123-msk',
      district: 'Московский',
      date: '01-04-2023',
      src: dog1
    },
    {
      id: 25,
      type: 'Капибара',
      description: 'Сбежала капибара. Очень ласковая, выпрашивает шоколадки!.',
      chip: '(нет)',
      district: 'Фрунзенский',
      date: '10-05-2023',
      src: hamster
    },
    {
      id: 28,
      type: 'Белка',
      description: 'Сбежала белка рыжая по кличке Симба.',
      chip: '(нет)',
      district: 'Адмиралтейский',
      date: '20-06-2023',
      src: parrot
    },
    {
      id: 31,
      type: 'Крыса',
      description: 'Сбежала декоративная крыса, черная, с розовыми ушками. Очень дружелюбная.',
      chip: '(нет)',
      district: 'Выборгский',
      date: '25-07-2023',
      src: rat
    },
  ]);

  const [regionInput, setRegionInput] = useState("");
  const [animalTypeInput, setAnimalTypeInput] = useState("");
  const [filteredAds, setFilteredAds] = useState(ads);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAd, setSelectedAd] = useState(null); // Состояние для выбранного объявления
  const adsPerPage = 9;

  const searchAds = () => {
    const filtered = ads.filter((ad) => {
      const matchesRegion = ad.district.toLowerCase().includes(regionInput.toLowerCase());
      const matchesAnimalType = ad.type.toLowerCase().includes(animalTypeInput.toLowerCase());
      return matchesRegion && matchesAnimalType;
    });
    setFilteredAds(filtered);
    setCurrentPage(1);  // Сброс на первую страницу после поиска
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = filteredAds.slice(indexOfFirstAd, indexOfLastAd);

  const totalPages = Math.ceil(filteredAds.length / adsPerPage);

  // Функция для возврата к списку
  const closeAd = () => {
    setSelectedAd(null);
  };

  return (
    <div>
      {/* Панель поиска, которая остается на экране */}
      <div className="search-box text-center text-white bg-primary me-2 p-2">
        <h3>Поиск</h3>
        <div className="d-flex flex-wrap justify-content-center">
          <input
            type="text"
            className="form-control w-25 d-flex flex-wrap justify-content-center me-2"
            placeholder="Район"
            value={regionInput}
            onChange={(e) => setRegionInput(e.target.value)}
          />
          <input
            type="text"
            className="form-control w-25 d-flex flex-wrap justify-content-center me-2"
            placeholder="Вид животного"
            value={animalTypeInput}
            onChange={(e) => setAnimalTypeInput(e.target.value)}
          />
          <button onClick={searchAds} className="btn btn-light me-2">Найти</button>
        </div>
      </div>

      {/* Основной контент */}
      <div>
        {selectedAd ? (
          <div>
           
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
              <div className="card-details d-flex flex-wrap align-items-center border p-2" style={{ width: '90%', height: '500px'}}>
                <div className="image-container" style={{ maxWidth: '100%' }}>
                  <img
                    src={selectedAd.src}
                    alt={`рисунок ${selectedAd.type}`}
                    style={{
                      height: '400px',
                      width: '600px',
                 
                      objectFit: 'cover'
                    }}
                    className="animal-image"
                  />
                </div>
                <div className="text-container ms-4" style={{ maxWidth: '100%' }}>
                  <h5>{selectedAd.type}</h5>
                  <p><strong>ID:</strong> {selectedAd.id}</p>
                  <p><strong>Описание:</strong> {selectedAd.description}</p>
                  <p><strong>Номер чипа:</strong> {selectedAd.chip}</p>
                  <p><strong>Район:</strong> {selectedAd.district}</p>
                  <p><strong>Дата:</strong> {selectedAd.date}</p>
                  <button className="btn btn-primary" onClick={closeAd}>Назад к списку</button>
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
            {/* Список объявлений */}
            <div className="d-flex flex-wrap justify-content-center">
              {filteredAds.length === 0 ? (
                <p className="" style={{ height: '570px' }}>Объявлений не найдено.</p>
              ) : (
                currentAds.map((ad) => (
                  <div key={ad.id} className="card border m-3" style={{ minWidth: 300, width: '30%' }} onClick={() => setSelectedAd(ad)}>
                    <img
                      className="card-img-top"
                      src={ad.src}
                      alt={ad.type}
                      style={{ height: '60%', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{ad.type}</h5>
                      <p className="card-text"><strong>ID:</strong> {ad.id}</p>
                      <p className="card-text"><strong>Описание:</strong> {ad.description}</p>
                      <p className="card-text"><strong>Номер чипа:</strong> {ad.chip}</p>
                      <p className="card-text"><strong>Район:</strong> {ad.district}</p>
                      <p className="card-text"><strong>Дата:</strong> {ad.date}</p>
                    </div>
                  </div>
                ))
              )}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Searchforads;
