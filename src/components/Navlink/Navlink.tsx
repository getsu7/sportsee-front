import './Navlink.scss';

interface NavlinkProps {
    img: string;
}

function Navlink({img}: NavlinkProps) {
    return (
        <div className="navlink">
            <img className="navlink__image" src={img} alt=""/>
        </div>
    )
}

export default Navlink;