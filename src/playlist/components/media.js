import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';


class Media extends Component {
  state = {
    author: 'Tomas'
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     author: props.author
  //   }
  //
  // }
  handleClick = (event) => {
    //console.log(this.props.image);
    this.setState({
      author: 'Tomas F Carrion',
    })
  }
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
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height = {160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-Author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video','audio']).isRequired,

}
export default Media;
