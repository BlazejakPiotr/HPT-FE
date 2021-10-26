import ListTable from "./ListTable";
import { Searchbar } from "./ListNav";
import { Row, Col } from "react-bootstrap";
import { GeneralSettings } from "../GeneralSettings";
import { useEffect } from "react";
import { getTournamentList } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ScheduledTournaments = () => {
  const dispatch = useDispatch();

  const tournaments = useSelector((state) => state.tournaments.list);

  useEffect(() => {
    dispatch(getTournamentList());
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-end mb-3">
        <div>
          <Searchbar />
        </div>
        <div>
          <GeneralSettings />
        </div>
      </div>

      <Row>
        <Col>
          <ListTable tournaments={tournaments} />
        </Col>
      </Row>
    </div>
  );
};

export default ScheduledTournaments;
