


function inning(){
    return Math.floor(Math.random()*2 +1);
}

function finalScore(inning, numInnings){
    /*Code Here*/
    let homeScore = 0;
    let awayScore = 0;
    let finScore = {};
    for(let i = 0; i < numInnings; i++){
      homeScore += inning();
      awayScore += inning();
    }
    return finScore = {
      Home: homeScore,
      Away: awayScore
    }
  }



function getInningScore(inning) {
    /*Your Code Here */
    return {
      Home: inning(),
      Away: inning()
    }
  }
//   "This game will require extra innings: Away 10 - Home 10"
// "Final Score: Away 11 - Home 12"  

function scoreboard(inningScoreCB, inningCB, numInnings) {
    /* CODE HERE */
    let homeScore = 0;
    let awayScore = 0;
    const inningArray = [];
    for(let i = 0; i < numInnings; i++){
      let inningScores = inningScoreCB(inningCB);
      homeScore += inningScores.Home;
      awayScore += inningScores.Away;
      inningArray.push(`Inning ${i +1}: Away ${inningScores.Away} - Home ${inningScores.Home}`)
    }
    if(homeScore === awayScore){
        inningArray.push(`This game will require extra innings: Away ${awayScore} - Home ${homeScore}`)
        return inningArray;
    }else{
        inningArray.push(`Final Score: Away ${awayScore} - Home ${homeScore}`)
        return inningArray;
    }
   }

   console.log(scoreboard(getInningScore, inning, 9));