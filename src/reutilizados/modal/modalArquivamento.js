import React, { useState } from 'react';
import 'siimple';
import api from '../../services/api';
import { Editor } from '@tinymce/tinymce-react';

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
    }
  }

  const novoNome = ev => {
    const { target: { value } } = ev;
    setNNome(value);
  }

  const novaDescricao = ev => {
    // const { target: { value } } = ev;
    setNDescricao(ev);
    console.log(ev)
  }

 

  return (
    <div className="siimple-modal siimple-modal--medium" id="modal">
      <div className="siimple-modal-content">
        <div className="siimple-modal-header">
          <div className="siimple-modal-header-title">{arquivamentoSelecionado && arquivamentoSelecionado.nome ? arquivamentoSelecionado.nome : 'Adicionar Arquivamento'}</div>
          <div className="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div className="siimple-modal-body">
          <label className="siimple-label">Nome: </label>
          <input type="text" className="siimple-input" style={{ width: '100%' }} value={nNome} onChange={ev => novoNome(ev)} />
          <label className="siimple-label">Descrição: </label>
          <Editor
            className="siimple-textarea"
            type="text"
            apiKey="zgdpx17mslgu6d8tsbjgomickxyqioc3xqbqyaq5bkmfxl3z"
            init={{ height: 200, menubar: true }}
            value={nDescricao}
            onEditorChange={ev => novaDescricao(ev)}
          />
        </div>
      
        <div className="siimple-modal-footer">
        <div className="siimple-btn siimple-btn--primary" onClick={fechaModal}>Fechar</div>
        { editar ? 
          <div className="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => salvarArquivamento(arquivamentoSelecionado.id)}>Salvar</div>
          :
          <div className="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => inserirArquivamento()}>Salvar</div>
        }
        {erro && <p className="siimple-p siimple--color-error" style={{marginTop: '5px'}}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
      </div>
      </div>
    </div>
  )
}

export default ModalArquivamento;