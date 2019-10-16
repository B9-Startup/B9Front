import React from 'react';
import { BodyMenu } from './styles';
import 'siimple';

const Menu = () => {
  return (
    <BodyMenu className="siimple--bg-white">
      <div class="siimple-list" style={{maxWidth: '300px'}}>
        <div class="siimple-list-item siimple--bg-white"><a href="/">Home</a></div>
        <div class="siimple-list-item siimple--bg-white"><a href="/projetos">Projetos</a></div>
        <div class="siimple-list-item siimple--bg-white">Tarefas</div>
        <div class="siimple-list-item siimple--bg-white">Arquivamento</div>
        <div class="siimple-list-item siimple--bg-white">Usuários</div>
      </div>
    </BodyMenu>
  )
}

export default Menu;