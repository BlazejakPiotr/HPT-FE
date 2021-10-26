import { Row, Col } from "react-bootstrap";
export const ClockLeftCol = () => (
  <div>
    <Row>
      <Col>
        Round
        <br /> 1
      </Col>
    </Row>
    <Row>
      <Col>
        Entries
        <br /> 35
      </Col>
    </Row>
    <Row>
      <Col>
        Busted out
        <br /> 5
      </Col>
    </Row>
    <Row>
      <Col>
        Rebuys <br />0
      </Col>
    </Row>
    <Row>
      <Col>
        Total chips <br />
        30000 C
      </Col>
    </Row>
    <Row>
      <Col>
        Avg stack <br /> 1750 C
      </Col>
    </Row>
  </div>
);

export const ClockRightCol = () => (
  <div>
    <Row>
      <Col>
        Current time
        <br /> 22:55
      </Col>
    </Row>
    <Row>
      <Col>
        Elapsed time
        <br /> 0:15
      </Col>
    </Row>
    <Row>
      <Col>
        Next break
        <br /> 0:45
      </Col>
    </Row>
    <Row>
      <Col>
        Total pot
        <br /> 400$
      </Col>
    </Row>
    <Row>
      <Col className="h-100">
        Prize pool
        <ul style={{ listStyle: "none", paddingInlineStart: "0px" }}>
          <li>1st: 280$</li>
          <li>2st: 75$</li>
          <li>3rd: 25$</li>
        </ul>
      </Col>
    </Row>
  </div>
);
