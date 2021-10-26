import { Tab, Tabs } from "react-bootstrap";
import ClockTab from "./clock-tab/ClockTab";
import GeneralTab from "./general-tab/GeneralTab";
import TournamentClock from "./Clock";
import PlayersTab from "./players-tab/PlayersTab";
import LevelsTab from "./levels-tab/LevelsTab";
import TablesTab from "./tables-tab/TablesTab";
import { Clock } from "./clock-tab/Clock";

const Tournament = () => (
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

export default Tournament;
