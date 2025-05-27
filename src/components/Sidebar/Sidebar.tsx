import './Sidebar.scss';
import Navlink from "../Navlink/Navlink";
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';
import icon4 from '../../assets/icon4.svg';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__navlinks">
                <Navlink img={icon1}/>
                <Navlink img={icon2}/>
                <Navlink img={icon3}/>
                <Navlink img={icon4}/>
            </div>
            <p className="sidebar__copyright">
                Copiryght, SportSee 2020
            </p>
        </div>
    )
}

export default Sidebar;