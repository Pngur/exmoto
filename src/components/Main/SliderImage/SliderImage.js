import React from 'react';

import './SliderImage.scss';

const SliderImage = props => {
   console.log(props.contWidth*10);
   return (
         <div className={"SliderImage"} style={{backgroundImage: `linear-gradient(105deg, rgba(255,255,255,0.9) 
         ${ '45%'}, rgba(255,255,255, 1) 50%, transparent 10%), url(${props.bgimage})`}}>
            <div className="SliderImage__Box">
               <h2 className="SliderImage__Heading">{props.heading}</h2>
               <p className="SliderImage__Paragraph">{props.text}</p>
            </div>
         </div>
      );

}


export default SliderImage;
