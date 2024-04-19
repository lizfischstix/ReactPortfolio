import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import EmailIcon from '@mui/icons-material/Email';
import { useMediaQuery } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography style={{ fontFamily: 'Andika' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Nav() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <CustomTabPanel value={value} index={0}>
        {/* Render Home component */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <About />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Portfolio />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Contact />
      </CustomTabPanel>

      <Box sx={{ borderBottom: 3, borderColor: 'orange', marginTop: isSmallScreen ? 'auto' : 0 }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
          <Tab icon={<HomeIcon sx={{ color: 'orange', fontSize: 35 }} />} {...a11yProps(0)} />
          <Tab icon={<InfoIcon sx={{ color: 'orange', fontSize: 35 }} />} {...a11yProps(1)} />
          <Tab icon={<FolderSpecialIcon sx={{ color: 'orange', fontSize: 35 }} />} {...a11yProps(2)} />
          <Tab icon={<EmailIcon sx={{ color: 'orange', fontSize: 35 }} />} {...a11yProps(3)} />
        </Tabs>
      </Box>
    </Box>
  );
}
