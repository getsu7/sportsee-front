import './DailyChart.scss';
import PropTypes from 'prop-types';

function DailyChart({id}) {

    return (
        <div className="daily-chart">
            <h2 className="daily-chart__title">Activité quotidienne</h2>
            <div className="daily-chart__chart">
                {/* Chart component will be rendered here */}
            </div>
        </div>
    );
}

DailyChart.propTypes = {
    id: PropTypes.string.isRequired
};

export default DailyChart;