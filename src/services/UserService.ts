import type {UserDataService} from './implementations/UserDataTypes.ts';
import {ApiUserDataService} from './implementations/ApiUserDataService';
import {MockUserDataService} from './implementations/MockUserDataService';
import {config} from './config';

export const UserService = (): UserDataService => {
    return config.useMockData
        ? new MockUserDataService()
        : new ApiUserDataService();
};