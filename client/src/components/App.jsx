import React    from 'react';
import {Router} from "@reach/router";
//import Navigation   from  './Navigation';
import Tshirts   from './Tshirts';
import Tshirt    from './Tshirt';
import AddTshirt from './AddTshirt';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Tshirts   path='/' />
        <Tshirt    path='/tshirt/:tshirtID' />
        <AddTshirt path='/add-tshirt/' />
      </Router>
    );
  }

}

export default App;
