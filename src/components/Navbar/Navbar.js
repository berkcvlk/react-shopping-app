import { Link } from 'react-router-dom';
import { routes } from '../../config/Router';

import './Navbar.scss';

function Navbar(props) {
    return (
        <nav className="navbar">
            <span className="navbar__logo">MessLife</span>
            <div className="navbar__items-container">
                {
                    /**
                        <span className="navbar__item">Home</span>
                        <span className="navbar__item">Products</span>
                        <span className="navbar__item">Favourites</span>
                        <span className="navbar__item navbar__item--cart">
                        Card
                        <span className="cart-count"></span>
                        </span>
                         <span className="navbar__item navbar__item--login">Login</span>
                    
                    */
                }

            </div>
        </nav>
    )
}

export default Navbar;