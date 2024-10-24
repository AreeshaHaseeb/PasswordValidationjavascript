function isValidPassword() {
    let password = prompt("Enter your password:");  

    let spaceRegex = /\s/;
    let username = "john"
    if (password.length < 8 ) { 
        console.log("Error: Password must be at least 8 characters");
        
    }
    else {"works"};
    if (spaceRegex.test(password)) {
        return "Password cannot contain spaces.";
    }    else {"works"};


    if (password === username) {
        return "Password cannot be username.";
    }
    return "Password is valid!";
}




console.log(isValidPassword())