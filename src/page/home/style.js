import { makeStyles } from '@material-ui/core/styles';
import b3 from '../../assets/images/b3.webp';
const useStyles = makeStyles((theme) => ({
    menu: {
        paddingInline: '10%',
        backgroundImage: `url(${b3})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: 600,
    },
    root: {
      position: 'relative',
      top: 50,
      height: '100%',
      width: '20%',
      background: '#f5f5f59d',
      border: '1px solid #e1e1e1',
      borderRadius: 5,
      borderBottom: 'solid 3px #ff7e00',
    },
    card: {
      position: 'absolute',
      paddingInline:0,
      background: '#f5f5f59d',
      borderBottom: 'solid 3px #ff7e00',
      border: '1px solid #e1e1e1',
      display: 'none',
      opacity: 0,
      visibility: 'hidden',
      borderRadius: 4,
      maxWidth: 600,
      right: -620,
      top: -2,
      bottom: 0,
      minHeight: 500,
      WebkitTransition: 'opacity 600ms, visibility 600ms',
      transition: 'opacity 600ms, visibility 600ms',
    },
    iconMenu: {
        '&.MuiListItemIcon-root': {
            minWidth: 0,
        }
    },
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
    },
    link: {
      textDecoration: 'none',
      marginRight: 10,
      fontWeight: 650,
      color: '#000',
      '&:hover': {
        position: 'relative',
        color: '#3a5dd9',
      },
      position: 'relative',

      '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-4px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: '#ff7e00',
        transformOrigin: 'center',
        visibility: 'hidden',
        transition: 'all 0.4s ease-in-out',
      },
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
      },
    },
    text: {
      marginLeft: 8,
      fontWeight: 650,
      color: '#000',
      textDecoration: 'none',
      '&:hover': {
        position: 'relative',
        color: '#3a5dd9',
      },
      position: 'relative',

      '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-3px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: 'red',
        transformOrigin: 'center',
        visibility: 'hidden',
        transition: 'all 0.4s ease-in-out',
      },
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
      },
    },
    img: {
      height: '70%',
      width: '70%',
    },
  }))
export const SalesStyles = makeStyles({
    root: {
      flexGrow: 1,
      paddingInline: '10%',
    },
  });
export const data = [
    {
      name: 'CPU / Bộ xử lý',
      id: 1,
    },
    {
      name: 'USB',
      id: 2,
    },
    {
      name: 'PC / Laptop',
      id: 3,
      data: [
        {
          id: 1,
          name: 'Thương hiệu',
          items: [
            {
              id: 1,
              name: 'Intel Core I5'
            },
            {
              id: 2,
              name: 'Intel Core I3'
            },
            {
              id: 3,
              name: 'Intel Core I7'
            },
            {
              id: 4,
              name: 'Intel Pentium'
            },
            {
              id: 5,
              name: 'AMD'
            },
          ],
        },
        {
          id: 2,
          name: 'Kích thước',
          items: [
            {
              id: 1,
              name: 'Intel Core I5'
            },
            {
              id: 2,
              name: 'Intel Core I3'
            },
            {
              id: 3,
              name: 'Intel Core I7'
            },
            {
              id: 4,
              name: 'Intel Pentium'
            },
            {
              id: 5,
              name: 'AMD'
            },
          ],
        }
      ]
    }
  ];
export default useStyles;