import React from 'react';
import 'siimple';

const ModalExclusao = ({ fechaModal,  excluir, item}) => {
  return(
    <div className="siimple-modal siimple-modal--medium" id="modal">
      <div className="siimple-modal-content">
        <div className="siimple-modal-header">
          <div className="siimple-modal-header-title">Tem certeza que deseja excluir?</div>
          <div className="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div className="siimple-modal-body">
          <p>Atenção, a exclusão será permanente!</p>        
        </div>
        <div className="siimple-modal-footer">
        <div className="siimple-btn siimple-btn--warning" onClick={fechaModal}>Cancelar</div>
        <div className="siimple-btn siimple-btn--error" style={{marginLeft: '5px'}} onClick={() => excluir(item)}>Excluir</div>
        </div>
      </div>
    </div>
  )
}

export default ModalExclusao;