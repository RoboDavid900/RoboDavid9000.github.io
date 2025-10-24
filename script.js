
let likes = [1034, 1028];

function addLike(index) {
    likes[index]++;
    const buttons = document.querySelectorAll(".like-btn");
    buttons[index].textContent = likes[index] + " likes";
}

function toggleLogin() {
    let button = document.getElementById("loginBtn");
    if (button.textContent === "Login") {
        button.textContent = "Logout";
    } else {
        button.textContent = "Login";
    }
}

function removeAddBtn(element) {
    element.remove();
}
