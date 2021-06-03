import React from 'react';
import { Row, Col } from  'react-bootstrap';
import './Ofice.css';

function Ofice() {
    return (
        <div className="census">
            <div className="census__background">
            <Row style={{marginRight: '12px'}} >
                <Col xs={{offset : 1 ,span:10}} sm={{offset : 3 ,span:9}} md={{offset : 1 ,span:3}} lg={3} xl={3} >
                    
                    <div className="census__item" >
                        <span className="census__num" >76</span>
                        <div className="census__line"></div>
                        <span className="census__text" >Заключенных договоров на поставку продукции за 2019 год</span>
                    </div>
                </Col>
                <Col  xs={{offset : 1 ,span:10}} sm={{offset : 3 ,span:9}} md={{offset : 1 ,span:3}} lg={3} xl={3} >
                        <div className="census__item">
                            <span className="census__num"  >634</span>
                            <div className="census__line"></div>
                            <span className="census__text" >Проверенных производителей в нашей базе</span>
                        </div>
                </Col>
                <Col  xs={{offset : 1 ,span:10}} sm={{offset : 3 ,span:9}} md={{offset : 1 ,span:3}} lg={3} xl={3} >
                    <div className="census__item">
                        <span className="census__num" >99,7</span>
                        <div className="census__line"></div>
                        <span className="census__text">Процентов продукции приходит вовремя и в целости</span>
                    </div>       
                </Col>
        </Row>
                    </div>
                </div>
    )
}

export default Ofice
