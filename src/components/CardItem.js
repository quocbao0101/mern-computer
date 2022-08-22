import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardItem: {
      paddingInline: 20,
      padding: 5,
    },
    textCard: {
      color: '#3f51b5',
      fontWeight: 600,
    },
    icon: {
        position: 'relative',
        top: 7,
    }
}));

export default function CardItem({ title, data }) {
  const classes = useStyles();
  console.log(data);

  return (
    <Grid item className={classes.cardItem}>
        <span className={classes.textCard}>
            {title}
            <ArrowRightIcon fontSize='medium' className={classes.icon} /> 
        </span>
        {/* <Link to='/hello'>
            {data && data.map((item) => item.name)}
        </Link> */}
    </Grid>
  );
}