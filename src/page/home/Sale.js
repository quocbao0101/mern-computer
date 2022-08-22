import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider } from '@material-ui/core';
import TabPanel from './TabPanel';
import { SalesStyles, theme } from './style';

const props = (index) => ({
  id: `wrapped-tab-${index}`,
  'aria-controls': `wrapped-tabpanel-${index}`,
});
export default function Sale() {
  const classes = SalesStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <MuiThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab
            value="one"
            label="GIÁ SỐC TRONG NGÀY, Cập nhật liên tục"
            wrapped
            {...props('one')}
          />
          <Tab value="two" label="Item Two" {...props('two')} />
          <Tab value="three" label="Item Three" {...props('three')} />
        </Tabs>
        <TabPanel value={value} index="one">
          Item One
        </TabPanel>
        <TabPanel value={value} index="two">
          Item Two
        </TabPanel>
        <TabPanel value={value} index="three">
          Item Three
        </TabPanel>
      </MuiThemeProvider>
    </Paper>
  );
}
