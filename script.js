let bank = 100;

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
];

draftTeams();
drawBank();


function drawTeams() {
  const team1Elm = document.getElementById('team-one');
  const team2Elm = document.getElementById('team-two');
  let team1Content = '';
  let team2Content = '';
  let team1Players = players.filter((player) => player.teamNumber == 1);
  let team2Players = players.filter((player) => player.teamNumber == 2);
  team1Players.forEach((player) => team1Content += `<div class="d-inline" title="${player.skill}">${player.emoji}</div>`);
  team2Players.forEach((player) => team2Content += `<div class="d-inline" title="${player.skill}">${player.emoji}</div>`);
  team1Elm.innerHTML = team1Content;
  team2Elm.innerHTML = team2Content;
}

function draftTeams() {
  players.forEach((player) => player.teamNumber = Math.ceil(Math.random() * 2));
  drawTeams();
}

function reset() {
  bank = 100;
  draftTeams();
  drawBank();
}

function drawBank() {
  const bankElm = document.getElementById('bank-account');
  bankElm.innerText = '$' + bank;
  if (bank <= 0) {
    alert(`You're Out of Money! Hit the ATM and Try Again!`);
    reset();
  }
}

function placeBet(betTeam, betAmnt) {
  let teamOneSkill = 0;
  let teamTwoSkill = 0;
  
  if (betAmnt > bank) {
    return alert(`You don't have enough money to make that bet!`);
  };
  players.forEach((player) => {
    if (player.teamNumber == 1) {
      teamOneSkill += player.skill;
    } else {
      teamTwoSkill += player.skill;
    }
  });
  if (betTeam == 1 && teamOneSkill > teamTwoSkill) {
    bank += betAmnt;
  } else if (betTeam == 2 && teamOneSkill < teamTwoSkill) {
    bank += betAmnt;
  } else if (betTeam == 1 && teamOneSkill < teamTwoSkill) {
    bank -= betAmnt;
  } else {
    bank -= betAmnt;
  }
  drawBank();
  draftTeams();
}

function allIn(team) {
  if (team == 1){
    placeBet(1, bank);
  } else {
    placeBet(2, bank);
  }
};