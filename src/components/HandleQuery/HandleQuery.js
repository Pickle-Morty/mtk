import React from 'react';
import HandleQueryimg from './HandleQuery.png';
import './HandleQuery.css';
import { Col, Row } from 'react-bootstrap';
// import { Spring } from 'react-spring/renderprops';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const HandleQuery = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true">
      <div className="MainHandleQuery" id="MainHandleQuery">
        <Row className="HandleQuery">
          <Col
            lg={{ span: 12 }}
            xl={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            className="HandleQuery__text"
          >
            <h2>Тщательная проработка вашего запроса</h2>
            <p>
              Вы сообщаете нам, какой товар хотите экспортировать или
              импортировать. При экспорте – мы выбираем оптимальные условия
              поставки. Если вам необходимо приобрести какой-либо товар, мы
              найдем надежного поставщика и при необходимости поможем
              организовать производство.
            </p>
          </Col>
          <Col
            lg={{ offset: 4, span: 3 }}
            xl={{ offset: 2, span: 4 }}
            md={{ span: 5 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            className="HandleQuery__img"
          >
            <img src={HandleQueryimg} className="HandleQuery__imgelement" />
          </Col>
        </Row>
      </div>
    </ScrollAnimation>
  );
};

export default HandleQuery;
