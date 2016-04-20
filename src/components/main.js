import React from 'react';
import { Button } from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Column} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

// import twitter from './twitter';
// import giphy from './components/giphy';
// import facebook from './components/facebook';

class Main extends React.Component {
  constructor() {
      super();

      this.state = {
      };
  }
  // getInitialState() {
  //   twitter: '',
  //   giphy: '',
  //   facebook: ''
  // }

  // _submitHash() {
  //     return this.setState({
  //       twitter: searchResult,
  //       giphy: searchResult,
  //       facebook: searchResult
  //     });
  // }

  _handleClick(event) {
    this.refs.hashInput = event.target.value;
  }

  render() {
    // this.props.twitter.results.map((result) => {
    //   return (<li content={result.content}</li>)
    // });

    return (
        <div>
            <Jumbotron>
                <h1>I heard React was good.</h1>
                <Form>
                  <ControlLabel>See what else is good</ControlLabel>
                  <FormControl type="text" placeholder="Enter Your Favorite Hashtag, Bro" ref="hashInput" />
                  <Button type="submit" onSubmit={this._handleClick}>Submit</Button>
                </Form>
            </Jumbotron>
       {/*
            <Row>
              <Col xs={12} md={3}>
                <ul><twitter {data}/></ul>
              </Col>
              <Col xs={12} md={3}>
                <ul><facebook {data}/></ul>
              </Col>
              <Col xs={12} md={3}>
                <ul><giphy {data}/></ul>
              </Col>
            </Row>
          */}     
        </div>
    );
  }


}

// Export dependencies like this:
export default Main;
