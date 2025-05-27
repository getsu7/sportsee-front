import './Navbar.scss';
import logo from '../../assets/logo.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Logo"/>
            </div>
            <ul className="navbar__menu">
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    );
}

export default Navbar;