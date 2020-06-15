//how many doors
let numCloseDoors = 3;
// door image elements
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
//image url paths
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
//open doors global variables
let openDoor1;
let openDoor2;
let openDoor3;
//start button
let startButton = document.getElementById('start');
//current playing
let currentlyPlaying = true;

//function is bot
function isBot(door)
{
    if (door.src === botDoorPath) {
        return true;
    }
    return false;
}
//function to play door
function playDoor(door)
{
    numCloseDoors--;
    if (numCloseDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }

}

//function to verify that a door was click
function isClicked(door)
{
    if (door.src === closedDoorPath) {
        return false;
    }
    return true;
}

//function to choose random doors
function randomChoreDoorGenerator()
{
    let choreDoor = Math.floor(Math.random() * 3);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

//function game over
function gameOver(status)
{
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
}

//function start a new round
function startRound()
{
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numCloseDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};
doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};
doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
};

startRound();