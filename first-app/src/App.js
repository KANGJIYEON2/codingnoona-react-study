import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn.pixabay.com/photo/2014/12/21/23/53/stone-576268_1280.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.pixabay.com/photo/2013/07/12/13/28/scissors-147115_1280.png",
  },
  paper: {
    name: "Paper",
    img: "https://cdn.pixabay.com/photo/2012/04/13/13/18/paper-32377_1280.png",
  },
};

function App() {
  let [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/*<Box title="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
