import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import { SalesStyles } from './style';


const props = (index) => {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}
export default function Sale() {
    const classes = SalesStyles();
    const [value, setValue] = React.useState("one");
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <Paper className={classes.root} elevation={0}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction"
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
    </Paper>
  )
}
