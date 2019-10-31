import React, { useState, useEffect } from 'react';
import 'siimple';
import api from '../../services/api';

const Home = () => {
  const [resultado, setResultado] = useState(null);

  async function chamaApi() {
    const response = await api.get('/atualizacoes', {
    });

    if (response) {
      setResultado(response.data);
    }
  };

  useEffect(() => {
    chamaApi();
  }, []);

  return (
    <React.Fragment>
      <div className="siimple-box siimple--text-center">
        <div className="siimple-box-title">B9 Startup</div>
        <div className="siimple-box-subtitle">A caminho do sucesso...</div>
        <div className="siimple-box-detail">Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.</div>
      </div>
      <div className="siimple-tip siimple-tip--primary">
        Olá seja bem vindo(a). Gostaria de lembrar que esse sitema está em sua fase inicial
        portanto algumas funcionalidades podem ainda não existir. Obrigado :)
            </div>

      {resultado &&
        resultado.map((data, i) =>
          <blockquote className="siimple-blockquote">
            <small className="siimple-small"><strong>#{data.id} - </strong>{data.nome}
              {data.tipo === "1" && <span style={{ marginLeft: '5px' }} className="siimple-tag siimple-tag--primary"> NOVO</span>}
              {data.tipo === "2" && <span style={{ marginLeft: '5px' }} className="siimple-tag siimple-tag--success"> ALTERAÇÃO</span>}
              {data.tipo === "3" && <span style={{ marginLeft: '5px' }} className="siimple-tag siimple-tag--warning"> CORREÇÃO</span>}
              {data.tipo === "4" && <span style={{ marginLeft: '5px' }} className="siimple-tag siimple-tag--dark"> PLANEJAMENTO</span>}
            </small>
          </blockquote>
        )
      }
    </React.Fragment>
  )
}

export default Home;