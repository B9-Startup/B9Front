import React, { useEffect, useState } from 'react';
import 'siimple';
import Title from '../../reutilizados/title';
import api from '../../services/api';
import { Carregando } from '../projetos/style';
import ModalArquivamento from '../../reutilizados/modal/modalArquivamento'

const Arquivamento = () => {
  const [resultado, setResultado] = useState(null);
  const [abreModal, setAbreModal] = useState(false);
  const [arquivamentoSelecionado, setArquivamentoSelecionado] = useState();
  const [editar, setEditar] = useState(false);

  async function chamaApi() {
    const response = await api.get('/anotacoes', {
    })

    if (response) {
      setResultado(response.data)
    }
  }

  useEffect(() => {
    chamaApi()
  }, [])

  const abrirModal = (i) => {
    setAbreModal(true);
    setArquivamentoSelecionado(i)
    setEditar(true);
  }

  const abreModalInserir = () => {
    setAbreModal(true);
    setArquivamentoSelecionado(null);
    setEditar(false);
  }

  const fechaModal = () => {
    setAbreModal(false);
  }


  return (
    <React.Fragment>
      {!resultado &&
        <Carregando>
          <div class="siimple-spinner siimple-spinner--primary"></div>
          <p>Um momento...</p>
        </Carregando>
      }
      <Title texto="Arquivamento" />
      <div class="siimple-btn siimple-btn--success" onClick={abreModalInserir}>Adicionar</div>
      {resultado &&
        <div class="siimple-content">
          <div class="siimple-grid">
            <div class="siimple-grid-row">
              {resultado.map((i, data) =>
                <div key={data} class="siimple-grid-col siimple-grid-col--2 siimple-grid-col--sm-12" style={{ margin: '5px' }}>
                  <div class="siimple-card siimple--text-center">
                    <div class="siimple-card-header" style={{ width: '100%' }}>
                      {`${i.id} - ${i.nome}`}
                    </div>
                    <div class="siimple-card-body" style={{ width: '100%' }}>
                      <span className="siimple--display-block">Nome: <strong>{i.nome}</strong></span>
                    </div>
                    <div class="siimple-card-footer" style={{ width: '100%' }}>
                      <div class="siimple-btn siimple-btn--error" style={{ margin: '5px' }}>Exluir</div>
                      <div class="siimple-btn siimple-btn--primary" onClick={() => abrirModal(i)} style={{ margin: '5px' }}>Editar</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
      {abreModal &&
        <ModalArquivamento 
          arquivamentoSelecionado={arquivamentoSelecionado}
          fechaModal={fechaModal}
          editar={editar}
        />
      }
    </React.Fragment>
  )
}

export default Arquivamento;