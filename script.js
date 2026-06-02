function changeColor(){

    document.body.style.backgroundColor = "pink";
}

/* API Integration */

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

    let output = "";

    data.forEach(user => {

        output += `
            <p>${user.name}</p>
        `;
    });

    document.getElementById("userdata").innerHTML = output;
})

.catch(error => {

    console.log("Error fetching data");
});

/* Form Validation */

function validateForm(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    if(name === "" || email === ""){

        document.getElementById("message").innerHTML =
        "Please fill all fields";

        return false;
    }

    document.getElementById("message").innerHTML =
    "Form Submitted Successfully";

    return false;
}