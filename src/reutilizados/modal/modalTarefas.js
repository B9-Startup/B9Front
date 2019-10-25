import React, { useState } from 'react';
import 'siimple';
import api from '../../services/api';

const ModalTarefas = ({ tarefaSelecionada, fechaModal, editar }) => {
  const [nAndamento, setNAndamento] = useState(tarefaSelecionada && tarefaSelecionada.andamento ? tarefaSelecionada.andamento : '');
  const [nAtribuido, setNAtribuido] = useState(tarefaSelecionada && tarefaSelecionada.atribuido ? tarefaSelecionada.atribuido : '');
  const [nCriadoEm, setNCriadoEm] = useState(tarefaSelecionada && tarefaSelecionada.criado_em ? tarefaSelecionada.criado_em : '');
  const [nDescricao, setNDescricao] = useState(tarefaSelecionada && tarefaSelecionada.descricao ? tarefaSelecionada.descricao : '');
  const [nEsforcoEstimado, setNEsforcoEstimado] = useState(tarefaSelecionada && tarefaSelecionada.esforco_estimado ? tarefaSelecionada.esforco_estimado : '');
  const [nEsforcoReal, setNEsforcoReal] = useState(tarefaSelecionada && tarefaSelecionada.esforco_real ? tarefaSelecionada.esforco_real : '');
  const [nInicioEstimado, setNInicioEstimado] = useState(tarefaSelecionada && tarefaSelecionada.inicio_estimado ? tarefaSelecionada.inicio_estimado : '');
  const [nInicioReal, setNInicioReal] = useState(tarefaSelecionada && tarefaSelecionada.inicio_real ? tarefaSelecionada.inicio_real : '');
  const [nSolicitante, setNSolicitante] = useState(tarefaSelecionada && tarefaSelecionada.solicitante ? tarefaSelecionada.solicitante : '');
  const [nTags, setNTags] = useState(tarefaSelecionada && tarefaSelecionada.tags ? tarefaSelecionada.tags : '');
  const [nTerminoEstimado, setNTerminoEstimado] = useState(tarefaSelecionada && tarefaSelecionada.termino_estimado ? tarefaSelecionada.termino_estimado : '');
  const [nTerminoReal, setNTerminoReal] = useState(tarefaSelecionada && tarefaSelecionada.termino_real ? tarefaSelecionada.termino_real : '');
  const [nTitulo, setNTitulo] = useState(tarefaSelecionada && tarefaSelecionada.titulo ? tarefaSelecionada.titulo : '');
  const [erro, setErro] = useState(false);

  async function salvarTarefa(id) {
    const response = await api.put(`/tarefas/${id}`, {
        titulo: nTitulo,
        andamento: nAndamento,
        atribuido: nAtribuido,
        criado_em: nCriadoEm,
        descricao: nDescricao,
        esforco_estimado: nEsforcoEstimado,
        esforco_real: nEsforcoReal,
        inicio_estimado: nInicioEstimado,
        inicio_real: nInicioReal,
        solicitante: nSolicitante,
        tags: nTags,
        termino_estimado: nTerminoEstimado,
        termino_real: nTerminoReal,
    })

   if(response && response.data && response.data.status !== 'error') {
      window.location.href = '/tarefas';
      console.log(response)
   } else {
      setErro(true);
      console.log(response)
   }
  }

  async function inserirTarefa() {
    const data = new FormData();
        data.append('titulo', nTitulo);
        data.append('criado_em', nCriadoEm);
        data.append('solicitante', nSolicitante);
        data.append('atribuido', nAtribuido);
        data.append('descricao', nDescricao);
        data.append('tags', nTags);
        data.append('inicio_estimado', nInicioEstimado);
        data.append('termino_estimado', nTerminoEstimado);
        data.append('inicio_real', nInicioReal);
        data.append('termino_real', nTerminoReal);
        data.append('esforco_estimado', nEsforcoEstimado);
        data.append('esforco_real', nEsforcoReal);
        data.append('andamento', nAndamento);
    const response = await api.post('/tarefas', data)

    if (response && response.data && response.data.status !== 'error') {
      window.location.href = '/tarefas';
    } else {
      setErro(true);
      console.log(response)
    }
  }

  const novoAndamento = ev => {
    const { target: { value } } = ev;
    setNAndamento(value);
  }

  const novaAtribuicao = ev => {
    const { target: { value } } = ev;
    setNAtribuido(value);
  }

  const novoCriadoEm = ev => {
    const { target: { value } } = ev;
    setNCriadoEm(value);
  }

  const novaDescricao = ev => {
    const { target: { value } } = ev;
    setNDescricao(value);
  }

  const novoEsforcoEstimado = ev => {
    const { target: { value } } = ev;
    setNEsforcoEstimado(value);
  }

  const novoEsforcoReal = ev => {
    const { target: { value } } = ev;
    setNEsforcoReal(value);
  }

  const novoInicioEstimado = ev => {
    const { target: { value } } = ev;
    setNInicioEstimado(value);
  }

  const novoInicioReal = ev => {
    const { target: { value } } = ev;
    setNInicioReal(value);
  }

  const novoSolicitante = ev => {
    const { target: { value } } = ev;
    setNSolicitante(value);
  }

  const novoTerminoEstimado = ev => {
    const { target: { value } } = ev;
    setNTerminoEstimado(value);
  }

  const novoTerminoReal = ev => {
    const { target: { value } } = ev;
    setNTerminoReal(value);
  }

  const novoTitulo = ev => {
    const { target: { value } } = ev;
    setNTitulo(value);
  }

  const novaTag = ev => {
    const { target: { value } } = ev;
    setNTags(value);
  }

  return (
    <div class="siimple-modal siimple-modal--medium" id="modal">
      <div class="siimple-modal-content">
        <div class="siimple-modal-header">
          <div class="siimple-modal-header-title">{tarefaSelecionada && tarefaSelecionada.titulo ? tarefaSelecionada.titulo : 'Adicionar tarefa'}</div>
          <div class="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div class="siimple-modal-body">
          <label class="siimple-label">Título: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nTitulo} onChange={ev => novoTitulo(ev)} />
          <label class="siimple-label">Solicitante: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nSolicitante} onChange={ev => novoSolicitante(ev)} />
          <label class="siimple-label">Atribuido Para: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nAtribuido} onChange={ev => novaAtribuicao(ev)} />
          <label class="siimple-label">Andamento: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nAndamento} onChange={ev => novoAndamento(ev)} />
          <label class="siimple-label">Criado: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nCriadoEm} onChange={ev => novoCriadoEm(ev)} />
          <label class="siimple-label">Descrição: </label>
          <textarea class="siimple-textarea" style={{ width: '100%' }} value={nDescricao} onChange={ev => novaDescricao(ev)} />
          <label class="siimple-label">Esforço Estimado: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nEsforcoEstimado} onChange={ev => novoEsforcoEstimado(ev)} />
          <label class="siimple-label">Esforço Real: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nEsforcoReal} onChange={ev => novoEsforcoReal(ev)} />
          <label class="siimple-label">Início Estimado: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nInicioEstimado} onChange={ev => novoInicioEstimado(ev)} />
          <label class="siimple-label">Início Real: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nInicioReal} onChange={ev => novoInicioReal(ev)} />
          <label class="siimple-label">Tags: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nTags} onChange={ev => novaTag(ev)} />
          <label class="siimple-label">Termino Estimado: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nTerminoEstimado} onChange={ev => novoTerminoEstimado(ev)} />
          <label class="siimple-label">Termino Real: </label>
          <input type="text" class="siimple-input" style={{ width: '100%' }} value={nTerminoReal} onChange={ev => novoTerminoReal(ev)} />
        </div>


        <div class="siimple-modal-footer">
        <div class="siimple-btn siimple-btn--primary" onClick={fechaModal}>Fechar</div>
        { editar ? 
          <div class="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => salvarTarefa(tarefaSelecionada.id)}>Salvar</div>
          :
          <div class="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => inserirTarefa()}>Salvar</div>
        }
        {erro && <p class="siimple-p siimple--color-error" style={{marginTop: '5px'}}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
      </div>
      </div>
    </div>
  )
}

export default ModalTarefas;