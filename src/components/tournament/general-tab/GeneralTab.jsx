import GeneralControls from "./GeneralControls";
import GeneralData from "./GeneralData";

const GeneralTab = () => (
  <div>
    <div className="d-flex justify-content-between align-items-start mb-4">
      <div>
        <h4>EPT Przeźmierowo 2021 MASTERS</h4>
      </div>
      <div>
        <GeneralControls />
      </div>
    </div>

    <GeneralData />
  </div>
);
export default GeneralTab;
