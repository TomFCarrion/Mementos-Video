import React from 'react';
import { render } from 'react-dom';
import Media from'./src/playlist/components/media';
import data from './src/api.json'

const app = document.getElementById('app');
//ReactDOM.render(que voy a renderizar/donde lo hare);
//const holaMundo = <h1>hola estudiante</h1>;
render(<Media type="video" title="Testing 101" author="TomasCarrion" image="./images/covers/bitcoin.jpg"/> ,app);
