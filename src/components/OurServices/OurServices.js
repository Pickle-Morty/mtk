import React, { useState } from 'react';
import './OurServices.css';
import { Row } from 'react-bootstrap';
import Cart from "./Cart";
import { Modal } from "../../common";

import CartImg1 from "./Cart/image/1.jpg";
import CartImg2 from "./Cart/image/2.jpg";
import CartImg3 from "./Cart/image/3.jpg";
import CartImg4 from "./Cart/image/4.jpg";
import CartImg5 from "./Cart/image/5.jpg";
import CartImg6 from "./Cart/image/6.jpg";



const OurServices = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const titles = [
    { text: "Маркировка товаров", imgPath: CartImg1 },
    { text: "Поставка оборудования", imgPath: CartImg2 },
    { text: "Технический импортер", imgPath: CartImg3 },
    { text: "Техническая поддержка на производствах", imgPath: CartImg4 },
    { text: "Услуги бухгалтерского учета", imgPath: CartImg5 },
    { text: "Оптимизируем налогообложение", imgPath: CartImg6 },
  ];
  const description = [
    "Организуем процесс маркировки в другой стране на производстве, передаем вам маркированный товар в соответствии с законодательством РФ",
    "Терминалы сбора данных, термотрансферные принтеры, сканеры 2D кодов",
    "Закупаем товар в других странах, маркируем его и передаем вам",
    "Помогаем оптимизировать налогообложение при экспорте товаров из - за границы",
    "Осуществляем маркировку товаров из Китая и Турции на таможенных складах, находящихся в Кыргызстане",
    "Помогаем оптимизировать налогообложение при экспорте товаров из - за границы",
  ];






  const showContent = (index) => {
    setContent(description[index])
  }

  return (
    <section className="OurServices" id="OurServices">
      <div className="main__container">
        <p className="OurServices__title">Наши Услуги</p>
        <div className="OurService__row">
          {titles.map((item, index) => <Cart title={item.text} path={item.imgPath} index={index} blue={index % 2 !== 0 ? true : false} setContent={showContent} setShow={setShow} />)}
        </div>
        <Modal show={show} setShow={setShow}>
          <p>{content}</p>
        </Modal>
      </div>
    </section>
  );
};

export default OurServices;
