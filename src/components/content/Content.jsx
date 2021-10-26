import { Tab, Tabs } from "react-bootstrap";
import TournamentsListTable from "../tournament/TournamentsListTable";
import TabControls from "./TabControls";
const Content = () => (
  <Tabs defaultActiveKey="Scheduled">
    <Tab eventKey="Scheduled" title="Scheduled tournaments">
      <TabControls />
      <TournamentsListTable />
    </Tab>
    <Tab eventKey="Past" title="Past tournaments"></Tab>
    <Tab eventKey="Saved" title="Saved tournaments"></Tab>
  </Tabs>
);

export default Content;
