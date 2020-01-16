import React from 'react';
import { Row, Col } from "react-flexbox-grid";
import Media from 'react-media';
import { Embed, Label, Header, List, Divider, Icon } from 'semantic-ui-react';


export default class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            label: 'abtMovie'
        }
    }
    render() {
        let abtMovieDesktopView = <Row start="lg" style={{ "paddingTop": "10px" }}>
            <Col lg={7}>
                <Header as='h2' size='large'>What's your status</Header>
            </Col>
            <Row start="lg" style={{ "paddingTop": "5px" }}>
                <Col lg={12}>
                    <Header as='h4' size="tiny" >Ultra Shorts Presents What's Your Status, a web series of 3 different people, going through the 3 different phases of relationships - single, committed and married.</Header>
                </Col>
                <Row start="lg" style={{ "paddingTop": "15px", "paddingLeft": "14px" }}>
                    <Col lg={6}>
                        <Header as='h2' size="large">Starring</Header>
                    </Col>
                    <Row start="lg" style={{ "paddingTop": "5px" }}>
                        <Col lg={11}>
                            <Header as='h4' size="tiny">Balu (Manjot Singh), TJ (Naveen Polishetty) and Bharat (Abhay Mahajan)</Header>
                        </Col>
                    </Row>
                </Row>
                <Row start="lg" style={{ "paddingTop": "5px", "paddingLeft": "14px" }}>
                    <Col lg={5}>
                        <Header as='h2' size="large">Total </Header>
                    </Col>
                    <Col lg={7} style={{ paddingLeft: '109px' }}>
                        <Header as='h4' size="tiny">From</Header>
                    </Col>
                    <Col lg={5} style={{ fontSize: '12px' }}>
                        <Header as='h4' size="tiny">19 Episodes</Header>
                    </Col>
                    <Col lg={7} style={{ paddingLeft: '109px' }}>
                        <Header as='h4' size="medium">RM 1.70/Month</Header>
                    </Col>
                </Row>
                <Row start="lg" style={{ paddingLeft: '330px', paddingTop: '5px' }}>
                    <Col lg={12}>
                        <Label as='a' color={'blue'} circular basic size='large' content='Get This' />
                    </Col>
                </Row>
            </Row>
        </Row>;
        let moreInfoDesktopView = <Row style={{ "paddingTop": "15px" }}>
            <Col lg={7}>
                <Header as='h2' size='large'>Youtube Videos</Header>
            </Col>
            <Row style={{ "paddingTop": "10px" }}>
                <Col lg={12}>
                    <Header as='h4' size="tiny" >Popular movies, TV series & youtube award-winning webseries</Header>
                </Col>
                <Row style={{ "paddingTop": "10px", "paddingLeft": "14px" }}>
                    <Col lg={5}>
                        <Header as='h2' size="large"> Features </Header>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col lg={12}>
                    <List as='ul'>
                        <List.Item as='li'>Kids content available</List.Item>
                        <List.Item as='li'>Download and watch anywhere</List.Item>
                        <List.Item as='li'>Exclusive x-ray functionality</List.Item>
                    </List>
                </Col>
            </Row>
            <Row start={'lg'} style={{ paddingTop: '10px' }}>
                <Col lgOffset={4} lg={8} style={{ paddingLeft: '156px' }}>
                    <Header as='h4' size="tiny">From</Header>
                </Col>
                <Row start={'lg'} style={{ paddingTop: '10px' }}>
                    <Col lg={12} style={{ paddingLeft: '314px' }}>
                        <Header as='h4' size="medium">RM 1.70/Month</Header>
                    </Col>
                    <Row start={'lg'} style={{ paddingTop: '10px' }}>
                        <Col lg={12} style={{ paddingLeft: '345px' }}>
                            <Label as='a' color={'blue'} circular basic size='large' content='Get This' />
                        </Col>
                    </Row>
                </Row>
            </Row>
        </Row>;
        let abtMovieMobileView = <Row style={{ "paddingTop": "10px" }}>
            <Col xs={12} style={{ "paddingTop": "10px" }}>
                <Header as='h5' size='medium'>What's your status</Header>
            </Col>
            <Col xs={11} style={{ "paddingTop": "10px" }}>
                <List>
                    <List.Item>
                        Ultra Shorts Presents What's Your Status, a web series of 3 different people, going through the 3 different phases of relationships - single, committed and married.
            </List.Item>
                </List>
            </Col>
            <Col xs={12} style={{ "paddingTop": "10px" }}>
                <Header as='h5' size='medium'>Starring</Header>
            </Col>
            <Col xs={11} style={{ "paddingTop": "10px" }}>
                <List>
                    <List.Item>
                        Balu (Manjot Singh), TJ (Naveen Polishetty) and Bharat (Abhay Mahajan)
            </List.Item>
                </List>
            </Col>
            <Col xs={4} style={{ paddingTop: '10px' }}>
                <Header as='h5' size='medium'>Total</Header>
            </Col>
            <Col xsOffset={4} xs={4} style={{ paddingTop: '10px' }}>
                <List>
                    <List.Item>
                        From
            </List.Item>
                </List>
            </Col>
            <Col xs={4} style={{ paddingTop: '5px' }}>

                <List>
                    <List.Item>
                        19 Episodes
            </List.Item>
                </List>

            </Col>
            <Col xsOffset={3} xs={5} style={{ paddingTop: '5px' }}>
                <Header as='h5' size='medium'>RM 1.70/Month</Header>
            </Col>
            <Col xs={12} style={{ paddingLeft: '120px', paddingTop: '10px' }}>
                <Label as='a' color={'blue'} circular basic size='huge' content='Get This' />
            </Col>
        </Row>;
        let moreInfoMobileView = <Row style={{ "paddingTop": "15px" }}>
            <Col xs={7}>
                <Header as='h5' size='medium'>Youtube Videos</Header>
            </Col>
            <Col xs={12} style={{ paddingTop: '5px' }}>
                <List>
                    <List.Item>
                        Popular movies, TV series & youtube award-winning webseries
                    </List.Item>
                </List>
            </Col>
            <Col xs={7} style={{ paddingTop: '5px' }}>
                <Header as='h5' size='medium'>Features</Header>
            </Col>
            <Col xs={10} style={{ paddingTop: '5px' }}>
                <List as='ul'>
                    <List.Item as='li'>Kids content available</List.Item>
                    <List.Item as='li'>Download and watch anywhere</List.Item>
                    <List.Item as='li'>Exclusive x-ray functionality</List.Item>
                </List>
            </Col>
            <Col xs={4} style={{ paddingTop: '10px' }}>
                <Header as='h5' size='medium'>Total</Header>
            </Col>
            <Col xsOffset={4} xs={4} style={{ paddingTop: '10px' }}>
                <List>
                    <List.Item>
                        From
            </List.Item>
                </List>
            </Col>
            <Col xs={4} style={{ paddingTop: '5px' }}>

                <List>
                    <List.Item>
                        19 Episodes
            </List.Item>
                </List>

            </Col>
            <Col xsOffset={3} xs={5} style={{ paddingTop: '5px' }}>
                <Header as='h5' size='medium'>RM 1.70/Month</Header>
            </Col>
            <Col xs={12} style={{ paddingLeft: '120px', paddingTop: '10px' }}>
                <Label as='a' color={'blue'} circular basic size='huge' content='Get This' />
            </Col>
        </Row>;

        return (
            <Media queries={{ small: { maxWidth: 599 } }}>
                {matches =>
                    matches.small ? (
                        <div><Row style={{ paddingTop: '10px' }}>
                            <Col xs='12'>
                                <Embed
                                    iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                    placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                    source='youtube'
                                    hd={true}
                                />
                            </Col>
                        </Row>
                            <Row>
                                <Col xs={12}>
                                    <Col xsOffset={3} style={{ paddingTop: '10px' }}>
                                        <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                        <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                    </Col>
                                    {this.state.label == "abtMovie" ? abtMovieMobileView : moreInfoMobileView}

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Divider />
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Col xs='12'>
                                    <Embed
                                        iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                        placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                        source='youtube'
                                        hd={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Col xsOffset={3} style={{ paddingTop: '10px' }}>
                                        <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                        <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                    </Col>
                                    {this.state.label == "abtMovie" ? abtMovieMobileView : moreInfoMobileView}

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Divider />
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Col xs='12'>
                                    <Embed
                                        iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                        placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                        source='youtube'
                                        hd={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Col xsOffset={3} style={{ paddingTop: '10px' }}>
                                        <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                        <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                    </Col>
                                    {this.state.label == "abtMovie" ? abtMovieMobileView : moreInfoMobileView}

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Divider />
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Col xs='12'>
                                    <Embed
                                        iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                        placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                        source='youtube'
                                        hd={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Col xsOffset={3} style={{ paddingTop: '10px' }}>
                                        <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                        <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                    </Col>
                                    {this.state.label == "abtMovie" ? abtMovieMobileView : moreInfoMobileView}

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Divider />
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Col xs='12'>
                                    <Embed
                                        iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                        placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                        source='youtube'
                                        hd={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Col xsOffset={3} style={{ paddingTop: '10px' }}>
                                        <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                        <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                    </Col>
                                    {this.state.label == "abtMovie" ? abtMovieMobileView : moreInfoMobileView}

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Divider />
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Col xs='12'>
                                    <Embed
                                        iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                        placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                        source='youtube'
                                        hd={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Col xsOffset={3} style={{ paddingTop: '10px' }}>
                                        <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                        <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                    </Col>
                                    {this.state.label == "abtMovie" ? abtMovieMobileView : moreInfoMobileView}

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Divider />
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Col xs='12'>
                                    <Embed
                                        iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                        placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                        source='youtube'
                                        hd={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Col xsOffset={3} style={{ paddingTop: '10px' }}>
                                        <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                        <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                    </Col>
                                    {this.state.label == "abtMovie" ? abtMovieMobileView : moreInfoMobileView}
                                    <Row end='xs' style={{ paddingTop: '20px' }}>
                                        <Col xs={12}>
                                            <Label content="top" as='a' circular onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                            <Row style={{ "paddingTop": "50px" }}>
                                <Col lgOffset={1} xsOffset={1} xs={10} lg={10}>
                                    <Row start="lg">
                                        <Col lg={6} >
                                            <Embed
                                                iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                                placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                                source='youtube'
                                                hd={true}
                                            />
                                        </Col>
                                        <Col lg={5} lgOffset={1}>
                                            <Col>
                                                <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                                <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                                {this.state.label == "abtMovie" ? abtMovieDesktopView : moreInfoDesktopView}
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Divider />
                                        </Col>
                                    </Row>
                                    <Row start="lg">
                                        <Col lg={6}>
                                            <Col>
                                                <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                                <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                                {this.state.label == "abtMovie" ? abtMovieDesktopView : moreInfoDesktopView}
                                            </Col>
                                        </Col>
                                        <Col lg={6} >
                                            <Embed
                                                iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                                placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                                source='youtube'
                                                hd={true}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Divider />
                                        </Col>
                                    </Row>
                                    <Row start="lg">
                                        <Col lg={6} >
                                            <Embed
                                                iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                                placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                                source='youtube'
                                                hd={true}
                                            />
                                        </Col>
                                        <Col lg={5} lgOffset={1}>
                                            <Col>
                                                <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                                <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                                {this.state.label == "abtMovie" ? abtMovieDesktopView : moreInfoDesktopView}
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Divider />
                                        </Col>
                                    </Row>
                                    <Row start="lg">
                                        <Col lg={6}>
                                            <Col>
                                                <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                                <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                                {this.state.label == "abtMovie" ? abtMovieDesktopView : moreInfoDesktopView}
                                            </Col>
                                        </Col>
                                        <Col lg={6} >
                                            <Embed
                                                iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                                placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                                source='youtube'
                                                hd={true}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Divider />
                                        </Col>
                                    </Row>
                                    <Row start="lg">
                                        <Col lg={6} >
                                            <Embed
                                                iframe='https://www.youtube.com/embed/2J2yXSLgKko'
                                                placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV-oYuZiOClS4ildndfW_dwgL6Sntm55INu6iRYTGqPEZkhBf'
                                                source='youtube'
                                                hd={true}
                                            />
                                        </Col>
                                        <Col lg={5} lgOffset={1}>
                                            <Col>
                                                <Label as='a' onClick={() => { this.setState({ label: "abtMovie" }) }} color={this.state.label == "abtMovie" ? 'blue' : 'black'} circular basic size='tiny' content='About Movie' />
                                                <Label as='a' onClick={() => { this.setState({ label: "moreInfo" }) }} color={this.state.label == "moreInfo" ? 'blue' : 'black'} circular basic size='tiny' content='More Info' />
                                                {this.state.label == "abtMovie" ? abtMovieDesktopView : moreInfoDesktopView}
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Row end='lg' style={{ paddingTop: '20px' }}>
                                        <Col lg={12}>
                                            <Icon name="chevron circle up" size='huge' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )
                }
            </Media>
        )
    }
}
