import React, { useState } from "react";

const Day = ({ active, count, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        active
          ? "card text-center page-item active m-2"
          : "card text-center page-item m-2"
      }
    >
      {count}
    </div>
  );
};
const App = (props) => {
  const [chosen, setChosen] = useState();
  const test = this.props.onMake;

  return (
    <div className="App">
      {test.map((t) => (
        <Day
          key={t}
          count={t}
          active={t === chosen}
          onClick={() => setChosen(t)}
        />
      ))}
    </div>
  );
};

export default App;
