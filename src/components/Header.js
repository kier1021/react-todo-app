// import Button from "@mui/material/Button";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ title, onAdd, showAddTodo }) => {
  const onClick = (e) => {
    onAdd();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>


    // <header>
    //   <h1>{title}</h1>
    //   <Button
    //     variant="outlined"
    //     onClick={onClick}
    //     color={showAddTodo ? "error" : "primary"}
    //     size='small'
    //   >
    //     {showAddTodo ? "Close" : "Add"}
    //   </Button>
    // </header>
  );
};

Header.defaultProps = {
  title: "Todo App",
};

export default Header;
