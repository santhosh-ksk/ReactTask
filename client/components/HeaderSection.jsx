import React, { Component, Fragment } from 'react';
import { Row, Col } from "react-flexbox-grid";
import { Label, Header, Icon } from 'semantic-ui-react';
import Media from 'react-media';

import HeaderIcon from './HeaderIcon.jsx'
import Explore from './Explore.jsx'
import Search from './search.jsx'

export default class HeaderSection extends Component {

  render() {
    return (
      <Media queries={{ small: { maxWidth: 599 } }}>
        {matches =>
          matches.small ? (
            <Row style ={{paddingTop:'10px'}}>
              <Col xs={2}>
                <Icon.Group size='large'>
                  <Icon loading size='big' name='circle notch' />
                  <Icon name='file video' />
                </Icon.Group>
              </Col>
              <Col xs={5}>
                <Header size='tiny' color='grey' style={{"paddingTop":"15px"}}>Explore <Icon name='angle down'/></Header>
              </Col>
              <Col xsOffset={2} xs={3}>
                <Icon name ='search' size='small'/>
                <Label as='a' circular basic icon='user outline' size='small'style={{ "marginTop": "7px", "marginLeft": "4px" }} />
              </Col>
            </Row>
          ) : (
              <Row style={{ "paddingTop": "50px" }}>
                <Col lgOffset={1} lg={1} xs={4}>
                  <HeaderIcon />
                </Col>
                <Col lg={2} xs={4}>
                  <Explore />
                </Col>
                <Col lgOffset={6} xs={4}>
                  <Search />
                  <Label as='a' circular basic icon='user outline' size='big' content='login' style={{ "marginTop": "7px", "marginLeft": "4px" }} />
                </Col>
              </Row>
            )
        }
      </Media>
    );
  }
}
