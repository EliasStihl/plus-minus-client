import { Player } from "./PlayerModel";

export interface Team{
    name: string
    players: Player[]
    constant?: number
}