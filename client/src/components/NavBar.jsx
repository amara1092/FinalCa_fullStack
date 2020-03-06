import React from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import { Link } from '@reach/router';
import * as Config from '../config.json'
import '../lib/sass/main.scss';

class NavBar extends React.Component {

    render() {
        return(
        <div>
            <div class="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
                        <div class="dropdown-content" >
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        )
    }
}



export default NavBar;

