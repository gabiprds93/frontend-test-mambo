import React, { Component } from 'react';
import {Grid, Row, Col, Navbar, Nav, NavItem, Media, Image} from 'react-bootstrap';

class Benefits extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            benefits: [],
        }
        // var request = new XMLHttpRequest();
        // request.open('GET', 'http://core-benefits.api.dev.ahora.mambo.pe/api/v1/benefits?items=6&page=1&status=1&activated=true', true);

        // request.onload = function () {
        //     var data = JSON.parse(this.response);
        //     console.log(data);
        //     this.bene = data.data;
        //     console.log(this.bene);
        // }

        // // Send request
        // request.send();
    }
    componentWillMount(){
        fetch('http://core-benefits.api.dev.ahora.mambo.pe/api/v1/benefits?items=4&page=1&status=1&activated=true')
            .then(response => response.json())
            .then(benefits =>{
                console.log(benefits);
                benefits.data.forEach(benefit =>{
                    let data = {
                        business: {
                            name: benefit.business.name,
                            logo: benefit.business.logo,
                        },
                        image: benefit.base_image.base_image_url,
                        name: benefit.name,
                        uuid: benefit.uuid,
                    }
                    this.setState({
                        benefits: this.state.benefits.concat([data])
                    })
                })
            })
    }
    render(){
        console.log(this.state.benefits);
        let benefits = this.state.benefits.map((benefit) =>{
            return(
                <Col xs={10} xsOffset={1} sm={12} md={2} key={benefit.uuid} className="benefits">
                    <Image src={benefit.image} responsive className="center-block"/>
                    {benefit.name}
                </Col>
            )
        })
        return(
            <Row>
                {benefits}
            </Row>
        )
    }
}

export default Benefits;