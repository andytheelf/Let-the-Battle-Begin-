var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
enemyNames[0];
enemyNames[1];
enemyNames[2];
console.log(enemyNames.length);

var startGame = function() {
var endGame = funtion() ; {
    window.alert("The Game has now ended.Let's see how you did!")
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    window.alert("You've lost your robot in battle.");
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
    playerHealth = 100;
    playerAttack = 10;
    player = 10;

    for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
  // Alert users that they are starting the round
    if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ));}

  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }

  
}
    var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle? Enter 'FIGHT' or 'Skip' to choose");
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack
  // Log a resulting message to the console so we know that it worked.
      console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      )

      // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
      break;
    } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
)

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
   // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?")

  if (confirmSkip) {
      window.alert(playerName + " has decided to skip the fight, Goodbye!");
      playerMoney = playerMoney -10;
      console.log("playerMoney", playerMoney);
      break;
  }
}
  else {
      fight();
  } 
}
  

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];

    //call fight function with enemy robots
    fight(pickedEnemyName);
  }

  endGame();

};

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


