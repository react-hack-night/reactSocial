import React from 'react';

class Giphy extends React.Component {
  constructor() {
      super();

  }
  render() {
    return (
        <ul>
          {this._data().map((obj) => {
            return <li key={obj.id}><img src={obj.images.fixed_height.url}/></li>
          })}
        </ul>
    );
  }
  _data(){
    // this is the important part of the response.data after a call to the api
    // as described in componentDidMount
    return [
      {"images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/xT9DPvlaESuT46R4Fa/200.gif"
        }

      }, "id": "1"},
      {"images": {
        "fixed_height": {
          "url": "http://media0.giphy.com/media/QYWRecbLiAyYg/200.gif"
        }

      }, "id": "2"},
      {"images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/NB8r2OFiUg5ZC/200.gif"
        }

      }, "id": "3"},
    ]
  }

  componentDidMount(){
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const init = {
      method: "GET",
      headers: headers,
      mode: "cors"
    }
    return fetch("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=3&fmt=json", init)
    .then(function(response){
      console.log(response.headers.get("content-type"));
      const json = response.json();
      console.log(json);
    });
  }
}

export default Giphy;
