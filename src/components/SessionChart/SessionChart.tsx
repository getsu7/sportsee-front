import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./SessionChart.scss";

interface AverageSession {
    day: number;
    sessionLength: number;
}

interface SessionChartProps {
    sessions?: AverageSession[];
}

interface TooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        dataKey: string;
    }>;
}

function SessionChart({sessions}: SessionChartProps) {
    if (!sessions || sessions.length === 0) {
        return <div>Aucune donnée disponible</div>;
    }

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const formattedData = sessions.map(session => ({
        day: days[session.day - 1],
        sessionLength: session.sessionLength
    }));

    const CustomTooltip = ({active, payload}: TooltipProps) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    padding: '5px 10px',
                    fontSize: '10px',
                    border: 'none'
                }}>
                    <p style={{margin: '0'}}>{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="session-chart" style={{backgroundColor: '#FF0000', borderRadius: '5px', position: 'relative'}}>
            <h2 className="session-chart__title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={263}>
                <AreaChart data={formattedData}>
                    <XAxis
                        dataKey="day"
                        tick={{fill: "#FFFFFF"}}
                        axisLine={false}
                        tickLine={false}
                        padding={{left: 10, right: 10}}
                    />
                    <YAxis
                        hide={true}
                        domain={['dataMin - 10', 'dataMax + 10']}
                    />
                    <Tooltip
                        content={<CustomTooltip/>}
                        cursor={{stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 32}}
                    />
                    <Area
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        fill="#FF0000"
                        fillOpacity={0.1}
                        dot={false}
                        activeDot={{r: 4, fill: "#FFFFFF"}}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SessionChart;