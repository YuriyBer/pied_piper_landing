const dropBtn = document.querySelector(".dropbtn");

dropBtn.addEventListener("click", () => {
    document.querySelector("#myDropdown").classList.toggle("show");
    document.querySelector(".burger-first").classList.toggle("cross-first");
    document.querySelector(".burger-second").classList.toggle("cross-first");
    document.querySelector(".burger-last").classList.toggle("cross-last");
});

window.addEventListener("click", (e) => {
    if (!e.target.matches(".dropbtn")) {
        const openDropdown = document.querySelector(".show");
        if (openDropdown != null) {
            openDropdown.classList.remove("show");
        }
        const crossFirst = document.querySelectorAll(".cross-first");
        for (let i = 0; i < crossFirst.length; i++) {
            crossFirst[i].classList.remove("cross-first");
        }
        const crossLast = document.querySelector(".cross-last");
        if (crossLast != null) {
            crossLast.classList.remove("cross-last");
        }
    }
});
window.onclick = function(event) {};