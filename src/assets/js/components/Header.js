import React, { Component } from 'react';
import {Grid, Row, Col, Navbar, Nav, NavItem, Media, Image} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ico_header_azul from '../../images/ico_header_azul.png';

const Header = () =>
{
    return (
        <Row className="text-left">
            <Col xs={12} sm={12} smOffset={1} md={11} mdOffset={1} className="header">
                <Image src={ico_header_azul}/>
            </Col>
            <Col xs={12} xsOffset={1} sm={12} smdOffset={1} md={11} mdOffset={1} className="back-home">
                <Link to="/"><i className="fas fa-long-arrow-alt-left color-skyblue"></i> Volver al inicio</Link>
            </Col>
        </Row>
    )
}

export default Header;