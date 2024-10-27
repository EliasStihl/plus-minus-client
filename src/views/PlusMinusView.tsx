import { Container } from "@mui/material";
import { Team } from "../models/TeamModel";
import PlusMinusTeam from "./PlusMinusTeam";


export default function PlusMinusView({ teams }: { teams: Team[] }) {
    
    return <Container>
        {teams.map((team,idx) => (
            <PlusMinusTeam key={idx} team={team}></PlusMinusTeam>
        ) )}
    </Container>
}