import { Tab, Tabs } from "react-bootstrap";
import ClockTab from "./clock-tab/ClockTab";
import GeneralTab from "./general-tab/GeneralTab";
import TournamentClock from "./Clock";
import PlayersTab from "./players-tab/PlayersTab";
import LevelsTab from "./levels-tab/LevelsTab";
import TablesTab from "./tables-tab/TablesTab";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTournament } from "../../redux/actions";
import { useParams } from "react-router";

const Tournament = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getTournament(params.id));
  }, []);
  return (
    <div>
      <TournamentClock />
      <Tabs defaultActiveKey="Timer">
        <Tab eventKey="Timer" title="Timer">
          <ClockTab />
        </Tab>
        <Tab eventKey="General" title="General">
          <GeneralTab />
        </Tab>

        <Tab eventKey="Players" title="Players">
          <PlayersTab />
        </Tab>
        <Tab eventKey="Levels" title="Levels">
          <LevelsTab />
        </Tab>
        <Tab eventKey="Tables" title="Tables">
          <TablesTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Tournament;
