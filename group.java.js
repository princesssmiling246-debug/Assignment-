function login() {
    const status = document.getElementById("status");
    status.innerText = "Online";
    status.style.color = "green";
}

function logout() {
    const status = document.getElementById("status");
    status.innerText = "Offline";
    status.style.color = "red";
}

function changeCourse() {
    document.getElementById("course").innerText = "Computer Science";
}

