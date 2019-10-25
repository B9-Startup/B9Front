import React, { useState, useEffect } from 'react';
import 'siimple';
import api from '../../services/api';

const ModalProjeto = ({ fechaModal, projetoSelecionado, editar }) => {
  const [nNome, setNNome] = useState(projetoSelecionado && projetoSelecionado.nome ? projetoSelecionado.nome : '');
  const [nDescricao, setNDescricao] = useState(projetoSelecionado && projetoSelecionado.descricao ? projetoSelecionado.descricao : '');
  const [nUteis, setNUteis] = useState(projetoSelecionado && projetoSelecionado.info_uteis ? projetoSelecionado.info_uteis : '');
  const [nPrioridade, setNPrioridade] = useState(projetoSelecionado && projetoSelecionado.prioridade ? projetoSelecionado.prioridade : '');
  const [nInicioEstimado, setNInicioEstimado] = useState(projetoSelecionado && projetoSelecionado.inicio_projeto ? projetoSelecionado.inicio_projeto : '');
  const [nInicioReal, setNInicioReal] = useState(projetoSelecionado && projetoSelecionado.inicio_real ? projetoSelecionado.inicio_real : '');
  const [nTempoEstimado, setNTempoEstimado] = useState(projetoSelecionado && projetoSelecionado.tempo_estimado ? projetoSelecionado.tempo_estimado : '');
  const [nTempoGasto, setNTempoGasto] = useState(projetoSelecionado && projetoSelecionado.tempo_gasto ? projetoSelecionado.tempo_gasto : '');
  const [nTerminoEstimado, setNTerminoEstimado] = useState(projetoSelecionado && projetoSelecionado.termino_estimado ? projetoSelecionado.termino_estimado : '');
  const [nTerminoReal, setNTerminoReal] = useState(projetoSelecionado && projetoSelecionado.termino_real ? projetoSelecionado.termino_real : '');
  const [nTipoProjeto, setNTipoProjeto] = useState(projetoSelecionado && projetoSelecionado.tipo_projeto ? projetoSelecionado.tipo_projeto : '');
  const [nValorDisponivel, setNValorDisponivel] = useState(projetoSelecionado && projetoSelecionado.valor_disponivel ? projetoSelecionado.valor_disponivel : '');
  const [nValorGasto, setNValorGasto] = useState(projetoSelecionado && projetoSelecionado.valor_gasto ? projetoSelecionado.valor_gasto : '');
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  async function salvarProjeto(id) {
    const response = await api.put(`/projetos/${id}`, {
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
    })

    if (response && response.data && response.data.status !== 'error') {
      window.location.href = '/projetos';
    } else {
      setErro(true);
    }
  }

  async function inserirProjeto() {
    const data = new FormData();
        data.append('nome', nNome);
        data.append('tipo_projeto', nTipoProjeto);
        data.append('descricao', nDescricao);
        data.append('prioridade', nPrioridade);
        data.append('info_uteis', nUteis);
        data.append('inicio_projeto', nInicioEstimado);
        data.append('termino_estimado', nTerminoEstimado);
        data.append('inicio_real', nInicioReal);
        data.append('termino_real', nTerminoReal);
        data.append('tempo_estimado', nTempoEstimado);
        data.append('tempo_gasto', nTempoGasto);
        data.append('valor_disponivel', nValorDisponivel);
        data.append('valor_gasto', nValorGasto);
    const response = await api.post('/projetos', data)

    if (response && response.data && response.data.status !== 'error') {
      window.location.href = '/projetos';
      console.log(response)
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
          <div class="siimple-modal-header-title">{projetoSelecionado && projetoSelecionado.nome ? projetoSelecionado.nome : 'Inserir Projeto'}</div>
          <div class="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div class="siimple-modal-body">

          {!sucesso &&
            <React.Fragment>
              <label class="siimple-label">Nome: </label>
              <input type="text" class="siimple-input" style={{ width: '100%' }} value={nNome} onChange={ev => novoNome(ev)} />

              <label class="siimple-label">Descrição:</label>
              <textarea class="siimple-textarea siimple-textarea--fluid" style={{ width: '100%' }} value={nDescricao} onChange={ev => novaDescricao(ev)}></textarea>

              <label class="siimple-label">Informações Uteis: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nUteis} onChange={ev => novoUteis(ev)} />

              <label class="siimple-label">Prioridade: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nPrioridade} onChange={ev => novoPrioridade(ev)} />

              <label class="siimple-label">Início Estimado: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nInicioEstimado} onChange={ev => novoInicioEstimado(ev)} />

              <label class="siimple-label">Início Real: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nInicioReal} onChange={ev => novoInicioReal(ev)} />

              <label class="siimple-label">Tempo Estimado: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nTempoEstimado} onChange={ev => novoTempoEstimado(ev)} />

              <label class="siimple-label">Tempo Gasto: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nTempoGasto} onChange={ev => novoTempoGasto(ev)} />

              <label class="siimple-label">Termino Estimado: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nTerminoEstimado} onChange={ev => novoTerminoEstimado(ev)} />

              <label class="siimple-label">Termino Real: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nTerminoReal} onChange={ev => novoTerminoReal(ev)} />

              <label class="siimple-label">Tipo Projeto: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nTipoProjeto} onChange={ev => novoTipoProjeto(ev)} />

              <label class="siimple-label">Valor Disponível: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nValorDisponivel} onChange={ev => novoValorDisponivel(ev)} />

              <label class="siimple-label">Valor Gasto: </label>
              <input type="text" class="siimple-input" style={{ width: '100%', }} value={nValorGasto} onChange={ev => novoValorGasto(ev)} />
            </React.Fragment>
          }
        </div>


        <div class="siimple-modal-footer">
          <div class="siimple-btn siimple-btn--primary" onClick={fechaModal}>Fechar</div>
          { editar ? 
            <div class="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => salvarProjeto(projetoSelecionado.id)}>Salvar</div> :
            <div class="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => inserirProjeto()}>Salvar</div>
          }
          {erro && <p class="siimple-p siimple--color-error" style={{ marginTop: '5px' }}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
        </div>
      </div>
    </div>
  )
}

export default ModalProjeto;