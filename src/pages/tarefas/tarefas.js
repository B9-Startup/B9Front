import React, { useEffect, useState } from 'react';
import 'siimple';
import Title from '../../reutilizados/title';
import api from '../../services/api';
import TarefasInfo from './tarefasInfo';
import { Carregando } from '../projetos/style';
import ModalTarefas from '../../reutilizados/modal/modalTarefas'

const Tarefas = () => {
  const [resultado, setResultado] = useState();
  const [erro, setErro] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState() 

  async function chamaApi() {
    const response = await api.get('/tarefas', {
    })

    if (response) {
      setResultado(response.data)
      console.log(response)
    }
  }

  useEffect(() => {
    chamaApi();
  }, [])

  async function apagarTarefa(tarefa){
    if(tarefa) {
      const id = tarefa.id
      const response = await api.delete(`/tarefas/${id}`, {
      })
  
      if (response.data.status === "success") {
        window.location.href = '/tarefas';
      } else {
        setErro(true);
      }
    }
  }

  const abreModal = (i) => {
    setOpenModal(true);
    setTarefaSelecionada(i);
  }

  const fechaModal = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    console.log(resultado)
  })

  return (
    <React.Fragment>
      <Title texto="Tarefas" />
      {!resultado &&
        <Carregando>
          <div class="siimple-spinner siimple-spinner--primary"></div>
          <p>Um momento...</p>
        </Carregando>
      }
      {erro  && <p class="siimple-p siimple--color-error" style={{marginTop: '5px'}}>Desculpe, algo deu errado, tente novamente mais tarde.</p>}
      {resultado &&
        <TarefasInfo 
          resultado={resultado} 
          apagarTarefa={apagarTarefa}
          abreModal={abreModal}
        />
      }
      {openModal &&
        <ModalTarefas 
          tarefaSelecionada={tarefaSelecionada} 
          fechaModal={fechaModal} 
        />
      }
    </React.Fragment>
  )
}

export default Tarefas;
