import React from "react";

 const ButtonClear = (props) => (
    <div className='clear'
     onClick = {props.click}>
        {props.children}
    </div>
)

export default ButtonClear