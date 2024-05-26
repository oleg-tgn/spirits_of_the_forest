import type { User } from "./User";

export type Player = {
    Number: number;
    SunPoints: number;
    Score: number;
    IsWaiting: boolean;
    Place: number;
    UserId: string;
    User: User;
    GameId: string;
    Id: string;
};
