function OpeningCeremony(callback) {
    console.log("Let the games begin!");
    setTimeout(() => {
      const score = { red: 0, blue: 0, green: 0, yellow: 0 };
      console.log("Opening Ceremony - Initial Scores:", score);
      callback(score, Race100M);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    setTimeout(() => {
      const raceTimes = {
        red: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
        blue: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
        green: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
        yellow: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
      };
  
      const fastestColor = Object.keys(raceTimes).reduce((winner, color) =>
        raceTimes[winner] > raceTimes[color] ? color : winner
      );
      const secondFastestColor = Object.keys(raceTimes).reduce((winner, color) =>
        raceTimes[winner] > raceTimes[color] && color !== fastestColor ? color : winner
      );
  
      score[fastestColor] += 50;
      score[secondFastestColor] += 25;
  
      console.log("Race 100M - Race Times:", raceTimes);
      console.log("Race 100M - Updated Scores:", score);
      callback(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    setTimeout(() => {
      const winningColor = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
      score[winningColor] += 150;
  
      console.log("Long Jump - Winning Color:", winningColor);
      console.log("Long Jump - Updated Scores:", score);
      callback(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score, callback) {
    const userColor = prompt("What colour secured the highest jump? (red, yellow, green, blue)");
    if (userColor && Object.keys(score).includes(userColor.toLowerCase())) {
      score[userColor.toLowerCase()] += 100;
      console.log("High Jump - Winning Color:", userColor);
    } else {
      console.log("Event Cancelled!");
    }
    console.log("High Jump - Updated Scores:", score);
    callback(score, AwardCeremony);
  }
  
  function AwardCeremony(score) {
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
  
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
    console.log(`${sortedScores[3][0]} came fourth with ${sortedScores[3][1]} points.`);
  }
  
  // Start the sports day
  OpeningCeremony(Race100M);