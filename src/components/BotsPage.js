import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect } from "react";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  console.log(Array.isArray(bots));

  //Fetch robots from the server

  function fetchBotData() {
    return (
      fetch(`http://localhost:8002/bots`)
        // return fetch(`https://retoolapi.dev/GqurXn/bots`)
        .then((resp) => resp.json())
        .then((data) => {
          setBots(data);
        })
    );
  }

  // fetch for the bot everytime the page is loaded
  useEffect(() => {
    fetchBotData();
  }, []);

  //click functions

  function enlistBot(bot) {
    setBots(
      bots.map((robot) => {
        // go through the array to confirm the bot being enlisted based on the selected id
        if (robot.id === bot.id) {
          return { ...robot, army: true };
        } else {
          return robot;
        }
      })
    );
  }

  function delistBot(bot) {
    // go through the array to confirm the bot being delisted based on the selected id
    setBots(
      bots.map((robot) => {
        if (robot.id === bot.id) {
          return { ...robot, army: false };
        } else {
          return robot;
        }
      })
    );
  }

  // function dischargeBot(bot){
  //   // current state of bots
  //   const currentBots = bots;

  //   //new array creation after excluding the bot with the specified id
  //   const updatedBots = currentBots.filter((robot) => robot.id !== bot.id);
  //   //set state of bot to the updated array of remaining bots
  //   setBots(updatedBots);
  // }

  function dischargeBot(bot) {
    // current state of bots
    const currentBots = bots;

    //new array creation after excluding the bot with the specified id
    const updatedBots = currentBots.filter((robot) => robot.id !== bot.id);
    //set state of bot to the updated array of remaining bots
    setBots(updatedBots);

    // delete discharged bot from the main server as well
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <YourBotArmy
        bots={bots.filter((robots) => robots.army)}
        delistBot={delistBot}
        dischargeBot={dischargeBot}
      />
      {/* // pass the bot data and its enlisting event to collection */}
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default BotsPage;
