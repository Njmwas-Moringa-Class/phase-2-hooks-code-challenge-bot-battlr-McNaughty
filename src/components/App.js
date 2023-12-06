import React,{ useEffect } from "react";
import BotsPage from "./BotsPage";
// import botData from '../db.json';
import { useState } from "react";

function App() {
  // const [bots, setbots] = useState([botData]);

  // useEffect(() =>{
  //   setbots(botData);
  //   // console.log(botData)
  // }, []);

  return (
    <div className="App">

      <BotsPage />
    </div>
  );
}

export default App;
