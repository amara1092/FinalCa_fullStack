import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'
import NavBar from './NavBar';
import Header from './Header';


class Size extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.size && this.state.sizeLoaded === true) {
      return (
        <p>Error loading sizes. Try again later.</p>
      );
    } else if (!this.state.size) {
      return (
        <p>Loading sizes...</p>
      );
    } else if (this.state.size.length === 0) {
      return (
        <p>Sorry, no sizes are available</p>
      );
    } else {
      return (
        <div>
        <Header></Header>
        <NavBar></NavBar>
          <h1>Brand:{this.state.size.title}</h1>
          <h1>Size:{this.state.size.size}</h1>
          <h1>Chest:{this.state.size.chest}</h1>
          <h1>Back:{this.state.size.back}</h1>




          <Link to='/'>Back to Menu </Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.sizesAPI}/${this.props.sizeID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({size       : json});
        this.setState({sizeLoaded : true});
      })
      .catch(err => {
        this.setState({sizeLoaded: true});
      });
  }

}

export default Size;
