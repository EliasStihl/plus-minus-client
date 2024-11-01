// src/services/ApiService.ts
import axios from "axios";
import { Player } from "../models/PlayerModel";


const API_URL =
  process.env.NODE_ENV == "production"
    ? "https://plus-minus-server-905616798865.europe-north1.run.app"
    : "http://localhost:3000";

export const fetchPlayersByTeam = async (team: string): Promise<Player[]> => {
  try {
    const response = await axios.get(`${API_URL}/data/${team}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

export const updateDataBase = async (stats: string) => {
  try {
    const response = await axios.get(`${API_URL}/run-spider/${stats}`);
    return response.data;
  } catch (error) {
    console.error("Error updating database players:", error);
    throw error;
  }
};
