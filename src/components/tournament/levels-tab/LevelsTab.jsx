import { Row, Col } from "react-bootstrap";
import Searchbar from "../Searchbar";
import LevelControls from "./LevelsControls";
import LevelsTable from "./LevelsTable";

const LevelsTab = () => (
  <div>
    <div className="d-flex justify-content-between align-items-end mb-4">
      <div>
        <Searchbar />
      </div>
      <div>
        <LevelControls />
      </div>
    </div>

    <Row>
      <Col>
        <LevelsTable />
      </Col>
    </Row>
  </div>
);

export default LevelsTab;
