import React from 'react';

function Title (props) {
  return (
    <div>
        <h1 style={{fontSize: 50, color: "Blue"}}>
       {props.name}
       </h1>
    </div>
  );
}

export default Title
