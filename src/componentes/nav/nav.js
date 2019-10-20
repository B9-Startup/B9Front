import React from 'react';
import 'siimple';

const Nav = () => {
  return(
    <React.Fragment>
      <div>
        <div className="siimple-navbar siimple-navbar--primary siimple-navbar--fluid">
          <a className="siimple-navbar-title" href="#">B9 Startup</a>
          <div className="siimple--float-right">
            <a className="siimple-navbar-item" href="#">Configurações</a>
            <a className="siimple-navbar-item" href="#">Sair</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Nav;