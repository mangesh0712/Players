import React from "react";

function Player({ PFName, Id, Value, SkillDesc, UpComingMatchesList }) {
  const { CCode, VsCCode, MDate } = UpComingMatchesList[0];
  return (
    <div className="bg-white rounded-sm shadow-md p-3 mx-4 sm:mx-40 md:mx-0">
      <div className="flex justify-center">
        <img src={`/player-images/${Id}.jpg`} className=" h-60 w-60" />
      </div>
      <div className="w-full  rounded-sm h-28 my-2 px-7">
        <div className="subDataContainer">
          <p className="font-semibold text-lg">{PFName}</p>
          <p className="font-semibold text-md p-1 px-4 bg-green-500 text-white rounded-sm">
            {SkillDesc}
          </p>
        </div>
        <div className="subDataContainer mt-2">
          <p className="text-sm font-mono text-gray-500">Value</p>
          <p className="text-sm font-mono text-gray-500">${Value}</p>
        </div>
        <div className="subDataContainer mt-2">
          <p className="text-sm font-mono text-gray-500">Upcoming Match</p>
          <div className="flex items-center">
            <p className="px-3 py-1 bg-red-400 text-white rounded-sm text-xs">
              {CCode}
            </p>
            <p className="mx-2 text-sm">VS</p>
            <p className="px-3 py-1 bg-red-400 text-white rounded-sm text-xs">
              {VsCCode}
            </p>
          </div>
        </div>
        <div className="subDataContainer mt-2">
          <p className="text-sm font-mono text-gray-500">Match Time</p>
          <p className="text-sm font-mono text-gray-500">{MDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
