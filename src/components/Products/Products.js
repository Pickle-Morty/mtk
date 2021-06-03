import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Products.css';
import bottle from './bottle.webp'
import packaging from './packaging.webp'

function Products() {
    return (
        <div className="product-container">
            <Row style={{ marginRight: '12px' }}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="product">
                        <img src={bottle} />
                        <div className="product_text">Оборудование для выдува пластиковой тары</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="product-button">
                        <span className="product-span">Мы сотрудничаем с фабриками по производству машин и доп. оборудования для выдува пластиковой тары любого типа и размера.</span>
                        <div className="button-text">Подробнее</div>
                    </div>
                </Col>
            </Row>
            <Row style={{ marginRight: '12px' }}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="product-button">
                        <span className="product-span">Мы сотрудничаем с фабриками по производству машин и доп. оборудования для выдува пластиковой тары любого типа и размера.</span>
                        <div className="button-text">Подробнее</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="product">
                        <img src={packaging} />
                        <div className="product_text1">Производство упаковки</div>
                    </div>
                </Col>
            </Row>
            <div className="cases-div"></div>
        </div>
    )
}

export default Products
