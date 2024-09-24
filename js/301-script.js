let currentMode = 0;
const modes = ["dark-mode", "light-mode"];
const clr = ["#196571", "#8edae6"];

const func = () => {
    console.log(".");
    document.body.classList.remove(modes[currentMode]);

    currentMode = (currentMode + 1) % modes.length;

    document.body.classList.add(modes[currentMode]);

};

document.querySelector("#toggle-mode").addEventListener("click", func);

let nav_show = 0;
document.getElementById('nav-toggle').addEventListener('click', () => {
    nav_show = 1;
    if(nav_show == 1) {
        // 
    }
});

const navbar_toggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");

var nav_mode = true;

navbar_toggle.addEventListener("click", () => {
    if (nav_mode) {
        nav_mode = false;
        navbar.style.transform = "translate(-100%, 0)";
    } else {
        nav_mode = true;
        navbar.style.transform = "translate(0, 0)";
    }
    console.log(nav_mode);
});

console.log('hello, world!');