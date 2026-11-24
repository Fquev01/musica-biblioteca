import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';

const ARTISTAS = [
  { nombre: 'BAD BUNNY', img: 'bad_bunny_album.jpeg' },
  { nombre: 'MILO J', img: 'miloj_album.jpeg' },
  { nombre: 'VAN HALEN', img: 'vh_album.jpeg' },
  { nombre: 'ALEMAN', img: 'aleman_album.jpeg' },
  { nombre: 'Benson Boone', img: 'bb_bg.jpeg', activo: true },
  { nombre: 'CARIN LEON', img: 'cl_album.jpeg' },
  { nombre: 'NATANAEL CANO', img: 'nata_album.jpeg' },
];

// Datos ficticios
const CANCIONES = [
  { id: 1, titulo: 'Pretty Slowly', artista: 'Benson Boone', album: 'American Heart', duracion: '4:26' },
  { id: 2, titulo: 'Beautiful Things', artista: 'Benson Boone', album: 'Fireworks & Rollerblades', duracion: '3:00' },
  { id: 3, titulo: 'Slow It Down', artista: 'Benson Boone', album: 'Fireworks & Rollerblades', duracion: '3:23' },
  { id: 4, titulo: 'Mystical Magical', artista: 'Benson Boone', album: 'Fireworks & Rollerblades', duracion: '3:03' },
  { id: 5, titulo: 'Ghost Town', artista: 'Benson Boone', album: 'Fireworks & Rollerblades', duracion: '3:27' },
];

class App extends Component {
  componentDidMount() {
    console.log('✅ La app Biblioteca Musical se ha cargado correctamente.');
  }

  render() {
    return (
      <div className="app">
        <aside className="sidebar">
          <div className="logo">
            <img className="LogoYT" src="/img/logo.png" alt="Logo" />
            <span>YouTube</span>
          </div>

          <nav className="primary">
            <a className="nav-item active">
              <img src="/img/home_logo.png" alt="Inicio" />
              Inicio
            </a>
            <a className="nav-item">
              <img src="/img/lupa.png" alt="Buscar" />
              Buscar
            </a>
            <a className="nav-item">
              <img src="/img/biblioteca.png" alt="Biblioteca" />
              Tu biblioteca
            </a>
          </nav>

          <div className="divider"></div>

          <div className="library">
            <h4>Artistas</h4>
            <ul className="list">
              {ARTISTAS.map((a) => (
                <li key={a.nombre} className={a.activo ? 'active' : ''}>
                  <img src={`/img/${a.img}`} alt="" />
                  <span>{a.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="content">
          <Header titulo="Biblioteca Musical" artista="Benson Boone" oyentes="75,836,230" />

          <section className="section">
            <h2>Populares</h2>
            <table className="tracklist">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Álbum</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tbody>
                {CANCIONES.map((c, i) => (
                  <Song
                    key={c.id}
                    numero={i + 1}
                    titulo={c.titulo}
                    artista={c.artista}
                    album={c.album}
                    duracion={c.duracion}
                  />
                ))}
              </tbody>
            </table>
          </section>
        </main>

        <aside className="rightbar">
          <div className="card album">
            <img src="/img/bb_bg.jpeg" alt="Portada Pretty Slowly" />
            <div>
              <h3>Pretty Slowly</h3>
              <span>Benson Boone</span>
            </div>
          </div>

          <div className="card about">
            <h4>Información sobre el artista</h4>
            <img className="about-img" src="/img/bb_foto.jpeg" alt="Benson Boone" />
            <p>
              Benson James Boone es un cantante estadounidense. Comenzó a compartir su música en
              TikTok en 2021 y posteriormente audicionó para American Idol. Se retiró de la
              competencia pero siguió ganando popularidad en TikTok, acumulando 7 millones de
              seguidores.
            </p>
            <button className="btn btn-secondary">Dejar de seguir</button>
          </div>
        </aside>

        <footer className="player">
          <div className="now-playing">
            <img src="/img/bb_bg.jpeg" alt="cover" />
            <div className="meta">
              <strong>Pretty Slowly</strong>
              <span>Benson Boone</span>
            </div>
          </div>

          <div className="controls">
            <button className="icon-btn" aria-label="Anterior">⏮</button>
            <button className="btn btn-primary circle" aria-label="Play/Pause">▶</button>
            <button className="icon-btn" aria-label="Siguiente">⏭</button>
            <div className="progress">
              <span>1:49</span>
              <div className="bar"><div className="bar-fill" style={{ width: '46%' }}></div></div>
              <span>4:26</span>
            </div>
          </div>

          <div className="extras">
            <div className="volume">
              <span>🔊</span>
              <div className="bar"><div className="bar-fill" style={{ width: '60%' }}></div></div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
