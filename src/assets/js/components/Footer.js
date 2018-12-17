import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import img_logo_ahora_secundario from '../../images/img_logo_ahora_secundario.png';
import Faq from '../pages/Faq';

const Footer = () =>
{
    return (
        <footer>
            <Grid>
                <Row className="footer-container">
                    <Col xs={12} sm={2} smOffset={1} md={2} mdOffset={1}>
                        <Link to="/">
                            <Image src={img_logo_ahora_secundario} responsive className="center-block"/>
                        </Link>
                    </Col>
                    <Col xs={6} sm={2} md={2}>
                        <Link to="/faq">Preguntas frecuentes</Link>
                    </Col>
                    <Col xs={6} sm={2} md={2}>
                        <Link to="/about/">Términos y condiciones</Link>
                    </Col>
                    <Col xs={6} sm={2} md={2}>
                        <Link to="/users/">Políticas de uso</Link>
                    </Col>
                    <Col xs={6} sm={2} md={2}>
                        <Link to="/users/">Contáctanos</Link>
                    </Col>
                </Row>
            </Grid>
        </footer>
    )
}

export default Footer;