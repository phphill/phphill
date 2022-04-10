import {SCNavbar} from './SCNavbar';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar() {
  return (
    <SCNavbar>
      <div className="navbar">
        <MenuIcon className="navbar-button" />
      </div>

      <div className="navbar-menu">
        <ul>
          <a href="#">
            <li>HOME</li>
          </a>
          <a href="#">
            <li>SITES</li>
          </a>
          <a href="#">
            <li>SISTEMAS</li>
          </a>
          <a href="#">
            <li>CLIENTES</li>
          </a>
          <a href="#">
            <li>TEMPLATES</li>
          </a>
          <a href="#">
            <li>CONTATO</li>
          </a>
        </ul>
      </div>
    </SCNavbar>
  );
}
