import React from 'react';
import { Button } from 'react-bootstrap';
let pictures = require('../../instaDemo.json')

class Insta extends React.Component {
  constructor() {
      super();

      this.state = {
          pics: []
      }
  }
  render() {
    let pics = this.props.hashtag.map(function(pic) {
        return (
            <div className="col-xs-12 col-md-4">
                <img className="img-responsive img-rounded" src={pic.images.standard_resolution.url} key={pic.id}/>
            </div>
        );
    });

    let heading = '';

    if(this.props.show) {
            heading = <div><h2>Instagram Results:</h2><hr /></div>;
    }
    return (
        <div>
            {heading}
            <div className="row">
                {pics}
            </div>
        </div>

    );
  }
}
Insta.defaultProps = {
    pics: []
};
// Export dependencies like this:
export default Insta;
