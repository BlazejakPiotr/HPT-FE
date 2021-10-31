import { useEffect, useState } from "react";
import { Modal, Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import { addRound, removeRound, saveTournament } from "../../../redux/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faEdit,
  faLayerGroup,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const LevelSettings = () => {
  const [show, setShow] = useState(false);
  const [round, setRound] = useState({
    duration: "",
    small: "",
    big: "",
    ante: "",
  });
  const [state, setState] = useState("Add new round");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const tournament = useSelector((state) => state.tournaments.current);

  const handleInput = (e, propertyName) => {
    setRound({
      ...round,
      [propertyName]:
        propertyName === "break" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state === "Add new break") {
      round["break"] = true;
    } else {
      round["break"] = false;
    }
    dispatch(addRound(round));
    setRound({
      duration: "",
      small: "",
      big: "",
      ante: "",
    });
  };

  const handleEdit = (round, i) => {
    setRound(round);
    if (round.break) {
      setState("Add new break");
    } else {
      setState("Add new round");
    }
  };

  return (
    <>
      <Button onClick={handleShow} style={{ marginLeft: "10px" }}>
        <FontAwesomeIcon icon={faLayerGroup} />
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{state}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={3}>
              <div>
                <ul>
                  <li>
                    Rounds: {tournament.rounds && tournament.rounds.length}
                  </li>
                  <li>Breaks: </li>
                  <li>Total Time:</li>
                </ul>
              </div>
              <div>
                <Button
                  variant="primary"
                  className="w-100 mb-2"
                  onClick={() => setState("Add new round")}
                >
                  New round
                </Button>
                <Button
                  variant="primary"
                  className="w-100 mb-2"
                  onClick={() => setState("Add new break")}
                >
                  New break
                </Button>
                <Button
                  variant="primary"
                  className="w-100 mb-2"
                  onClick={() => setState("Set all times")}
                >
                  Set all times
                </Button>
                <Button variant="warning" className="w-100 mb-2">
                  Delete all
                </Button>
                <Button variant="primary" className="w-100 mb-2">
                  Save template
                </Button>
                <Button variant="primary" className="w-100 mb-2">
                  Load template
                </Button>
              </div>
            </Col>
            <Col>
              <Row className="mb-4">
                {state === "Add new round" && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="align-items-end justify-content-end">
                      <Col>
                        Ante
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="10"
                          value={round.ante}
                          onChange={(e) => handleInput(e, "ante")}
                          required
                        />
                      </Col>
                      <Col>
                        Small blind:
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="25"
                          value={round.small}
                          onChange={(e) => handleInput(e, "small")}
                          required
                        />
                      </Col>

                      <Col>
                        Big blind:
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="50"
                          value={round.big}
                          onChange={(e) => handleInput(e, "big")}
                          required
                        />
                      </Col>
                      <Col>
                        Duration:
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="15 mins"
                          value={round.duration}
                          onChange={(e) => handleInput(e, "duration")}
                          required
                        />
                      </Col>
                      <Col xs={2}>
                        <Button type="submit">
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
                {state === "Add new break" && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="align-items-end justify-content-center">
                      <Col></Col>
                      <Col></Col>
                      <Col>
                        Break:
                        <Form.Check
                          type="checkbox"
                          id="break"
                          value={true}
                          checked
                          disabled
                          onChange={(e) => handleInput(e, "break")}
                        />
                      </Col>

                      <Col>
                        Duration:
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="15 mins"
                          value={round.duration}
                          onChange={(e) => handleInput(e, "duration")}
                          required
                        />
                      </Col>
                      <Col xs={2}>
                        <Button type="submit">
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
                {state === "Set all times" && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="align-items-end">
                      <Col></Col>
                      <Col></Col>
                      <Col></Col>

                      <Col>
                        Duration:
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="15 mins"
                          value={round.duration}
                          onChange={(e) => handleInput(e, "duration")}
                          required
                        />
                      </Col>
                      <Col xs={2}>
                        <Button type="submit">
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Row>
              <Row>
                <Col>
                  <Row className="text-center">
                    <Col>Level</Col>
                    <Col>Duration</Col>
                    <Col>Ante</Col>
                    <Col>Blinds</Col>
                    <Col></Col>
                  </Row>

                  <ListGroup>
                    {tournament.rounds &&
                      tournament.rounds.map((round, i) => (
                        <ListGroup.Item action className="d-flex">
                          <Col>{round.break ? "Break" : `Round ${i + 1}`}</Col>{" "}
                          <Col>{round.duration} min</Col>{" "}
                          <Col>{round.ante} </Col>
                          <Col>
                            {round.small}/{round.big}{" "}
                          </Col>
                          <Col
                            md={1}
                            className="d-flex justify-content-between align-content-center"
                          >
                            <FontAwesomeIcon
                              icon={faTimes}
                              onClick={() => dispatch(removeRound(i))}
                            />
                            <FontAwesomeIcon
                              icon={faEdit}
                              onClick={() => handleEdit(round, i)}
                            />
                          </Col>
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => dispatch(saveTournament(tournament._id, tournament))}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LevelSettings;
