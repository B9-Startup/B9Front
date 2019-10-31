import React from 'react';
import { BodyMenu } from './styles';
import 'siimple';

const Menu = () => {
  return (
    <BodyMenu className="siimple--bg-white">
      <div className="siimple-list" style={{maxWidth: '300px'}}>
        <div className="siimple-list-item siimple--bg-white"><a href="/">Home</a></div>
        <div className="siimple-list-item siimple--bg-white"><a href="/projetos">Projetos</a></div>
        <div className="siimple-list-item siimple--bg-white"><a href="/tarefas">Tarefas</a></div>
        <div className="siimple-list-item siimple--bg-white"><a href="/arquivamento">Arquivamento</a></div>
      </div>
    </BodyMenu>
  )
}

export default Menu;