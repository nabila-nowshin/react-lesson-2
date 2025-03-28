import { use } from "react";

function Users({fetchUsers}) {
    const usersContent=use(fetchUsers);
    // console.log(usersContent);
    return ( 
        <div className="content">
            {usersContent.map(user => {return <p key={user.id}>{user.name}</p>})}
        </div>
    
        
     );
}

export default Users;