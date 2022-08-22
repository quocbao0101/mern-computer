import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appbar: {
      marginBottom: 50,
    },
    toolbar: {
        padding: 2,
        background: 'white',
        color: '#999',
        paddingInline: '10%',
    },
    image: {
      maxHeight: 40,
      maxWidth: 100,
      padding: theme.spacing(3),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        opacity: 1,
      },
      [theme.breakpoints.up('md')]: {
        opacity: 0,
      },
      [theme.breakpoints.up('lg')]: {
        opacity: 0,
      },
    },
    box: {
      flexGrow: 1,
      marginTop: 10,
    },
    textFind: {
        '& .MuiOutlinedInput-input': {
            padding: '9px',
        },
        [theme.breakpoints.down('sm')]: {
            opacity: 0,
          },
          [theme.breakpoints.up('md')]: {
            width: '35%',
          },
          [theme.breakpoints.up('lg')]: {
            width: '35%',
          },
    },
    buttonFind: {
        background: '#3a5dd9;',
        color: 'white',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            opacity: 0,
          },
          [theme.breakpoints.up('md')]: {
          },
          [theme.breakpoints.up('lg')]: {
          },
        '&:hover': {
          background: '#1890ff',
          boxShadow: 'none',
        },
    },
    rightNav: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
      },
    },
    menu: {
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    text: {
      marginLeft: 8,
      fontWeight: 650,
      color: '#999999',
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
        backgroundColor: '#ff7e00',
        transformOrigin: 'center',
        visibility: 'hidden',
        transition: 'all 0.4s ease-in-out',
      },
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
      },
    }
  }));

export const drawerStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))
export default useStyles;