interface Nutrition {
    calories: number;
    proteins: number;
    carbohydrates: number;
    lipids: number;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    score?: number;
    todayScore?: number;
    nutrition: Nutrition;
}

export interface UserDto {

    data: {
        id: number;
        userInfos: {
            firstName: string;
            lastName: string;
            age: number;
        };
        todayScore?: number;
        score?: number;
        keyData: {
            calorieCount: number;
            proteinCount: number;
            carbohydrateCount: number;
            lipidCount: number;
        };
    }
}