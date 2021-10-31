import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faFileImport,
  faUserPlus,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import PlayersModal from "./PlayersSettings";

// Buy-in players
const BuyinPlayers = () => (
  <button>
    <FontAwesomeIcon icon={faDollarSign} />
  </button>
);

// Saves players list
export const SavePlayers = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faSave} />
    </button>
  );
};

// Import players list
export const ImportPlayers = () => (
  <button>
    <FontAwesomeIcon icon={faFileImport} />
  </button>
);

const PlayersControls = () => (
  <div>
    <SavePlayers /> <ImportPlayers /> <BuyinPlayers /> <PlayersModal />{" "}
  </div>
);

export default PlayersControls;
