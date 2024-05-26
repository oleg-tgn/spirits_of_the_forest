import type { Board } from "./Board";
import type { Player } from "./Player";

export type Game = {
    SunDirection: number;
    Round: number;
    Nutrients: number;
    IsFinished: boolean;
    CreationDate: string;
    ActivePlayerId: string;
    PlayersNumber: number;
    Errors: string[] | null;
    BoardId: string;
    Board: Board;
    Players: Player[];
    Id: string;
};
