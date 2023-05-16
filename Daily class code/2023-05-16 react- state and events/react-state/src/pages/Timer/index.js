import React, { useEffect, useState } from "react";

const Timer = () => {
  const [value, setValue] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {}, [userName]);

  const handlePlus = (event) => {
    setValue(value + 1);
    console.log("clicked Plus event", event);
  };

  const handleMinus = () => {
    setValue(value - 1);

    console.log("clicked minus");
  };

  const handleName = (event) => {
    console.log("handle userName", event.target.value);
    setUserName(event.target.userName);
  };

  return (
    <>
      <h1>Timer</h1>

      <h1>
        Count: <strong>{value}</strong>
      </h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>

      <input
        type="text"
        placeholder="Enter your userName"
        onChange={handleName}
      />

      {console.log("userName---", userName)}
      <h3>
        Your Sweet userName is:<strong>{userName}</strong>
      </h3>
    </>
  );
};

export default Timer;
