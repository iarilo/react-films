
import React from 'react';
  export const FanPreloader = () => {
  return(
     <div  className ='preloader'>
          <h4  className ='textPreloader'> Идёт загрузка </h4>
          <div className="progress">
              <div className="indeterminate"></div>
          </div>
     </div>
 ) 
}
export default FanPreloader;
