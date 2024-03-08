/*dark mode*/

const btn = document.getElementById("toggle");

const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function () {

    if (theme.getAttribute("href") == "Css/style.css") {

        theme.href= "Css/dark-theme.css";
    }

    else {

        theme.href="Css/style.css" 
    }
})