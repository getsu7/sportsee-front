import './User.scss';
import {useParams} from "react-router-dom";
import {UserService} from "../../services/UserService.ts";
import {useEffect, useState} from "react";
import type {User} from "../../models/user/UserTypes.ts";
import type {Activity} from "../../models/activity/ActivityTypes.ts";
import type {Session} from "../../models/session/SessionTypes.ts";
import type {Performance} from "../../models/performance/PerformanceTypes.ts";
import DailyChart from "../../components/DailyChart/DailyChart.tsx";
import SessionChart from "../../components/SessionChart/SessionChart.tsx";
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart.tsx';
import ScoreChart from "../../components/ScoreChart/ScoreChart.tsx";
import NutritionCard from "../../components/NutritionCard/NutritionCard.tsx";
import energyIcon from '../../assets/energy.svg';
import chickenIcon from '../../assets/chicken.svg';
import appleIcon from '../../assets/apple.svg';
import cheeseburgerIcon from '../../assets/cheeseburger.svg';

function User() {
    const [userData, setUserData] = useState<User | undefined>();
    const [activityData, setActivityData] = useState<Activity | undefined>()
    const [sessionData, setSessionData] = useState<Session | undefined>();
    const [performanceData, setPerformanceData] = useState<Performance | undefined>();

    let {id} = useParams();
    id ??= '12';
    const load = async () => {
        try {
            const user = await UserService().getUser(id);
            setUserData(user);
            const activity = await UserService().getUserActivity(id);
            setActivityData(activity);
            const session = await UserService().getUserSession(id);
            setSessionData(session);
            const performance = await UserService().getUserPerformance(id);
            setPerformanceData(performance);
            console.log(session);
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    useEffect(() => {
        load()
    }, [id])

    return (
        <>
            {userData && (
                <div className="user">
                    <div className="user-infos">
                        <h1>Bonjour <span className="user-infos__firstname">{userData.firstName}</span></h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="user-details">
                        <div className="chart-group">
                            <div className="chart-group__daily">
                                <DailyChart sessions={activityData?.sessions}/>
                            </div>

                            <div className="chart-frame">

                                <div className="chart-frame__average-sessions">
                                    <SessionChart sessions={sessionData?.sessions}/>
                                </div>

                                <div className="chart-frame__performance">
                                    <PerformanceChart data={performanceData?.data}/>
                                </div>

                                <div className="chart-frame__score">
                                    <ScoreChart score={userData?.todayScore || userData?.score}/>
                                </div>

                            </div>

                        </div>
                        <div className="nutrition">
                            <NutritionCard
                                icon={energyIcon}
                                iconAlt="Calories"
                                value={userData.nutrition.calories}
                                unit="kCal"
                                label="Calories"
                                backgroundColor="rgba(255, 0, 0, 0.1)"
                            />
                            <NutritionCard
                                icon={chickenIcon}
                                iconAlt="Protéines"
                                value={userData.nutrition.proteins}
                                unit="g"
                                label="Protéines"
                                backgroundColor="rgba(74, 184, 255, 0.1)"
                            />
                            <NutritionCard
                                icon={appleIcon}
                                iconAlt="Glucides"
                                value={userData.nutrition.carbohydrates}
                                unit="g"
                                label="Glucides"
                                backgroundColor="rgba(253, 204, 12, 0.1)"
                            />
                            <NutritionCard
                                icon={cheeseburgerIcon}
                                iconAlt="Lipides"
                                value={userData.nutrition.lipids}
                                unit="g"
                                label="Lipides"
                                backgroundColor="rgba(253, 81, 129, 0.1)"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default User;
