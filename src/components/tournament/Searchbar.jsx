import { Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => (
  <Form className="d-flex">
    <FormControl type="search" placeholder="Search" className="me-2" />
    <Button variant="primary">
      <FontAwesomeIcon icon={faSearch} />
    </Button>
  </Form>
);
export default Searchbar;
