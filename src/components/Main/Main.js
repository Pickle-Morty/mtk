import React from 'react';
import GoodsDelivery from '../GoodsDelivery/GoodsDelivery';
import HandleQuery from '../HandleQuery/HandleQuery';
import Header from '../Header/Header';
import InternationalCompany from '../InternationalCompany/InternationalCompany';
import OurServices from '../OurServices/OurServices';
import Tases from '../Cases/Cases';
import Application from '../Application/Application';
import Footer from '../Footer/Footer';
import Plans from '../Plans/Plans'
import QualityControl from '../QualityControl/QualityControl';
import './Main.css';
import { Col, Row } from 'react-bootstrap';

function Main() {
  return (
    <div className="MainBody">
      <div className="InnerBody">
        <Header />
        <InternationalCompany />
        <HandleQuery />
        <QualityControl />
        <GoodsDelivery />
        <OurServices />
        <Plans/>
        <div style={{ marginRight: -23 }}>
          <Tases />
          <Application />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Main;
