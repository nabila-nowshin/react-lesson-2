import { use } from "react";
import Friend from "./friend";

function Friends({fetchFriends}) {
    let friendsData=use(fetchFriends);
    // console.log(friendsData)
    return ( 
        <div>
            <h3>Friends :{friendsData.length}</h3>
        {
            friendsData.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
        }
        </div>
        
     );
}

export default Friends;