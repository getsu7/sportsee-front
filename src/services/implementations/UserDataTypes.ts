import type {User} from "../../models/user/UserTypes.ts";
import type {Activity} from "../../models/activity/ActivityTypes.ts";
import type {Session} from "../../models/session/SessionTypes.ts";
import type {Performance} from "../../models/performance/PerformanceTypes.ts";


export interface UserDataService {
    getUser(userId: string): Promise<User>;

    getUserActivity(userId: string): Promise<Activity>;

    getUserSession(userId: string): Promise<Session>;

    getUserPerformance(userId: string): Promise<Performance>;
}
