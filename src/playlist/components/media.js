import React,{ Component } from 'react';
import PropTypes from 'prop-types';
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
            src={this.props.image}
            alt=""
            width={260}
            height = {160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-Author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.stringisRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.stringisRequired,
  type: PropTypes.oneOf(['video','audio']).isRequired,

}
export default Media;
