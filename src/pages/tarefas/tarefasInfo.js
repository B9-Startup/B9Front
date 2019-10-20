import React from 'react';
import 'siimple';

const TarefasInfo = ({ resultado, apagarTarefa, abreModal }) => {
  return (
    <div class="siimple-content">
    <div class="siimple-grid">
      <div class="siimple-grid-row">
        {resultado.map((i, data) =>
          <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col--sm-12" style={{margin: '5px'}}>
            <div class="siimple-card siimple--text-center">
              <div class="siimple-card-header" style={{width: '100%'}}>
               {`${i.id} - ${i.titulo}`}
              </div>
              <div class="siimple-card-body" style={{width: '100%'}}>
                <span className="siimple--display-block">Para: <strong>{i.atribuido}</strong></span>
                <span className="siimple--display-block">Criado: <strong>{i.criado_em}</strong></span>
                <span className="siimple--display-block">Andamento: <strong>{i.andamento}</strong></span>
              </div>
              <div class="siimple-card-footer" style={{width: '100%'}}>
                <div class="siimple-btn siimple-btn--error" onClick={() => apagarTarefa(i)} style={{margin: '5px'}}>Exluir</div>
                <div class="siimple-btn siimple-btn--primary" onClick={() => abreModal(i)} style={{margin: '5px'}}>Editar</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default TarefasInfo;