import React from 'react';
import dogImage from '../images/shenok.jpg';
import mouseImage from '../images/мышь.jpg';
import gorillaImage from '../images/котик.jpg';

function Slider() {
    return (
        <main className='w-100' style={{ overflow: 'hidden' }}>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <div
                id="carouselExampleIndicators"
                className="carousel slide bg-success bg-opacity-25 w-100 p-2"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner text-center d-flex align-items-center" style={{ height: '600px' }}>
                    <div className="carousel-item active w-100">
                        <img
                            src={dogImage}
                            className="d-block mx-auto"
                            alt="Собака"
                            style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }}
                        />
                        <h2 className="text-center">Найдена собака</h2>
                        <p>Собака рыжая, была утеряна в Красногвардейском районе</p>
                    </div>
                    <div className="carousel-item w-100">
                        <img
                            src={mouseImage}
                            className="d-block mx-auto"
                            alt="Мышь"
                            style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }}
                        />
                        <h2 className="text-center">Найдена мышь</h2>
                        <p>Мышь рыжая, была утеряна в центральном районе</p>
                    </div>
                    <div className="carousel-item w-100">
                        <img
                            src={gorillaImage}
                            className="d-block mx-auto"
                            alt="Горилла"
                            style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }}
                        />
                        <h2 className="text-center">Найден котик</h2>
                        <p>Котик с короткими лапками, был утерян в Калининском районе</p>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
        </main>
    );
}

export default Slider;
