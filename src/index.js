// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';
import {Jumbotron} from 'react-bootstrap';

// Import dependencies like this:
import Random from './components/random-component';

class App extends React.Component {
  render() {
    return (
      <Jumbotron>
          <h1>I heard React was good.</h1>
          <div><Random /></div>
      </Jumbotron>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
