// script.js

// --- STEP 1: GRAB HTML ELEMENTS ---
// These variables connect to the input fields and button in the HTML using their IDs.
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let matric = document.getElementById("matric");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let department = document.getElementById("department");
let level = document.getElementById("level");
let btn = document.getElementById("btn");
let display = document.getElementById("display");

// These variables connect to the empty <span> tags where error messages will be displayed.
let fNameErr = document.getElementById("fNameErr");
let lNameErr = document.getElementById("lNameErr");
let emailErr = document.getElementById("emailErr");
let phoneErr = document.getElementById("phoneErr");
let departmentErr = document.getElementById("departmentErr");
let levelErr = document.getElementById("levelErr");
let matricErr = document.getElementById("matricErr");
// --- STEP 2: FORM SUBMISSION EVENT ---
// Listens for a click on the "Submit" button
btn.addEventListener("click", function (e) {
    // Prevents the default browser behavior (which is reloading the page)
    e.preventDefault();
    
    // Counter to track how many inputs are correctly filled. Needs to reach 6 to pass.
    isValid = 0;
    
    // --- STEP 3: VALIDATION LOGIC ---

    // 1. First Name Validation
    if(fname.value == "" || fname.value == null) {
        fNameErr.innerHTML = "First name is required"; // Injects error text
        fNameErr.style.color = "red";                  // Makes text red
        fname.style.border = "1px solid red";          // Makes input border red
    }
    else{
        fNameErr.innerHTML = "";                       // Clears error text
        fname.style.border = "1px solid green";        // Makes border green to show success
        isValid += 1;                                  // Increases pass score by 1
    }

    // 2. Last Name Validation
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

    // matric number validation
    if(matric.value == "" || matric.value == null) {
        matricErr.innerHTML = "Matric number is required";
        matricErr.style.color = "red";
        matric.style.border = "1px solid red";
    }
    else{
        matricErr.innerHTML = "";
        matric.style.border = "1px solid green";
        isValid += 1;
    }

    // 3. Email Validation
    if(email.value == "" || email.value == null) {
        emailErr.innerHTML = "Email is required";
        emailErr.style.color = "red";
        email.style.border = "1px solid red";
    }
    // Checks if email is missing the '@' symbol or '.com'
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

    // 4. Phone Number Validation
    if(phone.value == "" || phone.value == null) {
        phoneErr.innerHTML = "Phone number is required";
        phoneErr.style.color = "red";
        phone.style.border = "1px solid red";
    }
    // Checks if the phone number length is outside the normal 10-11 digit range
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

    // 5. Department Validation
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

    // 6. Level Validation
    if(level.value == "" || level.value == null) {
        levelErr.innerHTML = "Level is required";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    // Ensures level is greater than 0
    else if(level.value <= 0){
        levelErr.innerHTML = "Invalid level";
        levelErr.style.color = "red";
        level.style.border = "1px solid red";
    }
    // Ensures level is an exact hundreds value (e.g., blocks 150, 299, etc.)
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

    // --- STEP 4: DEPARTMENT-SPECIFIC RULES ---
    // Note for group: These checks trigger visual errors, but they don't subtract from the 'isValid' score.
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

    // --- STEP 5: SUCCESS ACTION & FORM RESET ---
    // If all 6 basic fields passed validation, show success message
    if(isValid == 6) {
        display.innerHTML = `
            <div class="text-center bg-green-400 w-full rounded-md">
                    <p>Registration successful!</p>
                </div>
        `;

        console.log("First Name: " + fname.value);
        console.log("Last Name: " + lname.value);
        console.log("Email: " + email.value);
        console.log("Phone: " + phone.value);
        console.log("Department: " + department.value);
        console.log("Level: " + level.value);

        
    // Set a timer to automatically clear the form after 3000 milliseconds (3 seconds)
    setTimeout( () => {
            display.innerHTML = "";                 // Removes success message
            fname.value = "";                       // Clears all input fields
            lname.value = "";
            email.value = "";
            phone.value = "";
            department.value = "";
            level.value = "";
            fname.style.border = "1px solid black"  // Resets borders back to default black
            lname.style.border = "1px solid black"
            email.style.border = "1px solid black"
            phone.style.border = "1px solid black"
            department.style.border = "1px solid black"
            level.style.border = "1px solid black"
        }, 3000);
    }
})