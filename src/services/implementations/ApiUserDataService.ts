import type {UserDataService} from '../../models/user/UserDataTypes';
import {USER_ENDPOINT} from '../index/endpoint';
import {UserMapper} from "../../models/mappers/UserMapper.ts";

export class ApiUserDataService implements UserDataService {

    async getUserData(userId: string) {
        try {
            const response = await fetch(USER_ENDPOINT + userId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return UserMapper.toUser(await response.json());
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    async getUserActivity(userId: string) {
        try {
            const response = await fetch(USER_ENDPOINT + `${userId}/activity`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching user activity:', error);
            throw error;
        }
    }
}