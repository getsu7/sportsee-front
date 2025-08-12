import './NutritionCard.scss';

interface NutritionCardProps {
    icon: string;
    iconAlt: string;
    value: number;
    unit: string;
    label: string;
    backgroundColor: string;
}

function NutritionCard({icon, iconAlt, value, unit, label, backgroundColor}: NutritionCardProps) {
    return (
        <div className="nutrition-card">
            <div className="nutrition-card__icon-container" style={{backgroundColor}}>
                <img src={icon} alt={iconAlt} className="nutrition-card__icon"/>
            </div>
            <div className="nutrition-card__content">
                <p className="nutrition-card__value">{value}{unit}</p>
                <p className="nutrition-card__label">{label}</p>
            </div>
        </div>
    );
}

export default NutritionCard;