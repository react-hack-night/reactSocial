import React from 'react';

class Giphy extends React.Component {
  constructor() {
      super();

  }
  render() {
      let gifs = this.props.hashtag.map((obj) => {
        return (
            <div className="col-xs-12 col-md-4">
                <img className="img-responsive img-rounded" src={obj.images.fixed_height.url} key={obj.id}/>
            </div>
        )
      });

      let heading = '';

      if(this.props.show) {
              heading = <div><h2>Giphy Results:</h2><hr /></div>;
      }
    return (
        <div>
            {heading}
            <div className="row">
                {gifs}
            </div>
        </div>

    );
  }
}

export default Giphy;
