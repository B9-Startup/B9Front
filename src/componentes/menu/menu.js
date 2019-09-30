import React from 'react';
import { BodyMenu } from './styles';
import 'siimple';

const Menu = () => {
  return (
    <BodyMenu className="siimple--bg-white">
      <div class="siimple-list" style={{maxWidth: '300px'}}>
        <div class="siimple-list-item siimple--bg-white">Item 1</div>
        <div class="siimple-list-item siimple--bg-white">Item 2</div>
        <div class="siimple-list-item siimple--bg-white">Item 3</div>
      </div>
    </BodyMenu>
  )
}

export default Menu;