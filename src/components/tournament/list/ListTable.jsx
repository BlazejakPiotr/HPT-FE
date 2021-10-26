import { Table } from "react-bootstrap";
import { ListTableItem } from "./ListTableItem";
const ListTable = ({ tournaments }) => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th style={{ width: "15%" }}>Starts</th>
        <th style={{ width: "45%" }}>Event Name</th>
        <th style={{ width: "10%" }}>Buy-in Fee</th>
        <th style={{ width: "10%" }}>Players</th>
        <th style={{ width: "10%" }}>Prize-Pool</th>
        <th style={{ width: "10%" }}>Status</th>
      </tr>
    </thead>
    <tbody>
      {tournaments.map((t) => (
        <ListTableItem key={t._id} data={t} />
      ))}
    </tbody>
  </Table>
);
export default ListTable;
