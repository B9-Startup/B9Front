import React, { useState, useEffect } from 'react';
import { Carregando } from './style';
import Modal from '../../reutilizados/modal';
import Title from '../../reutilizados/title';

import api from '../../services/api';

const Projetos = () => {
  const [resultado, setResultado] = useState()
  const [openModal, setOpenModal] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState();

  async function chamaApi() {
    const response = await api.get('/projetos', {
    })

    if (response) {
      setResultado(response.data)
    }
  }

  useEffect(() => {
    chamaApi();
  }, [])


  const abreModal = (i) => {
    setOpenModal(true);
    setProjetoSelecionado(i);
  }

  const fechaModal = () => {
    setOpenModal(false);
  }

  return (
    <React.Fragment>
      {!resultado &&
        <Carregando>
          <div class="siimple-spinner siimple-spinner--primary"></div>
          <p>Um momento...</p>
        </Carregando>
      }

      {resultado &&
        <React.Fragment>
          <Title texto={'Projetos'} />
          <div class="siimple-content">
            <div className="siimple-table siimple-table--border siimple-table--hover">
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
                    <div className="siimple-table-cell">
                      <div class="siimple-btn siimple-btn--primary" onClick={() => abreModal(i)}>Ver</div>
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
        />
      }
    </React.Fragment>
  )
}

export default Projetos