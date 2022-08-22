import {
  AppBar, Toolbar,
  TextField,
  Button,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import useStyles from './style';
import Drawers from './Drawer';
import logo from '../../assets/images/icon.png';

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.image} src={logo} alt="logo" />
        <div className={classes.box}>
          <TextField
            placeholder="Bạn muốn tìm kiếm sản phẩm nào..."
            variant="outlined"
            className={classes.textFind}
          />
          <Button className={classes.buttonFind} startIcon={<SearchIcon />}>
            Tìm kiếm
          </Button>
        </div>
        <div className={classes.rightNav}>
          <PersonIcon fontSize="medium" />
          <Link to="/home" className={classes.text}>
            <Typography style={{ fontWeight: 600 }}>Đăng nhập</Typography>
          </Link>
        </div>
        <div className={classes.rightNav}>
          <Badge overlap="rectangular" badgeContent={1} color="primary">
            <ShoppingCartOutlinedIcon fontSize="medium" />
          </Badge>
          <Link to="/home" className={classes.text}>
            <Typography style={{ fontWeight: 600 }}>Giỏ hàng</Typography>
          </Link>
        </div>
        <div className={classes.menu}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        <Drawers />
      </Toolbar>
    </AppBar>
  );
}
