import LevelSettings from "./levels-tab/LevelSettings";
import PlayersSettings from "./players-tab/PlayersSettings";
import GeneralSettings from "./general-tab/GeneralSettings";
import ClockSettings from "./ClockSettings";
import Timer from "./Timer";

const TournamentClock = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 20); // 10 minutes timer
  return (
    // <div className="d-flex justify-content-center align-items-center">
    //   <Col className="d-flex justify-content-end"></Col>
    //   <Col className="d-flex flex-column justify-content-center text-center">
    //     <h1>--:--</h1>
    //     <div className="state-btns">
    //       <StateControls />
    //     </div>
    //   </Col>
    //   <Col className="">
    //     <div className="d-flex flex-column justify-content-evenly align-content-bottom">
    //       <h6 className="text-center">Round 7</h6>
    //       <div className="d-flex justify-content-center">
    //         <h6 className="px-2">Blinds: 30/60 </h6>
    //         <h6 className="px-2">Ante: 15</h6>
    //       </div>
    //     </div>
    //   </Col>
    // </div>
    <div>
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <div>
          <ClockSettings />
        </div>
        <div>
          <h1>
            <Timer expiryTimestamp={time} />
          </h1>
        </div>
        <div>
          <GeneralSettings />
          <PlayersSettings />
          <LevelSettings />
        </div>
      </div>
    </div>
  );
};

export default TournamentClock;
