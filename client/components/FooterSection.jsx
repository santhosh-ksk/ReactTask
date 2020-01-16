import React from 'react';
import { Row, Col } from "react-flexbox-grid";
import { Header, List, Divider, Label, Icon } from 'semantic-ui-react';
import Media from 'react-media';

export default class FooterSection extends React.Component  {

    constructor(props){
        super(props);
        this.state={
            categoryToggle:false,
            generalToggle:false
        }
    }
    render(){
        return(
            <div className="bgColor" style={{ paddingTop: '30px' }}>
            <Media queries={{ small: { maxWidth: 599 } }}>
              {matches =>
                matches.small ? (
                    <div><Row>
                    <Col xs={12}>
                        <Header as='h4' content="ABOUT US"></Header>
                        <List>
                            <List.Item>With Easyadd you can have it all. one account to manage your various subscriptions, made easy and simple</List.Item>
                            <List.Item>Explore, Subscribe & manage all with EasyAdd</List.Item>
                        </List>
                    </Col>
                    <Col xs={12} style={{paddingTop:'10px'}}> 
                        <Header as='h4'>CATEGORIES<Icon name='angle down' onClick={()=>{this.setState({categoryToggle:!this.state.categoryToggle})}}/></Header>
                        {this.state.categoryToggle?<List>
                            <List.Item>Music</List.Item>
                            <List.Item>Video</List.Item>
                            <List.Item>Productivity</List.Item>
                            <List.Item>Life Style</List.Item>
                            <List.Item>Learning</List.Item>
                        </List>:null}
                    </Col>
                    <Col xs={12} style={{paddingTop:'10px'}}>
                        <Header as='h4'>GENERAL<Icon name='angle down' onClick={()=>{this.setState({generalToggle:!this.state.generalToggle})}}/></Header>
                        {this.state.generalToggle?<List>
                            <List.Item>How it works</List.Item>
                            <List.Item>Contact us</List.Item>
                            <List.Item>phone 016 2211800</List.Item>
                            <List.Item>Terms Of Use</List.Item>
                            <List.Item>Privacy Notice</List.Item>
                            <List.Item>FAQ</List.Item>
                        </List>:null}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Divider />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <Header size='tiny'>Digi Telecommunications, Sdn Bhd (2012-M)</Header>
                    </Col>
                    <Col xs={12}>
                    <Header size='tiny'>Copyright <Icon name='copyright outline'/>all rights received</Header>
                    </Col>
                </Row></div>
                ) : (
                  <div><Row>
                  <Col lgOffset={1} lg={2}>
                      <Header as='h4' content="ABOUT US"></Header>
                      <List>
                          <List.Item>With Easyadd you can have it all. one account to manage your various subscriptions, made easy and simple</List.Item>
                          <List.Item>Explore, Subscribe & manage all with EasyAdd</List.Item>
                      </List>
                  </Col>
                  <Col lgOffset={1} lg={2}>
                      <Header as='h4' content="CATEGORIES"></Header>
                      <List>
                          <List.Item>Music</List.Item>
                          <List.Item>Video</List.Item>
                          <List.Item>Productivity</List.Item>
                          <List.Item>Life Style</List.Item>
                          <List.Item>Learning</List.Item>
                      </List>
                  </Col>
                  <Col lgOffset={1} lg={2}>
                      <Header as='h4' content="GENERAL"></Header>
                      <List>
                          <List.Item>How it works</List.Item>
                          <List.Item>Contact us</List.Item>
                          <List.Item>phone 016 2211800</List.Item>
                          <List.Item>Terms Of Use</List.Item>
                          <List.Item>Privacy Notice</List.Item>
                          <List.Item>FAQ</List.Item>
                      </List>
                  </Col>
              </Row>
              <Row>
                  <Col lg={12}>
                      <Divider />
                  </Col>
              </Row>
              <Row>
                  <Col lg={4}>
                  <Header size='tiny'>Digi Telecommunications, Sdn Bhd (2012-M)</Header>
                  </Col>
                  <Col lgOffset={5}>
                  <Header size='tiny'>Copyright <Icon name='copyright outline'/> all rights received</Header>
                  </Col>
              </Row></div>
                )
              }
            </Media>
        </div>    
        );
    }
}
    
   
