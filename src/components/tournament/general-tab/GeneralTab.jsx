import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const GeneralTab = () => {
  const tournament = useSelector((state) => state.tournaments.current);
  return (
    <Row className="justify-content-between">
      <Col sm={6}>
        <h6>General Settings </h6>
        <Row className="mb-1">
          <Col sm={3}>Event:</Col>
          <Col>{tournament.name}</Col>
        </Row>
        <Row className="mb-1">
          <Col sm={3}>Event ID:</Col>
          <Col>{tournament._id}</Col>
        </Row>

        <Row className="mb-1">
          <Col sm={3}>Scheduled:</Col>
          <Col>{tournament.date}</Col>
        </Row>

        <Row className="mb-1">
          <Col sm={3}>Location:</Col>
          <Col>{tournament.location}</Col>
        </Row>
        <Row className="mb-1">
          <Col sm={3}>Buy in:</Col>
          <Col>
            {tournament.buyin} {tournament.currency}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col sm={3}>Starting chips:</Col>
          <Col>{tournament.chips}</Col>
        </Row>

        <Row className="mb-1">
          <Col sm={3}>Notes:</Col>
          <Col>{tournament.notes}</Col>
        </Row>
      </Col>
      <Col sm={3} className="table-content-border">
        <h6>Buy-in:</h6>
        <Row>
          <Col sm={7}>Fee:</Col>
          <Col>150 $</Col>
        </Row>
        <Row>
          <Col sm={7}>Chips:</Col>
          <Col>1500 C</Col>
        </Row>
        <hr />
        <h6 className="mt-3">Re-buy:</h6>
        <Row>
          <Col sm={7}>Amount:</Col>
          <Col>1</Col>
        </Row>
        <Row>
          <Col sm={7}>Last Round:</Col>
          <Col>8</Col>
        </Row>
        <Row>
          <Col sm={7}>Fee:</Col>
          <Col>200$</Col>
        </Row>
        <Row>
          <Col sm={7}>Chips:</Col>
          <Col>1500 C</Col>
        </Row>
        <hr />
        <h6 className="mt-3">Add-on:</h6>
        <Row>
          <Col sm={7}>Round:</Col>
          <Col>8</Col>
        </Row>
        <Row>
          <Col sm={7}>Fee:</Col>
          <Col>200$</Col>
        </Row>
        <Row>
          <Col sm={7}>Chips:</Col>
          <Col></Col>
        </Row>
      </Col>
      <Col sm={3} className=" justify-content-end">
        <h6>General info:</h6>
        <Row>
          <Col sm={5}>Status:</Col>
          <Col>Scheduled</Col>
        </Row>
        <Row>
          <Col sm={5}>Current level:</Col>
          <Col>-</Col>
        </Row>
        <Row>
          <Col sm={5}>Players:</Col>
          <Col> 14/14</Col>
        </Row>
        <Row>
          <Col sm={5}>Total pot:</Col>
          <Col>20$</Col>
        </Row>
        <Row>
          <Col sm={5}>Total time:</Col>
          <Col>0:00</Col>
        </Row>
        <Row>
          <Col sm={5}>Re-buys:</Col>
          <Col>Off</Col>
        </Row>
      </Col>
    </Row>
  );
};
export default GeneralTab;
