// src/models/PlayerModel.ts
export interface Player {
  Rk: string; // Rank
  No: string; // Number
  Name: string; // Player Name
  Pos: string; // Position
  GP: string; // Games Played
  G: string; // Goals
  A: string; // Assists
  TP: string; // Total Points
  PIM: string; // Penalty Minutes
  plus: string; // Plus
  minus: string; // Minus
  plus_minus: string; // Plus Minus
  GWG: string; // Game Winning Goals
  PPG: string; // Power Play Goals
  SHG: string; // Short-Handed Goals
  SOG: string; // Shots on Goal
  "SG percentage": string; // Shooting Percentage
  "FO plus": string; // FO Plus
  "FO minus": string; // FO Minus
  FO: string; // FO
  "FO percentage": string; // FO Percentage
}
