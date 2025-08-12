export interface PerformanceDto {
    userId: number;
    kind: Record<string, string>;
    data: Array<{
        value: number;
        kind: number;
    }>;
}

export interface Performance {
    userId: number;
    data: Array<{
        value: number;
        kind: string;
    }>;
}