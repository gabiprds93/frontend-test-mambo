import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Header from '../components/Header';

const Faq = () =>
{
    return (
        <Grid>
            <Header/>
            <Row className="text-left color-blue">
                <Col xs={11} xsOffset={1} sm={12} md={11} mdOffset={1} className="faq">
                    <h3>Preguntas frecuentes</h3>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                    <p><i class="fas fa-angle-down"></i> ¿Qué es AHORA?</p>
                </Col>
            </Row>
        </Grid>
    )
}

export default Faq;