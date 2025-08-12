export interface ActivityDto {
    userId: number;
    sessions: Array<Session>;
}

export interface Activity {
    userId: number;
    sessions: Array<Session>
}

interface Session {
    day: string;
    kilogram: number;
    calories: number;
}