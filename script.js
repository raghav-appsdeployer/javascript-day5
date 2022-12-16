// question3
document.getElementById("select").addEventListener("change", (event) => {
  window.open(event.target.value);
});

// question4
document.getElementById("bulb").addEventListener("click", () => {
  const bulbOnId = document.getElementById("bulb-div");
  const bulbOn = bulbOnId.classList;
  bulbOn.toggle("bulb-on");
});

//question5

const question5 = () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8];
  const newArr = [...arr1, ...arr2];
  console.log(newArr);

  const obj1 = {
    name: "Raghav Sharma",
    class: "10th",
  };
  const obj2 = {
    marks: 71,
    section: "B",
  };

  const newObj = { ...obj1, ...obj2 };
  console.log(newObj);
};

question5();

// question7
class Mobile {
  constructor(name, price) {
    (this.Mobile = name), (this.price = price);
  }
  show = function () {
    return `Mobile is ${this.Mobile} and Its price is ${this.price}`;
  };
}

const mobile = new Mobile("Samsung", 10000);
console.log(mobile);
console.log(mobile.show());

// question6
const question6 = (btnTxt) => {
  const Computer = Math.floor(Math.random() * 3);
  const computerTxt = document.getElementById('computerTxt')
  const greetMsg = document.getElementById('greetMsg')
  const result = document.getElementById('result')
  console.log(Computer);
  let Value;
  if (Computer === 0) {
    Value = "Rock";
    computerTxt.innerText = "Rock"
  } else if (Computer === 1) {
    Value = "Paper";
    computerTxt.innerHTML = 'Paper'
  } else if (Computer === 2) {
    Value = "Scissors";
    computerTxt.innerText = 'Scissors'
  }

  if (btnTxt === Value) {
    console.log("Game is tied");
    greetMsg.innerText = 'Game Over!'
    result.innerText = 'Game is Tied'
  } else if (btnTxt === "Rock" && Value === "Paper") {
    greetMsg.innerText = 'Game Over!'
    result.innerText = 'Computer Wins'
    console.log("Computer wins");
  } else if (btnTxt === "Rock" && Value === "Scissors") {
    greetMsg.innerText = 'Game Over!'
    result.innerText = 'Player Wins'
    console.log("Player Wins");
  } else if (btnTxt === "Paper" && Value === "Rock") {
    greetMsg.innerText = 'Game Over!'
    result.innerText = 'Player Wins'
    console.log("Player Wins");
  } else if (btnTxt === "Paper" && Value === "Scissors") {
    greetMsg.innerText = 'Game Over!'
    result.innerText = 'Computer Wins'
    console.log("Computer Wins");
  } else if (btnTxt === "Scissors" && Value === "Rock") {
    greetMsg.innerText = 'Game Over!'
    result.innerText = 'Computer Wins'
    console.log("Computer Wins");
  } else if (btnTxt === "Scissors" && Value === "Paper") {
    greetMsg.innerText = 'Game Over!'
    result.innerText = 'Player Wins'
    console.log("Player Wins");
  }
};

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const playerTxt = document.getElementById('playerTxt')
const vs = document.getElementById('vs')
btn1.addEventListener("click", () => {
  const btnTxt = btn1.textContent.split(" ")[0];
  vs.innerText = 'Vs'
  playerTxt.innerText = btnTxt
  question6(btnTxt);
});


btn2.addEventListener("click", () => {
    const btnTxt = btn2.textContent.split(" ")[0];
    vs.innerText = 'Vs'
    playerTxt.innerText = btnTxt
    question6(btnTxt);
  });

  btn3.addEventListener("click", () => {
    const btnTxt = btn3.textContent.split(" ")[0];
    vs.innerText = 'Vs'
    playerTxt.innerText = btnTxt
    question6(btnTxt);
  });