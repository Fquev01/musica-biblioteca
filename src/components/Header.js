import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { titulo, artista, oyentes } = this.props;

    return (
      <header className="hero">
        <img className="hero-bg" src="/img/bb_bg.jpeg" alt={`Portada de ${artista}`} />
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="verified">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M12 2l2.39 4.84L20 8l-3.5 3.4L17.18 17 12 14.8 6.82 17 7.5 11.4 4 8l5.61-1.16L12 2z" fill="#cf1717" />
            </svg>
            <p>{artista} · Artista verificado</p>
          </div>
          <h1>{titulo}</h1>
          <p className="monthly">{oyentes} oyentes mensuales</p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
              <p>Reproducir</p>
            </button>
            <button className="btn">Siguiendo</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
