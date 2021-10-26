import { Row, Col } from "react-bootstrap";
import StateControls from "../StateControls";
import { Clock } from "./Clock";

const ClockTab = () => (
  <div>
    <div className="d-flex justify-content-between align-items-end mb-4"></div>

    <Row>
      <Col>
        <Clock />
      </Col>
    </Row>
  </div>
);

export default ClockTab;
