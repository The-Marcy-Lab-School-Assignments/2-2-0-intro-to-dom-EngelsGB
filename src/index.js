/*
add an H1 to the body with an id of main-heading and text of "Hello World!"
add a p tag with an id of main-text, a class of boring-text, and 
text that reads "Look, I'm some text!"
*/
const addH1 = () => {
    const h1 = document.createElement("h1");
    h1.id = "main-heading";
    h1.textContent = "Hello World!";
    document.body.appendChild(h1);
}

const addP = () => {
    const p = document.createElement("p");
    p.id = "main-text";
    p.classList.add("boring-text");
    p.textContent = "Look, I'm some text!";
    document.body.appendChild(p);
}

const main = () => {
    addH1();
    addP();
}

main();