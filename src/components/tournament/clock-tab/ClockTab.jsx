import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ClockTab = () => {
  const tournament = useSelector((state) => state.tournaments.current);
  return (
    <div>
      <Row>
        <Col>
          <div className="text-center clock-tab">
            <Row>
              <Col>
                Players
                <br />
              </Col>
              <Col
                md={8}
                className="d-flex justify-content-center align-items-center"
              >
                <h3>{tournament.name}</h3>
              </Col>
              <Col>
                Current time
                <br /> 22:55
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Row>
                  <Col>
                    Rebuys <br />0
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Total pot
                    <br /> 400$
                  </Col>
                </Row>
              </Col>
              <Col md={8}>
                <h1>18:31</h1>
              </Col>
              <Col md={2}>
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
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                Prize pool
                <ul style={{ listStyle: "none", paddingInlineStart: "0px" }}>
                  <li>1st: 280$</li>
                  <li>2st: 75$</li>
                  <li>3rd: 25$</li>
                </ul>
              </Col>
              <Col md={5}>
                <p>Current level</p>
                <strong>
                  ROUND 1<br />
                  <div>Blinds: 10 C / 20 C</div>
                  Ante: 10 C
                </strong>
              </Col>
              <Col md={3}>
                <small>
                  <p>Next level</p>
                  ROUND 2<br />
                  <div>Blinds: 20 C / 40 C</div>
                  Ante: 20 C
                </small>
              </Col>
              <Col md={2}>
                <Row>
                  <Col>
                    Avg stack <br />
                    30000 C
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Total chips <br />
                    30000 C
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ClockTab;
