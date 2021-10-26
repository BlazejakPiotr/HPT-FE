import { useState } from "react";
import { useHistory } from "react-router";
import { Row, Col, Modal, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

export const Searchbar = () => (
  <Form className="d-flex">
    <FormControl type="search" placeholder="Search" className="me-2" />
    <Button variant="primary">
      <FontAwesomeIcon icon={faSearch} />
    </Button>
  </Form>
);

export const CreateTournament = () => {
  const [show, setShow] = useState(false);
  const [tournament, setTournament] = useState({});
  const history = useHistory();

  const handleInput = (e, propertyName) => {
    setTournament({
      ...tournament,
      [propertyName]: e.target.value,
    });
  };

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
        let { id } = await res.json();
        setShow(!show);
        history.push("/tournament/" + id);
      } else {
        console.log("something bad happend");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faCalendarPlus} />
      </Button>
      <Modal
        size="md"
        show={show}
        onHide={() => setShow(!show)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create new tournament</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="px-2">
            <Row>
              <h6>General settings</h6>

              <Form.Group as={Row} className=" mb-3" controlId="name">
                <Form.Label column sm="4">
                  Name:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="Home Game Tournament"
                    value={tournament.name}
                    onChange={(e) => handleInput(e, "name")}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className=" mb-3" controlId="date">
                <Form.Label column sm="4">
                  Date:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="datetime-local"
                    required
                    value={tournament.date}
                    onChange={(e) => handleInput(e, "date")}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className=" mb-3" controlId="chips">
                <Form.Label column sm="4">
                  Starting chips:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="number"
                    required
                    value={tournament.chips}
                    onChange={(e) => handleInput(e, "chips")}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className=" mb-3" controlId="buyin">
                <Form.Label column sm="4">
                  Buy-in:
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="number"
                    required
                    value={tournament.buyin}
                    onChange={(e) => handleInput(e, "buyin")}
                  />
                </Col>
                <Col sm="4">
                  <Form.Select
                    aria-label="currency"
                    required
                    value={tournament.currency}
                    onChange={(e) => handleInput(e, "currency")}
                  >
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm="4">
                  Notes:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    as="textarea"
                    placeholder="Notes"
                    rows={3}
                    value={tournament.notes}
                    onChange={(e) => handleInput(e, "notes")}
                  />
                </Col>
              </Form.Group>
            </Row>
            <Col className="d-flex justify-content-end">
              <Button type="submit" variant="primary">
                Create
              </Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
