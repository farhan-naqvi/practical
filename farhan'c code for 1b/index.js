
let fetchData = () => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/")
    xhr.send();
    xhr.onload = () => {
        let res = JSON.parse(xhr.responseText);
        console.log(res);
        localStorage.setItem("users", JSON.stringify(res));
        // console.log(localStorage);
        displayData();
    }
}

let displayData = () =>{
    // let xhr = new XMLHttpRequest();
    tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let storedUser = JSON.parse(localStorage.getItem("users"));
    storedUser.map((user, index) => (
        tbody.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.city}</td>
                <td>${user.username}</td>
            </tr>
        `
    ))
}

fetchData();

let btn = document.getElementById("btn");
btn.addEventListener("click", (e)=>{
    // e.preventDefault();
    const name=document.getElementById("name").value;
    const city=document.getElementById("city").value;
    const username=document.getElementById("username").value;

    let postObject = {name,city,username}; 

    let xhr = new XMLHttpRequest();
    xhr.open("POST","https://jsonplaceholder.typicode.com/users/");
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(postObject));

    xhr.onload = () => {
        if (xhr.status == 201) {
            let storedUser = JSON.parse(localStorage.getItem("users"));
            storedUser.unshift(postObject);
            localStorage.setItem("users", JSON.stringify(storedUser));
            console.log(localStorage);
            displayData();
        }
    }
})