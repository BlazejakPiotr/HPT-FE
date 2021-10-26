import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faSave,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

// Sets general tab to edite mode
export const GeneralSettings = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faCogs} />
    </button>
  );
};

// Saves tournament with current state
export const SaveTournament = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faSave} />
    </button>
  );
};

// Import tournament with current state
export const ImportTournament = () => (
  <button>
    <FontAwesomeIcon icon={faFileImport} />
  </button>
);

const GeneralControls = () => (
  <div className="align-items-top">
    <SaveTournament /> <ImportTournament /> <GeneralSettings />
  </div>
);

export default GeneralControls;
