import React from 'react';

import International from './Map3.1.png';
import rightArrow from './right-arrow.svg';
import './InternationalCompany.css';
import { Col, Row } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';

const InternationalCompany = () => {
  return (

    <section id="InternationalSection">
      <Row className="International">
        <Col
          xl={{ offset: 1, span: 4 }}
          lg={{ offset: 1, span: 5 }}
          md={{ offset: 2, span: 8 }}
          sm={{ offset: 1, span: 11 }}
          xs={{ offset: 1, span: 11 }}
          className="International__text"
        >
          <Spring
            from={{ opacity: 0, transform: 'translateX(-200px)' }}
            to={{ opacity: 1, transform: 'translateX(0px)' }}
            config={{ delay: 200, duration: 700 }}
          >
            {(props) => (
              <div style={props}>
                <h2 className="my-element">Международная компания</h2>
                <p>
                  Мы поможем вам продать или купить товар за рубежом, найти
                  надежныхпроизводителей и организовать доставку
                </p>
              </div>
            )}
          </Spring>

          <div className="International__button">
            <button>
              Оформить заказ
            </button>
          </div>
        </Col>

        <Col
          xl={{ offset: 1, span: 5 }}
          lg={{ span: 3 }}
          md={{ offset: 2, span: 8 }}
          sm={{ offset: 1, span: 8 }}
          xs={10}
          className="International__img"
        >
          <img src={International} />
        </Col>
      </Row>
      <Row className="International__secondtext" style={{ width: '100%' }}>
        <Col
          xl={{ offset: 1, span: 7 }}
          lg={{ offset: 1, span: 7 }}
          md={{ span: 10 }}
          sm={{ span: 10 }}
          xs={{ offset: 1, span: 11 }}
        >
          <p>
            Мы предоставляем весь комплекс услуг по экспорту и импортутоваров:
            от поиска поставщика до упаковки и доставки партии товара на ваш
            склад.
          </p>
        </Col>
      </Row>
    </section>

  );
};

export default InternationalCompany;
