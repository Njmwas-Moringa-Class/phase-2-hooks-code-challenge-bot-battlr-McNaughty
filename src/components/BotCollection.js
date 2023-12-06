import React,{useState} from "react";
import BotCard from "./BotCard";
// import botData from '../db.json';

function BotCollection({bots, enlistBot, dischargeBot}) {
  
  // Your code here
  // map the individual bots based on the id. The individual bots are then 
  // passed to the card component
 const botList = bots.map((bot) => {
  return (
    <BotCard
    key={bot.id}
    bot={bot} 
    clickTrigger = {enlistBot}
    dischargeTrigger={dischargeBot}
    />
  )
 })
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        <>
        {botList}
        </>
        
      </div>
    </div>
  );
}

export default BotCollection;