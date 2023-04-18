import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget';

const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>Tienda Random</Link>
        <ul>  
           <li>
              <NavLink to={`/categoria/1`}>Peliculas</NavLink>
           </li>
           <li>
              <NavLink to={`/categoria/2`}>Juegos</NavLink>
           </li>
           <li>
              <NavLink to={`/categoria/3`}>Alimentos</NavLink>
           </li>
        </ul>
        <CardWidget/>
    </header>
    );
  }
export default Navbar