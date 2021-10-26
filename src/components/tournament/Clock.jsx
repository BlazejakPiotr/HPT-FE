import { Col } from "react-bootstrap";
import StateControls from "./StateControls";

const TournamentClock = () => (
  <div className="d-flex justify-content-center align-items-center">
    <Col className="d-flex justify-content-end"></Col>
    <Col className="d-flex flex-column justify-content-center text-center">
      <h1>--:--</h1>
      <div className="state-btns">
        <StateControls />
      </div>
    </Col>
    <Col className="">
      <div className="d-flex flex-column justify-content-evenly align-content-bottom">
        <h6 className="text-center">Round 7</h6>
        <div className="d-flex justify-content-center">
          <h6 className="px-2">Blinds: 30/60 </h6>
          <h6 className="px-2">Ante: 15</h6>
        </div>
      </div>
    </Col>
  </div>
);

export default TournamentClock;
