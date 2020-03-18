import React from 'react';
import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeatures, removeFeatures } from "./actions/Actions";

const App = props => {
  console.log(props);
  const removeFeatures = item => {  
    props.removeFeatures(item)  
    // dispatch an action here to remove an item
  };

  const addFeatures = item => {  
    props.addFeatures(item)  
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeatures={removeFeatures}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeatures={addFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapstatestoprops = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapstatestoprops,
  { addFeatures, removeFeatures } 
)(App);




