const setBackground = () => {
    let p1 = document.querySelector(".pierwszy");
    let p2 = document.querySelector(".drugi");

    p1.style.backgroundColor = "red";
    p2.style.backgroundColor = "yellow";
}

let btn = document.getElementById("tlo");

btn.addEventListener("click", setBackground);