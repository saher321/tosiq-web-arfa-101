Mernstack

Mongodb, Express, Node, Reactjs/NextJs

form => name, designation, description

documents
{
    "_id": "dew223yd23dy23",
    "name": "Imran"
    "designation": "COO"
    "description": "Manage branch"
},

{
    "_id": "dew223yd23dy23",
    "name": "Imran"
    "designation": "COO"
}

--------------------------
MVC
Model, View, Controller
Model: db schema{
    "name": {
        type: String,
        required: true
    }
},

View -> ui

Controller: Business logic

Route: http://localhost:8000/api/products
--------------------------------------------
Authentications
CRUD operation : employees, users, products, orders,

Other function : OTP, email send, slug, 


application : mongodb compass :: offline
website : Mongodb atlas :: online

======================================

Expressjs (USER API)
users       :: GET      = http://localhost:5000/users/
user        :: GET      = http://localhost:5000/users/1
add user    :: POST     = http://localhost:5000/users/
update user :: PUT      = http://localhost:5000/users/1
delete user :: DELETE   = http://localhost:5000/users/1

Status / ban-unban :: PATCH = http://localhost:5000/users/1 , data