import React from 'react';
import 'siimple';
import Title from '../../reutilizados/title';

const Configuracoes = () => {
  return(
    <React.Fragment>
      <Title texto="Configurações"/>
      <div className="siimple-content">
        <label className="siimple-label">Seu nome: </label>
        <input style={{width: '383px', marginRight: '19px'}} type="text" className="siimple-input" placeholder=""/>
        <div className="siimple-btn siimple-btn--primary">Alterar</div>
      </div>
      <div className="siimple-content">
        <label className="siimple-label">Senha: </label>
        <input style={{width: '408px', marginRight: '19px'}} type="text" className="siimple-input" placeholder=""/>
        <div className="siimple-btn siimple-btn--primary">Alterar</div>
      </div>
    </React.Fragment>
  )
}

export default Configuracoes;