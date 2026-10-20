let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let department = document.getElementById("department");
let level = document.getElementById("level");
let btn = document.getElementById("btn");
let display = document.getElementById("display");

let fNameErr = document.getElementById("fNameErr");
let lNameErr = document.getElementById("lNameErr");
let emailErr = document.getElementById("emailErr");
let phoneErr = document.getElementById("phoneErr");
let departmentErr = document.getElementById("departmentErr");
let levelErr = document.getElementById("levelErr");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    isValid = 0;
    
    if(fname.value == "" || fname.value == null) {
        fNameErr.innerHTML = "First name is required";
        fNameErr.style.color = "red";
        fname.style.border = "1px solid red";
    }
    else{
        fNameErr.innerHTML = "";
        fname.style.border = "1px solid green";
        isValid += 1;
    }

    if(lname.value == "" || lname.value == null) {
        lNameErr.innerHTML = "Last name is required";
        lNameErr.style.color = "red";
        lname.style.border = "1px solid red";
    }
    else{
        lNameErr.innerHTML = "";
        lname.style.border = "1px solid green";
        isValid += 1;
    }

    if(email.value == "" || email.value == null) {
        emailErr.innerHTML = "Email is required";
        emailErr.style.color = "red";
        email.style.border = "1px solid red";
    }
    else if(!email.value.includes("@") && !email.value.includes(".com")) {
        emailErr.innerHTML = "Email is invalid";
        emailErr.style.color = "red";
        email.style.border = "1px solid red";
    }
    else{
        emailErr.innerHTML = "";
        email.style.border = "1px solid green";
        isValid += 1;
    }

    if(phone.value == "" || phone.value == null) {
        phoneErr.innerHTML = "Phone number is required";
        phoneErr.style.color = "red";
        phone.style.border = "1px solid red";
    }
    else if(phone.value.length < 10 || phone.value.length > 11) {
        phoneErr.innerHTML = "Phone number is invalid";
        phoneErr.style.color = "red";
        phone.style.border = "1px solid red";
    }
    else{
        phoneErr.innerHTML = "";
        phone.style.border = "1px solid green";
        isValid += 1;
    }

    if(department.value == "" || department.value == null) {
        departmentErr.innerHTML = "Department is required";
        departmentErr.style.color = "red";
        department.style.border = "1px solid red";
    }
    else{
        departmentErr.innerHTML = "";
        department.style.border = "1px solid green";
        isValid += 1;
    }

    if(level.value == "" || level.value == null) {
        levelErr.innerHTML = "Level is required";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(level.value <= 0){
        levelErr.innerHTML = "Invalid level";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(level.value >= 101 && level.value <= 199){
        levelErr.innerHTML = "Invalid level";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(level.value >= 201 && level.value <= 299){
        levelErr.innerHTML = "Invalid level";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(level.value >= 301 && level.value <= 399){
        levelErr.innerHTML = "Invalid level";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(level.value >= 401 && level.value <= 499){
        levelErr.innerHTML = "Invalid level";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(level.value >= 501 && level.value <= 599){
        levelErr.innerHTML = "Invalid level";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else{
        levelErr.innerHTML = "";
        level.style.border = "1px solid green";
        isValid += 1;
    }

    if(department.value == "software" && level.value >= 500){
        levelErr.innerHTML = "Invalid level for Software Engineering";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(department.value == "computer" && level.value >= 500){
        levelErr.innerHTML = "Invalid level for Computer Science";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(department.value == "history" && level.value >= 400){
        levelErr.innerHTML = "Invalid level for History";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    else if(department.value == "engineering" && level.value >= 500){
        levelErr.innerHTML = "Invalid level for Engineering";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    if(isValid == 6) {
        display.innerHTML = `
            <div class="text-center bg-green-400 w-full rounded-md">
                    <p>Cridentials submitted successfully!</p>
                </div>
        `;
    setTimeout( () => {
            display.innerHTML = "";
            fname.value = "";
            lname.value = "";
            email.value = "";
            phone.value = "";
            department.value = "";
            level.value = "";
            fname.style.border = "1px solid black"
            lname.style.border = "1px solid black"
            email.style.border = "1px solid black"
            phone.style.border = "1px solid black"
            department.style.border = "1px solid black"
            level.style.border = "1px solid black"
        }, 3000);
    }
})