import { PlayersTable } from "./PlayersTable";
import { Row, Col } from "react-bootstrap";
import Searchbar from "../Searchbar";
import PlayersControls from "./PlayersControls";

const PlayersTab = () => (
  <div>
    <div className="d-flex justify-content-between align-items-end mb-4">
      <div>
        <Searchbar />
      </div>
      <div>
        <PlayersControls />
      </div>
    </div>

    <Row>
      <Col>
        <PlayersTable />
      </Col>
    </Row>
  </div>
);

export default PlayersTab;
