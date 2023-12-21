let heroes = [
  ["Стефан Карри", "Баскетболист"],
  ["Харри Кейн", "Футболист"],
];
let heroesContainer = document.getElementById("heroesContainer");

function displayHeroes() {
  heroesContainer.innerHTML = "";
  heroes.forEach(function (hero) {
    let heroCard = document.createElement("div");
    heroCard.textContent = `${hero[0]} - ${hero[1]}`;
    heroesContainer.appendChild(heroCard);
  });
}

function addHero() {
  let nameInput = document.getElementById("heroName");
  let classInput = document.getElementById("heroClass");

  if (nameInput.value.trim() === "" || classInput.value.trim() === "") {
    alert("Пожалуйста, введите имя и дисциплину спортсмена");
    return;
  } else {
    let newHero = [nameInput.value, classInput.value];
    heroes.push(newHero);
    displayHeroes();
    nameInput.value = "";
    classInput.value = "";
  }
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addHero);
displayHeroes();

// Найдётся всё - даже сайт с карточками
