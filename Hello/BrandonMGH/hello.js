
//Opertion 1:  DOM console.log
console.log("Hello World")

//Opertion 2:  DOM Alert
alert("Hello World")

//Option 3: Insert text into DOM

const Element = document.getElementById("HelloWorld");
const text = document.createTextNode("Hello World");

Element.appendChild(text);

