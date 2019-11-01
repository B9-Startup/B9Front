import React, { useState } from 'react';
import 'siimple';
import api from '../../services/api';
import { Editor } from '@tinymce/tinymce-react';


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
    } else {
      setErro(true);
    }
  }

  const novoNome = ev => {
    const { target: { value } } = ev;
    setNNome(value);
  }

  const novaDescricao = (ev) => {
    setNDescricao(ev);
    console.log(ev)
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
    <div className="siimple-modal siimple-modal--medium" id="modal">
      <div className="siimple-modal-content">
        <div className="siimple-modal-header">
          <div className="siimple-modal-header-title">{projetoSelecionado && projetoSelecionado.nome ? projetoSelecionado.nome : 'Inserir Projeto'}</div>
          <div className="siimple-modal-header-close" id="modal-close" onClick={fechaModal}></div>
        </div>
        <div className="siimple-modal-body">

          {!sucesso &&
            <React.Fragment>
              <label className="siimple-label">Nome: </label>
              <input type="text" className="siimple-input" style={{ width: '100%' }} value={nNome} onChange={ev => novoNome(ev)} />

              <label className="siimple-label">Descrição:</label>
              <Editor
                
                apiKey="zgdpx17mslgu6d8tsbjgomickxyqioc3xqbqyaq5bkmfxl3z"
                init={{ 
                  height: 200, 
                  menubar: false, 
                  selector: 'textarea',
                  plugins: [
                    'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                    'save table directionality emoticons template paste',
                    'emoticons',
                    'save'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
                }}
              value={nDescricao}
              onEditorChange={novaDescricao}
              />

              <label className="siimple-label">Informações Uteis: </label>
              <input type="text" className="siimple-input" style={{ width: '100%', }} value={nUteis} onChange={ev => novoUteis(ev)} />

              <label className="siimple-label">Prioridade: </label>
              <input type="text" className="siimple-input" style={{ width: '100%', }} value={nPrioridade} onChange={ev => novoPrioridade(ev)} />

              <label className="siimple-label">Início Estimado: </label>
              <input type="date" className="siimple-input" style={{ width: '100%', }} value={nInicioEstimado} onChange={ev => novoInicioEstimado(ev)} />

              <label className="siimple-label">Início Real: </label>
              <input type="date" className="siimple-input" style={{ width: '100%', }} value={nInicioReal} onChange={ev => novoInicioReal(ev)} />

              <label className="siimple-label">Tempo Estimado: </label>
              <input type="time" className="siimple-input" style={{ width: '100%', }} value={nTempoEstimado} onChange={ev => novoTempoEstimado(ev)} />

              <label className="siimple-label">Tempo Gasto: </label>
              <input type="time" className="siimple-input" style={{ width: '100%', }} value={nTempoGasto} onChange={ev => novoTempoGasto(ev)} />

              <label className="siimple-label">Termino Estimado: </label>
              <input type="date" className="siimple-input" style={{ width: '100%', }} value={nTerminoEstimado} onChange={ev => novoTerminoEstimado(ev)} />

              <label className="siimple-label">Termino Real: </label>
              <input type="date" className="siimple-input" style={{ width: '100%', }} value={nTerminoReal} onChange={ev => novoTerminoReal(ev)} />

              <label className="siimple-label">Tipo Projeto: </label>
              <input type="text" className="siimple-input" style={{ width: '100%', }} value={nTipoProjeto} onChange={ev => novoTipoProjeto(ev)} />

              <label className="siimple-label">Valor Disponível: </label>
              <input type="text" className="siimple-input" style={{ width: '100%', }} value={nValorDisponivel} onChange={ev => novoValorDisponivel(ev)} />

              <label className="siimple-label">Valor Gasto: </label>
              <input type="text" className="siimple-input" style={{ width: '100%', }} value={nValorGasto} onChange={ev => novoValorGasto(ev)} />
            </React.Fragment>
          }
        </div>


        <div className="siimple-modal-footer">
          <div className="siimple-btn siimple-btn--primary" onClick={fechaModal}>Fechar</div>
          {editar ?
            <div className="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => salvarProjeto(projetoSelecionado.id)}>Salvar</div> :
            <div className="siimple-btn siimple-btn--success" style={{ marginLeft: '11px' }} onClick={() => inserirProjeto()}>Salvar</div>
          }
          {erro && <p className="siimple-p siimple--color-error" style={{ marginTop: '5px' }}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
        </div>
      </div>
    </div>
  )
}

export default ModalProjeto;