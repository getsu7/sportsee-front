import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";

interface PerformanceData {
    value: number;
    kind: string;
}

interface PerformanceChartProps {
    data?: PerformanceData[];
}

function PerformanceChart({data}: PerformanceChartProps) {
    if (!data || data.length === 0) {
        return <div>Aucune donnée disponible</div>;
    }

    const translatedData = data.reverse().map(item => {
        let kindFr = item.kind;
        switch (item.kind) {
            case 'cardio':
                kindFr = 'Cardio';
                break;
            case 'energy':
                kindFr = 'Énergie';
                break;
            case 'endurance':
                kindFr = 'Endurance';
                break;
            case 'strength':
                kindFr = 'Force';
                break;
            case 'speed':
                kindFr = 'Vitesse';
                break;
            case 'intensity':
                kindFr = 'Intensité';
                break;
        }
        return {...item, kind: kindFr};
    });

    return (
        <div className="performance-chart" style={{backgroundColor: '#282D30', borderRadius: '5px'}}>
            <ResponsiveContainer width="100%" height={200}>
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={translatedData}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{fill: "#FFFFFF", fontSize: 12}}
                    />
                    <Radar
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart;