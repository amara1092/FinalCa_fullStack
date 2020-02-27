import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Tshirt extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.tshirt && this.state.tshirtLoaded === true) {
      return (
        <p>Error loading tshirts. Try again later.</p>
      );
    } else if (!this.state.tshirt) {
      return (
        <p>Loading tshirts...</p>
      );
    } else if (this.state.tshirt.length === 0) {
      return (
        <p>Sorry, no tshirts are available</p>
      );
    } else {
      return (
        <div>
          <h1>Brand:{this.state.tshirt.title}</h1>
          <h1>Tshirt:{this.state.tshirt.tshirt}</h1>
          <h1>Size:{this.state.tshirt.size}</h1>
          <h1>Colour:{this.state.tshirt.colour}</h1>



          <Link to='/'>Back to Menu </Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.tshirtsAPI}/${this.props.tshirtID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({tshirt       : json});
        this.setState({tshirtLoaded : true});
      })
      .catch(err => {
        this.setState({tshirtLoaded: true});
      });
  }

}

export default Tshirt;
