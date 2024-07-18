/* eslint-disable react/prop-types */
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Kebab from "../../assets/ellipsis-vertical.svg";
import "./KebabMenu.css";
import { useUserContext } from "../../contexts/UserContext";

// eslint-disable-next-line no-unused-vars
export default function KebabMenu({ song }) {
  const { userPlaylists } = useUserContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [nestedAnchorEl, setNestedAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const nestedOpen = Boolean(nestedAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.name === "create") {
      // fetch post
    }
  };
  /*   const handleAdd = () => {
    setAnchorEl(null);

  }; */
  const handleNestedClick = (event) => {
    setNestedAnchorEl(event.currentTarget);
  };
  const handleNestedClose = () => {
    setNestedAnchorEl(null);
  };

  return (
    <div id="kebabMenu">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={Kebab} alt="Show the song options" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} name="create">
          New playlist
        </MenuItem>
        <MenuItem
          aria-controls={nestedOpen ? "nested-menu" : undefined}
          aria-haspopup="true"
          onClick={handleNestedClick}
        >
          Add to a playlist
        </MenuItem>
      </Menu>
      <Menu
        id="nested-menu"
        anchorEl={nestedAnchorEl}
        open={nestedOpen}
        onClose={handleNestedClose}
      >
        {userPlaylists &&
          userPlaylists.map((playlist) => (
            <MenuItem key={playlist.id} onClick={handleNestedClose}>
              {playlist.name}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
