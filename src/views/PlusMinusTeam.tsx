
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Team } from "../models/TeamModel";


export default function PlayerList({team }: { team: Team}){
  
  const totalPlusMinus = team.players.reduce((sum, player) => {
    const plusMinusValue = parseInt(player.plus_minus, 10);
    return !isNaN(plusMinusValue) ? sum + plusMinusValue : sum;
  }, 0);

  const adjustedPlusMinus = team.constant ?  totalPlusMinus + team.constant : totalPlusMinus

  const formatPlayerName = (name: string): string => {
    const [lastName, firstName] = name.split(", ");
    return `${firstName} ${lastName}`;
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {team.name} : {adjustedPlusMinus}
      </Typography>
      {team.constant && (
        <Typography variant="body1" color="textSecondary" >
          Konstant: {team.constant}
        </Typography>
      )}
      <List>
        {team.players.map((player) => (
          <ListItem key={player.Rk} sx={{ paddingLeft: 0, paddingBottom: 0 }}>
            <ListItemText
              primary={` ${formatPlayerName(player.Name)} : ${
                player.plus_minus
              } `}
              
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
