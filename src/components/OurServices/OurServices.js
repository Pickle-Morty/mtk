import React, { useState } from 'react';
import './OurServices.css';
import { Row } from 'react-bootstrap';
import Cart from "./Cart";
import { Modal } from "../../common";

const OurServices = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const titles = [
    "Маркировка товаров",
    "Поставка оборудования",
    "Технический импортер",
    "Техническая поддержка на производствах",
    "Услуги бухгалтерского учета",
    "Помогаем оптимизировать налогообложение"
  ];
  const description = [
    1,
    2,
    3,
    4,
    5,
    6,
  ];

  const showContent = (index) => {
    setContent(description[index])
  }

  return (
    <section className="OurServices">
      <div className="main__container">
        <p className="OurServices__title">Наши Услуги</p>
        <Row>
          {titles.map((item, index) => <Cart title={item} index={index} blue={index % 2 !== 0 ? true : false} setContent={showContent} setShow={setShow} />)}
        </Row>
        <Modal show={show} setShow={setShow}>
          <p>{content}</p>
        </Modal>
      </div>
    </section>
  );
};

export default OurServices;
