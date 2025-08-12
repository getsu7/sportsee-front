export interface SessionDto {
    userId: number;
    sessions: Array<AverageSession>;
}

export interface Session {
    userId: number;
    sessions: Array<AverageSession>;
}

export interface AverageSession {
    day: number;
    sessionLength: number;
}