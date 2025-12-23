var allUsers = [
    { name: "John", email: "john@email.coom", role: "Admin" },
    { name: "Carlos", email: "carlos@email.coom", role: "User" },
    { name: "Samantha", email: "samantha@email.coom", role: "Vendor" },
    { name: "Jack", email: "jack@email.coom", role: "Admin" },
    { name: "Abdullah", email: "abdullah@email.coom", role: "User" },
];
fetchAllUsers();

function fetchAllUsers() {
    var userRows = document.getElementById("tbody");
    var mydata = ``;

    allUsers.map( (user, i) => {
        mydata += `
        <tr>
            <td>${i+1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        </tr>
        `;
    });
    userRows.innerHTML = mydata;

}

function getRole() {
    var role = document.getElementById("role").value;
    var userRows = document.getElementById("tbody");
    var mydata = ``;
    console.log(role);
    var selectedValue = capitalizeFirstLetter(role);

    if (role === "all") {
        fetchAllUsers();
        return;
    }

    const selectedUsers = allUsers.filter( (user) => { 
        return user.role == selectedValue 
    });

    selectedUsers.map( (user, i) => {
        mydata += `
        <tr>
            <td>${i+1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        </tr>
        `;
    });
    userRows.innerHTML = mydata;
    // userRows.innerHTML = mydata;
}

function searchUsers() {
    var searchText = document.getElementById("text").value;
    var userRows = document.getElementById("tbody");
    var mydata = ``;
    console.log(searchText);

    if (searchText === "") {
        fetchAllUsers();
        return;
    }

    const selectedUsers = allUsers.filter( (user) => { 
        return (user.name == searchText || user.email == searchText || user.role == searchText) 
    });

    selectedUsers.map( (user, i) => {
        mydata += `
        <tr>
            <td>${i+1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        </tr>
        `;
    });
    userRows.innerHTML = mydata;
    // userRows.innerHTML = mydata;    
}


function capitalizeFirstLetter(string) {
  if (!string) {
    return ""; // Handle empty strings safely
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
