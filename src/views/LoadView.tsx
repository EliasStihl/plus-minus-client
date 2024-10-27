import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadView({ message }: { message: string }) {

  return (
    <Box>
      <CircularProgress />
      <Typography>{message}</Typography>
    </Box>
  )
  
  
}
