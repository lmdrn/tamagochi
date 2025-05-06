const egg = document.getElementById("egg");
const eggHint = document.getElementById("eggHint");
const eggWrapper = document.getElementById("eggWrapper");
const petContainer = document.getElementById("petContainer");

egg.addEventListener("click", () => {
    egg.classList.add("cracked");
    eggHint.style.display = "none";
  

    setTimeout(() => {
      eggWrapper.style.display = "none";
      petContainer.style.display = "block";
    }, 700);
});
  
let hunger = 10;
let fun = 10;
let energy = 10;

const hungerDecreaseInterval = 3000;
const funDecreaseInterval = 2000;
const energyDecreaseInterval = 4000;

const status = document.getElementById("status");
const petImage = document.getElementById("pet");
const hungerBar = document.getElementById("hungerBar");
const funBar = document.getElementById("funBar");
const energyBar = document.getElementById("energyBar");

function updateStatusBars() {
  document.getElementById('hungerBar').style.setProperty('--value', `${hunger * 10}%`);
  document.getElementById('funBar').style.setProperty('--value', `${fun * 10}%`);
  document.getElementById('energyBar').style.setProperty('--value', `${energy * 10}%`);

  if (hunger <= 0 || fun <= 0 || energy <= 0) {
    if (hunger <= 0)
    {
      status.textContent = "💀 Your Tamagotchi has died of hunger...";
      setTimeout(() => {
        showDeathOptions();
      }, 200);
    }
    else if (fun <= 0)
    {
      status.textContent = "💀 Your Tamagotchi has died of boredom...";
      setTimeout(() => {
        showDeathOptions();
      }, 200);
    }
    else if (energy <= 0)
    {
      status.textContent = "💀 Your Tamagotchi has died of a lack of sleep...";
      setTimeout(() => {
        showDeathOptions();
      }, 200);
    }
    else
    {
      status.textContent = "💀 Your Tamagotchi has passed away...";
      setTimeout(() => {
        showDeathOptions();
      }, 200);
    }
    petImage.src = "assets/imgs/dead_chick.png";
    petImage.classList.add("animate");
    document.getElementById("feed").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("sleep").style.display = "none";
    document.querySelector(".status-bars").style.display = "none";
    return;
  }
  
  if (hunger >= 6 && fun >= 6 && energy >= 6) {
    status.textContent = "I'm feeling great!";
    petImage.src = "assets/imgs/happy_chick.png";
    return;
  }

  const needs = { hunger, fun, energy };
  const [lowestNeed, lowestValue] = Object.entries(needs).sort((a, b) => a[1] - b[1])[0];

  switch (lowestNeed) {
    case "hunger":
      status.textContent = "I'm haaangry!";
      petImage.src = "assets/imgs/hangry_chick.png";
      break;
    case "fun":
      status.textContent = "I'm bored!";
      petImage.src = "assets/imgs/bored_chick.png";
      break;
    case "energy":
      status.textContent = "I'm sleepy...";
      petImage.src = "assets/imgs/sad_chick_2.png";
      break;
    default:
      status.textContent = "I'm feeling great!";
      petImage.src = "assets/imgs/happy_chick.png";
      break;
  }
}

function decreaseHunger() {
  if (hunger > 0) hunger--;
  updateStatusBars();
}

function decreaseFun() {
  if (fun > 0) fun--;
  updateStatusBars();
}

function decreaseEnergy() {
  if (energy > 0) energy--;
  updateStatusBars();
}

document.getElementById("feed").addEventListener("click", function () {
  if (hunger < 10) hunger++;
  updateStatusBars();
});

document.getElementById("play").addEventListener("click", function () {
  if (fun < 10) fun++;
  updateStatusBars();
});

document.getElementById("sleep").addEventListener("click", function () {
  if (energy < 10) energy++;
  updateStatusBars();
});

setInterval(decreaseHunger, hungerDecreaseInterval);
setInterval(decreaseFun, funDecreaseInterval);
setInterval(decreaseEnergy, energyDecreaseInterval);

updateStatusBars();

function generateStars(numStars) {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const animationDuration = Math.random() * 1.5 + 1.5;
  
      star.style.left = `${xPos}%`;
      star.style.top = `${yPos}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${animationDuration}s`;
      starsContainer.appendChild(star);
    }
}

generateStars(100);

function showDeathOptions() {
  document.getElementById("deathOptions").style.display = "flex";

  document.getElementById("cry").addEventListener("click", () => {
    status.textContent = "😭 You cried... but the void remains.";
  });

  document.getElementById("rehatch").addEventListener("click", () => {
    resetGame();
  });
}
  
function resetGame() {
  hunger = 10;
  fun = 10;
  energy = 10;
  
  document.getElementById('hungerBar').style.setProperty('--value', `${hunger * 10}%`);
  document.getElementById('funBar').style.setProperty('--value', `${fun * 10}%`);
  document.getElementById('energyBar').style.setProperty('--value', `${energy * 10}%`);

  document.getElementById("deathOptions").style.display = "none";

  petImage.src = "assets/imgs/happy.png";
  document.querySelector(".status-bars").style.display = "block";
  document.getElementById("feed").style.display = "flex";
  document.getElementById("play").style.display = "flex";
  document.getElementById("sleep").style.display = "flex";

  document.getElementById("petContainer").style.display = "none";
  document.getElementById("eggWrapper").style.display = "flex";
  document.getElementById("egg").classList.remove("cracked");
  document.getElementById("eggHint").style.display = "block";

  updateStatusBars();
}
  
  