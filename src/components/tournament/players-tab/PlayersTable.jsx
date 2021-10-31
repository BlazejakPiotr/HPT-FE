import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import PlayersTableItem from "./PlayersTableItem";
export const PlayersTable = () => {
  const tournament = useSelector((state) => state.tournaments.current);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th style={{ width: "3%" }}>#</th>
          <th style={{ width: "30%" }}>Name</th>
          <th style={{ width: "10%" }}>Status</th>
          <th style={{ width: "5%" }}>Paid</th>
          <th style={{ width: "10%" }}>Rebuys</th>
          <th style={{ width: "10%" }}>Add-ons</th>
          <th style={{ width: "10%" }}>Total Cost</th>
          <th style={{ width: "10%" }}>Rank</th>
          <th style={{ width: "10%" }}>Total Winnings</th>
        </tr>
      </thead>
      <tbody>
        {tournament.players &&
          tournament.players.map((player, i) => (
            <PlayersTableItem key={player.name} data={player} index={i} />
          ))}
      </tbody>
    </Table>
  );
};
