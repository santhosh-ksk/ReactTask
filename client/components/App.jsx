import React, { Component } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import axios from 'axios';
import Media from 'react-media';
import HeaderSection from './HeaderSection.jsx'
import Advertisement from './Advertisement.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import FooterSection from './FooterSection.jsx';
import Modal from './Modal.jsx';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      webSeriesList: [{}],
      isOpen: false 
    }
  }

  componentDidMount() {
    this.getwebSeriesDetails()

    //dynamic campaign
    setInterval(() => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }, 30000);
  }

  //getting the details of the webseries list
  getwebSeriesDetails() {
    axios.get('/webseriesDetails').then((res) => {
      this.setState({ webSeriesList: res.data })
    })
  }

  render() {
    const { webSeriesList } = this.state;
    console.log('webseries', webSeriesList)
    webSeriesList.map((webSeriesList) => console.log(webSeriesList.videoThumbnailURL))
    return (
      
      <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
              <div>
              <Grid className="App">
                <HeaderSection />
                <Advertisement/>
                <VideoPlayer webSeriesList={webSeriesList}/>
                <FooterSection />
              </Grid>
              <button className={this.state.isOpen?"hidden":"hidden"} onClick={() => {this.setState({
      isOpen: !this.state.isOpen
    })}}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={() => {this.setState({
            isOpen: !this.state.isOpen
          })}}>
        </Modal>
            </div>
            ) : (
              <div className="bgColor">
        <Grid className="App">
          <HeaderSection />
          <Advertisement/>
          <VideoPlayer webSeriesList={webSeriesList}/>
          <FooterSection />
        </Grid>
        <button className={this.state.isOpen?"hidden":"hidden"} onClick={() => {this.setState({
      isOpen: !this.state.isOpen
    })}}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={() => {this.setState({
            isOpen: !this.state.isOpen
          })}}>
        </Modal>
      </div>
            )
          }
        </Media>
      
    );
  }
}
