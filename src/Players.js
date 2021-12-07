import React from "react";
import Player from "./Player";

function Players({ playersList }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-4">
        {playersList.map((player) => (
          <Player key={player.Id} {...player} />
        ))}
      </div>
    </div>
  );
}

export default Players;
