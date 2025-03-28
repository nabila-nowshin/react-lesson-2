function Friend({friend}) {
    let {name,email}=friend
    return ( 
        <div className="small-card">
        <h3>Name :{name}</h3>
        <h3>Email :{email}</h3>
        </div>
        
     );
}

export default Friend;