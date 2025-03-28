import { useState } from "react";

function Counter() {
    let [count,setCount]=useState(0);
    function increment(){
        count+=1;
        setCount(count)
    }
    return ( 
        <button onClick={increment}>Count :{count}</button>
    );
}

export default Counter;