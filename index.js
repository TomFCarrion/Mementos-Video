import React from 'react';
import { render } from 'react-dom';
import Media from'./src/playlist/components/media';

const app = document.getElementById('app');
//ReactDOM.render(que voy a renderizar/donde lo hare);
//const holaMundo = <h1>hola estudiante</h1>;
render(<Media /> ,app);
