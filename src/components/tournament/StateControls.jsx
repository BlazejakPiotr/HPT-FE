import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

// Starts tournament or plays after pause
export const PlayTournament = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faPlay} />
    </button>
  );
};

// Pauses tournament timer
export const PauseTournament = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faPause} />
    </button>
  );
};

// Ends tournament
export const EndTournament = () => (
  <button>
    <FontAwesomeIcon icon={faStop} />
  </button>
);

const StateControls = () => (
  <div>
    <PauseTournament /> <PlayTournament />
  </div>
);

export default StateControls;
