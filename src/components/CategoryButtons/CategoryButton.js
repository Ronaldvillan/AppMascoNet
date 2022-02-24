import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
const CategoryButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "rgb(164, 173, 182)",
          fontSize: "x-large",
          fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        }}
      >
        Productos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="categorias/Producto 1">
          <MenuItem onClick={handleClose}>Producto 1</MenuItem>
        </Link>
        <Link to="categorias/Producto 2">
          <MenuItem onClick={handleClose}>Producto 2</MenuItem>
        </Link>
        <Link to="categorias/Producto 3">
          <MenuItem onClick={handleClose}>Producto 3</MenuItem>
        </Link>
        <Link to="categorias/Producto 4">
          <MenuItem onClick={handleClose}>Producto 4</MenuItem>
        </Link>
        <Link to="categorias/Producto 5">
          <MenuItem onClick={handleClose}>Producto 5</MenuItem>
        </Link>
        <Link to="categorias/Producto 6">
          <MenuItem onClick={handleClose}>Producto 6</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default CategoryButton;
