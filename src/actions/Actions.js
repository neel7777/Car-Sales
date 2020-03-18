export const addFeatures = payload => {
    //create and return action objects
    return {
      type: "ADD_FEATURE",
      payload: payload
      
      
        
    };
  };

export const removeFeatures = payload => {
    return {
        type: "REMOVE_FEATURE",
        payload: payload
    }
}