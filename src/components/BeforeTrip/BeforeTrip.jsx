import React from 'react';

import './BeforeTrip.css';

function BeforeTrip(props) {
    return (
        <div className='before-trip-visa'>
            <div className='before-visa'>
                <h1>Перед подачей заявления</h1>
                <p>Условия 1</p>
                <p>Условия 2</p>
                <p>Условия 3</p>
                <p>Условия 4</p>
            </div>

            <div className='before-trip'>
                <h1>Перед поездкой</h1>
                <p>Условия 1</p>
                <p>Условия 2</p>
                <p>Условия 3</p>
                <p>Условия 4</p>
            </div>
        </div>
    )
}

export default BeforeTrip;
