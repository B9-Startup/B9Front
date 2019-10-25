import React from 'react';
import 'siimple';
import Title from '../../reutilizados/title';

const Configuracoes = () => {
  return(
    <React.Fragment>
      <Title texto="Configurações"/>
      <div class="siimple-content">
        <label class="siimple-label">Seu nome: </label>
        <input style={{width: '383px', marginRight: '19px'}} type="text" class="siimple-input" placeholder=""/>
        <div class="siimple-btn siimple-btn--primary">Alterar</div>
      </div>
      <div class="siimple-content">
        <label class="siimple-label">Senha: </label>
        <input style={{width: '408px', marginRight: '19px'}} type="text" class="siimple-input" placeholder=""/>
        <div class="siimple-btn siimple-btn--primary">Alterar</div>
      </div>
    </React.Fragment>
  )
}

export default Configuracoes;