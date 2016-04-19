import React from 'react';
import { Button } from 'react-bootstrap';

class Random extends React.Component {
  constructor() {
      super();

      this.state = {
          count: 0
      };
  }
  render() {
    return (
        <div>
            <Button bsStyle="success" onClick={this._whatsUp.bind(this)}>So Awesome Yo!</Button>
            <h3>Keeping the Count Homie</h3>
            <h4>It's {this.state.count}</h4>
        </div>
    );
  }

  _whatsUp() {
      return this.setState({count: (this.state.count += 1)});
  }
}

// Export dependencies like this:
export default Random;
