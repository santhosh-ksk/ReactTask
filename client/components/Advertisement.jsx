import React from 'react';
import { Row, Col } from "react-flexbox-grid";
import { Header } from 'semantic-ui-react';
import Media from 'react-media';


const Advertisement = () => (
<Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
                <Row style={{ "paddingTop": "10px" }}>
                <Col xsOffset={1} xs={10} style={{ border: "1px solid black", padding:'10px'}}>
                    <Row center="xs">
                        <Col xs={12} >
                            <Header size='small'>TOP 7 MOVIES</Header>
                            <Row center="xs">
                        <Col xs={12} >
                            <Header size='tiny'>Enjoy these movies and apps for holiday specials only made for you</Header>
                        </Col>
                    </Row>
        
                        </Col>
                    </Row>
                </Col>
            </Row>
            ) : (
                <Row style={{ "paddingTop": "50px" }}>
                <Col lgOffset={1} lg={10} style={{ border: "1px solid black", padding: "50px" }}>
                    <Row center="lg">
                        <Col lgOffset={3} lg={6} >
                            <Header as='h1' size='huge' style={{fontSize:'56px'}}>TOP 7 MOVIES</Header>
                            <Row start="lg">
                        <Col lg={12} lgOffset={2}>
                            <Header as='h2'>Enjoy these movies and apps for holiday specials only made for you</Header>
                        </Col>
                    </Row>
        
                        </Col>
                    </Row>
                </Col>
            </Row>
            )
          }
</Media>
)

export default Advertisement;