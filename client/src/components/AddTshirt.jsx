import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Addtshirt extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    title     : ''
  }

  state = {
    size     : ''
  }

  state = {
    colour     : ''
  }

  state = {
    tshirt     : ''
  }
  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the tshirt. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='#' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/'>Back to All tshirts</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding tshirt...</div>
      );
    } else {
      return (
        <div class = "create">
          <h1>Add a tshirt</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
            <center>
            <label>Tshirt title:
                <input type='' value={this.state.title} onChange={this.handletitleUpdate.bind(this)} />
              </label>
              </center>
            </div>

            <div>
            <center>
              <label>Tshirt size:
                <input type='' value={this.state.size} onChange={this.handlesizeUpdate.bind(this)} />
              </label>
              </center>
            </div>

            <div>
            <center>
              <label>Tshirt colour:
                <input type='' value={this.state.colour} onChange={this.handlecolourUpdate.bind(this)} />
              </label>
              </center>
            </div>

            <div>
            <center>
              <label>Tshirt tshirt:
                <input type='' value={this.state.tshirt} onChange={this.handletshirtUpdate.bind(this)} />
              </label>
              </center>
            </div>

            {/* <div>
              <label>tshirt Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
            <center>
              <input type='submit' value='Add tshirt' />
              </center>
            </div>

          </form>
          <center>
          <Link to='/'>Back to All tshirts</Link>
        </center>
        </div>
      );
    }
  }

  handletitleUpdate(e) {
    this.setState({title: e.target.value || null});
  }

  handlesizeUpdate(e) {
    this.setState({size: e.target.value || null});
  }

  handlecolourUpdate(e) {
    this.setState({colour: e.target.value || null});
  }

  handletshirtUpdate(e) {
    this.setState({tshirt: e.target.value || null});
  }

  handleContentUpdate(e) {
    this.setState({content: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.tshirtsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        title     : this.state.title,
        colour    : this.state.colour,
        size     : this.state.size,
        tshirt     : this.state.tshirt,
        content   : this.state.content
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/tshirt/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.tshirtID);
  }

}

export default Addtshirt;
