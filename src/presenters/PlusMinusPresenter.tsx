import { fetchPlayersByTeam, updateDataBase } from "../services/ApiService";
import { Player } from "../models/PlayerModel";
import { useEffect, useState } from "react";
import LoadView from "../views/LoadView";
import ErrorView from "../views/ErrorView";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { setPlayers } from "../reducers/playerReducer";
import { Team } from "../models/TeamModel";
import PlusMinusView from "../views/PlusMinusView";

export default function PlusMinusPresenter() {
  const dispatch = useDispatch<AppDispatch>();
  const { players } = useSelector(
    (state: RootState) => state.reducer.playerReducer
  );

  const getPlayers = async (team: string) => {
    const players: Player[] = await fetchPlayersByTeam(team);
    return players;
  };

  const updateData = async (stats: string) => {
    await updateDataBase(stats);
  }

  

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const team = "rogle";

  useEffect(() => {
    const loadPlayers = async (team: string) => {
      try {
        await updateData("players_by_team")
        const data = await getPlayers(team);
        dispatch(setPlayers(data));
      } catch (err) {
        console.log(err)
        setError("Failed to fetch players");
      } finally {
        setLoading(false);
      }
    };
    loadPlayers(team);
  }, [team, dispatch]);

  if (loading) return <LoadView message="Laddar data från Swehockey"></LoadView>;
  if (error) return <ErrorView error={error}></ErrorView>;
  if (!players) return <ErrorView error="Players are undefined"></ErrorView>;

  const eliasPlayers = [
    "Göransson, Mattias",
    "Kapla, Michael",
    "Bristedt, Leon",
    "Peterson, Jacob",
    "Sandin, Linus",
  ];
  const matsPlayers = [
    "Johansson, Filip",
    "Pettersson, Jesper",
    "Peterson, Jacob",
    "Dickinson, Josh",
    "Everberg, Dennis",
  ];
  const hannahPlayers = [
    "Johansson, Filip",
    "Bristedt, Leon",
    "Ekeståhl-Jonsson, Lukas",
    "Eklind, Oliver",
    "Ferguson, Brady",
  ];

  // Function to sort players based on position
  const sortPlayersByPosition = (players: Player[]) => {
    const positionPriority = ["LD", "RD", "D", "LW", "CE", "RW", "GK"]; 
    return players.sort((a, b) => {
      const posA = positionPriority.indexOf(a.Pos);
      const posB = positionPriority.indexOf(b.Pos);
      return posA - posB;
    });
  };

  const elias: Team = {
    name: "Elias",
    players: sortPlayersByPosition(players.filter((player) => eliasPlayers.includes(player.Name))),
    constant: -3,
  };

  const hannah: Team = {
    name: "Hannah",
    players: sortPlayersByPosition(players.filter((player) =>
      hannahPlayers.includes(player.Name))
    ),
  };

  const mats: Team = {
    name: "Mats",
    players: sortPlayersByPosition(players.filter((player) =>
      matsPlayers.includes(player.Name))
    ),
  };

  return <PlusMinusView teams={[elias, hannah, mats]}></PlusMinusView>;
}
