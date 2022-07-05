import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import logo from "../../assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";




export default function MenuAppBar({totalItems,setShowCard}) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
        color="inherit"
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
            }}
            color="inherit"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setShowCard(false)}
              sx={{ mr: 2 }}
            >
              <img src={logo} height="25px" />
            </IconButton>
            Clarusway Store
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>setShowCard(true)}
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon />
                </Badge>
               
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
