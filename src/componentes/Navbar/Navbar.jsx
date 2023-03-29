import React from 'react'
import CardWidget from '../CardWidget/CardWidget';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Tienda Random</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Juegos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Peliculas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Alimentos</a>
              </li>
            </ul>
          </div>
          <div>
            <CardWidget/>
          </div>
        </div>
      </nav>
    </header>
    );
  }
export default Navbar