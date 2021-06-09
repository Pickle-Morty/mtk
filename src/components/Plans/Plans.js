import React from 'react';
import PlansImg from './img/2.jpg';
import './Plans.css';
import { Col, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Plans = () => {
  return (
    <>
      <Row >
        <h2 className="Plans__title" >Наше будущее</h2>
      </Row>
      <Row className="Plans" style={{ width: '100%' }}>
        <Col
          xl={{ span: 5 }}
          lg={{ span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__firstCol Plans__card "
        >
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce="true">
            <p className="Plan__text">Анализ проблем и возможностей при внедрении системы цифровой маркировки и прослеживаемости товаров</p>
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 6 }}
          lg={{ offset: 2, span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__secondCol Plans__card Plans__img1"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={200}
          >
          
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="Plans2" style={{ width: '100%' }}>
        <Col
          xl={{ span: 6 }}
          lg={{ span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__firstCol Plans__card Plans__img2"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={500}
          >

          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 5 }}
          lg={{ offset: 2, span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__secondCol2 Plans__card"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={700}
          >
            <p className="Plan__text">Разработка системных подходов к введению маркировки товаров, варианты развития системы маркировки товаров средствами идентификации в ЕАЭС</p>
          </ScrollAnimation>
        </Col>

      </Row>
      <Row className="Plans" style={{ width: '100%' }}>
        <Col
          xl={{ span: 5 }}
          lg={{ span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__firstCol  Plans__card"
        >
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce="true">
            <p className="Plan__text">Выявление проблем информирования и консультирования предпринимательского сообщества.</p>
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 6 }}
          lg={{ offset: 2, span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__secondCol Plans__card Plans__img3"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={200}
          >

          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="Plans2" style={{ width: '100%' }}>
        <Col
          xl={{ span: 6 }}
          lg={{ span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__firstCol2 Plans__card Plans__img4"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={500}
          >

          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 5 }}
          lg={{ offset: 2, span: 4 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="Plans__secondCol2 Plans__card"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={700}
          >
            <p className="Plan__text">Оптимизация сотрудничества внутри бизнес-сообщества с соответствующими государственными органами и партнерами по ЕАЭС.</p>
          </ScrollAnimation>
        </Col>

      </Row>
      
    </>
  );
};

export default Plans;
