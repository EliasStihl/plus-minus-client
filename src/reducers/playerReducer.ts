import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../models/PlayerModel";


interface PlayerState{
    players?: Player[]
}


const initialState : PlayerState = {
    players: undefined
};


const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setPlayers(state, action: PayloadAction<Player[]>) {
            state.players = action.payload
        }
    }
})


export const { setPlayers } = playerSlice.actions;


export default playerSlice.reducer;
