import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, delistBot, dischargeBot }) {
  //your bot army code here...
  // Filtering through the bot items to recruit those who are not already in the army
  const armyRecruit = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickTrigger={delistBot}
        dischargeTrigger={dischargeBot}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {/* Placements of the bot recruits */}
          {armyRecruit}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
