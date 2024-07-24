import React from 'react';

function UserList() {
    let data = [
        {
            name: "Dhanashree",
            email: "Dhanashree  @gmail.com",
            rollNo: "1",
        },

        {
            name: "Shree",
            email: "shree@gmail.com",
            rollNo: "2",
        },

      ];

  return (
    <div>
     {data.map (({name, email,rollNo})=> {
        return (
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{rollNo}</p>
            </div>
        )
     }
    
    )}
    </div>
  )
}

export default UserList
