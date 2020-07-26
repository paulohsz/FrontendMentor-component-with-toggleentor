import React, { Component } from 'react';
import { Container, Divider, Grid, Responsive, Segment, Header,  Checkbox, Button } from 'semantic-ui-react'
import './App.css'



class App extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      text: '',
      checkBox: false,
    };

    this.state = this.stateInicial;

  }

  render() {
    return (
      <Container className="cont-b">
        <div className="header-Title">
          Our Pricing
          <div className="header-SubTitle">Annually
          <Checkbox 
            toggle 
            checked={this.state.checkBox}  
            onClick={() => {this.setState( ({checkBox}) => ({checkBox: !checkBox}))}}
            /*label="Annually or Monthly"*/
            id="valueYearMonth"
            readOnly={false}
          />
          Monthly</div>
          
          </div>
        <Grid stackable textAlign="center" columns={3} className="plan-normal">
          <Grid.Column>
            <Responsive as={Segment}>
              Basic
              <div className="price">
                <span className="money-sign">$</span>
                <span>{ this.state.checkBox ? "19.99" : "199.99" }</span>
              </div>
              <Divider />500 GB Storage
              <Divider />
                2 Users Allowed
              <Divider />
                Send up to 3 GB
              <Divider />
              <Button fluid className="button-sides">Learn More</Button>
            </Responsive>
          </Grid.Column>

          <Grid.Column style={{marginTop: "-14px"}} className="middlePlan">
            <Responsive as={Segment}>
            <Responsive minWidth={992} style={{height: "16px"}}>
              
            </Responsive>
            Professional
              <div className="price">
                <span className="money-sign">$</span>
                <span>{ this.state.checkBox ? "24.99" : "249.99" }</span>
              </div>
              <Divider />1 TB Storage
              <Divider />5 Users Allowed
              <Divider />Send up to 10 GB
              <Divider />
              <Button fluid className="button-sides">Learn More</Button>
              <Responsive minWidth={992} style={{height: "16px"}}>
              
              </Responsive>
            </Responsive>
          </Grid.Column>

          <Grid.Column>
            <Responsive as={Segment}>
              Basic
              <div className="price">
                <span className="money-sign">$</span>
                <span>{ this.state.checkBox ? "39.99" : "399.99" }</span>
              </div>
              <Divider />2 TB Storage
              <Divider />10 Users Allowed
              <Divider />Send up to 20 GB
              <Divider />
              <Button fluid className="button-sides">Learn More</Button>
            </Responsive>
          </Grid.Column>

        </Grid>
        <Header as='h5' icon textAlign='center' className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/paulohsz/">Paulo Henrique Stocco Zancanaro</a>.
        </Header>
      </Container>
    );
  }
}
/*
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
*/

export default App;
