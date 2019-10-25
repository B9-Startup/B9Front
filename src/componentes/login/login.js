import React, { useState, useEffect } from 'react';
import 'siimple';
import { Body } from './style';
import api from '../../services/api';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const pegaLogin = ev => {
    const { target: { value } } = ev;
    setLogin(value);
  }

  const pegaSenha = ev => {
    const { target: { value } } = ev;
    setSenha(value);
  }

  async function buscarUsuario() {
    const data = new FormData();
        data.append('login', login);
        data.append('senha', senha);
    const response = await api.post('/usuarios', data)

    if (response && response.data && response.data.status !== 'error') {
      console.log(response)
    } else {
      console.log(response)
    }
  }

  return (
    <Body>
      <div class="siimple-content siimple-content--extra-small">
        <div class="siimple--px-5 siimple--py-5">
          <div class="siimple-h2 siimple--text-normal siimple--mb-1" align="center">
            Login
        </div>
          <div class="siimple-field">
            <div class="siimple-field-label">Seu E-mail</div>
            <input value={login} onChange={ev => pegaLogin(ev)} type="email" class="siimple-input siimple-input--fluid" placeholder="you@email.com" />
          </div>
          <div class="siimple-field">
            <div class="siimple-field-label">Sua Senha</div>
            <input value={senha} onChange={pegaSenha} type="password" class="siimple-input siimple-input--fluid" placeholder="password" />
            <div class="siimple-field-helper">Caso tenha esquecido a sua senha entre em contato com o adminstrador.</div>
          </div>
          <div class="siimple-field">
            <div class="siimple-btn siimple-btn--primary siimple-btn--fluid siimple--text-bold" onClick={buscarUsuario}>
              Login
                </div>
          </div>
          {/* <div class="siimple-card siimple--mt-5" align="center">
            <div class="siimple-card-body">
              Don't have an account? <a class="siimple-link">Create an account</a>.
                </div>
          </div> */}
        </div>
      </div>
    </Body>
  )
}

export default Login