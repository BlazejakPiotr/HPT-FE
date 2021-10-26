import { Table } from "react-bootstrap";
const LevelsTable = () => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th style={{ width: "5%" }}>#</th>
        <th style={{ width: "30%" }}>Level</th>
        <th style={{ width: "13%" }}>Duration</th>
        <th style={{ width: "13%" }}>Ante</th>
        <th style={{ width: "13%" }}>Small Blind</th>
        <th style={{ width: "13%" }}>Big Blind</th>
        <th style={{ width: "13%" }}>Start time</th>
      </tr>
    </thead>
    <tbody>
      <tr
        onClick={() => {
          console.log("hello");
        }}
      >
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
      </tr>
      <tr>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
        <td>elomelo</td>
      </tr>
    </tbody>
  </Table>
);
export default LevelsTable;
