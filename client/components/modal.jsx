import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import {Header, Label, Icon} from 'semantic-ui-react';

export default class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 720,
      minHeight: 300,
      margin: '0 auto',
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <Grid>
              <Row>
                 <Col xs={12} lg={8}>
                      <Header as={"h1"} textAlign="center" content="PAY NOW AND GRAB THE OFFER"></Header>
                  </Col>
                  <Col xs={12} lg={8}>
                      <Header as={"h1"} textAlign="center" content="SPECIAL DISCOUNT FOR YOU"></Header>
                  </Col>
                  <Col xs={12} lg={8}>
                      <Header as={"h1"} textAlign="center" content="50% Offer"></Header>
                  </Col>
                  <Col lgOffset={1} xs={6} lg={4}>
                      <Label content="pay now" color="green" circular size="massive" onClick={this.props.onClose}/>
                  </Col>
                  <Col xs={6} lg={6}>
                      <Label content="pay later" color="black" circular size="massive" onClick={this.props.onClose}/>
                  </Col>
              </Row>
         </Grid> 
        </div>
      </div>
    );
  }
}
