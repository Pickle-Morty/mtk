import React from 'react';

import logo from './Logo.svg';
import './Header.css';
import { Accordion, Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMediaQuery } from '@material-ui/core';
import 'materialize-css';
import HeaderAccordion from './HeaderAccordion';

const Header = () => {
  const MobileVersionPlatform = useMediaQuery('(max-width:992px)');
  return (
    <>
      {!MobileVersionPlatform && (
        <Row className="Header">
          <Col
            xl={{ offset: 1, span: 1 }}
            lg={{ offset: 1, span: 1 }}
            md={{ offset: 1, span: 1 }}
          >
            <img className="Header__logo" src={logo} alt="Logo"></img>
          </Col>
          <Col
            xl={{ offset: 3, span: 5 }}
            lg={{ offset: 2, span: 6 }}
            md={{ offset: 1, span: 6 }}
            className="Header__toolbar"
          >
            <h4>Услуги</h4>
            <h4>О нас</h4>
            <h4>Контакты</h4>
          </Col>
          <Col
            xl={{ offset: 1, span: 1 }}
            lg={{ offset: 1, span: 1 }}
            md={{ offset: 1, span: 1 }}
            className="Header__language"
          >
            <h5>RU</h5>
            <span>-</span>
            <h5>EN</h5>
          </Col>
        </Row>
      )}

      {MobileVersionPlatform && (
        <Row>
          <Col
            md={{ offset: 1, span: 5 }}
            sm={{ offset: 1, span: 5 }}
            xs={{ offset: 1, span: 4 }}
          >
            <img className="Header__logo" src={logo} alt="Logo"></img>
          </Col>
          <Col
            md={{ offset: 4, span: 1 }}
            sm={{ offset: 4, span: 1 }}
            xs={{ offset: 3, span: 1 }}
            className="MenuIcon"
          >
            <HeaderAccordion />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Header;
