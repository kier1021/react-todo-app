import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DropDownMenu = ({ anchorEl, handleClose, itemClickEventMap }) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {itemClickEventMap.map((i, index) => (
        <MenuItem onClick={i.handler} key={index}>{i.item}</MenuItem>
      ))}
      {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    </Menu>
  );
};

export default DropDownMenu;
