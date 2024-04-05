const body = document.querySelector('body');
const display = document.getElementById('display')
const output = document.getElementById('output');
const input = document.querySelector('input');

document.addEventListener('DOMContentLoaded', () => {
  const introTitle = document.createElement('h1');
  const inputPrompt = document.createElement('p');
  const inputBox = document.createElement('input');
  const answerButton = document.createElement('button');
  let userAnswer = '';

  introTitle.textContent = 'Welcome to The Browser Game';
  inputPrompt.textContent = 'What is your name?'
  answerButton.classList.add('response-btn');
  answerButton.textContent = "Enter";

  setTimeout(() => {
    display.appendChild(introTitle);
    body.appendChild(inputPrompt);
    body.appendChild(inputBox);
    body.insertBefore(answerButton, inputBox);
  }, 500);

  answerButton.addEventListener('click', () => {
    const leftButton = document.createElement('button');
    const middleButton = document.createElement('button');
    const rightButton = document.createElement('button');
    const fightButton = document.createElement('button');
    const avoidButton = document.createElement('button');
    const trainButton = document.createElement('button');
    const responseButtons = [leftButton, middleButton, rightButton, fightButton, avoidButton, trainButton];


    leftButton.addEventListener('click', () => {
      display.textContent = 'You picked the grassy fighter, Trunkstomp';
      leftButton.remove();
      middleButton.remove();
      rightButton.remove();

      setTimeout(() => {
        display.textContent = 'You see a fellow trainer hiding in the grass? What do you do? Fight, Avoid Them, or Go Train Some More?';
        fightButton.textContent = 'FIGHT';
        avoidButton.textContent = 'AVOID THEM';
        trainButton.textContent = 'TRAIN MORE';

        body.appendChild(fightButton);
        body.appendChild(avoidButton);
        body.appendChild(trainButton);
      }, 3000)
    })

    middleButton.addEventListener('click', () => {
      display.textContent = 'You picked the dark specter, Shadow';
      leftButton.remove();
      middleButton.remove();
      rightButton.remove();

      setTimeout(() => {
        display.textContent = 'You see a fellow trainer hiding in the grass? What do you do? Fight, Avoid Them, or Go Train Some More?';
        fightButton.textContent = 'FIGHT';
        avoidButton.textContent = 'AVOID THEM';
        trainButton.textContent = 'TRAIN MORE';

        body.appendChild(fightButton);
        body.appendChild(avoidButton);
        body.appendChild(trainButton);
      }, 3000)
    })

    rightButton.addEventListener('click', () => {
      display.textContent = 'You picked the sprite, Twinkle';
      leftButton.remove();
      middleButton.remove();
      rightButton.remove();

      setTimeout(() => {
        display.textContent = 'You see a fellow trainer hiding in the grass? What do you do? Fight, Avoid Them, or Go Train Some More?';
        fightButton.textContent = 'FIGHT';
        avoidButton.textContent = 'AVOID THEM';
        trainButton.textContent = 'TRAIN MORE';

        body.appendChild(fightButton);
        body.appendChild(avoidButton);
        body.appendChild(trainButton);
      }, 3000)
    })

    fightButton.addEventListener('click', () => {
      display.textContent = "It's time to Battle! And you were victorious!";
      fightButton.remove();
      avoidButton.remove();
      trainButton.remove();
    })

    avoidButton.addEventListener('click', () => {
      display.textContent = 'You left the area and all was peaceful.';
      fightButton.remove();
      avoidButton.remove();
      trainButton.remove();
    })

    trainButton.addEventListener('click', () => {
      display.textContent = 'You went to find a nice place to train and took a nap.';
      fightButton.remove();
      avoidButton.remove();
      trainButton.remove();
    })

    display.textContent = `Welcome, ${userAnswer}, the chosen one`;
    inputPrompt.remove();
    inputBox.remove();
    answerButton.remove();

    setTimeout(() => {
      display.textContent = 'Which ball will you choose? Left, Middle, Right?';

      leftButton.textContent = 'LEFT';
      middleButton.textContent = 'MIDDLE';
      rightButton.textContent = 'RIGHT';

      for (let i = 0; i < responseButtons.length; i++) {
        responseButtons[i].classList.add('response-btn');
      }

      body.appendChild(leftButton);
      body.appendChild(middleButton);
      body.appendChild(rightButton);
    }, 3000);
  });

  inputBox.addEventListener('input', (event) => {
    userAnswer = event.target.value;
  });
});