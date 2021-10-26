import { Row, Col } from "react-bootstrap";

export const GeneralData = () => (
  <Row className="justify-content-between">
    <Col sm={6}>
      <h6>General Settings </h6>
      <Row className="mb-1">
        <Col sm={3}>Event Name:</Col>
        <Col>EPT Przeźmierowo 2021 MASTERS Edition</Col>
      </Row>
      <Row className="mb-1">
        <Col sm={3}>Event ID:</Col>
        <Col>3aij1a8oktxlx58n</Col>
      </Row>
      <Row className="mb-1">
        <Col sm={3}>Password:</Col>
        <Col>******</Col>
      </Row>
      <Row className="mb-1">
        <Col sm={3}>Scheduled:</Col>
        <Col>Saturday 19:00, 25.11.2021r</Col>
      </Row>

      <Row className="mb-1">
        <Col sm={3}>Location:</Col>
        <Col>Poland</Col>
      </Row>

      <Row className="mb-1">
        <Col sm={3}>Prizes:</Col>
        <Col>
          <ul style={{ listStyle: "none", paddingInlineStart: "0px" }}>
            <li>1st: 70%</li>
            <li>2nd: 20%</li>
            <li>3rd: 10%</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-1">
        <Col sm={3}>Notes:</Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          dolores incidunt assumenda, rerum dolore neque saepe quo perferendis
          nemo harum exercitationem, iure reiciendis voluptate? Harum eos quos
          commodi omnis accusantium, dicta aperiam nostrum voluptatibus
        </Col>
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
        <Col>1500 C</Col>
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

export default GeneralData;
