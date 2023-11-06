import React from 'react';
import '../../pages/Main.css';

function Introduction() {
  return (
    <div id='introduction' className='intro-container'>
      <div className='center large-header'>
         Counterfacual Explanations
        </div>
      <div className='center medium-header'>
        XAI, Counterfacual Explanation, SVM, LR, RF, KNN
      </div>
      <p className='center small-header'>
      This is a XAI (Explainable Artificial Intelligence) Solution based on 
      Counterfactual explanations on KNN, Logistic Regression, Random Forest and SVM
      </p>
    </div>
  );
}

export default Introduction;