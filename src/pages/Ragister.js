import React from 'react';

function Ragister() {
        function handleRagister (event){
            event.preventDefault();
            console.log ("hello Shree !")
        }

        let age = 20;
  return (
    <div>
        {age > 18 ?  (
        <form>
            <input type="name" placeholder='enter name'></input>
            <button onClick={handleRagister}> Submit</button>
        </form>
         ): (
            <h1>You Are Small </h1>
         )}
     </div>
  );
}


export default Ragister
