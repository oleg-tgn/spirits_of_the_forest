import { ActionType } from "./ActionType"

export type Action =
{
  SourceCellIdx: number,
  TargetCellIdx: number,
  Type: ActionType,
  GameId: string
}
