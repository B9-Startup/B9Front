import React, { useState, useEffect } from 'react';
import 'siimple';
import { Body } from './style';
import api from '../../services/api';
import Cookie from 'js-cookie';
import md5 from 'md5';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);
  const [result, setResult] = useState(null);

  const pegaLogin = ev => {
    const { target: { value } } = ev;
    setLogin(value);
  }

  const pegaSenha = ev => {
    const { target: { value } } = ev;
    setSenha(value);
  }

  async function buscarUsuario() {
    const senhaCryp = md5(senha)
    const data = new FormData();
        data.append('login', login);
        data.append('senha', senhaCryp);
    const response = await api.post('/usuarios', data)

    if (response && response.data && response.data.status !== 'error') {
      const chave = response.data.data;
      const id = response.data.id
        if(response && response.data && response.data.status === 'success'){
          Cookie.set('dBlock', chave, {expires: 1});
          Cookie.set('id', id, {expires: 1});
          window.location.href = '/';
        } else {
          setErro(true)
        }
    } else {
      console.log("Falhou");
    }
  }

  return (
    <Body>
      <div className="siimple-content siimple-content--extra-small">
        <div className="siimple--px-5 siimple--py-5">
          <div className="siimple-h2 siimple--text-normal siimple--mb-1" align="center">
            Login
        </div>
          <div className="siimple-field">
            <div className="siimple-field-label">Seu Login</div>
            <input value={login} onChange={ev => pegaLogin(ev)} type="email" className="siimple-input siimple-input--fluid" placeholder="login" />
          </div>
          <div className="siimple-field">
            <div className="siimple-field-label">Sua Senha</div>
            <input value={senha} onChange={pegaSenha} type="password" className="siimple-input siimple-input--fluid" placeholder="senha" />
            <div className="siimple-field-helper">Caso tenha esquecido a sua senha entre em contato com o adminstrador.</div>
          </div>
          <div className="siimple-field">
            <div className="siimple-btn siimple-btn--primary siimple-btn--fluid siimple--text-bold" onClick={buscarUsuario}>
              Login
                </div>
          </div>
          {erro && <div className="siimple--color-error siimple--text-center">Usuario e/ou senha incorreto.</div>}
          {/* <div className="siimple-card siimple--mt-5" align="center">
            <div className="siimple-card-body">
              Don't have an account? <a className="siimple-link">Create an account</a>.
                </div>
          </div> */}
        </div>
      </div>
    </Body>
  )
}

export default Login;