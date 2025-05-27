import type {UserDataService} from '../models/user/UserDataTypes';
import {ApiUserDataService} from './implementations/ApiUserDataService';
import {MockUserDataService} from './implementations/MockUserDataService';
import {config} from './config';

export const UseUserService = (): UserDataService => {
    return config.useMockData
        ? new MockUserDataService()
        : new ApiUserDataService();
};