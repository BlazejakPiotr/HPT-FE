import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import LevelsTableItem from "./LevelsTableItem";

const LevelsTable = () => {
  const tournament = useSelector((state) => state.tournaments.current);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Level</th>
          <th style={{ width: "15%" }}>Duration</th>
          <th style={{ width: "15%" }}>Ante</th>
          <th style={{ width: "15%" }}>Small Blind</th>
          <th style={{ width: "15%" }}>Big Blind</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {tournament.rounds &&
          tournament.rounds.map((round, i) => (
            <LevelsTableItem key={round.name} data={round} index={i} />
          ))}
      </tbody>
    </Table>
  );
};
export default LevelsTable;
