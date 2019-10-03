import React from 'react';
import Nav from './componentes/nav';
import Menu from './componentes/menu';
import Conteudo from './componentes/conteudo';

const App = () => {
  return(
    <React.Fragment>
      <Nav />
      <Menu />
      <Conteudo />
    </React.Fragment>
  )
}

export default App;
