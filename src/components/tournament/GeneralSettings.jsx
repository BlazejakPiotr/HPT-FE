import { useState } from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

export const GeneralSettings = () => {
  const [show, setShow] = useState(false);
  const [tournament, setTournament] = useState({
    currency: "USD",
  });
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/tournaments/", {
        method: "POST",
        body: JSON.stringify(tournament),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        let id = await res.json();
        alert("Tournament has been created");
        history.push("/tournaments/" + id);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e, propertyName) => {
    setTournament({
      ...tournament,
      [propertyName]: e.target.value,
    });
  };

  return (
    <>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create new tournament</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <h6 className="mb-3">General settings</h6>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="name"
                  onChange={(e) => handleInput(e, "name")}
                >
                  <Form.Label column sm={3}>
                    Event name
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={tournament.name}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="date">
                  <Form.Label column sm={3}>
                    Date
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="datetime-local"
                      placeholder="Date"
                      value={tournament.date}
                      onChange={(e) => handleInput(e, "date")}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="location">
                  <Form.Label column sm={3}>
                    Location
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      value={tournament.location}
                      onChange={(e) => handleInput(e, "location")}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="notes">
                  <Form.Label column sm={3}>
                    Notes
                  </Form.Label>
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your notes"
                      value={tournament.notes}
                      onChange={(e) => handleInput(e, "notes")}
                    />
                  </Col>
                </Form.Group>
                <Row>
                  <Col sm={4}>
                    <h6 className="mb-3">Buy-in</h6>
                    <Form.Group as={Row} className="mb-3" controlId="buyin">
                      <Form.Label column sm={6}>
                        Fee
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Fee"
                          value={tournament.buyin}
                          onChange={(e) => handleInput(e, "buyin")}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="currency">
                      <Form.Label column sm={6}>
                        Currency
                      </Form.Label>
                      <Col>
                        <Form.Select
                          value={tournament.currency}
                          onChange={(e) => handleInput(e, "currency")}
                        >
                          <option value="USD">USD</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="chips">
                      <Form.Label column sm={6}>
                        Chips
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="1500 C"
                          value={tournament.chips}
                          onChange={(e) => handleInput(e, "chips")}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <h6 className="mb-3">Re-buy</h6>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="rebuy-round"
                    >
                      <Form.Label column sm={6}>
                        Last round
                      </Form.Label>
                      <Col>
                        <Form.Control type="number" placeholder="8" disabled />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="buyin">
                      <Form.Label column sm={6}>
                        Fee
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Fee"
                          disabled
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="rebuy-chips"
                    >
                      <Form.Label column sm={6}>
                        Chips
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="1500 C"
                          disabled
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <h6 className="mb-3">Add-on</h6>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="rebuy-round"
                    >
                      <Form.Label column sm={5}>
                        Round
                      </Form.Label>
                      <Col>
                        <Form.Control type="number" placeholder="8" disabled />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="buyin">
                      <Form.Label column sm={5}>
                        Fee
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Fee"
                          disabled
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="rebuy-chips"
                    >
                      <Form.Label column sm={5}>
                        Chips
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="1500 C"
                          disabled
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="d-flex justify-content-end">
              <Button type="submit">Create</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
