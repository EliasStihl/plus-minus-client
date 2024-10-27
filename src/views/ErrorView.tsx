import { Typography } from "@mui/material";

export default function ErrorView({ error }: { error: string }) {
    return <Typography color="error">{error}</Typography>;
}