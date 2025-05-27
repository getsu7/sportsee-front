import type {User} from "./UserTypes.ts";

export interface UserDataService {
    getUserData(userId: string): Promise<User>;

    getUserActivity(userId: string): Promise<any>;
}
