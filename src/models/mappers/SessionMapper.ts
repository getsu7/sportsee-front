import type {Session, SessionDto} from "../session/SessionTypes.ts";

export class SessionMapper {
    static toSession(sessionDto: SessionDto): Session {
        return {
            userId: sessionDto.userId,
            sessions: [...sessionDto.sessions]
        }
    }
}