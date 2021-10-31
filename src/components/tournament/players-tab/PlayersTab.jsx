import { PlayersTable } from "./PlayersTable";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addPlayer } from "../../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PlayersTab = () => {
  const [player, setPlayer] = useState({
    status: "Not bought in",
    buyin: false,
    rebuy: false,
    addon: false,
  });
  const dispatch = useDispatch();
  const tournament = useSelector((state) => state.tournaments.current);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer(player));
  };

  const handleInput = (e, propertyName) => {
    setPlayer({
      ...player,
      [propertyName]: e.target.value,
    });
  };

  return (
    <>
      <Row>
        <Col>searchbar</Col>
        <Col md={3} className="mb-3">
          <Form onSubmit={handleSubmit}>
            Name:
            <Row className="align-items-end">
              <Col className="d-flex">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="John Doe"
                  value={player.name}
                  onChange={(e) => handleInput(e, "name")}
                  required
                />
                <Button type="submit" variant="primary">
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <PlayersTable />
        </Col>
      </Row>
    </>
  );
};

export default PlayersTab;
