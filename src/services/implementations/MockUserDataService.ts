import type {UserDataService} from '../../models/user/UserDataTypes';
import mockData from '../../data/data.json';
import {UserMapper} from "../../models/mappers/UserMapper.ts";

export class MockUserDataService implements UserDataService {
    async getUserData(userId: string) {
        try {
            const userData = mockData.USER_MAIN_DATA.find(
                user => user.id.toString() === userId
            );
            if (!userData) {
                throw new Error('User not found');
            }
            return UserMapper.toUser({data: userData});
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    async getUserActivity(userId: string) {
        try {
            const activity = mockData.USER_ACTIVITY.find(
                activity => activity.userId.toString() === userId
            );
            if (!activity) {
                throw new Error('Activity not found');
            }
            return {data: activity};
        } catch (error) {
            console.error('Error fetching user activity:', error);
            throw error;
        }
    }
}