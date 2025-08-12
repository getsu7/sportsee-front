import './DailyChart.scss';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

interface Session {
    day: string;
    kilogram: number;
    calories: number;
}

interface DailyChartProps {
    sessions?: Session[];
}

interface TooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        dataKey: string;
    }>;
}

function DailyChart({sessions}: DailyChartProps) {
    // Vérifier que sessions existe avant de le traiter
    if (!sessions || sessions.length === 0) {
        return <div>Aucune donnée disponible</div>;
    }

    // Transformer les données pour afficher les jours du mois
    const formattedData = sessions.map((session) => ({
        day: new Date(session.day).getDate(),
        kilogram: session.kilogram,
        calories: session.calories
    }));

    const CustomTooltip = ({active, payload}: TooltipProps) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{
                    backgroundColor: '#E60000',
                    color: 'white',
                    padding: '10px',
                    border: 'none'
                }}>
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="daily-chart">
            <div className="daily-chart__header">
                <h2 className="daily-chart__title">Activité quotidienne</h2>
                <span className="daily-chart__legend">
                    <div className="daily-chart__legend-infos">
                        <span className="daily-chart__legend-dot--black"></span><p>Poids (kg)</p>
                    </div>
                    <div className="daily-chart__legend-infos">
                        <span className="daily-chart__legend-dot--red"></span><p>Calories brûlées (kCal)</p>
                    </div>
                </span>
            </div>

            <div className="daily-chart__chart">
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={formattedData} barGap={10}
                    >
                        <XAxis
                            dataKey="day"
                            tick={{fill: "#9B9EAC"}}
                            tickLine={false}
                            stroke="#DEDEDE"
                            strokeWidth={2}
                            tickMargin={16}
                        />
                        <YAxis yAxisId="kilogram" dataKey="kilogram" domain={["dataMin - 2", "dataMax + 1"]}
                               tickCount={3} interval={0} axisLine={false} tickLine={false} tick={{fontSize: 14}}
                               orientation="right"/>
                        <YAxis dataKey="calories" yAxisId="calories" type="number"
                               domain={["dataMin - 100", "dataMax + 10"]} hide={true}/>
                        <CartesianGrid strokeDasharray="3 3" stroke="#DEDEDE" vertical={false}/>
                        <Tooltip offset={10} cursor={{fill: "#C4C4C480"}} content={<CustomTooltip/>}/>
                        <Bar yAxisId="kilogram" dataKey="kilogram" radius={[4, 4, 0, 0]} fill="#282D30" barSize={8}/>
                        <Bar yAxisId="calories" dataKey="calories" radius={[4, 4, 0, 0]} barSize={8} fill="#E60000"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default DailyChart;