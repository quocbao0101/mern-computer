import React from 'react'
import drawerStyles from './style';
import Drawer from '@material-ui/core/Drawer';

export default function Drawers() {
    const classes = drawerStyles();
    const anchor = 'right';
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
  return (
    <Drawer anchor={anchor} open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose}>
        <div className={classes.list}>
            Hello
        </div>
    </Drawer>
  )
}
