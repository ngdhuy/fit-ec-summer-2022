import { Link } from 'react-router-dom';
import './style.sass';

export default function Navbar(props) {
  return(
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contact'>Contact us</Link>
      </li>
    </ul>
  );
}