import React from 'react';

const userInput = (props) =>{
return(
    <div className='user'>
        <input type = 'text' onChange={props.changed}  >
        </input>
    </div>
)
}

export default userInput;