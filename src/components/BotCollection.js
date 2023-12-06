import React,{useState} from "react";
import BotCard from "./BotCard";
// import botData from '../db.json';

function BotCollection({bots}) {
  
  // Your code here
 const botList = bots.map((bot) => {
  return (
    <BotCard
    key={bot.id}
    bot={bot} />
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