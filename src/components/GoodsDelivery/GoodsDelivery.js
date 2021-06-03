import React from 'react';
import GoodsDeliveryImg from './GoodsDelivery.svg';
import './GoodsDelivery.css';
import { Col, Row } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const GoodsDelivery = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true">
      <div className="MainGoodsDelivery">
        <Row className="MainGoodsDelivery__row">
          <Col
            lg={{ span: 12 }}
            xl={{ span: 6 }}
            md={{ span: 12 }}
            className="MainGoodsDelivery__text"
          >
            <h2>Доставка товаров «под ключ»</h2>
            <p>
              Мы организуем доставку любых грузов в минимальные сроки. Ваш товар
              будет упакован, растаможен, застрахован и отправлен в вашу страну
              с набором всех необходимых документов.
            </p>
          </Col>
          <Col
            lg={{ offset: 4, span: 3 }}
            xl={{ offset: 2, span: 4 }}
            md={{ span: 5 }}
            className="MainGoodsDelivery__img"
          >
            <img src={GoodsDeliveryImg} />
          </Col>
        </Row>
      </div>
    </ScrollAnimation>
  );
};

export default GoodsDelivery;
