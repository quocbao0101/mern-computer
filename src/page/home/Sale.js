import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider } from '@material-ui/core';
import TabPanel from '../../components/TabPanel';
import { SalesStyles, theme } from './style';
import TabPages from '../../components/TabPages';

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
            label="Giá sốc trong ngày"
            {...props('one')}
          />
          <Tab value="two" label="Item Two" {...props('two')} />
          <Tab value="three" label="Item Three" {...props('three')} />
        </Tabs>
        <TabPanel value={value} index="one">
          <TabPages />
        </TabPanel>
        <TabPanel value={value} index="two">
          <TabPages />
        </TabPanel>
        <TabPanel value={value} index="three">
          <TabPages />
        </TabPanel>
      </MuiThemeProvider>
    </Paper>
  );
}
