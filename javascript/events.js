let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log("btn1 was clicked");
    console.log(e);
    console.log(e.type)
    console.log(e.target)
};
// if the same elemwnt is defined by different event names then the event which is written much later overrides 
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("I am a div");
};
