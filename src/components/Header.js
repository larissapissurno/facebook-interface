import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './Header.css';
import facebookLogo from '../assets/images/facebookLogo.png';

class Header extends Component {

  render() {
    return (
      <nav>
        <img src={facebookLogo}></img>

        <div className="userMenu">
          <strong className="mr-1">Meu perfil</strong>
          <FontAwesomeIcon icon={faUserCircle}/>
        </div>
        
      </nav>
    )
  }
}

export default Header;