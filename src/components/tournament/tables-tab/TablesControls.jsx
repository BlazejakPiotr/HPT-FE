import {
  faRandom,
  faPlusSquare,
  faSave,
  faFileImport,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

export const AddTable = () => (
  <button>
    <FontAwesomeIcon icon={faPlusSquare} />
  </button>
);

export const SaveTables = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faSave} />
    </button>
  );
};

export const ImportTables = () => (
  <button>
    <FontAwesomeIcon icon={faFileImport} />
  </button>
);

export const ManagePlayers = () => (
  <button>
    <FontAwesomeIcon icon={faUsers} />
  </button>
);

export const RandomAll = () => (
  <button>
    <FontAwesomeIcon icon={faRandom} />
  </button>
);

const TablesControls = () => (
  <div>
    <SaveTables /> <ImportTables /> <ManagePlayers /> <RandomAll /> <AddTable />
  </div>
);
export default TablesControls;
