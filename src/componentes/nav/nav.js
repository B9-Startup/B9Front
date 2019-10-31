import React, { useEffect } from 'react';
import 'siimple';
import session from '../../services/session';
import destroiSession from '../../services/detroiSession';
import verificaSession from '../../services/verificaSession';

const Nav = () => {

  useEffect(() => {
    session();
    verificaSession();
    
  })

  return (
    <React.Fragment>
      <div>
        <div className="siimple-navbar siimple-navbar--primary siimple-navbar--fluid">
          <a className="siimple-navbar-title" href="/">B9 Startup</a>
          <div className="siimple--float-right">
            {/* <a className="siimple-navbar-item" href="/configuracoes">Configurações</a> */}
            <a className="siimple-navbar-item" onClick={() => destroiSession()}>Sair</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Nav;