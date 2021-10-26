import {
  faHourglassHalf,
  faPlusSquare,
  faSave,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

export const AddBreak = () => (
  <button>
    <FontAwesomeIcon icon={faHourglassHalf} />
  </button>
);

export const AddRound = () => (
  <button>
    <FontAwesomeIcon icon={faPlusSquare} />
  </button>
);

// Saves tournament rounds
export const SaveRounds = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faSave} />
    </button>
  );
};

// Import tournament rounds
export const ImportRounds = () => (
  <button>
    <FontAwesomeIcon icon={faFileImport} />
  </button>
);

const LevelControls = () => (
  <div>
    <SaveRounds /> <ImportRounds /> <AddBreak /> <AddRound />
  </div>
);
export default LevelControls;
