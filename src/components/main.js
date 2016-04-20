import React from 'react';
import { Button } from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Insta from './instagram';
import Giphy from './giphy';

class Main extends React.Component {
  constructor() {
      super();

      this.state = {
          instagram: [],
          giphy: []
      };
  }

  _handleClick(event) {
      var self = this;
    let api = 'https://api.instagram.com/v1/tags/'+ this.refs.hashInput.value +'/media/recent?access_token=37506794.1677ed0.2737d7b2a1494fd59bd3f340e36e79f6';
    fetch(api).then(response => {
        let res = response.json();
        res.then(function (data) {
            self.setState({instagram: data.data});
        })
    }).then(err => {console.log(err)})

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const init = {
      method: "GET",
      headers: headers,
      mode: "cors"
    }
    return fetch("http://api.giphy.com/v1/gifs/search?q="+ this.refs.hashInput.value +"&api_key=dc6zaTOxFJmzC&limit=9&fmt=json", init)
    .then(function(response){
      const json = response.json();
      json.then(data => {
          self.setState({giphy: data.data});
      })
    });
  }

  render() {
    return (
        <div>
            <Jumbotron>
                <h1>I heard React was good.</h1>
                  <ControlLabel>See what else is good</ControlLabel>
                  <input type="text" placeholder="Enter Your Favorite Hashtag, Bro" ref="hashInput" />
                  <Button onClick={this._handleClick.bind(this)}>Submit</Button>
            </Jumbotron>

            <Insta hashtag={this.state.instagram} />
            <Giphy hashtag={this.state.giphy} />
        </div>
    );
  }
}

// Export dependencies like this:
export default Main;
