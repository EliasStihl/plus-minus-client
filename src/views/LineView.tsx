import React from "react";
import {
  Box,
  Avatar,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Player } from "../models/PlayerModel";

interface PlayerViewProps {
  players: Player[];
}

const fetchPlayerImage = (playerName: string): string => {
  return `https://via.placeholder.com/150?text=${encodeURIComponent(
    playerName
  )}`;
};

const formatPlayerName = (name: string): string => {
  const [lastName, firstName] = name.split(", ");
  return `${firstName} ${lastName}`;
};

const LineView: React.FC<PlayerViewProps> = ({ players }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const defensePlayers = players.filter((player) =>
    ["LD", "RD", "D"].includes(player.Pos)
  );
  const otherPlayers = players.filter(
    (player) => !["LD", "RD", "D"].includes(player.Pos)
  );

  return (
    <Box textAlign="center" padding={4}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: isSmallScreen ? "clamp(1.5rem, 6vw, 2.5rem)" : "2.5rem",
        }}
      >
        Team Players
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {/* First Row (Defense Players) */}
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={6}>
            {defensePlayers.slice(0, 2).map((player) => (
              <Grid item key={player.No}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  sx={{ minHeight: 160 }} // To ensure consistency in avatar placement
                >
                  <Avatar
                    alt={player.Name}
                    src={fetchPlayerImage(player.Name)}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: isSmallScreen
                        ? "clamp(0.8rem, 4vw, 1.2rem)"
                        : "1.2rem",
                    }}
                  >
                    {formatPlayerName(player.Name)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: isSmallScreen
                        ? "clamp(0.6rem, 3vw, 0.8rem)"
                        : "0.8rem",
                    }}
                  >
                    +/-: {player.plus_minus}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Second Row (Other Players) */}
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={6}>
            {otherPlayers.slice(0, 3).map((player) => (
              <Grid item key={player.No}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  sx={{ minHeight: 160 }} // To ensure consistency in avatar placement
                >
                  <Avatar
                    alt={player.Name}
                    src={fetchPlayerImage(player.Name)}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: isSmallScreen
                        ? "clamp(0.8rem, 4vw, 1.2rem)"
                        : "1.2rem",
                    }}
                  >
                    {formatPlayerName(player.Name)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: isSmallScreen
                        ? "clamp(0.6rem, 3vw, 0.8rem)"
                        : "0.8rem",
                    }}
                  >
                    +/-: {player.plus_minus}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LineView;
