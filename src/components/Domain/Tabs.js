import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Background from './Background';
import ResearchObjective from './Objective';
import ResearchGap from './ResearchGap';

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
            variant="scrollable"
            scrollButtons
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
                [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
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
            text={'Explainable Artificial Intelligence (XAI) is a field of artificial intelligence (AI) that focuses on developing models and systems that provide clear and understandable explanations for their decision-making processes. The goal of XAI is to enhance transparency and interpretability in AI systems, allowing users to comprehend how algorithms arrive at specific conclusions. This is particularly crucial in critical applications such as healthcare, finance, and autonomous vehicles, where trust and accountability are paramount. XAI methods aim to bridge the gap between the complexity of advanced AI models and the need for human interpretable insights, fostering trust and facilitating effective collaboration between AI systems and human users.'} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ResearchGap 
          title={'Research Gap'}
          text1={'SHAP-Not Primarily Designed for Counterfactuals. Assumption of Independence. Computational Complexity. model-agnostic Explanation'}
          text2={'LIME-Not Primarily Designed for Counterfactuals. explanations can be unstable. model-agnostic Explanation'}
          text3={'DICE-Assumption of Feature Independence. Computationally Intensive. Model agnostic explanation'}
          text4={"NICE-aims to find the smallest and most meaningful changes to an instance that would alter the model's prediction. Finding the nearest instance and ensuring feasibility can be computationally intensive.. Model agnostic explanation. Limited to binary classification problems."}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ResearchGap 
          title={'Research Problem'}
          text1={'SVM-How to get a counterfactual rule generation-based explanation for the Support Vector Machine classifier, when it handle  non-linear separable data in text classification?'}
          text2={'LR-How to get a counterfactual rule generation-based explanation for the Logistic Regression classifier when it becomes black box in text classification?'}
          text3={'RF-How to get a counterfactual rule generation-based explanation for the Random Forest classifier, when it becomes black box in text classification?'}
          text4={'KNN-How to get a counterfactual rule generation-based explanation for the k-NN classifier, when it handle  High Dimensionality problem in text classification?'}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ResearchObjective
          title={'Research Objectives'}
          description={'Provide a novel XAI solution to enhance the model explainability of Black-Box models focus on Random Forest, Support Vector Machine, K Nearest Neighbor Logistic Regression by developing a novel counterfactual rule generation mechanism related to the text classification domain.'}
          text1={`
            SVM-
            To develop novel explainable method to enhance the model explainability of :
            function-based classification models focus on  SVM .
          `}
          text2={`
            RF-
            To develop novel explainable method to enhance the model explainability of :
            ensemble models focus on  Random forest .
          `}
          text3={`
            KNN-
            To develop novel explainable method to enhance the model explainability of :
            distance-based classification models focus on  KNN .
          `}
          text4={`
            LR-
            To develop novel explainable method to enhance the model explainability of :
            regression-based classification models focus on  Logistic regression .
          `}
        />
      </CustomTabPanel>
    </Box>
  );
}