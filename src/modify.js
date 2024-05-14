const getMainHeadingText = () => {
  console.log(document.querySelector("#main-heading").textContent);
};

const getAllMainText = () => {
  const arr = [];
  for (const e of document.querySelectorAll(".main-text")) {
    arr.push(e.textContent);
  }
  console.log(arr.join(','));
};

const setSubtitleText = () => {
  document.querySelector("#subtitle").textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const classes = document.querySelector("#modify-classes").classList;
  classes.remove("bad-class");
  classes.add("new-class");
};

const addH2 = () => {
  const h2 = document.createElement("h2");
  h2.id = "h2-test";
  h2.textContent = "Another one!";
  document.body.appendChild(h2);
};

const removeOldInfo = () => {
  document.querySelector("#old-info").remove();
};

const makeAlphabet = () => {
  const amount = document.querySelector("#alphabet").dataset.numLetters;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < amount; i++) {
    const li = document.createElement("li");
    li.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`;
    document.getElementById("alphabet").appendChild(li);
  }
};

const makeBio = () => {
  const div = document.querySelector("#my-bio");
  div.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
