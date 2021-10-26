import { Container, Row, Col } from "react-bootstrap";
import ContentTopNav from "./ContentTopNav";

const ContentContainer = () => (
  <div>
    <ContentTopNav />
    <div className="content-container"></div>
  </div>
);

export default ContentContainer;
