import React from 'react';

const person = (props) => {
    return (
        <div className='user1'>
            <p>Welcome!</p>
            <p>Please type in your damn username:
                 {props.userName} </p>
            
            <input type='text'
                onChange={props.changed}  />
        </div>
    )
}

export default person;

