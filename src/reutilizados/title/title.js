import React from 'react';
import 'siimple';

const Title = ({ texto }) => {
  return(
    <div class="siimple-h3">{texto ? texto : 'Defina o Texto'}</div>
  )
}

export default Title;