import { Modal, Row, Col, Form, Button, Badge } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { saveTournament } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const PlayersTableItem = ({ data, index }) => {
  const [show, setShow] = useState(false);
  const [player, setPlayer] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const tournament = useSelector((state) => state.tournaments.current);

  const handleBuyin = (data) => {
    tournament.players[index] = {
      ...data,
      ...player,
      status: "Still in",
      buyin: true,
      cost: tournament.buyin,
    };
  };

  return (
    <>
      <tr onClick={handleShow}>
        <td>{index + 1}.</td>
        <td>{data.name}</td>
        <td>
          {data.status === "Not bought in" && (
            <Badge pill bg="warning" text="dark">
              Not bought in
            </Badge>
          )}
          {data.status === "Still in" && (
            <Badge pill bg="success" text="dark">
              Still in
            </Badge>
          )}
          {data.status === "Busted out" && (
            <Badge pill bg="danger" text="dark">
              Busted out
            </Badge>
          )}
        </td>
        <td>{data.buyin ? <FontAwesomeIcon icon={faCheck} /> : ""}</td>
        <td>{data.rebuy}</td>
        <td>{data.addon}</td>
        <td>
          {data.cost} {tournament.currency}
        </td>
        <td>rank</td>
        <td>winnings </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Manage player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={8}>
              <Form>
                Name
                <Row className="align-items-end">
                  <Col className="d-flex">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="John Doe"
                      value={data.name}
                      // onChange={(e) => handleInput(e, "name")}
                      required
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col>
              <Button onClick={() => handleBuyin(data)}>Buy in</Button>
              <div>Status</div>
              {data.status === "Not bought in" && (
                <Badge pill bg="warning" text="dark">
                  Not bought in
                </Badge>
              )}
              {data.status === "Still in" && (
                <Badge pill bg="success" text="dark">
                  Still in
                </Badge>
              )}
              {data.status === "Busted out" && (
                <Badge pill bg="danger" text="dark">
                  Busted out
                </Badge>
              )}
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
export default PlayersTableItem;
