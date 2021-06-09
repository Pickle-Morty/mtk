import React from 'react';
import './WhyWeGotChosen.css';
import { Col, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const WhyWeGotChosen = () => {
  return (
    <div className="WhyWeGotChosen">
      <Row className="WhyWeGotChosen__titlerow">
        <Col
          xl={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 6 }}
          md={{ offset: 1, span: 10 }}
          sm={{ offset: 1, span: 10 }}
          xs={{ offset: 1, span: 11 }}
          className="WhyWeGotChosen__titletext"
        >
          <h2>Почему выбирают нас?</h2>
        </Col>
      </Row>
      <Row className="WhyWeGotChosen__text1row" style={{ width: '100%' }}>
        <Col
          lg={{ offset: 2, span: 3 }}
          md={{ offset: 2, span: 9 }}
          sm={{ offset: 2, span: 10 }}
          xs={{ offset: 2, span: 11 }}
          className="WhyWeGotChosen__text1row__firstblock"
        >
          <h5>Собственный офис и склад в Китае</h5>
          <p>
            Мы не арендуем место для хранения перевозимого товара у третьих
            фирм, а доставляем его на свой склад, в котором созданы все условия
            для безопасного хранения и сортировки товара.
          </p>
        </Col>
        <Col
          lg={{ offset: 2, span: 3 }}
          md={{ offset: 2, span: 9 }}
          sm={{ offset: 2, span: 10 }}
          xs={{ offset: 2, span: 11 }}
          className="WhyWeGotChosen__text1row__secondblock"
        >
          <h5>Собственный офис и склад в Китае</h5>
          <p>
            Мы не арендуем место для хранения перевозимого товара у третьих
            фирм, а доставляем его на свой склад, в котором созданы все условия
            для безопасного хранения и сортировки товара.
          </p>
        </Col>
      </Row>
      <Row className="WhyWeGotChosen__text2row" style={{ width: '100%' }}>
        <Col
          lg={{ offset: 2, span: 3 }}
          md={{ offset: 2, span: 9 }}
          sm={{ offset: 2, span: 10 }}
          xs={{ offset: 2, span: 11 }}
          className="WhyWeGotChosen__text1row__firstblock"
        >
          <h5>Собственный офис и склад в Китае</h5>
          <p>
            Мы не арендуем место для хранения перевозимого товара у третьих
            фирм, а доставляем его на свой склад, в котором созданы все условия
            для безопасного хранения и сортировки товара.
          </p>
        </Col>
        <Col
          lg={{ offset: 2, span: 3 }}
          md={{ offset: 2, span: 9 }}
          sm={{ offset: 2, span: 10 }}
          xs={{ offset: 2, span: 11 }}
          className="WhyWeGotChosen__text1row__secondblock"
        >
          <h5>Собственный офис и склад в Китае</h5>
          <p>
            Мы не арендуем место для хранения перевозимого товара у третьих
            фирм, а доставляем его на свой склад, в котором созданы все условия
            для безопасного хранения и сортировки товара.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default WhyWeGotChosen;
