import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
// import HomeIcon from "@material-ui/icons/Home";

// import SearchIcon from "@material-ui/icons/Search";
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// import { getTokenFromResponse } from "./spotify";
// import { useStateValue } from "./StateProvider";
import { Home, LibraryMusic, Search } from "@mui/icons-material";

function Sidebar() {
//   const [{ playlists }, dispatch] = useStateValue();
//   console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption  option="For you" />
      <SidebarOption  option="Top Tracks" />
      <SidebarOption  option="Favaourats" />
      <SidebarOption  option="Recently Played" />
      <br />
      
  
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))} */}
    </div>
  );
}

export default Sidebar;