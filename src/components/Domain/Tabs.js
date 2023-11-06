import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Background from './Background';
import ResearchProblem from './Problem';
import ResearchObjective from './Objective';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            sx={{
                '& .MuiTabs-indicator': {
                    backgroundColor: 'white', // Change the indicator (the line under the active tab) color here
                  },
                  '& .MuiTab-root': {
                    color: 'white', // Change the tab text color here
                    '&.Mui-selected': {
                      color: 'orange', // Change the color of the selected (active) tab text
                    },
                  },
            }}
        >
          <Tab label="Background" {...a11yProps(0)} />
          <Tab label="Research Gap" {...a11yProps(1)} />
          <Tab label="Research Problem" {...a11yProps(2)} />
          <Tab label="Research Objectives" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Background 
            title={'Background'} 
            text={'jh uhg iuhg.s iuksht.'} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Background 
            title={'Research Gap'} 
            text={'jzheh uhg iuhg.s iuksht. ekgj ehgb 5 345 kj345 j.'} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ResearchProblem 
          title={'Research Problem'}
          text1={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg'}
          text2={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aieh'}
          text3={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aieh'}
          text4={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aieh'}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ResearchObjective
          title={'Research Problem'}
          description={'j b.ksb rib rbi;rth sr h bsrit;hsrh ie;ho srjti;hjisrt aiorg;aeg ihia.th'}
          text1={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg'}
          text2={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aieh'}
          text3={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aieh'}
          text4={'erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aiehg eiughaehg aeiugh;aehg ergiuaehg aegiuha;eig aeiguh;aehg aegiu;aehg iguba;ehgae aeug;ae erg aeurg eiug iuhhlh ekjhgaeg iauergi aeiug eriughaeg aiuergberg bgguaerg eirug;aieh'}
        />
      </CustomTabPanel>
    </Box>
  );
}