import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const GeneralSettings = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faCog} />
    </Button>
  );
};

export default GeneralSettings;
