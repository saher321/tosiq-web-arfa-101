function login () {

    var role1 = "admin";
    var role2 = "user";
    var password = parseInt(prompt("Enter password to continue"));
    var homePage = "going to home page"; // user access
    var rolesPage = "going to roles page"; // restricted
    
    if (password === 12345) {
        var userRole = prompt("Enter your role to continue");
        if (role1 == userRole) {
            console.log(rolesPage);
            console.log("Logged in successful");
        } else if (role2 == userRole) {
            console.log(homePage);
            console.log("Logged in successful");
        } else {
            console.log("Wrong role entered");
        }        
    } else {
        console.log("You entered wrong password");
    }
}
