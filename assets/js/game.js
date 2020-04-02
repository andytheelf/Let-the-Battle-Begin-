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

var startGame = function () {
    var endGame = funtion(); {
        window.alert("The Game has now ended.Let's see how you did!")
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        window.alert("You've lost your robot in battle.");
        var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            var shop = function () {
                var shopOptionPrompt = window.prompt(
                    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE th store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
                );

                switch (shopOptionPrompt) {
                    case "refill":
                    case "REFILL":
                        if (playerMoney >= 7) {
                      window.alert("Refilling player's health by 20 for 7 dollars.");
                  
                      // increase health and decrease money
                      playerHealth = playerHealth + 20;
                      playerMoney = playerMoney - 7;
                        }
                        else {
                            window.alert("You don't have enough money!");
                        }
                      break;
                    case "upgrade":
                    case "UPGRADE":
                        if (playerMoney >= 7) {
                      window.alert("Upgrading player's attack by 6 for 7 dollars.");
                  
                      // increase attack and decrease money
                      playerAttack = playerAttack + 6;
                      playerMoney = playerMoney - 7;
                        }
                        else {
                            window.alert("You don't have enough money!");
                        }
                      break;
                    case "leave":
                    case "LEAVE":
                      window.alert("Leaving the store.");
                  
                      // do nothing, so function will end
                      break;
                    default:
                      window.alert("You did not pick a valid option. Try again.");
                  shop();
                  break;

                startGame(); 
            }
          }
        }

        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    };
    playerHealth = 100;
    playerAttack = 10;
    player = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        console.log(enemyNames[i]);
        console.log(i);
        console.log(enemyNames[i] + " is at " + i + " index");
    }
    var enemyHealth = 50;
    var enemyAttack = 12;

    var fight = function (enemyName) {
        while (enemyHealth > 0 && playerHealth > 0) {
            // Alert users that they are starting the round
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round");
                if (storeConfirm) {
                    shop();
                }
                window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
            }

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
        }

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
            
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
      if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
      
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight, Goodbye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
        }
    }
    else {
        fight();
    }
}


for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];

    //call fight function with enemy robots
    fight(pickedEnemyName);
    if (i < enemyNames.length - 1) {
        shop();
    }
}

endGame();

};

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


