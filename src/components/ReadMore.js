import React, { useState } from "react";
const ReadMore = ({textSlice}) => {
    // const text = textSlice;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return ( 
        <p className="text">
      {isReadMore ? textSlice.slice(0, 532) : textSlice}
      <span onClick={toggleReadMore} className="read-or-hide" style={{fontWeight:'bolder', pointerEvents:'stroke'}}>
        {isReadMore ? " ..Read More >>>" : " <<< show less"}
      </span>
    </p>
     );
}
 
export default ReadMore;