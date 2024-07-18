/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Kebab from "../../assets/ellipsis-vertical.svg";
import "./KebabMenu.css";
import { useUserContext } from "../../contexts/UserContext";

export default function KebabMenu({ song }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const { userPlaylists } = useUserContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [nestedAnchorEl, setNestedAnchorEl] = useState(null);
  const navigate = useNavigate();

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
  const handleNestedClose = async (e) => {
    setNestedAnchorEl(null);
    const playlistId = e.target.id;

    try {
      const response = await fetch(`${ApiUrl}/api/musics/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ song }),
        credentials: "include",
      });
      if (response.ok === true) {
        const musicId = await response.json();
        try {
          const res = await fetch(`${ApiUrl}/api/musics/join`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ playlistId, musicId }),
            credentials: "include",
          });
          if (res.ok === true) {
            navigate(`/playlist-page/:${playlistId}`);
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    } catch (error) {
      throw new Error(error);
    }
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
            <MenuItem
              key={playlist.id}
              id={playlist.id}
              onClick={handleNestedClose}
            >
              {playlist.name}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
