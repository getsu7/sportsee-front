import type {UserDataService} from './UserDataTypes.ts';
import mockData from '../../data/data.json';
import {UserMapper} from "../../models/mappers/UserMapper.ts";
import {ActivityMapper} from "../../models/mappers/ActivityMapper.ts";
import {SessionMapper} from "../../models/mappers/SessionMapper.ts";
import {PerformanceMapper} from "../../models/mappers/PerformanceMapper.ts";

export class MockUserDataService implements UserDataService {
    async getUser(userId: string) {
        try {
            const data = mockData.USER_MAIN_DATA.find(
                user => user.id.toString() === userId
            );
            if (!data) {
                throw new Error('User not found');
            }
            return UserMapper.toUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    async getUserActivity(userId: string) {
        try {
            const data = mockData.USER_ACTIVITY.find(
                activity => activity.userId.toString() === userId
            );
            if (!data) {
                throw new Error('User activity not found');
            }
            return ActivityMapper.toActivity(data);
        } catch (error) {
            // throw une custom exception
            console.error('Error fetching user activity:', error);
            throw error;
        }
    }

    async getUserSession(userId: string) {
        try {
            const data = mockData.USER_AVERAGE_SESSIONS.find(
                session => session.userId.toString() === userId
            );
            if (!data) {
                throw new Error('User session not found');
            }
            return SessionMapper.toSession(data);
        } catch (error) {
            console.error('Error fetching user sessions:', error);
            throw error;
        }
    }

    async getUserPerformance(userId: string) {
        try {
            const data = mockData.USER_PERFORMANCE.find(
                performance => performance.userId.toString() === userId
            );
            if (!data) {
                throw new Error('User performance not found');
            }
            return PerformanceMapper.toPerformance(data);
        } catch (error) {
            console.error('Error fetching user performance:', error);
            throw error;
        }
    }
}