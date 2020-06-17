let submit = document.getElementById("submit");

function input() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    alert(
        `nama : ${name} \n phone : ${phone} \n email : ${email} \n password ${password}`
    );
}
submit.addEventListener("click", input);