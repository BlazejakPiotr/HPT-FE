import { Tab, Tabs } from "react-bootstrap";
import ScheduledTournaments from "./ScheduledTournaments";

const TournamentsList = () => (
  <>
    <Tabs defaultActiveKey="Scheduled">
      <Tab eventKey="Scheduled" title="Scheduled">
        <ScheduledTournaments />
      </Tab>
      <Tab eventKey="Past" title="Past "></Tab>
      <Tab eventKey="Saved" title="Saved "></Tab>
    </Tabs>
  </>
);

export default TournamentsList;
