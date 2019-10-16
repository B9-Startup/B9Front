import React, { useState } from 'react';
import 'siimple';
import api from '../../services/api';

const Modal = ({ fechaModal, projetoSelecionado }) => {
  const [nNome, setNNome] = useState(projetoSelecionado.nome);
  const [nDescricao, setNDescricao] = useState(projetoSelecionado.descricao);
  const [nUteis, setNUteis] = useState(projetoSelecionado.info_uteis);
  const [nPrioridade, setNPrioridade] = useState(projetoSelecionado.prioridade);
  const [nInicioEstimado, setNInicioEstimado] = useState(projetoSelecionado.inicio_projeto);
  const [nInicioReal, setNInicioReal] = useState(projetoSelecionado.inicio_real );
  const [nTempoEstimado, setNTempoEstimado] = useState(projetoSelecionado.tempo_estimado);
  const [nTempoGasto, setNTempoGasto] = useState(projetoSelecionado.tempo_gasto);
  const [nTerminoEstimado, setNTerminoEstimado] = useState(projetoSelecionado.termino_estimado);
  const [nTerminoReal, setNTerminoReal] = useState(projetoSelecionado.termino_real);
  const [nTipoProjeto, setNTipoProjeto] = useState(projetoSelecionado.tipo_projeto);
  const [nValorDisponivel, setNValorDisponivel] = useState(projetoSelecionado.valor_disponivel);
  const [nValorGasto, setNValorGasto] = useState(projetoSelecionado.valor_gasto);
  const [sucesso, setSucesso] = useState(false);

  async function salvarProjeto(id) {
    const response = await api.post(`/projetos/${id}`, {
      headers: {
        'Ping-Other': 'pingpong',
        'Content-Type': 'application/xml',
        'Access-Control-Request-Method': 'PUT',
        'Access-Control-Request-Headers': 'X-PINGOTHER, Content-Type',
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        nome: nNome, 
        tipo_projeto: nTipoProjeto, 
        descricao: nDescricao,
        prioridade: nPrioridade,
        info_uteis: nUteis,
        inicio_projeto: nInicioEstimado,
        termino_estimado: nTerminoEstimado,
        inicio_real: nInicioReal,
        termino_real: nTerminoReal,
        tempo_estimado: nTempoEstimado,
        tempo_gasto: nTempoGasto,
        valor_disponivel: nValorDisponivel,
        valor_gasto: nValorGasto
      }
    })

   if(response) {
     console.log(response);
   }
  }

  const novoNome = ev => {
    const { target: { value } } = ev;
    setNNome(value);
    console.log(value)
  }

  const novaDescricao = ev => {
    const { target: { value } } = ev;
    setNDescricao(value);
  }

  const novoUteis = ev => {
    const { target: { value } } = ev;
    setNUteis(value);
  }

  const novoPrioridade = ev => {
    const { target: { value } } = ev;
    setNPrioridade(value);
  }

  const novoInicioEstimado = ev => {
    const { target: { value } } = ev;
    setNInicioEstimado(value);
  }

  const novoInicioReal = ev => {
    const { target: { value } } = ev;
    setNInicioReal(value);
  }

  const novoTempoEstimado = ev => {
    const { target: { value } } = ev;
    setNTempoEstimado(value);
  }

  const novoTempoGasto = ev => {
    const { target: { value } } = ev;
    setNTempoGasto(value);
  }

  const novoTerminoEstimado = ev => {
    const { target: { value } } = ev;
    setNTerminoEstimado(value);
  }

  const novoTerminoReal = ev => {
    const { target: { value } } = ev;
    setNTerminoReal(value);
  }

  const novoTipoProjeto = ev => {
    const { target: { value } } = ev;
    setNTipoProjeto(value);
  }

  const novoValorDisponivel = ev => {
    const { target: { value } } = ev;
    setNValorDisponivel(value);
  }

  const novoValorGasto = ev => {
    const { target: { value } } = ev;
    setNValorGasto(value);
  }

  return (
    <div class="siimple-modal siimple-modal--medium" id="modal">
      <div class="siimple-modal-content">
        <div class="siimple-modal-header">
          <div class="siimple-modal-header-title">{projetoSelecionado.nome}</div>
          <div class="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div class="siimple-modal-body">

          {!sucesso &&
            <React.Fragment>
              <label class="siimple-label">Nome: </label>
              <input type="text" class="siimple-input" style={{ width: '90%' }} value={nNome} onChange={ev => novoNome(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Descrição:</label>
              <textarea class="siimple-textarea siimple-textarea--fluid" style={{ width: '86%', marginTop: '19px' }} value={nDescricao} onChange={ev => novaDescricao(ev)}></textarea>

              <label class="siimple-label" style={{ marginTop: '19px' }}>Informações Uteis: </label>
              <input type="text" class="siimple-input" style={{ width: '78%', marginTop: '19px' }} value={nUteis} onChange={ev => novoUteis(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Prioridade: </label>
              <input type="text" class="siimple-input" style={{ width: '85%', marginTop: '19px' }} value={nPrioridade} onChange={ev => novoPrioridade(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Início Estimado: </label>
              <input type="text" class="siimple-input" style={{ width: '80%', marginTop: '19px' }} value={nInicioEstimado} onChange={ev => novoInicioEstimado(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Início Real: </label>
              <input type="text" class="siimple-input" style={{ width: '85%', marginTop: '19px' }} value={nInicioReal} onChange={ev => novoInicioReal(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Tempo Estimado: </label>
              <input type="text" class="siimple-input" style={{ width: '79%', marginTop: '19px' }} value={nTempoEstimado} onChange={ev => novoTempoEstimado(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Tempo Gasto: </label>
              <input type="text" class="siimple-input" style={{ width: '82%', marginTop: '19px' }} value={nTempoGasto} onChange={ev => novoTempoGasto(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Termino Estimado: </label>
              <input type="text" class="siimple-input" style={{ width: '78%', marginTop: '19px' }} value={nTerminoEstimado} onChange={ev => novoTerminoEstimado(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Termino Real: </label>
              <input type="text" class="siimple-input" style={{ width: '82%', marginTop: '19px' }} value={nTerminoReal} onChange={ev => novoTerminoReal(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Tipo Projeto: </label>
              <input type="text" class="siimple-input" style={{ width: '83%', marginTop: '19px' }} value={nTipoProjeto} onChange={ev => novoTipoProjeto(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Valor Disponível: </label>
              <input type="text" class="siimple-input" style={{ width: '79%', marginTop: '19px' }} value={nValorDisponivel} onChange={ev => novoValorDisponivel(ev)} />

              <label class="siimple-label" style={{ marginTop: '19px' }}>Valor Gasto: </label>
              <input type="text" class="siimple-input" style={{ width: '84%', marginTop: '19px' }} value={nValorGasto} onChange={ev => novoValorGasto(ev)} />
            </React.Fragment>
          }
          {sucesso &&
            <div class="siimple-h2 siimple--color-primary">Editado com Sucesso</div>
          }
        </div>


        <div class="siimple-modal-footer">
          <div class="siimple-btn siimple-btn--primary" onClick={fechaModal}>Fechar</div>
          <div class="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => salvarProjeto(projetoSelecionado.id)}>Salvar</div>
        </div>
      </div>
    </div>
  )
}

export default Modal;