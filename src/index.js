// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';
import {Grid} from 'react-bootstrap';

// Import styles like this:
import './styles/main.scss';
import Main from './components/main';

import Insta from './components/instagram';

class App extends React.Component {
  render() {
    return (
        <Grid>
            <Main />
        </Grid>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
