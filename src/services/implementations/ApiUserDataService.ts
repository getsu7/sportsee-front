import type {UserDataService} from './UserDataTypes.ts';
import {USER_ENDPOINT} from '../index/endpoint';
import {UserMapper} from "../../models/mappers/UserMapper.ts";
import type {User} from "../../models/user/UserTypes.ts";
import type {Activity} from "../../models/activity/ActivityTypes.ts";
import type {Session} from "../../models/session/SessionTypes.ts";
import type {Performance} from "../../models/performance/PerformanceTypes.ts";

import {ActivityMapper} from "../../models/mappers/ActivityMapper.ts";
import {SessionMapper} from "../../models/mappers/SessionMapper.ts";
import {PerformanceMapper} from "../../models/mappers/PerformanceMapper.ts";

export class ApiUserDataService implements UserDataService {

    async getUser(userId: string): Promise<User> {
        try {
            const response = await fetch(USER_ENDPOINT + userId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return UserMapper.toUser(data.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    async getUserActivity(userId: string): Promise<Activity> {
        try {
            const response = await fetch(USER_ENDPOINT + `${userId}/activity`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return ActivityMapper.toActivity(data.data);
        } catch (error) {
            console.error('Error fetching user activity:', error);
            throw error;
        }
    }

    async getUserSession(userId: string): Promise<Session> {
        try {
            const response = await fetch(USER_ENDPOINT + `${userId}/average-sessions`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return SessionMapper.toSession(data.data);
        } catch (error) {
            console.error('Error fetching user sessions:', error);
            throw error;
        }
    }

    async getUserPerformance(userId: string): Promise<Performance> {
        try {
            const response = await fetch(USER_ENDPOINT + `${userId}/performance`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return PerformanceMapper.toPerformance(data.data);
        } catch (error) {
            console.error('Error fetching user performance:', error);
            throw error;
        }
    }

}