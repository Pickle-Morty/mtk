import React from 'react';
import GoodsDelivery from '../GoodsDelivery/GoodsDelivery';
import HandleQuery from '../HandleQuery/HandleQuery';
import Header from '../Header/Header';
import InternationalCompany from '../InternationalCompany/InternationalCompany';
import Ofice from '../Ofice/Ofice';
import OurServices from '../OurServices/OurServices';
import PraiMatch from '../PariMath/PariMatch';
import Tases from '../Cases/Cases';
import Products from '../Products/Products';
import Application from '../Application/Application';
import Footer from '../Footer/Footer';
import Plans from '../Plans/Plans'
import QualityControl from '../QualityControl/QualityControl';
import WhyWeGotChosen from '../WhyWeGotChosen/WhyWeGotChosen';
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
