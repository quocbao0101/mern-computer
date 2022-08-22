import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{ overflow: 'hidden' }}
    >
      {value === index && (
      <Box>
        {children}
      </Box>
      )}
    </div>
  );
}

export default TabPanel;

TabPanel.defaultProps = {
  children: null,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
