import type {Performance, PerformanceDto} from "../performance/PerformanceTypes.ts";

export class PerformanceMapper {
    static toPerformance(performanceDto: PerformanceDto): Performance {
        return {
            userId: performanceDto.userId,
            data: performanceDto.data.map(item => ({
                value: item.value,
                kind: performanceDto.kind[item.kind]
            }))
        };
    }
}