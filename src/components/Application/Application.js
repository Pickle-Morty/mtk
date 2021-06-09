import React from 'react';
import './Application.css';
import FormImg from "./img/1.jpg"


function Application() {
    return (
        <div>
            <div className="application">
                    <div className="form-wrapper">
                        <p className="application-title">Отправьте запрос на необходимый товар</p>
                        <p className="application-text">Начните прямо сейчас оптимизировать себестоимость продукта</p>
                        <form action="" method="POST" name="mtkForm">
                            <input type="text" placeholder="ФИО" />
                            <input type="text" placeholder="Телефон"/>
                            <input type="email" placeholder="E-mail"/>
                            <button className="blueBtn" type="submit">Оставить заявку</button>
                        </form>
                       
                    </div>
                    <img className="form-img"/>
            </div>
        </div>
    )
}

export default Application
