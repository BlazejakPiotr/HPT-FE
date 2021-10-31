import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const ClockSettings = () => {
  return (
    <div>
      <Button style={{ marginRight: "10px" }}>
        <FontAwesomeIcon icon={faPause} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faPlay} />
      </Button>
    </div>
  );
};

export default ClockSettings;
