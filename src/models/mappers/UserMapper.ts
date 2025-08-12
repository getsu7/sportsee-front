import type {User, UserDto} from '../user/UserTypes.ts';

export class UserMapper {

    //checker les deux
    static toUser(userDto: UserDto): User {
        return {
            id: userDto.id,
            firstName: userDto.userInfos.firstName,
            lastName: userDto.userInfos.lastName,
            age: userDto.userInfos.age,
            todayScore: userDto.todayScore ?? 0,
            score: userDto.score ?? 0,
            nutrition: {
                calories: userDto.keyData.calorieCount,
                proteins: userDto.keyData.proteinCount,
                carbohydrates: userDto.keyData.carbohydrateCount,
                lipids: userDto.keyData.lipidCount,
            },
        };
    }
}