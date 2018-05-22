import React,{ Component } from 'react';
import './media.css';

class Media extends Component {
  render() { //UI html
    const styles = {
      container:{ //los estilos en js se declaran con camelCase
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media">
        <div className="Media-cover">
          <img className="Media-image"
            src="./images/covers/bitcoin.jpg"
            alt=""
            width={260}
            height = {160}
          />
          <h3 className="Media-title">¿Por que aprender React?</h3>
          <p className="Media-Author"> TomasCarrion</p>
        </div>
      </div>
    )
  }
}

export default Media;
