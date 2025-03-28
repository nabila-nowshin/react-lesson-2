import { useState } from "react";

function Player() {
    let [score,setScore]=useState(0);
    function singleRun(){
        let newScore=score+1;
        setScore(newScore);
    }

    function fourRuns(){
        let newScore=score+4;
        setScore(newScore);
    }

    function sixRuns(){
        let newScore=score+6;
        setScore(newScore);
    }
    return ( 
        <div>
            <h2>Player Score</h2>
            <h1>Scores : {score}</h1>
            {(score>50)?<h2>Congratulations !! You scored 50!</h2> :null}
                    
                 
             
            <button onClick={singleRun}>Singles</button>
            <button onClick={fourRuns}>Four</button>
            <button onClick={sixRuns}> Six</button>
        </div>
        
     );
}

export default Player;