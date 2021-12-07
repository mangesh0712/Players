import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Players from "./Players";

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  /// Get data
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.npoint.io/20c1afef1661881ddc9c"
    );
    let list = response.data.playerList.map((player) => {
      return {
        Id: player.Id,
        PFName: player.PFName,
        TName: player.TName,
        Value: player.Value,
        SkillDesc: player.SkillDesc,
        UpComingMatchesList: player.UpComingMatchesList,
      };
    });

    setPlayerList(list.sort((a, b) => a - b));
    setFilteredList(list.sort((a, b) => a - b));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = (val) => {
    const filteredList =
      val === ""
        ? playerList
        : playerList.filter(
            (player) =>
              player.PFName.toLowerCase().indexOf(val.trim().toLowerCase()) !==
              -1
          );
    var n = !filteredList.length
      ? playerList.filter(
          (player) =>
            player.TName.toLowerCase().indexOf(val.trim().toLowerCase()) !== -1
        )
      : filteredList;
    setFilteredList(n);
  };

  return (
    <div className="">
      <div className="relative">
        {/* search  */}
        <SearchBox onSearch={onSearch} />
        {/* List of players */}
        <Players playersList={filteredList} />
      </div>
    </div>
  );
}

export default App;
