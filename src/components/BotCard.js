import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickTrigger, dischargeTrigger }) {
  // Function to ensure no propagation of the click event while a bot is being discharged
  const handleDischargeClick = (event) => {
    event.stopPropagation(dischargeTrigger(bot));
    {
      dischargeTrigger(bot);
    }
  };

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => clickTrigger(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                // onClick={(event) => {
                //   event.stopPropagation();
                //   dischargeTrigger(bot);
                // }}
                onClick={handleDischargeClick}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
