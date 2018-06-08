import React from 'react';
import { render } from 'react-dom';
import Home from "../pages/containers/home"
// import Playlist from'./src/playlist/components/playlist.js';
import data from '../api.json';

const homeContainer = document.getElementById('home-container');
//ReactDOM.render(que voy a renderizar/donde lo hare);
//const holaMundo = <h1>hola estudiante</h1>;
render(<Home data={data}/>,homeContainer);
