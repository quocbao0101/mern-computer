import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  List, ListItem,
  ListItemText, ListItemIcon,
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import b3 from '../../assets/images/b3.webp';
// import b4 from '../../assets/images/b4.png';
// import b5 from '../../assets/images/b5.jpg';
// import CardItem from '../../components/CardItem';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import useStyles, { data } from './style';
import Sale from './Sale';

export default function Home() {
  const classes = useStyles();
  const [ids, setId] = React.useState('');
  const menus = data.find((menu) => menu.id === ids);
  const handleHover = (id) => {
    setId(id);
  };
  return (
    <Grid>
      <div className={classes.image}>
        <div className={classes.menu}>
          <div className={classes.root}>
            <List
              dense
              component="nav"
              aria-label="secondary mailbox folders"
            >
              {data.map((item) => (
                <ListItem
                  key={item.id}
                  button
                  onMouseEnter={() => handleHover(item.id)}
                >
                  <ListItemText primary={item.name} />
                  <ListItemIcon className={classes.iconMenu}>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
            <Grid className={classes.card}>
              {(menus && menus.data) && menus.data.map((item) => (
                <Grid item className={classes.cardItem} key={item.id}>
                  <span className={classes.textCard}>
                    {item.name}
                    <ArrowRightIcon fontSize="medium" className={classes.icon} />
                  </span>
                  {item.items.map((product) => (
                    <Link key={product.id} to="/hello" className={classes.link}>
                      {product.name}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <Sale />
    </Grid>
  );
}
