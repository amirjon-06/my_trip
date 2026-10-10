import React from 'react';

import './ApplicationProcess.css';

function ApplicationProcess(props) {
    return (
        <section id='application-process'>
            <div className='application-process'>
                <div className='description-application-process'>
                    <h1>Путь от заявки до визы</h1>
                    <p>Четыре шага. Вы заполняете форму один раз — дальше делаем мы.</p>
                </div>
        
                <div className='step'>
                    <h1>1</h1>
                    <h3>Visa Dubai</h3>
                    <p>Выбираете тип визы и заполняете анкету на сайте</p>
                </div>
        
                <div className='step'>
                    <h1>2</h1>
                    <h3>Тур-пакет</h3>
                    <p>При желании добавляете отель и трансфер к визе</p>
                </div>
        
                <div className='step'>
                    <h1>3</h1>
                    <h3>Проверка документов</h3>
                    <p>Наш специалист проверяет анкету и подаёт её в визовый центр</p>
                </div>
        
                <div className='step'>
                    <h1>4</h1>
                    <h3>Виза готова</h3>
                    <p>Получаете визу на почту и можете бронировать билеты</p>
                </div>
            </div>
        </section>
    );
}

export default ApplicationProcess;
