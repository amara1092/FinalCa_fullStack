import React from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import { Link } from '@reach/router';
import * as Config from '../config.json'
import '../lib/sass/main.scss';

class NavBar extends React.Component {

    render() {
        return(
        <div>
            <div class="Header">
                <h1>All tshirt Store</h1>
            </div>

        </div>
        )
    }
}



export default NavBar;

