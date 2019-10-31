import React, { useEffect, useState } from 'react';
import 'siimple';
import Title from '../../reutilizados/title';
import api from '../../services/api';
import TarefasInfo from './tarefasInfo';
import { Carregando } from '../projetos/style';
import ModalTarefas from '../../reutilizados/modal/modalTarefas'
import ModalExclusao from '../../reutilizados/modal/modalExclusao';

const Tarefas = () => {
  const [resultado, setResultado] = useState();
  const [erro, setErro] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState() ;
  const [editar, setEditar] = useState(false);
  const [excluir, setExcluir] = useState(false);

  async function chamaApi() {
    const response = await api.get('/tarefas', {
    })

    if (response) {
      setResultado(response.data)
    }
  }

  useEffect(() => {
    chamaApi();
  }, [])

  async function apagarTarefa(i){
      const id = i.id
      const response = await api.delete(`/tarefas/${id}`, {
      })
  
      if (response.data.status === "success") {
        window.location.href = '/tarefas';
      } else {
        setErro(true);
      }
  }

  const abreModal = (i) => {
    setOpenModal(true);
    setTarefaSelecionada(i);
    setEditar(true);
  }

  const modalInserir = () => {
    setOpenModal(true);
    setTarefaSelecionada(null);
    setEditar(false);
  }

  const modalExcuir = (i) => {
    setExcluir(true);
    setTarefaSelecionada(i)
  }

  const fechaModal = () => {
    setOpenModal(false);
  }

  const fecharModalExcluir = () => {
    setExcluir(false);
  }

  return (
    <React.Fragment>
      <Title texto="Tarefas" />
      <div className="siimple-btn siimple-btn--success" onClick={modalInserir}>Adicionar</div>
      {!resultado &&
        <Carregando>
          <div className="siimple-spinner siimple-spinner--primary"></div>
          <p>Um momento...</p>
        </Carregando>
      }
      {erro  && <p className="siimple-p siimple--color-error" style={{marginTop: '5px'}}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
      {resultado &&
        <TarefasInfo 
          resultado={resultado} 
          apagarTarefa={modalExcuir}
          abreModal={abreModal}
        />
      }
      {openModal &&
        <ModalTarefas 
          tarefaSelecionada={tarefaSelecionada} 
          fechaModal={fechaModal} 
          editar={editar}
        />
      }
       {excluir &&
        <ModalExclusao 
          fechaModal={fecharModalExcluir}
          item={tarefaSelecionada}
          excluir={apagarTarefa}
        />
      }
    </React.Fragment>
  )
}

export default Tarefas;
