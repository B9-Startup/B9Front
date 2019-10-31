import React, { useState, useEffect } from 'react';
import { Carregando } from './style';
import Modal from '../../reutilizados/modal';
import Title from '../../reutilizados/title';
import ModalExclusao from '../../reutilizados/modal/modalExclusao';

import api from '../../services/api';

const Projetos = () => {
  const [resultado, setResultado] = useState()
  const [openModal, setOpenModal] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState();
  const [exluir, setExcluir] = useState(false);
  const [editar, setEditar] = useState(false);

  async function chamaApi() {
    const response = await api.get('/projetos', {
    })

    if (response) {
      setResultado(response.data)
    }
  }

  async function excluirProjeto(i) {
    const id = i.id
    const response = await api.delete(`/projetos/${id}`, {
    })

    if (response && response.data) {
      setExcluir(false);
      window.location.href = '/projetos'
    }
  }


  useEffect(() => {
    chamaApi();
  }, [])


  const abreModal = (i) => {
    setOpenModal(true);
    setProjetoSelecionado(i);
    setEditar(true)
  }

  const modalInserir = () => {
    setOpenModal(true);
    setEditar(false);
    setProjetoSelecionado(null);
  }

  const fechaModal = () => {
    setOpenModal(false);
  }

  const modalExcuir = (i) => {
    setExcluir(true);
    setProjetoSelecionado(i)
  }

  const fecharModalExcluir = () => {
    setExcluir(false);
  }

  return (
    <React.Fragment>
      {!resultado &&
        <Carregando>
          <div className="siimple-spinner siimple-spinner--primary"></div>
          <p>Um momento...</p>
        </Carregando>
      }

      {resultado &&
        <React.Fragment>
          <Title texto={'Projetos'} />
          <div className="siimple-btn siimple-btn--success" onClick={modalInserir}>Adicionar</div>
          <div className="siimple-content">
            <div className="siimple-table siimple-table--border siimple-table--hover siimple-table--striped">
              <div className="siimple-table-header">
                <div className="siimple-table-row">
                  <div className="siimple-table-cell">Nome</div>
                  <div className="siimple-table-cell">Descrição</div>
                  <div className="siimple-table-cell">Informações</div>
                  <div className="siimple-table-cell">Tempo Gasto</div>
                  <div className="siimple-table-cell">Ações</div>
                </div>
              </div>
              <div className="siimple-table-body">
                {resultado.map((i, data) =>
                  <div key={data} className="siimple-table-row">
                    <div className="siimple-table-cell">{i.nome}</div>
                    <div className="siimple-table-cell">{i.descricao}</div>
                    <div className="siimple-table-cell">{i.info_uteis}</div>
                    <div className="siimple-table-cell">{i.tempo_gasto}</div>
                    <div className="siimple-table-cell siimple--text-center">
                      <div class="siimple-btn siimple-btn--primary" onClick={() => abreModal(i)}>Ver</div>
                      <div style={{marginLeft: '5px'}} className="siimple-btn siimple-btn--error" onClick={() => modalExcuir(i)}>Excluir</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      }
      {openModal &&
        <Modal
          fechaModal={fechaModal}
          projetoSelecionado={projetoSelecionado}
          editar={editar}
        />
      }
      {exluir &&
        <ModalExclusao 
          fechaModal={fecharModalExcluir}
          item={projetoSelecionado}
          excluir={excluirProjeto}
        />
      }
    </React.Fragment>
  )
}

export default Projetos