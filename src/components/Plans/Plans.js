import React from 'react';
import PlansImg from './Line.svg';
import './Plans.css';
import { Col, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Plans = () => {
  return (
    <>
      <Row className="Plans__title">
        <Col
          lg={{ offset: 4, span: 6 }}
          xl={{ offset: 5, span: 6 }}
          md={{ offset: 3, span: 7 }}
          sm={{ offset: 2, span: 9 }}
          className="Plans__titleCol"
        >
          <h2></h2>
          <img src={PlansImg} />
        </Col>
      </Row>
      <Row className="Plans" style={{ width: '100%' }}>
        <Col
          xl={{ span: 4 }}
          lg={{ span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__firstCol"
        >
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce="true">
            <h3>Маркировка товаров</h3>
            
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 4 }}
          lg={{ offset: 1, span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__secondCol"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={200}
          >
            <h3>Поставка оборудования </h3>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="Plans2" style={{ width: '100%' }}>
        <Col
          xl={{ span: 4 }}
          lg={{ span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__firstCol2"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={500}
          >
            <h3>Техническая поддержка на производствах</h3>
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 4 }}
          lg={{ offset: 1, span: 4  }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__secondCol2"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={700}
          >
            <h3>Услуги бухгалтерского учета</h3>
          </ScrollAnimation>
        </Col>

      </Row>
    </>
  );
};

export default Plans;
