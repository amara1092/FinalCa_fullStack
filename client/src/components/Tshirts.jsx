import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'

class Tshirts extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.tshirts && this.state.tshirtsLoaded === true) {
      return (
        <p>Error loading tshirts. Try again later.</p>
      );
    } else if (!this.state.tshirts) {
      return (
        <p>Loading tshirts...</p>
      );
    } else if (this.state.tshirts.length === 0) {
      return (
        <p>Sorry, no tshirts are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Tshirts in the database</h1>
          <ul>
            {this.state.tshirts.map(tshirt => (
              <li key={`tshirt_${tshirt._id}`}><Link to={`/tshirt/${tshirt._id}`}>{tshirt.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-tshirt'>Add a new Tshirt</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.tshirtsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({tshirts       : json});
        this.setState({tshirtsLoaded : true});
      })
      .catch(err => {
        this.setState({tshirtsLoaded: true});
      });
  }

}

export default Tshirts;

