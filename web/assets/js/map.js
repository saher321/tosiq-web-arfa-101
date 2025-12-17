// students data

// var data = require("../js/mydata.js");

var allStudents = [
    { name: "John", email: "john@email.coom" },
    { name: "Carlos", email: "carlos@email.coom" },
    { name: "Samantha", email: "samantha@email.coom" },
    { name: "Jack", email: "jack@email.coom" },
    { name: "Abdullah", email: "abdullah@email.coom" },
];
function fetchAllStudents() {
    var studentRows = document.getElementById("tbody");
    var mydata = ``;

    allStudents.map( (student, i) => {
        mydata += `
        <tr>
            <td>${i+1}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
        </tr>
        `;
    });
    studentRows.innerHTML = mydata;

}