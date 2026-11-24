import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { numero, titulo, artista, album, duracion } = this.props;

    return (
      <tr className="song">
        <td>{numero}</td>
        <td>{titulo}</td>
        <td>{artista}</td>
        <td>{album}</td>
        <td>{duracion}</td>
      </tr>
    );
  }
}

export default Song;
