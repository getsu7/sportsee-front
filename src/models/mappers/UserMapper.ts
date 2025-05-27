import type {User, UserDto} from '../user/UserTypes.ts';

export class UserMapper {

    static toUser(userData: UserDto): User {
        return {
            id: userData.data.id,
            firstName: userData.data.userInfos.firstName,
            lastName: userData.data.userInfos.lastName,
            age: userData.data.userInfos.age,
            todayScore: userData.data.todayScore ?? 0,
            score: userData.data.score ?? 0,
            nutrition: {
                calories: userData.data.keyData.calorieCount,
                proteins: userData.data.keyData.proteinCount,
                carbohydrates: userData.data.keyData.carbohydrateCount,
                lipids: userData.data.keyData.lipidCount,
            },
        };
    }
}