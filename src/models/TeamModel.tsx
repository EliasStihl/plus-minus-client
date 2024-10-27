import { Player } from "./PlayerModel";

export interface Team{
    name: String
    players: Player[]
    constant?: number
}