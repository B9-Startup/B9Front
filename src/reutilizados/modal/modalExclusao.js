import React, {useEffect} from 'react';
import 'siimple';

const ModalExclusao = ({ fechaModal,  excluir, item}) => {
  return(
    <div class="siimple-modal siimple-modal--medium" id="modal">
      <div class="siimple-modal-content">
        <div class="siimple-modal-header">
          <div class="siimple-modal-header-title">Tem certeza que deseja excluir?</div>
          <div class="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div class="siimple-modal-body">
          <p>Atenção, a exclusão será permanente!</p>        
        </div>
        <div class="siimple-modal-footer">
        <div class="siimple-btn siimple-btn--warning" onClick={fechaModal}>Cancelar</div>
        <div class="siimple-btn siimple-btn--error" style={{marginLeft: '5px'}} onClick={() => excluir(item)}>Excluir</div>
        </div>
      </div>
    </div>
  )
}

export default ModalExclusao;