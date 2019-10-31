import React, { useEffect, useState } from 'react';
import 'siimple';
import Title from '../../reutilizados/title';
import api from '../../services/api';
import { Carregando } from '../projetos/style';
import ModalArquivamento from '../../reutilizados/modal/modalArquivamento';
import ModalExclusao from '../../reutilizados/modal/modalExclusao';

const Arquivamento = () => {
  const [resultado, setResultado] = useState(null);
  const [abreModal, setAbreModal] = useState(false);
  const [arquivamentoSelecionado, setArquivamentoSelecionado] = useState();
  const [editar, setEditar] = useState(false);
  const [excluir, setExcluir] = useState(false);
  const [erro, setErro] = useState(false);

  async function chamaApi() {
    const response = await api.get('/anotacoes', {
    })

    if (response) {
      setResultado(response.data)
    }
  }

  async function apagarArquivamento(i){
    const id = i.id
    const response = await api.delete(`/anotacoes/${id}`, {
    })

    if (response.data) {
      window.location.href = '/arquivamento';
    } else {
      setErro(true);
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

  const modalExcuir = (i) => {
    setExcluir(true);
    setArquivamentoSelecionado(i)
  }

  const fechaModalExluir = () => {
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
      {erro  && <p className="siimple-p siimple--color-error" style={{marginTop: '5px'}}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
      <Title texto="Arquivamento" />
      <div className="siimple-btn siimple-btn--success" onClick={abreModalInserir}>Adicionar</div>
      {resultado &&
        <div className="siimple-content">
          <div className="siimple-grid">
            <div className="siimple-grid-row">
              {resultado.map((i, data) =>
                <div key={data} className="siimple-grid-col siimple-grid-col--2 siimple-grid-col--sm-12" style={{ margin: '5px' }}>
                  <div className="siimple-card siimple--text-center">
                    <div className="siimple-card-header" style={{ width: '100%' }}>
                      {`${i.id} - ${i.nome}`}
                    </div>
                    <div className="siimple-card-body" style={{ width: '100%' }}>
                      <span className="siimple--display-block">Nome: <strong>{i.nome}</strong></span>
                    </div>
                    <div className="siimple-card-footer" style={{ width: '100%' }}>
                      <div className="siimple-btn siimple-btn--error" onClick={() => modalExcuir(i)} style={{ margin: '5px' }}>Exluir</div>
                      <div className="siimple-btn siimple-btn--primary" onClick={() => abrirModal(i)} style={{ margin: '5px' }}>Editar</div>
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
      {excluir &&
        <ModalExclusao 
        fechaModal={fechaModalExluir}
        item={arquivamentoSelecionado}
        excluir={apagarArquivamento}
      />

      }
    </React.Fragment>
  )
}

export default Arquivamento;