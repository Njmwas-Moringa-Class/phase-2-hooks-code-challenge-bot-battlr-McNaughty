import React,{useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect } from "react";


function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  console.log(Array.isArray(bots));
  
  //Fetch robots from the server

  function fetchBotData(){
    return fetch(`http://localhost:3000/bots`)
    .then((resp) => resp.json())
    .then((data) => {
      setBots(data);
    })
  }

  useEffect(() => {
    fetchBotData();
  }, []);

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} />
    </div>
  )
}

export default BotsPage;
