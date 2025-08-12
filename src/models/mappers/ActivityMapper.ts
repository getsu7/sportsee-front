import type {Activity, ActivityDto} from "../activity/ActivityTypes.ts";

export class ActivityMapper {
    static toActivity(activityDto: ActivityDto): Activity {
        return {
            userId: activityDto.userId,
            sessions: [...activityDto.sessions]
        }
    }
}