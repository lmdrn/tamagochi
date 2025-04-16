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
  
      animatePet();
      updateStatus();
      setInterval(updateDayNightCycle, 300000);
    }, 700);
});
  
let hunger = 5;
let fun = 5;
let energy = 5;

const petImage = document.getElementById("pet");
const status = document.getElementById("status");

function animatePet() {
    petImage.classList.add("animate");
    setTimeout(() => petImage.classList.remove("animate"), 300);
}

function updateStatus() {
  if (hunger <= 2) {
    status.textContent = "I'm hungry!";
    petImage.src = "assets/imgs/angry.png";
  } else if (fun <= 2) {
    status.textContent = "I'm bored!";
    petImage.src = "assets/imgs/grumpy.png";
  } else if (energy <= 2) {
    status.textContent = "I'm sleepy...";
    petImage.src = "assets/imgs/sad.png";
  } else {
    status.textContent = "I'm feeling great!";
    petImage.src = "assets/imgs/excited.png";
  }
  document.getElementById('hungerBar').style.setProperty('--value', `${hunger * 10}%`);
  document.getElementById('funBar').style.setProperty('--value', `${fun * 10}%`);
  document.getElementById('energyBar').style.setProperty('--value', `${energy * 10}%`);
}

function feedPet() {
  hunger = Math.min(hunger + 1, 10);
  updateStatus();
}

function playWithPet() {
  fun = Math.min(fun + 1, 10);
  updateStatus();
}

function putPetToSleep() {
  energy = Math.min(energy + 1, 10);
  updateStatus();
}

document.getElementById("feed").addEventListener("click", feedPet);
document.getElementById("play").addEventListener("click", playWithPet);
document.getElementById("sleep").addEventListener("click", putPetToSleep);

setInterval(() => {
  hunger = Math.max(hunger - 1, 0);
  fun = Math.max(fun - 1, 0);
  energy = Math.max(energy - 1, 0);
  updateStatus();
}, 4000);

updateStatus();

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
  