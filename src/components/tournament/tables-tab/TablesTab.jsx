import { Row, Col } from "react-bootstrap";
import Searchbar from "../Searchbar";
import TablesControls from "./TablesControls";
import TablesItem from "./TablesItem";

const TablesTab = () => (
  <div>
    <div className="d-flex justify-content-between align-items-end mb-4">
      <div>
        <Searchbar />
      </div>
      <div>
        <TablesControls />
      </div>
    </div>

    <Row>
      <Col>
        <TablesItem />
      </Col>
    </Row>
  </div>
);

export default TablesTab;
