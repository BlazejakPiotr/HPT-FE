import { useState } from "react";
import { Modal, Button, Form, Col, Row, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../../../redux/actions";
import { saveTournament } from "../../../redux/actions";

const PlayersSettings = () => {
  const [show, setShow] = useState(false);
  const [player, setPlayer] = useState({
    name: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const tournament = useSelector((state) => state.tournaments.current);

  const handleInput = (e, propertyName) => {
    setPlayer({
      ...player,
      [propertyName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(player);
    dispatch(addPlayer(player));
    setPlayer({
      name: "",
    });
  };

  return (
    <>
      <Button onClick={handleShow} style={{ marginLeft: "10px" }}>
        <FontAwesomeIcon icon={faUsers} />
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Players</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={3}>Waiting room</Col>
            <Col md={9}>
              <Row>
                <Form onSubmit={handleSubmit}>
                  <Row className="align-items-end">
                    <Col>
                      Name:
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="John Doe"
                        value={player.name}
                        onChange={(e) => handleInput(e, "name")}
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
              </Row>
              <Row>
                <Col>Name</Col> <Col>Buy in</Col>
                <Col>Re buy</Col> <Col>Add on</Col> <Col>manage</Col>
                <ListGroup>
                  {tournament.players &&
                    tournament.players.map((player) => (
                      <ListGroup.Item
                        action
                        className="d-flex"
                        key={player.name}
                      >
                        <Col>{player.name}</Col>
                        <Col>Buy in</Col>
                        <Col>Re buy</Col> <Col>Add on</Col> <Col>manage</Col>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
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

export default PlayersSettings;
