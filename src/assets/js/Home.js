import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Footer from './components/Footer'
import img_banner from '../images/img_banner.jpg';
import ico_header_blanco from '../images/ico_header_blanco.png';
import img_ihponex from '../images/img_ihponex.png';
import img_banner01 from '../images/img_banner01.png';
import img_logo_ahora_principal from '../images/img_logo_ahora_principal.png';
import img_appstore from '../images/img_appstore.png';
import img_googleplay from '../images/img_googleplay.png';
import ico_scroll_down from '../images/ico_scroll_down.png';
import img_detalles_izq from '../images/img_detalles_izq.png';
import img_detalles_der from '../images/img_detalles_der.png';
import ico_retos_onboard from '../images/ico_retos_onboard.png';
import ico_nivel_onboard from '../images/ico_nivel_onboard.png';
import ico_sorpresa_onboard from '../images/ico_sorpresa_onboard.png';
import ico_download from '../images/ico_download.png';
import img_banner_res from '../images/img_banner_res.png';
import Benefits from './components/Benefits';

const Home = () =>
{
    return (
        <main>
            <Grid fluid="true">
            <section className="section1">
                <Row className="">
                    <Col xs={12} sm={12} md={12} className="">
                        <div className="div-opacity"></div>
                        <div className="banner">
                            <img src={img_banner} alt=""/>
                            <img src={img_banner_res} alt=""/>
                        </div>
                        <Row className="div-principal">
                            <Col xs={12} sm={12} md={12} className="header-principal"><img src={ico_header_blanco} alt=""/></Col>
                            <div className="body-principal">
                                <div className="div1">
                                    <div>
                                        <img src={img_ihponex} alt=""/>
                                    </div>
                                    <div className="slider">
                                        <img src={img_banner01} alt=""/>
                                    </div>
                                </div>
                                <div className="div2">
                                    <div><img src={img_logo_ahora_principal} alt=""/></div>
                                    <div>
                                        <h2 className="text1">!Disfruta de cientos de beneficios, mientras juegas y descubres más acerca de las AFP!</h2>
                                    </div>
                                    <div>
                                        <h4 className="text2">Descarga "AHORA" en:</h4>
                                        <br/>
                                        <div className="imgStore">
                                            <img src={img_appstore} alt=""/>
                                            <img src={img_googleplay} alt=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="arrow-scroll">
                                        <img src={ico_scroll_down} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </section>
            </Grid>
            <Grid>
                <section>
                    <Row className="">
                        <Col xs={12} sm={12} md={12} className="">
                            <div>
                                <h2>Si eres cliente de AFP Integra y Sura,</h2>
                                <h2 className="color-skyblue">¡AHORA es para ti!</h2>
                                <Row className="">
                                    <Col xs={12} sm={4} md={4} mdOffset={0} className="">
                                        <div>
                                            <img src={img_detalles_izq} alt=""/>
                                            <img src={ico_retos_onboard} alt=""/>
                                            <img src={img_detalles_der} alt=""/>
                                        </div>
                                        <div>
                                            <p>Resuelve divertidos retos educativos	y sube de nivel.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} className="">
                                        <div>
                                            <img src={img_detalles_izq} alt=""/>
                                            <img src={ico_nivel_onboard} alt=""/>
                                            <img src={img_detalles_der} alt=""/>
                                        </div>
                                        <div>
                                            <p>Desbloquea niveles para acceder a beneficios exclusivos.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} className="">
                                        <div>
                                            <img src={img_detalles_izq} alt=""/>
                                            <img src={ico_sorpresa_onboard} alt=""/>
                                            <img src={img_detalles_der} alt=""/>
                                        </div>
                                        <div>
                                            <p>Disfruta de tus beneficios no mañana, no pasado, AHORA.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Col xs={12} sm={12} md={12} className="">
                                <h2 className="color-skyblue">Juega, gana y disfruta de beneficios:</h2>
                                <Benefits/>
                                <h2 className="color-skyblue">... y mucho más!</h2>
                            </Col>
                        </Col>
                    </Row> 
                </section>

                <section>
                    <Row className="">
                        <Col xs={12} sm={12} md={12}>
                            <Image src={ico_download} responsive className="center-block"/>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <p>Descárgala en:</p>
                        </Col>
                        <Col xs={6} sm={12} md={2} mdOffset={4}>
                            <Image src={img_appstore} responsive className="center-block"/>
                        </Col>
                        <Col xs={6} sm={12} md={2}>
                            <Image src={img_googleplay} responsive className="center-block"/>
                        </Col>
                    </Row>
                </section>
            </Grid>
        </main>
    )        
}

export default Home;