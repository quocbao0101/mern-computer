// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import ti from '../assets/images/3080.jpg';

// import required modules

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: 10,
    padding: 20,
  },
  topPaper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgProduct: {
    maxHeight: 190,
    maxWidth: 190,
    marginBottom: 20,
  },
  textLink: {
    textDecoration: 'none',
    fontWeight: 700,
    color: '#222',
    fontSize: 14,
    marginBottom: 20,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  price: {
    marginTop: 10,
  },
}));
export default function SwiperProduct() {
  const classes = useStyles();
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Paper elevation={0} className={classes.paper}>
          <div className={classes.topPaper}>
            <img className={classes.imgProduct} src={ti} alt="1234" />
          </div>
          <Link className={classes.textLink} to="/help">Card màn hình Asus TUF RTX 3060TI O8G Gaming V2 (8GB GDDR6, 256-bit, HDMI +DP, 1x8-pin)</Link>
          <Typography className={classes.price}>Hello</Typography>
        </Paper>
      </SwiperSlide>
    </Swiper>
  );
}
