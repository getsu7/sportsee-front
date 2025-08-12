import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import './ScoreChart.scss';

interface ScoreChartProps {
    score?: number;
}

function ScoreChart({score}: ScoreChartProps) {
    if (score === undefined) {
        return <div>Aucune donnée disponible</div>;
    }

    const scorePercentage = score * 100;

    const data = [
        {name: 'Score', value: scorePercentage},
        {name: 'Reste', value: 100 - scorePercentage}
    ];

    return (
        <div className="score-chart">
            <h2 className="score-chart__title">Score</h2>
            <div className="score-chart__container">
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={67}
                            outerRadius={77}
                            cornerRadius={10}
                            startAngle={80}
                            endAngle={80 + (data[0].value * 360)}
                            fill="#FF0000"
                            stroke="none"
                            dataKey="value"
                            nameKey="name"
                        >
                            <Cell key="Score" fill="red"/>
                            <Cell key="Reste" fill="transparent"/>
                        </Pie>
                        <circle cx="50%" cy="50%" r="30%" fill="white"/>
                        <text
                            x="50%"
                            y="45%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="24"
                            fontWeight="700"
                        >
                            {scorePercentage}%
                        </text>
                        <text
                            x="50%"
                            y="60%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="14"
                        >
                            de votre
                        </text>
                        <text
                            x="50%"
                            y="70%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="14"
                        >
                            objectif
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ScoreChart;