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

  // fetch for the bot everytime the page is loaded
  useEffect(() => {
    fetchBotData();
  }, []);

  //click functions

  function enlistBot(bot){
    
    setBots(bots.map((robot) => {
      // go through the array to confirm the bot being enlisted based on the selected id
      if (robot.id === bot.id) {
       return {...robot, army:true}
      }else {
        return robot;
      }

    }));
  }

  return (
    <div>
      <YourBotArmy bots={bots.filter((robots) => robots.army)}/>
      {/* // pass the bot data and its enlisting event to collection */}
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  )
}

export default BotsPage;
