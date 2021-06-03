import React from 'react';
import QualityControlImg from './QualityControl.svg';
import './QualityControl.css';
import { Col, Row } from 'react-bootstrap';

const QualityControl = () => {
  return (
    <Row className="QualityControl" style={{ width: '100%' }}>
      <Col
        lg={{ offset: 3, span: 3 }}
        xl={{ offset: 1, span: 4 }}
        md={{ span: 5 }}
        sm={{ span: 5 }}
        className="QualityControl__img"
      >
        <img src={QualityControlImg} />
      </Col>
      <Col
        xl={{ offset: 2, span: 4 }}
        lg={{ offset: 2, span: 8 }}
        md={{ offset: 2, span: 8 }}
        sm={{ offset: 2, span: 9 }}
        xs={{ offset: 2, span: 10 }}
        className="QualityControl__text"
      >
        <h2>Контроль качества </h2>
        <p>
          Мы контролируем качество партии товара и проверяем ее на соответствие
          заявленным характеристикам перед отправкой. При необходимости товар
          переупаковывается, а в случае обнаружения брака представитель нашей
          компании решает вопрос о замене бракованных изделий непосредственно с
          поставщиком.
        </p>
      </Col>
    </Row>
  );
};

export default QualityControl;
