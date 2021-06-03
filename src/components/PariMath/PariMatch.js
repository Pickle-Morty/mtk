import React from 'react';
import Partners from '../Partners/Partners';
import './PariMatch.css';

function PariMatch() {
    return (
        <section className="partnersM">
            <div className="wrapper">
                <div className="partners__title">Нам доверяют более <span>100</span> компаний в Кыргызстане</div>
                <div className="swiper-container">
                            <Partners /> 
                </div>
            </div>
        </section>
    )
}

export default PariMatch
