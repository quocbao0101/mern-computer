import {
  Grid, makeStyles,
} from '@material-ui/core';
import React from 'react';
import btab from '../assets/images/btab.jpg';
import SwiperProduct from './SwiperProduct';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  image: {
    background: `url(${btab}) no-repeat`,
    backgroundSize: '100% 100%',
    padding: '0px 12px 45px 430px',
    minHeight: '470px',
  },
  top: {
    position: 'relative',
    top: 50,
    width: '23%',
  },
}));
function TabPages() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <Grid item xs container>
          <Grid className={classes.top}>
            <SwiperProduct />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TabPages;
