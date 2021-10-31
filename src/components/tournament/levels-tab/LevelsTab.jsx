import { Row, Col } from "react-bootstrap";
import LevelsTable from "./LevelsTable";
import { useSelector } from "react-redux";
import { Coin } from "react-bootstrap-icons";

const LevelsTab = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <LevelsTable />
        </Col>
        <Col>
          <ul>
            <li>
              <Coin size={40} color="red" />
              10
            </li>
            <li>
              <Coin size={40} color="blue" />
              20
            </li>
            <li>
              <Coin size={40} color="green" />
              50
            </li>
            <li>
              <Coin size={40} color="yellow" />
              100
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default LevelsTab;
