import type { CubeCoord } from "./CubeCoord";
import type { Plant } from "./Plant";

export type Cell = {
    Index: number;
    Richness: number;
    IsShadowed: boolean;
    CubeCoord: CubeCoord;
    BoardId: string;
    PlantId: string | null;
    Plant: Plant | null;
    Id: string;
};
