import React, { useState, useEffect } from 'react';
import Nav from './componentes/nav';
import Menu from './componentes/menu';
import Conteudo from './componentes/conteudo';
import Login from './componentes/login';

const App = () => {
  const [exibir, setExibir] = useState(false);

  const url = window.location.href;

  useEffect(() => {
    if(url !== 'http://localhost:3000/login'){
      setExibir(true);
    } else {
      setExibir(false);
    }
  })

  
  console.log(url);

  return(
    <React.Fragment>
      {exibir &&
        <React.Fragment>
          <Nav />
          <Menu />
          <Conteudo />
        </React.Fragment>
      }
      {!exibir &&
        <Login />
      }
    </React.Fragment>
  )
}

export default App;
