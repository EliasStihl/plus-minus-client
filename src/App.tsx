// src/App.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import PlayerPresenter from "./presenters/PlusMinusPresenter";

const App: React.FC = () => {
  return (
    <Container>
      <PlayerPresenter/>
    </Container>
  );
};

export default App;
