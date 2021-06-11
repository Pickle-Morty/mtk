import React from 'react';
import PlansImg1 from './img/1.jpg';
import PlansImg2 from './img/2.jpg';
import PlansImg3 from './img/3.jpg';
import PlansImg4 from './img/4.jpg';
import './Plans.css';
import { Col, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Plans = () => {
  return (
    <>
      <Row >
        <h2 className="Plans__title" >Наше будущее</h2>
      </Row>
      <div className="container">
        <div className="Plans__wrapper1">
          <div className="Plans__col"><p className="plan__text">Анализ проблем и возможностей при внедрении системы цифровой маркировки и прослеживаемости товаров</p></div>
          <div className="Plans__col"><img src={PlansImg1} alt="" className="PlansImg" /></div>
        </div>
        <div className="Plans__wrapper2">
          <div className="Plans__col"><p className="plan__text">Разработка системных подходов к введению маркировки товаров, варианты развития системы маркировки товаров средствами идентификации в ЕАЭС</p></div>
          <div className="Plans__col"><img src={PlansImg2} alt="" className="PlansImg" /></div>
        </div>
        <div className="Plans__wrapper1">
          <div className="Plans__col"><p className="plan__text">Выявление проблем информирования и консультирования предпринимательского сообщества.</p></div>
          <div className="Plans__col"><img src={PlansImg3} alt="" className="PlansImg" /></div>
        </div>
        <div className="Plans__wrapper2">
          <div className="Plans__col"><p className="plan__text">Оптимизация сотрудничества внутри бизнес-сообщества с соответствующими государственными органами и партнерами по ЕАЭС.  </p></div>
          <div className="Plans__col"><img src={PlansImg4} alt="" className="PlansImg" /></div>
        </div>
      </div>
    </>
  );
};

export default Plans;
