import React, { useState } from 'react';
import 'siimple';
import api from '../../services/api';

const ModalArquivamento = ({ arquivamentoSelecionado, fechaModal, editar }) => {
  const [nNome, setNNome] = useState(arquivamentoSelecionado && arquivamentoSelecionado.nome ? arquivamentoSelecionado.nome : '');
  const [nDescricao, setNDescricao] = useState(arquivamentoSelecionado && arquivamentoSelecionado.descricao ? arquivamentoSelecionado.descricao : '');

  const [erro, setErro] = useState(false);

  async function salvarArquivamento(id) {
    const response = await api.put(`/anotacoes/${id}`, {
        nome: nNome,
        descricao: nDescricao,
    })

   if(response && response.data && response.data.status !== 'error') {
      window.location.href = '/arquivamento';
   } else {
      setErro(true);
      console.log(response)
   }
  }

  async function inserirArquivamento() {
    const data = new FormData();
        data.append('nome', nNome);
        data.append('descricao', nDescricao);
    const response = await api.post('/anotacoes', data)

    if (response && response.data && response.data.status !== 'error') {
      window.location.href = '/arquivamento';
    } else {
      setErro(true);
      console.log(response)
    }
  }

  const novoNome = ev => {
    const { target: { value } } = ev;
    setNNome(value);
  }

  const novaDescricao = ev => {
    const { target: { value } } = ev;
    setNDescricao(value);
  }

 

  return (
    <div class="siimple-modal siimple-modal--medium" id="modal">
      <div class="siimple-modal-content">
        <div class="siimple-modal-header">
          <div class="siimple-modal-header-title">{arquivamentoSelecionado && arquivamentoSelecionado.nome ? arquivamentoSelecionado.nome : 'Adicionar Arquivamento'}</div>
          <div class="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div class="siimple-modal-body">
          <label class="siimple-label">Nome: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nNome} onChange={ev => novoNome(ev)} />
          <label class="siimple-label">Descrição: </label>
          <textarea class="siimple-textarea" style={{ width: '100%' }} value={nDescricao} onChange={ev => novaDescricao(ev)} />
        </div>
      
        <div class="siimple-modal-footer">
        <div class="siimple-btn siimple-btn--primary" onClick={fechaModal}>Fechar</div>
        { editar ? 
          <div class="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => salvarArquivamento(arquivamentoSelecionado.id)}>Salvar</div>
          :
          <div class="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => inserirArquivamento()}>Salvar</div>
        }
        {erro && <p class="siimple-p siimple--color-error" style={{marginTop: '5px'}}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
      </div>
      </div>
    </div>
  )
}

export default ModalArquivamento;