import './User.scss';
import {useParams} from "react-router-dom";
import {UseUserService} from "../../services/UseUserService";
import {useEffect, useState} from "react";
import type {User} from "../../models/user/UserTypes.ts";

function User() {
    const [userData, setUserData] = useState<User | undefined>();
    let {id} = useParams();
    id ??= '12';
    const load = async () => {
        try {
            const user = await UseUserService().getUserData(id);
            setUserData(user)
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
                <div>
                    <div className="user">
                        <h1>Bonjour {userData.firstName}</h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <section className="dashboards">
                        <div className="chart-group">

                            <div className="chart-group__daily">
                                <h2>Activité quotidienne</h2>
                                {/*<DailyChart id={id}/>*/}
                            </div>

                            <div className="chart-frame">

                                <div className="chart-frame__average-sessions">
                                    {/* AverageSessions component will be rendered here */}
                                </div>

                                <div className="chart-frame__performance">
                                    {/* Performance component will be rendered here */}
                                </div>

                                <div className="chart-frame__score">
                                    {/* Score component will be rendered here */}
                                </div>

                            </div>

                        </div>
                        <div className="nutrition">
                            {/* Kcal component will be rendered here */}
                            {/* Proteins component will be rendered here */}
                            {/* Glucides component will be rendered here */}
                            {/* Lipides component will be rendered here */}
                        </div>
                    </section>
                </div>
            )}
        </>
    )
}

export default User;
